import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Search, Building2 } from "lucide-react";
import StarSymbol from "@/components/brand/StarSymbol";
import { ventures } from "@/lib/config";

export const metadata: Metadata = {
  title: "Ventures | Portfolio & Future Direction",
  description:
    "Explore the future venture framework of CRORESTARS. As our diversified business portfolio develops, new ventures will be introduced here.",
};

const explorationPillars = [
  {
    icon: Search,
    title: "Research-Led Selection",
    description:
      "We believe that lasting ventures begin with deep inquiry into structural market shifts, operational inefficiencies, and enduring consumer demands.",
  },
  {
    icon: Layers,
    title: "Industry Neutrality",
    description:
      "Our mandate remains open to high-potential industries where rigorous discipline and long-term capital can establish sustainable leadership.",
  },
  {
    icon: Building2,
    title: "Operational Independence",
    description:
      "Each venture will be designed with its own specialized focus and operational agility, while benefiting from the overarching strategic vision of CRORESTARS.",
  },
];

export default function VenturesPage() {
  const hasVentures = ventures.length > 0;

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
            Business Portfolio
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
            Built for <span className="text-[#E5932B]">What Comes Next</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/65 max-w-2xl leading-relaxed">
            CRORESTARS is architected as an industry-neutral foundation designed to house and nurture diverse commercial ventures over time.
          </p>
        </div>
      </section>

      {/* ── Portfolio / Empty State Section ──── */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#171614]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#E5932B] uppercase">
              Current Status
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#171614]">
              Portfolio Overview
            </h2>
          </div>

          {hasVentures ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ventures.map((venture) => (
                <div
                  key={venture.id}
                  className="p-8 border border-[#171614]/10 rounded-sm hover:border-[#E5932B] transition-colors"
                >
                  <span className="text-xs uppercase tracking-wider text-[#E5932B] font-semibold">
                    {venture.sector}
                  </span>
                  <h3 className="text-xl font-bold text-[#171614] mt-2 mb-3">
                    {venture.name}
                  </h3>
                  <p className="text-sm text-[#171614]/70 leading-relaxed mb-6">
                    {venture.shortDescription}
                  </p>
                  <Link
                    href={venture.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171614] hover:text-[#E5932B]"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-[#171614]/20 rounded-sm p-12 lg:p-20 text-center bg-[#F3F1EC]/40 max-w-4xl mx-auto">
              <div className="w-14 h-14 rounded-full bg-[#171614] text-[#E5932B] flex items-center justify-center mx-auto mb-6">
                <StarSymbol size={26} color="#E5932B" />
              </div>
              <h3 className="text-2xl font-bold text-[#171614] mb-3">
                Portfolio in Formation
              </h3>
              <p className="text-base text-[#171614]/75 max-w-xl mx-auto leading-relaxed mb-8">
                New ventures will be introduced here as CRORESTARS develops its business portfolio. Every venture begins as an independent star that aligns with our shared vision.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#171614]/10 rounded-sm text-xs text-[#171614]/65">
                <StarSymbol size={11} color="#E5932B" />
                Venture criteria and roadmap currently in research
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Venture Development Framework ────── */}
      <section className="bg-[#F3F1EC] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#E5932B] uppercase">
              Approach
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#171614]">
              How We Evaluate Future Ventures
            </h2>
            <p className="mt-4 text-base text-[#171614]/65 leading-relaxed">
              Before introducing any business into the CRORESTARS group, every candidate opportunity is filtered through core strategic criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {explorationPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-sm border border-[#171614]/8 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#171614] text-[#E5932B] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#171614] mb-3">
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

      {/* ── Collaboration CTA ─────────────────── */}
      <section className="bg-white py-20 lg:py-24 border-t border-[#171614]/8">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <span className="text-xs font-semibold tracking-widest text-[#E5932B] uppercase">
            Collaborate
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#171614] mb-6">
            Discuss a Potential Collaboration
          </h2>
          <p className="text-base text-[#171614]/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            If you are an entrepreneur, industry specialist, or institutional partner interested in exploring strategic opportunities with CRORESTARS, we welcome serious inquiries.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-[#171614] text-white rounded-sm hover:bg-[#E5932B] transition-colors"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
