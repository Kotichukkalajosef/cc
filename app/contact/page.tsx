import type { Metadata } from "next";
import { Mail, ShieldCheck, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact | Official Inquiries & Communication",
  description:
    "Get in touch with CRORESTARS for general inquiries, strategic collaborations, and future business opportunities.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Page Header ───────────────────────── */}
      <section className="bg-[#171614] text-white py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 26%, transparent 27%), linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 26%, transparent 27%)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="w-10 h-0.5 bg-[#E5932B] mb-8" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-widest text-[#E5932B] uppercase">
            Communication
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
            Connect with <span className="text-[#E5932B]">CRORESTARS</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/65 max-w-2xl leading-relaxed">
            For general inquiries, strategic dialogs, or future partnership exploration, we welcome your correspondence.
          </p>
        </div>
      </section>

      {/* ── Contact Section ────────────────────── */}
      <section className="bg-[#F3F1EC] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left information column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#E5932B] uppercase">
                  Direct Inquiries
                </span>
                <h2 className="mt-2 text-3xl font-bold text-[#171614]">
                  Start a Conversation
                </h2>
                <p className="mt-4 text-sm text-[#171614]/70 leading-relaxed">
                  As an evolving brand preparing its foundational ventures, we value direct, thoughtful communication from individuals and organizations aligned with our long-term vision.
                </p>
              </div>

              {/* Direct email card */}
              <div className="p-6 bg-white rounded-sm border border-[#171614]/8 shadow-sm">
                <div className="flex items-center gap-3 text-[#E5932B] mb-2">
                  <Mail className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#171614]">
                    Official Email
                  </span>
                </div>
                {siteConfig.email ? (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-semibold text-[#171614] hover:text-[#E5932B] transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                ) : (
                  <p className="text-sm text-[#171614]/50 italic">
                    Email address will be published soon.
                  </p>
                )}
                <p className="mt-2 text-xs text-[#171614]/55">
                  Direct correspondence for institutional and formal requests.
                </p>
              </div>

              {/* Standards of communication */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#E5932B] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#171614]">Response Review</h3>
                    <p className="text-xs text-[#171614]/65 mt-0.5 leading-relaxed">
                      All genuine inquiries are reviewed with care. Please allow suitable time for strategic proposals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#E5932B] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#171614]">Confidentiality</h3>
                    <p className="text-xs text-[#171614]/65 mt-0.5 leading-relaxed">
                      Communications shared with CRORESTARS are treated with discretion and professional integrity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-[#E5932B] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#171614]">Transparent Operations</h3>
                    <p className="text-xs text-[#171614]/65 mt-0.5 leading-relaxed">
                      CRORESTARS operates in an early preparatory stage. We do not maintain public retail offices at this time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
