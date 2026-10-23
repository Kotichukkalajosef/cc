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

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const [generalError, setGeneralError] = useState("");

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
    setGeneralError("");

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to deliver your message at this time.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "", website_url: "" });
      setFieldErrors({});
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setGeneralError(err.message);
      } else {
        setGeneralError("An unexpected error occurred. Please use the direct email link below.");
      }
    }
  };

  return (
    <div className="contact-wrap" id="contact">
      <h2 className="contact-heading">Initiate Communication</h2>
      <p className="contact-copy">
        For strategic partnerships, institutional dialogue, or to introduce yourself.
      </p>

      {status === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="form-status form-status-success reading-measure"
        >
          <p>
            Your transmission has been received. We review every communication with sovereign discretion.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          {/* Honeypot field (hidden from real users, caught if bots fill it) */}
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

          {generalError && (
            <div
              role="alert"
              aria-live="assertive"
              className="form-status form-status-error"
            >
              {generalError}
            </div>
          )}

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
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              className="form-input"
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
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="form-textarea"
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

          <div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-submit"
            >
              {status === "submitting" ? "Transmitting..." : "Transmit Message"}
            </button>
          </div>
        </form>
      )}

      {/* Fallback direct email */}
      <div className="mailto-fallback">
        For direct institutional correspondence, write to{" "}
        <a href={`mailto:${fallbackEmail}`}>
          {fallbackEmail}
        </a>
      </div>
    </div>
  );
}
