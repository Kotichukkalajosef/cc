import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Logo from "@/components/brand/Logo";
import StarSymbol from "@/components/brand/StarSymbol";
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
          HERO — Possibilities & Convergence
          ══════════════════════════════════════ */}
      <section
        className="relative bg-[#171614] text-white overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Architectural Constellation Grid: Many Possibilities Converging */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          aria-hidden="true"
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="star-grid" width="120" height="120" patternUnits="userSpaceOnUse">
                {/* Subtle coordinate lines */}
                <path d="M 120 0 L 0 0 0 120" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                {/* 4-point star nodes representing Chukkala (individual possibilities) */}
                <path
                  d="M 60 56 C 60 58.5 58.5 60 56 60 C 58.5 60 60 61.5 60 64 C 60 61.5 61.5 60 64 60 C 61.5 60 60 58.5 60 56 Z"
                  fill="#E5932B"
                  opacity="0.35"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#star-grid)" />
          </svg>
        </div>

        {/* Ambient Warm Amber Glow at top-right corner */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E5932B]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-28 lg:pt-36 lg:pb-40">
          {/* Brand Philosophy Pill with Official Star Symbol */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#E5932B] mb-8">
            <StarSymbol size={13} color="#E5932B" />
            <span className="text-white/80">Kotichukkala · Many Possibilities, One Vision</span>
          </div>

          {/* Logo — large display with custom A and amber star */}
          <div className="mb-10">
            <Logo inverted noLink size="lg" />
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight max-w-3xl"
          >
            Many Possibilities.{" "}
            <span className="text-[#E5932B]">One Vision.</span>
          </h1>

          <p className="mt-7 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
            CRORESTARS is building toward a future where ideas, opportunities, and
            ambitious ventures come together under one unified vision.
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
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#E5932B] uppercase mb-4">
                <StarSymbol size={12} color="#E5932B" />
                <span>About CRORESTARS</span>
              </div>
              <h2
                id="intro-heading"
                className="text-3xl lg:text-4xl font-bold leading-snug tracking-tight"
              >
                One Vision.{" "}
                <span className="text-[#E5932B]">Room to Build More.</span>
              </h2>
            </div>

            <div>
              <p className="text-base lg:text-lg text-[#171614]/75 leading-relaxed">
                CRORESTARS is a brand founded on the belief that meaningful growth
                begins with possibility. Our long-term ambition is to build a
                diversified group of businesses, each pursuing opportunities while
                contributing to a larger shared vision.
              </p>
              <p className="mt-5 text-base text-[#171614]/60 leading-relaxed">
                Inspired by <em>Kotichukkala</em> (representing scale and countless stars of opportunity), our mission is the art of convergence — turning independent sparks of possibility into sustainable commercial enterprises.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#171614] border-b border-[#171614]/30 pb-0.5 hover:text-[#E5932B] hover:border-[#E5932B] transition-colors"
              >
                Discover the story behind the name
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PHILOSOPHY — Many Becoming One
          ══════════════════════════════════════ */}
      <section
        className="bg-[#F3F1EC]"
        aria-labelledby="philosophy-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#E5932B] uppercase mb-3">
              <StarSymbol size={12} color="#E5932B" />
              <span>Core Philosophy</span>
            </div>
            <h2
              id="philosophy-heading"
              className="text-3xl lg:text-4xl font-bold leading-snug tracking-tight"
            >
              Many Becoming One.
            </h2>
            <p className="mt-3 text-base text-[#171614]/60 max-w-xl">
              Like stars aligning into a constellation, our principles guide independent initiatives toward shared strength.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#171614]/10 border border-[#171614]/10 rounded-sm overflow-hidden shadow-sm">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="bg-[#F3F1EC] p-8 lg:p-10 hover:bg-white transition-colors duration-200 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold tracking-widest text-[#E5932B]"
                    aria-hidden="true"
                  >
                    {pillar.number}
                  </span>
                  <StarSymbol
                    size={14}
                    color="#E5932B"
                    className="opacity-40 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#171614]">
                  {pillar.heading}
                </h3>
                <p className="mt-3 text-sm text-[#171614]/65 leading-relaxed">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          THE JOURNEY — An Ambition in the Making
          ══════════════════════════════════════ */}
      <section
        className="bg-white"
        aria-labelledby="journey-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#E5932B] uppercase mb-3">
              <StarSymbol size={12} color="#E5932B" />
              <span>The Journey</span>
            </div>
            <h2
              id="journey-heading"
              className="text-3xl lg:text-4xl font-bold leading-snug tracking-tight"
            >
              An Ambition in the Making
            </h2>
            
            <div className="mt-10 space-y-8">
              {/* Timeline point 1 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center pt-1 shrink-0" aria-hidden="true">
                  <div className="w-6 h-6 rounded-full bg-[#171614] flex items-center justify-center">
                    <StarSymbol size={11} color="#E5932B" />
                  </div>
                  <div className="flex-1 w-px bg-[#171614]/15 mt-2" />
                </div>
                <div className="pb-6">
                  <p className="text-base font-bold text-[#171614]">
                    Foundation &amp; Strategic Direction
                  </p>
                  <p className="mt-2 text-base text-[#171614]/65 leading-relaxed">
                    Every enduring enterprise starts with a clear direction.
                    CRORESTARS is at the beginning of its journey — laying the
                    groundwork for future ventures, building a credible brand, and
                    developing the discipline needed for long-term growth.
                  </p>
                </div>
              </div>

              {/* Timeline point 2 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center pt-1 shrink-0" aria-hidden="true">
                  <div className="w-6 h-6 rounded-full border border-[#171614]/30 bg-[#F3F1EC] flex items-center justify-center">
                    <StarSymbol size={11} color="#171614" className="opacity-40" />
                  </div>
                </div>
                <div>
                  <p className="text-base font-bold text-[#171614]/50">
                    Future Ventures
                  </p>
                  <p className="mt-2 text-base text-[#171614]/40 leading-relaxed italic">
                    As the journey develops, new ventures will take shape here —
                    built on research, opportunity, and the ability to create lasting value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FUTURE VENTURES
          ══════════════════════════════════════ */}
      <section
        className="bg-[#171614] text-white relative overflow-hidden"
        aria-labelledby="ventures-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#E5932B] uppercase mb-4">
                <StarSymbol size={12} color="#E5932B" />
                <span>Ventures</span>
              </div>
              <h2
                id="ventures-heading"
                className="text-3xl lg:text-4xl font-bold leading-snug tracking-tight"
              >
                Built for What{" "}
                <span className="text-[#E5932B]">Comes Next</span>
              </h2>
              <p className="mt-5 text-base text-white/65 leading-relaxed">
                Our future business interests will be shaped by research,
                opportunity, and the ability to create lasting value. As the
                journey develops, this space will introduce the ventures that
                become part of CRORESTARS.
              </p>
              <Link
                href="/ventures"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/25 pb-0.5 hover:text-[#E5932B] hover:border-[#E5932B] transition-colors"
              >
                Explore Ventures Framework
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Empty state card featuring the Star element */}
            <div className="border border-white/10 rounded-sm p-10 flex flex-col items-center text-center bg-white/[0.02]">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <StarSymbol size={22} color="#E5932B" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Portfolio in Formation
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                New ventures will be introduced here as CRORESTARS develops its
                business portfolio.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-xs text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5932B]" aria-hidden="true" />
                Industry-neutral framework ready for growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT CONVERSATION
          ══════════════════════════════════════ */}
      <section
        className="bg-[#F3F1EC]"
        aria-labelledby="contact-home-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#E5932B] uppercase mb-4">
                <StarSymbol size={12} color="#E5932B" />
                <span>Contact</span>
              </div>
              <h2
                id="contact-home-heading"
                className="text-3xl lg:text-4xl font-bold leading-snug tracking-tight"
              >
                Start a Conversation
              </h2>
              <p className="mt-5 text-base text-[#171614]/70 leading-relaxed">
                For general enquiries, potential collaborations, or future business
                opportunities, get in touch with CRORESTARS.
              </p>

              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#171614] hover:text-[#E5932B] transition-colors"
                >
                  <Mail size={16} strokeWidth={2} aria-hidden="true" />
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
