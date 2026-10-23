"use client";

import { useState } from "react";

interface ContactFormProps {
  fallbackEmail?: string;
}

export default function ContactForm({
  fallbackEmail = "contact@crorestars.com",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website_url: "", // Hidden honeypot field
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "unconfigured" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const [statusMessage, setStatusMessage] = useState("");
  const [directMailtoUrl, setDirectMailtoUrl] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errors.name = "Please provide your name.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Please provide an email address.";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage("");

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus("submitting");

    // Prepare direct mailto URL as immediate fallback
    const mailto = `mailto:${fallbackEmail}?subject=${encodeURIComponent(
      `[CRORESTARS Inquiry] Message from ${formData.name.trim()}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name.trim()} (${formData.email.trim()})\n\nMessage:\n${formData.message.trim()}`
    )}`;
    setDirectMailtoUrl(mailto);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message || "Your inquiry has been delivered directly to contact@crorestars.com.");
        setFormData({ name: "", email: "", message: "", website_url: "" });
        setFieldErrors({});
      } else if (data.unconfigured) {
        // Server SMTP awaiting password
        setStatus("unconfigured");
        setStatusMessage(
          "Your message is ready! Server background sending requires your Hostinger mailbox password in .env.local. Click below to transmit this message directly to contact@crorestars.com right now via your email client:"
        );
        if (data.mailtoUrl) {
          setDirectMailtoUrl(data.mailtoUrl);
        }
      } else {
        throw new Error(data.error || "Unable to send via server.");
      }
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setStatusMessage(err.message);
      } else {
        setStatusMessage("Transmission through server encountered an error. Please use direct email dispatch.");
      }
    }
  };

  const getDynamicMailto = () => {
    if (directMailtoUrl) return directMailtoUrl;
    const namePart = formData.name.trim() ? ` from ${formData.name.trim()}` : "";
    const subject = encodeURIComponent(`[CRORESTARS Inquiry]${namePart}`);
    const body = encodeURIComponent(
      `From: ${formData.name.trim() || "[Your Name]"} (${formData.email.trim() || "[Your Email]"})\n\n${
        formData.message.trim() || "[Your Message]"
      }`
    );
    return `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-wrap" id="contact">
      <div className="waypoint-badge">
        <span className="waypoint-dot" aria-hidden="true" />
        <span>Direct Communication Terminal · contact@crorestars.com</span>
      </div>

      <h2 className="contact-heading">Direct Executive Terminal</h2>
      <p className="contact-copy">
        For strategic alliances, institutional capital partners, sovereign co-investments, and exceptional operators seeking to build generational assets.
      </p>

      {status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="form-status form-status-success reading-measure mb-6"
        >
          <strong style={{ display: "block", color: "var(--color-gold)", marginBottom: "0.5rem" }}>
            TRANSMISSION VERIFIED
          </strong>
          <p>{statusMessage}</p>
        </div>
      )}

      {status === "unconfigured" && (
        <div
          role="status"
          aria-live="polite"
          className="form-status reading-measure mb-6"
          style={{
            backgroundColor: "rgba(242, 163, 58, 0.08)",
            border: "1px solid var(--color-gold)",
            color: "var(--color-white)",
            padding: "1.5rem",
          }}
        >
          <strong style={{ display: "block", color: "var(--color-gold)", marginBottom: "0.5rem" }}>
            READY FOR DIRECT DISPATCH TO contact@crorestars.com
          </strong>
          <p className="mb-4">{statusMessage}</p>
          <a
            href={getDynamicMailto()}
            className="btn-submit"
            style={{
              display: "inline-block",
              textAlign: "center",
              textDecoration: "none",
              marginTop: "0.5rem",
            }}
          >
            Launch Mail App (Send to contact@crorestars.com) &rarr;
          </a>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="form-status form-status-error mb-6"
        >
          <p className="mb-3">{statusMessage}</p>
          <a
            href={getDynamicMailto()}
            className="btn-secondary"
            style={{ display: "inline-block" }}
          >
            Send Directly via Your Email App &rarr;
          </a>
        </div>
      )}

      {status !== "success" && (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          {/* Honeypot field (hidden from real users) */}
          <div className="visually-hidden" aria-hidden="true">
            <label htmlFor="website_url">Do not fill this field</label>
            <input
              type="text"
              id="website_url"
              name="website_url"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website_url}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              className="form-input"
              placeholder="Your full name or institution"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!fieldErrors.name}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
            />
            {fieldErrors.name && (
              <span id="name-error" className="form-status-error" style={{ padding: "0.25rem 0", background: "none", border: "none" }}>
                {fieldErrors.name}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              className="form-input"
              placeholder="founder@institution.com"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
            />
            {fieldErrors.email && (
              <span id="email-error" className="form-status-error" style={{ padding: "0.25rem 0", background: "none", border: "none" }}>
                {fieldErrors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Executive Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="form-textarea"
              placeholder="Outline the opportunity, strategic alignment, or institutional thesis..."
              value={formData.message}
              onChange={handleChange}
              aria-invalid={!!fieldErrors.message}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
            />
            {fieldErrors.message && (
              <span id="message-error" className="form-status-error" style={{ padding: "0.25rem 0", background: "none", border: "none" }}>
                {fieldErrors.message}
              </span>
            )}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-submit"
            >
              {status === "submitting" ? "Transmitting..." : "Transmit Executive Inquiry"}
            </button>

            <a
              href={getDynamicMailto()}
              className="btn-secondary"
              title="Open your device's native email client"
            >
              Send via Email App (Direct)
            </a>
          </div>
        </form>
      )}

      {/* Fallback direct email badge */}
      <div className="mailto-fallback" style={{ marginTop: "2.5rem" }}>
        <span>Direct corporate correspondence address: </span>
        <a href={`mailto:${fallbackEmail}`} style={{ color: "var(--color-gold)", fontWeight: 700 }}>
          {fallbackEmail}
        </a>
      </div>
    </div>
  );
}
