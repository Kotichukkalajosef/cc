"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    enquiryType: "General Enquiry",
    message: "",
    // Honeypot field for anti-spam (should remain empty)
    botField: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Spam honeypot check
    if (formData.botField) {
      // Silently discard or treat as spam
      setStatus("success");
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organisation: formData.organisation,
          enquiryType: formData.enquiryType,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message at this time.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        organisation: "",
        enquiryType: "General Enquiry",
        message: "",
        botField: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong while submitting. You can also email us directly.");
      }
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-[#171614]/10 rounded-sm p-8 text-center shadow-sm">
        <CheckCircle2 className="w-12 h-12 text-[#E5932B] mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#171614] mb-2">Message Received</h3>
        <p className="text-sm text-[#171614]/70 mb-6 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to CRORESTARS. We review all communications with care and will be in touch when appropriate.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="inline-flex items-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#171614] border border-[#171614]/20 rounded-sm hover:border-[#E5932B] hover:text-[#E5932B] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white border border-[#171614]/10 rounded-sm p-6 lg:p-8 shadow-sm ${
        compact ? "space-y-4" : "space-y-5"
      }`}
      noValidate
    >
      {/* Honeypot field (hidden from screen readers & visual users) */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="botField">Leave this field blank</label>
        <input
          type="text"
          id="botField"
          name="botField"
          tabIndex={-1}
          autoComplete="off"
          value={formData.botField}
          onChange={handleChange}
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-sm text-sm"
        >
          <AlertCircle className="w-5 h-5 text-[#E5932B] shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Error submitting message</p>
            <p className="text-amber-800/90 text-xs mt-0.5">{errorMessage}</p>
            {siteConfig.email && (
              <p className="mt-2 text-xs">
                You can also email us directly at:{" "}
                <a
                  href={`mailto:${siteConfig.email}?subject=Website%20Enquiry`}
                  className="font-medium underline hover:text-[#E5932B]"
                >
                  {siteConfig.email}
                </a>
              </p>
            )}
          </div>
        </div>
      )}

      <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-5"}>
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#171614]/80 mb-1.5">
            Full Name <span className="text-[#E5932B]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#171614]/20 rounded-sm focus:outline-none focus:border-[#E5932B] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#171614]/80 mb-1.5">
            Email Address <span className="text-[#E5932B]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#171614]/20 rounded-sm focus:outline-none focus:border-[#E5932B] transition-colors"
          />
        </div>
      </div>

      <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-5"}>
        <div>
          <label htmlFor="organisation" className="block text-xs font-semibold uppercase tracking-wider text-[#171614]/80 mb-1.5">
            Organisation <span className="text-xs font-normal text-[#171614]/40">(Optional)</span>
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            placeholder="Company or institution"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#171614]/20 rounded-sm focus:outline-none focus:border-[#E5932B] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="enquiryType" className="block text-xs font-semibold uppercase tracking-wider text-[#171614]/80 mb-1.5">
            Enquiry Type
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#171614]/20 rounded-sm focus:outline-none focus:border-[#E5932B] transition-colors"
          >
            <option value="General Enquiry">General Enquiry</option>
            <option value="Potential Collaboration">Potential Collaboration</option>
            <option value="Future Business Opportunity">Future Business Opportunity</option>
            <option value="Brand & Press Enquiry">Brand &amp; Press Enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#171614]/80 mb-1.5">
          Message <span className="text-[#E5932B]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 4 : 5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly state how we may assist or collaborate with you..."
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#171614]/20 rounded-sm focus:outline-none focus:border-[#E5932B] transition-colors resize-y"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-[#171614] rounded-sm hover:bg-[#E5932B] focus:bg-[#E5932B] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Transmitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Enquiry
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-[#171614]/45 pt-1">
        We respect your privacy. Inquiries are stored securely and never shared with third parties.
      </p>
    </form>
  );
}
