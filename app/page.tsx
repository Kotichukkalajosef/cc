import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Logo from "@/components/brand/Logo";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
};

/* ─── Philosophy pillars ──────────────────────────────── */
const pillars = [
  {
    number: "01",
    heading: "Think Beyond",
    body: "Look for possibilities beyond the obvious. Meaningful opportunities are rarely found by following the most crowded path.",
  },
  {
    number: "02",
    heading: "Build with Purpose",
    body: "Turn promising ideas into disciplined, sustainable ventures. Every decision is guided by long-term value, not short-term convenience.",
  },
  {
    number: "03",
    heading: "Grow Together",
    body: "Bring different capabilities and opportunities together under a shared vision. Growth is most enduring when it creates value for more than one.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section
        className="relative bg-[#171614] text-white overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Subtle background texture — geometric lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 26%, transparent 27%), linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 26%, transparent 27%)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-28 lg:pt-36 lg:pb-40">
          {/* Amber accent line */}
          <div className="w-10 h-0.5 bg-[#E5932B] mb-10" aria-hidden="true" />

          {/* Logo — large display */}
          <div className="mb-10">
            <Logo inverted noLink className="h-10 lg:h-12 w-auto" />
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight max-w-3xl"
          >
            Many Possibilities.{" "}
            <span className="text-[#E5932B]">One Vision.</span>
          </h1>

          <p className="mt-7 text-lg lg:text-xl text-white/65 max-w-2xl leading-relaxed">
            CRORESTARS is building toward a future where ideas, opportunities, and
            ambitious ventures come together under one vision.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-[#E5932B] text-white rounded-sm hover:bg-[#c97d22] transition-colors"
            >
              Our Vision
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold border border-white/25 text-white rounded-sm hover:border-[#E5932B] hover:text-[#E5932B] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BRAND INTRODUCTION
          ══════════════════════════════════════ */}
      <section
        className="bg-white"
        aria-labelledby="intro-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#E5932B] uppercase">
                About CRORESTARS
              </span>
              <h2
                id="intro-heading"
                className="mt-4 text-3xl lg:text-4xl font-bold leading-snug tracking-tight"
              >
                One Vision.{" "}
                <span className="text-[#E5932B]">Room to Build More.</span>
              </h2>
            </div>

            <div>
              <p className="text-base lg:text-lg text-[#171614]/70 leading-relaxed">
                CRORESTARS is a brand founded on the belief that meaningful growth
                begins with possibility. Our long-term ambition is to build a
                diversified group of businesses, each pursuing opportunities while
                contributing to a larger shared vision.
              </p>
              <p className="mt-5 text-base text-[#171614]/55 leading-relaxed">
                This is a journey at its beginning — not a claim about what exists today,
                but a clear statement of where we are headed and how we intend to get
                there.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#171614] border-b border-[#171614]/30 pb-0.5 hover:text-[#E5932B] hover:border-[#E5932B] transition-colors"
              >
                Learn about the brand
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PHILOSOPHY
          ══════════════════════════════════════ */}
      <section
        className="bg-[#F3F1EC]"
        aria-labelledby="philosophy-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#E5932B] uppercase">
              Our Philosophy
            </span>
            <h2
              id="philosophy-heading"
              className="mt-4 text-3xl lg:text-4xl font-bold leading-snug tracking-tight"
            >
              The principles that guide us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#171614]/8 border border-[#171614]/8 rounded-sm overflow-hidden">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="bg-[#F3F1EC] p-8 lg:p-10 hover:bg-white transition-colors duration-200"
              >
                <span
                  className="text-xs font-bold tracking-widest text-[#E5932B]"
                  aria-hidden="true"
                >
                  {pillar.number}
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight">
                  {pillar.heading}
                </h3>
                <p className="mt-3 text-sm text-[#171614]/60 leading-relaxed">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          THE JOURNEY
          ══════════════════════════════════════ */}
      <section
        className="bg-white"
        aria-labelledby="journey-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest text-[#E5932B] uppercase">
              The Journey
            </span>
            <h2
              id="journey-heading"
              className="mt-4 text-3xl lg:text-4xl font-bold leading-snug tracking-tight"
            >
              An Ambition in the Making
            </h2>
            <div className="mt-8 flex gap-6">
              {/* Timeline marker */}
              <div className="flex flex-col items-center pt-1 shrink-0" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-[#E5932B]" />
                <div className="flex-1 w-px bg-[#171614]/10 mt-2" />
              </div>
              <div className="pb-8">
                <p className="text-base font-semibold text-[#171614]">
                  Foundation &amp; Direction
                </p>
                <p className="mt-2 text-base text-[#171614]/60 leading-relaxed">
                  Every enduring enterprise starts with a clear direction.
                  CRORESTARS is at the beginning of its journey — laying the
                  groundwork for future ventures, building a credible brand, and
                  developing the discipline needed for long-term growth.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center pt-1 shrink-0" aria-hidden="true">
                <div className="w-3 h-3 rounded-full border-2 border-[#171614]/20 bg-white" />
              </div>
              <div>
                <p className="text-base font-semibold text-[#171614]/40">
                  Future Ventures
                </p>
                <p className="mt-2 text-base text-[#171614]/35 leading-relaxed italic">
                  As the journey develops, new ventures will take shape here —
                  built on research, opportunity, and the ability to create lasting value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FUTURE VENTURES
          ══════════════════════════════════════ */}
      <section
        className="bg-[#171614] text-white"
        aria-labelledby="ventures-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#E5932B] uppercase">
                Ventures
              </span>
              <h2
                id="ventures-heading"
                className="mt-4 text-3xl lg:text-4xl font-bold leading-snug tracking-tight"
              >
                Built for What{" "}
                <span className="text-[#E5932B]">Comes Next</span>
              </h2>
              <p className="mt-5 text-base text-white/60 leading-relaxed">
                Our future business interests will be shaped by research,
                opportunity, and the ability to create lasting value. As the
                journey develops, this space will introduce the ventures that
                become part of CRORESTARS.
              </p>
              <Link
                href="/ventures"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/25 pb-0.5 hover:text-[#E5932B] hover:border-[#E5932B] transition-colors"
              >
                See Ventures
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Empty state card */}
            <div className="border border-white/10 rounded-sm p-10 flex flex-col items-center text-center">
              <div className="w-10 h-0.5 bg-[#E5932B] mb-8" aria-hidden="true" />
              <p className="text-base text-white/45 leading-relaxed">
                New ventures will be introduced here as CRORESTARS develops its
                business portfolio.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 w-full opacity-10" aria-hidden="true">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-14 rounded-sm border border-white/20"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT CTA
          ══════════════════════════════════════ */}
      <section
        className="bg-[#F3F1EC]"
        aria-labelledby="contact-home-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: copy */}
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#E5932B] uppercase">
                Contact
              </span>
              <h2
                id="contact-home-heading"
                className="mt-4 text-3xl lg:text-4xl font-bold leading-snug tracking-tight"
              >
                Start a Conversation
              </h2>
              <p className="mt-5 text-base text-[#171614]/65 leading-relaxed">
                For general enquiries, potential collaborations, or future business
                opportunities, get in touch with CRORESTARS.
              </p>

              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#171614] hover:text-[#E5932B] transition-colors"
                >
                  <Mail size={15} strokeWidth={2} aria-hidden="true" />
                  {siteConfig.email}
                </a>
              )}
            </div>

            {/* Right: form */}
            <div>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
