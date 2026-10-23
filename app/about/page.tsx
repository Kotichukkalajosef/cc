import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Shield, Clock, TrendingUp } from "lucide-react";
import StarSymbol from "@/components/brand/StarSymbol";
import Logo from "@/components/brand/Logo";

export const metadata: Metadata = {
  title: "About | Origin, Vision & Philosophy",
  description:
    "Learn about the origin and meaning behind CRORESTARS, inspired by Kotichukkala — scale, abundance, and countless possibilities converging into one enduring vision.",
};

const guidingPrinciples = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparency and honest conduct in every decision, communication, and relationship we cultivate.",
  },
  {
    icon: Compass,
    title: "Curiosity",
    description:
      "A constant appetite to understand evolving industries, explore emerging ideas, and challenge assumptions.",
  },
  {
    icon: StarSymbol,
    title: "Discipline",
    description:
      "The rigor to execute with focus, prioritize sustainable models, and reject short-term shortcuts.",
  },
  {
    icon: Clock,
    title: "Long-Term Thinking",
    description:
      "Measuring progress across horizons of decades rather than quick quarters, building foundations that endure.",
  },
  {
    icon: TrendingUp,
    title: "Responsible Growth",
    description:
      "Pursuing expansion that creates genuine shared value for partners, collaborators, and communities.",
  },
];

export default function AboutPage() {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#E5932B] mb-8">
            <StarSymbol size={13} color="#E5932B" />
            <span className="text-white/80">Origin &amp; Ethos</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
            The Origin of <span className="text-[#E5932B]">CRORESTARS</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
            A corporate identity rooted in heritage, designed for convergence, and committed to disciplined long-term growth.
          </p>
        </div>
      </section>

      {/* ── Name Origin & Heritage ─────────────── */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#171614]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#E5932B] uppercase mb-4">
                <StarSymbol size={12} color="#E5932B" />
                <span>Etymology &amp; Heritage</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[#171614] leading-snug">
                Inspired by Kotichukkala: <br className="hidden sm:inline" />
                <span className="text-[#E5932B]">Scale Meets Possibility.</span>
              </h2>
              <div className="mt-6 space-y-4 text-[#171614]/75 text-base leading-relaxed">
                <p>
                  The name <strong className="text-[#171614] font-semibold">CRORESTARS</strong> draws inspiration from the founder&apos;s surname, <span className="text-[#171614] font-medium italic">Kotichukkala</span>.
                </p>
                <p>
                  In Telugu, two distinct concepts unite to create this name and define our founding philosophy:
                </p>
              </div>

              {/* Wordmark breakdown demonstration */}
              <div className="mt-8 p-6 bg-[#F3F1EC] rounded-sm border border-[#171614]/8">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#171614]/60 block mb-2">
                  Identity Integration
                </span>
                <div className="py-2">
                  <Logo size="md" noLink />
                </div>
                <p className="text-xs text-[#171614]/60 mt-3 leading-relaxed">
                  Notice the custom <strong className="text-[#171614]">A</strong>: inside its central counter sits the signature 4-point amber star, signifying that the essence of stars (possibility) is protected and centered in our core.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Koti */}
              <div className="p-8 bg-[#F3F1EC] rounded-sm border border-[#171614]/6">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#E5932B]">
                    Part One
                  </span>
                  <span className="text-base font-bold text-[#171614]/80 font-serif">
                    కోటి
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#171614] mb-3">
                  Koti <span className="text-sm font-normal text-[#171614]/60">(Crore)</span>
                </h3>
                <p className="text-sm text-[#171614]/70 leading-relaxed">
                  Signifying scale, depth, and abundance. It represents the ambition to operate with substance and build enterprises that create enduring value at meaningful scale.
                </p>
              </div>

              {/* Chukkala */}
              <div className="p-8 bg-[#F3F1EC] rounded-sm border border-[#171614]/6 relative overflow-hidden">
                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    <StarSymbol size={13} color="#E5932B" />
                    <span className="text-xs font-bold tracking-widest uppercase text-[#E5932B]">
                      Part Two
                    </span>
                  </div>
                  <span className="text-base font-bold text-[#171614]/80 font-serif">
                    చుక్కలు
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#171614] mb-3">
                  Chukkala <span className="text-sm font-normal text-[#171614]/60">(Stars)</span>
                </h3>
                <p className="text-sm text-[#171614]/70 leading-relaxed">
                  Signifying countless individual lights, ideas, and possibilities. Every future commercial initiative begins as a spark of potential, waiting to be developed with discipline.
                </p>
              </div>

              {/* Philosophy banner */}
              <div className="sm:col-span-2 p-8 bg-[#171614] text-white rounded-sm relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <StarSymbol size={14} color="#E5932B" />
                  <span className="text-xs font-semibold tracking-widest text-[#E5932B] uppercase">
                    Core Philosophy
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2">Many Becoming One</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  Possibilities are vast, but lasting strength comes from purposeful alignment. CRORESTARS is founded on the conviction that independent ideas and diverse businesses achieve their greatest value when brought together under a unified, disciplined strategic direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ───────────────────── */}
      <section className="bg-[#F3F1EC] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#E5932B] uppercase mb-3">
              <StarSymbol size={12} color="#E5932B" />
              <span>Strategic Foundation</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#171614]">
              Vision &amp; Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 lg:p-10 rounded-sm border border-[#171614]/8 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <StarSymbol size={13} color="#E5932B" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#E5932B]">
                  Long-Term Vision
                </span>
              </div>
              <p className="text-2xl font-bold text-[#171614] leading-snug">
                &ldquo;To build an enduring group of businesses that creates value across industries and generations.&rdquo;
              </p>
              <p className="mt-4 text-sm text-[#171614]/65 leading-relaxed">
                We believe enduring value is created through patience, structural resilience, and the willingness to explore different business models without being constrained by short-term market fads.
              </p>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-sm border border-[#171614]/8 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <StarSymbol size={13} color="#E5932B" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#E5932B]">
                  Operating Mission
                </span>
              </div>
              <p className="text-2xl font-bold text-[#171614] leading-snug">
                &ldquo;To identify meaningful opportunities, build with discipline, and develop ventures around a shared long-term vision.&rdquo;
              </p>
              <p className="mt-4 text-sm text-[#171614]/65 leading-relaxed">
                Every venture undertaken under the CRORESTARS umbrella will adhere to strict standards of operational discipline, financial responsibility, and clear ethical guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guiding Principles (Values) ─────────── */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#171614]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#E5932B] uppercase mb-3">
              <StarSymbol size={12} color="#E5932B" />
              <span>Guiding Principles</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#171614]">
              Principles That Shape Our Direction
            </h2>
            <p className="mt-4 text-base text-[#171614]/65 leading-relaxed">
              These principles reflect the guiding tenets of the CRORESTARS brand. As our operations develop, these values serve as the yardstick by which opportunities and partnerships are assessed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guidingPrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 lg:p-8 bg-[#F3F1EC]/60 hover:bg-[#F3F1EC] border border-[#171614]/6 rounded-sm transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#171614] text-[#E5932B] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#171614] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#171614]/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stage of Development Notice ────────── */}
      <section className="bg-[#171614] text-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#E5932B] mb-6">
            <StarSymbol size={12} color="#E5932B" />
            <span>Development Notice</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6 leading-snug">
            Transparently at the Beginning
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-10">
            CRORESTARS is currently in its early development phase. We do not claim existing operations, subsidiaries, or historical financial milestones. This platform exists to anchor the brand identity, articulate its founding philosophy, and provide an official point of engagement as strategic ventures are researched and prepared for launch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/ventures"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[#E5932B] text-white rounded-sm hover:bg-[#c97d22] transition-colors"
            >
              Explore Ventures Direction
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-white/20 text-white rounded-sm hover:border-white transition-colors"
            >
              Initiate Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
