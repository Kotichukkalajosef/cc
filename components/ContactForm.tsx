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

    const mailto = `mailto:${fallbackEmail}?subject=${encodeURIComponent(
      `Inquiry from ${formData.name.trim()}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
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
        setStatusMessage(data.message || "Thank you. Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "", website_url: "" });
        setFieldErrors({});
      } else if (data.unconfigured) {
        setStatus("unconfigured");
        setStatusMessage(
          "Your message is prepared. Click below to send directly via your email client to " + fallbackEmail + ":"
        );
        if (data.mailtoUrl) {
          setDirectMailtoUrl(data.mailtoUrl);
        }
      } else {
        throw new Error(data.error || "Unable to send message via server.");
      }
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setStatusMessage(err.message);
      } else {
        setStatusMessage("Message could not be sent. Please contact us directly via email.");
      }
    }
  };

  const getDynamicMailto = () => {
    if (directMailtoUrl) return directMailtoUrl;
    const namePart = formData.name.trim() ? ` from ${formData.name.trim()}` : "";
    const subject = encodeURIComponent(`Inquiry${namePart}`);
    const body = encodeURIComponent(
      `Name: ${formData.name.trim() || "[Your Name]"}\nEmail: ${formData.email.trim() || "[Your Email]"}\n\n${
        formData.message.trim() || "[Your Message]"
      }`
    );
    return `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-wrap">
      <div className="contact-card">
        {status === "success" && (
          <div
            role="status"
            aria-live="polite"
            className="form-status form-status-success mb-6"
          >
            <strong style={{ display: "block", color: "var(--color-amber)", marginBottom: "0.25rem" }}>
              Message Received
            </strong>
            <p>{statusMessage}</p>
          </div>
        )}

        {status === "unconfigured" && (
          <div
            role="status"
            aria-live="polite"
            className="form-status mb-6"
            style={{
              backgroundColor: "rgba(242, 163, 58, 0.08)",
              border: "1px solid var(--color-amber)",
              color: "var(--color-white)",
            }}
          >
            <strong style={{ display: "block", color: "var(--color-amber)", marginBottom: "0.5rem" }}>
              Direct Email Dispatch
            </strong>
            <p style={{ marginBottom: "1rem" }}>{statusMessage}</p>
            <a
              href={getDynamicMailto()}
              className="btn-primary"
              style={{ display: "inline-block", textAlign: "center" }}
            >
              Open Email App &amp; Send &rarr;
            </a>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            aria-live="assertive"
            className="form-status form-status-error mb-6"
          >
            <p style={{ marginBottom: "0.75rem" }}>{statusMessage}</p>
            <a
              href={getDynamicMailto()}
              className="btn-secondary"
              style={{ display: "inline-block" }}
            >
              Send via Email App Instead &rarr;
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
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!fieldErrors.name}
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
              />
              {fieldErrors.name && (
                <span id="name-error" style={{ color: "#FCA5A5", fontSize: "0.85rem" }}>
                  {fieldErrors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className="form-input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
              />
              {fieldErrors.email && (
                <span id="email-error" style={{ color: "#FCA5A5", fontSize: "0.85rem" }}>
                  {fieldErrors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="form-textarea"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!fieldErrors.message}
                aria-describedby={fieldErrors.message ? "message-error" : undefined}
              />
              {fieldErrors.message && (
                <span id="message-error" style={{ color: "#FCA5A5", fontSize: "0.85rem" }}>
                  {fieldErrors.message}
                </span>
              )}
            </div>

            <div className="btn-group" style={{ marginTop: "0.5rem" }}>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              <a
                href={getDynamicMailto()}
                className="btn-secondary"
                title="Send using your device's email application"
              >
                Send via Email App
              </a>
            </div>
          </form>
        )}

        <div className="direct-email-note">
          You can also reach us directly at{" "}
          <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>
        </div>
      </div>
    </div>
  );
}
