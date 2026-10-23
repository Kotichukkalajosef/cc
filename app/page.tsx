import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import ContactForm from "@/components/ContactForm";
import ThreeBackground from "@/components/ThreeBackground";

export default function HomePage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@crorestars.com";

  return (
    <>
      {/* 3D Deep Space Flight Engine (Omnidirectional starfield, nebulae & zig-zag star rendezvous) */}
      <ThreeBackground />

      {/* Site Header */}
      <header className="site-header" role="banner">
        <div className="container site-header-inner">
          <Link href="/" className="brand-mark" aria-label="CRORESTARS — Home">
            <span className="brand-beacon" aria-hidden="true" />
            <span>CRORESTARS</span>
          </Link>
          <nav aria-label="Primary navigation">
            <a href="#contact" className="nav-link">
              Executive Terminal
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* ====================================================================
            1. HERO: The Sovereign Conglomerate Thesis
            ==================================================================== */}
        <section className="section-3d section-hero" aria-labelledby="hero-title">
          <div className="container">
            <div className="waypoint-badge">
              <span className="waypoint-dot" aria-hidden="true" />
              <span>Genesis Horizon · Sovereign Master Architecture</span>
            </div>

            {/* Inscribed Roman Wordmark (Scalable SVG, 100% visible, zero clipping) */}
            <Wordmark />

            <div className="grid-12">
              <div style={{ gridColumn: "span 12" }}>
                <h1 id="hero-title" className="hero-headline">
                  A crore of stars. One sovereign direction.
                </h1>
                <p className="hero-support reading-measure">
                  CRORESTARS is being engineered from first principles as an enduring, multi-generational industrial group. We do not chase transient software cycles or speculative trends; we are laying the capital, architectural, and intellectual foundations to build and scale sovereign enterprises across the defining industries of the next century.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-transition-glow" aria-hidden="true" />

        {/* ====================================================================
            2. THE MASTER THESIS: The Architecture of Exponential Conglomerates
            ==================================================================== */}
        <section className="section-3d section-origin" aria-labelledby="origin-title">
          <div className="container">
            <div className="cosmic-panel">
              <div className="waypoint-badge">
                <span className="waypoint-dot" aria-hidden="true" />
                <span>The Master Thesis · Architecture of Exponential Scale</span>
              </div>

              <div className="grid-12">
                <div style={{ gridColumn: "span 12" }}>
                  <h2 id="origin-title" className="monumental-headline">
                    The Architecture of Sovereign Scale
                  </h2>

                  <div className="reading-measure">
                    <p className="hero-support mb-8">
                      Lone ventures burn out like meteors. The defining institutions of human civilization are engineered as self-sustaining constellations.
                    </p>

                    <div className="origin-body">
                      <p className="mb-5">
                        CRORESTARS is founded on an uncompromising thesis: the greatest industrial value is never created by fragile, single-product startups at the mercy of platform gatekeepers or market cycles. It is forged by sovereign conglomerates that master capital allocation, command irreplaceable moats, and compound value across multiple technological epochs.
                      </p>
                      <p className="mb-5">
                        In astrophysics, a star is a self-sustaining thermonuclear furnace—generating its own energy, commanding its own gravitational field, and illuminating entire systems. We build with the relentless mathematics of constellations: thousands of autonomous points of industrial power, bound together under one disciplined, generation-scale balance sheet.
                      </p>
                    </div>
                  </div>

                  {/* The 4 Strategic Pillars of CRORESTARS */}
                  <div className="dimension-grid">
                    <div className="dimension-card">
                      <span className="dimension-tag">PILLAR 01</span>
                      <h3 className="dimension-title">Exponential Scale Invariance</h3>
                      <p className="dimension-body">
                        We reject arbitrary ceilings. Scale is a compounding physical law: converting operational cash flows into compounding institutional gravity, ensuring every successive enterprise benefits from the cumulative momentum of the group.
                      </p>
                    </div>

                    <div className="dimension-card">
                      <span className="dimension-tag">PILLAR 02</span>
                      <h3 className="dimension-title">Sovereign Operating Stars</h3>
                      <p className="dimension-body">
                        A star generates its own fusion. Every operating company under CRORESTARS is engineered with sovereign leadership, absolute operational agility, and market dominance—immune to central bureaucratic inertia.
                      </p>
                    </div>

                    <div className="dimension-card">
                      <span className="dimension-tag">PILLAR 03</span>
                      <h3 className="dimension-title">The Capital Allocation Fortress</h3>
                      <p className="dimension-body">
                        Internal capital velocity is the ultimate competitive moat. While others rely on dilutive debt and capricious capital markets, CRORESTARS aggregates retained earnings to underwrite counter-cyclical expansions and long-term dominance.
                      </p>
                    </div>

                    <div className="dimension-card">
                      <span className="dimension-tag">PILLAR 04</span>
                      <h3 className="dimension-title">The Century-Scale Horizon</h3>
                      <p className="dimension-body">
                        We do not build for quarterly headlines or short-term exits. We build enduring industrial assets designed to outlast technological revolutions, structural macroeconomic shifts, and generational transitions.
                      </p>
                    </div>
                  </div>

                  <div className="reading-measure pt-8 mt-8" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <p className="philosophical-quote">
                      &ldquo;A single enterprise is an event. A constellation of compounded industries is an era. We build not for quarters, but for centuries.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-transition-glow" aria-hidden="true" />

        {/* ====================================================================
            3. THE CONGLOMERATE DOCTRINE: How We Allocate & Build
            ==================================================================== */}
        <section className="section-3d section-philosophy" aria-labelledby="philosophy-title">
          <div className="container">
            <div className="cosmic-panel">
              <div className="waypoint-badge">
                <span className="waypoint-dot" aria-hidden="true" />
                <span>The Master Doctrine · Laws of Industrial Physics</span>
              </div>

              <div className="grid-12">
                <div style={{ gridColumn: "span 12" }}>
                  <h2 id="philosophy-title" className="philosophy-statement">
                    Many possibilities. One sovereign vision.
                  </h2>

                  <p className="philosophical-quote mb-6">
                    &ldquo;The history of world industry proves that the most resilient institutions are not fragile monopolies, but synergistic constellations built to weather technological revolutions.&rdquo;
                  </p>

                  <p className="philosophy-body reading-measure">
                    Modeled on the world&apos;s most formidable industrial houses—from Berkshire Hathaway to Reliance, from Alphabet to Tata—CRORESTARS is architected around three non-negotiable laws:
                  </p>

                  {/* The 3 Conglomerate Doctrines */}
                  <div className="doctrine-grid">
                    <div className="doctrine-card">
                      <span className="doctrine-number">PRINCIPLE 01</span>
                      <h3 className="doctrine-title">Infrastructure-Grade Moats</h3>
                      <p className="doctrine-body">
                        We reject ephemeral consumer trends and transient software hype. Every enterprise entering the CRORESTARS constellation must solve fundamental bottlenecks, command pricing power, and possess an unassailable operational moat.
                      </p>
                    </div>

                    <div className="doctrine-card">
                      <span className="doctrine-number">PRINCIPLE 02</span>
                      <h3 className="doctrine-title">Compounding Capital Velocity</h3>
                      <p className="doctrine-body">
                        Internal capital allocation is the supreme competitive edge. Retained free cash flows from foundational operations will be strategically redeployed into frontier sectors, compounding value without external dilution.
                      </p>
                    </div>

                    <div className="doctrine-card">
                      <span className="doctrine-number">PRINCIPLE 03</span>
                      <h3 className="doctrine-title">Decentralized Execution</h3>
                      <p className="doctrine-body">
                        Central holding bureaucracies extinguish speed. Every operating company under CRORESTARS will be built with autonomous executive leadership, sovereign P&amp;L responsibility, and aggressive field velocity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-transition-glow" aria-hidden="true" />

        {/* ====================================================================
            4. THE MASTER PLAN: Four Phased Horizons
            ==================================================================== */}
        <section className="section-3d section-ambition" aria-labelledby="ambition-title">
          <div className="container">
            <div className="cosmic-panel">
              <div className="waypoint-badge">
                <span className="waypoint-dot" aria-hidden="true" />
                <span>The Master Plan · Phased Horizon Framework</span>
              </div>

              <div className="grid-12">
                <div style={{ gridColumn: "span 12" }}>
                  <h2 id="ambition-title" className="ambition-headline">
                    The Phased Horizon Framework
                  </h2>

                  <div className="reading-measure mb-8">
                    <p className="ambition-body">
                      We operate on decades, not quarters. Great corporate empires are not improvised; they are executed through deliberate, calculated, and irreversible phases:
                    </p>
                  </div>

                  <div className="doctrine-grid">
                    <div className="doctrine-card">
                      <span className="doctrine-number" style={{ color: "#FFFFFF" }}>PHASE I · ACTIVE</span>
                      <h3 className="doctrine-title" style={{ color: "var(--color-gold)" }}>The Sovereign Bedrock</h3>
                      <p className="doctrine-body">
                        Pristine institutional architecture. Zero debt. Rigorous macroeconomic and industrial sector mapping. Establishing the sovereign holding brand and capital governance standards.
                      </p>
                    </div>

                    <div className="doctrine-card">
                      <span className="doctrine-number">PHASE II · UPCOMING</span>
                      <h3 className="doctrine-title">The Anchor Titan</h3>
                      <p className="doctrine-body">
                        Identifying, capitalizing, and launching the foundational operating company. Building an engine of real free cash flow, undeniable customer utility, and defensive market dominance.
                      </p>
                    </div>

                    <div className="doctrine-card">
                      <span className="doctrine-number">PHASE III · HORIZON</span>
                      <h3 className="doctrine-title">Synergistic Expansion</h3>
                      <p className="doctrine-body">
                        Deploying internal capital into adjacent and frontier industries—autonomous infrastructure, energy transition, advanced manufacturing, and specialized computing—unlocking exponential synergies.
                      </p>
                    </div>
                  </div>

                  <div className="reading-measure mt-8 pt-6" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <p className="philosophical-quote">
                      &ldquo;We have not chosen our initial commercial vertical yet, and we refuse to posture otherwise. We do not manufacture fake traction or boast unearned revenues. Our greatest asset today is uncorrupted focus, immaculate discipline, and the patience to execute the master plan.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-transition-glow" aria-hidden="true" />

        {/* ====================================================================
            5. THE GENESIS STANDARD & 6. THE CONTACT TERMINAL
            ==================================================================== */}
        <section className="section-3d section-journey-contact" aria-labelledby="journey-title">
          <div className="container">
            {/* The Radical Truth Section */}
            <div className="grid-12">
              <div style={{ gridColumn: "span 12" }}>
                <div className="waypoint-badge">
                  <span className="waypoint-dot" aria-hidden="true" />
                  <span>Governance Charter · Radical Integrity</span>
                </div>

                <h2 id="journey-title" className="visually-hidden">
                  The Genesis Governance Charter
                </h2>

                <div className="reading-measure mb-10">
                  <p className="journey-body">
                    Every enduring institution on earth was once just a thesis, an iron will, and a clean sheet of paper. We hold no subsidiaries today. We report no external client roster today. We claim no historical balance sheet today. Every line recorded on this portal will be verified, audited, and mathematically true.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Founder & Executive Contact Terminal */}
            <div className="grid-12">
              <div style={{ gridColumn: "span 12" }}>
                <ContactForm fallbackEmail={contactEmail} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          7. FOOTER
          ==================================================================== */}
      <footer className="site-footer" role="contentinfo">
        <div className="container footer-inner">
          <div className="flex items-center gap-3">
            <span className="brand-beacon" aria-hidden="true" />
            <span>&copy; 2026 CRORESTARS. All rights reserved.</span>
          </div>
          <div className="footer-meta">
            <span>[REGISTERED BUSINESS NAME, CITY, COUNTRY]</span>
            <Link href="/privacy" className="footer-link">
              Privacy Doctrine
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
