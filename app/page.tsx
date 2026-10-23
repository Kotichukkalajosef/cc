import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import ContactForm from "@/components/ContactForm";
import ThreeBackground from "@/components/ThreeBackground";

export default function HomePage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@crorestars.com";

  return (
    <>
      {/* 3D Celestial Space Flight Engine (Zig-zag star rendezvous on scroll) */}
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
              Direct Inquiries
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* ====================================================================
            1. HERO: The First-Principles Thesis
            ==================================================================== */}
        <section className="section-3d section-hero" aria-labelledby="hero-title">
          <div className="container">
            <div className="waypoint-badge">
              <span className="waypoint-dot" aria-hidden="true" />
              <span>Genesis Horizon · First Principles Architecture</span>
            </div>

            {/* Inscribed Roman Wordmark (Scalable SVG, 100% visible, zero clipping) */}
            <Wordmark />

            <div className="grid-12">
              <div style={{ gridColumn: "span 12" }}>
                <h1 id="hero-title" className="hero-headline">
                  A crore of stars. One direction.
                </h1>
                <p className="hero-support reading-measure">
                  CRORESTARS is being engineered from first principles as an enduring, multi-generational industrial group. We are laying the structural, intellectual, and capital foundations to build and scale sovereign businesses across essential industries over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-transition-glow" aria-hidden="true" />

        {/* ====================================================================
            2. THE ARCHITECTURE OF SCALE: Unbounded Magnitude (Origin & Heritage)
            ==================================================================== */}
        <section className="section-3d section-origin" aria-labelledby="origin-title">
          <div className="container">
            <div className="cosmic-panel">
              <div className="waypoint-badge">
                <span className="waypoint-dot" aria-hidden="true" />
                <span>The Unbounded Horizon · Architectural Ethos</span>
              </div>

              <div className="grid-12">
                <div style={{ gridColumn: "span 12" }}>
                  <h2 id="origin-title" className="monumental-headline">
                    The Architecture of Unbounded Scale
                  </h2>

                  <div className="reading-measure">
                    <p className="hero-support mb-8">
                      Crore is not a finite threshold or a single fixed number. It is an order of magnitude: exponential compounding, infinite multiplicity, and the refusal to be bound by linear limits.
                    </p>

                    <p className="telugu-entry">
                      <span lang="te">కోటి</span> <strong className="text-white">Koti (Magnitude &amp; Scale)</strong> — <span className="etymology-definition">Beyond any singular quantity; the principle of exponential scaling where individual forces compound into gravitational, self-reinforcing power.</span>
                    </p>
                    <p className="telugu-entry">
                      <span lang="te">చుక్కలు</span> <strong className="text-white">Chukkalu (Points of Light)</strong> — <span className="etymology-definition">The stars; autonomous sovereign enterprises, specialized operational engines, each burning bright on its own axis.</span>
                    </p>

                    <div className="origin-body">
                      <p className="mb-4">
                        The company bears the founder&apos;s surname, <strong className="text-white">Kotichukkala</strong>. In our ancestral tongue, <em>Koti</em> represents monumental, unconstrained scale; <em>Chukkalu</em> are the stars.
                      </p>
                      <p className="mb-4">
                        A single venture, like a lone star, is vulnerable to the entropy of individual market cycles. But when sovereign points of industrial capability are organized under a disciplined capital allocation holding, they form a self-sustaining constellation capable of outlasting any single economic epoch.
                      </p>
                    </div>
                  </div>

                  {/* The 4 Dimensions of CRORESTARS (Full-width grid) */}
                  <div className="dimension-grid">
                    <div className="dimension-card">
                      <span className="dimension-tag">DIMENSION 01</span>
                      <h3 className="dimension-title">The Quantum of Scale</h3>
                      <p className="dimension-body">
                        We do not measure ambition by arbitrary ceilings. Scale is a compounding function: building operational velocity, reinvesting free cash flow, and engineering positive feedback loops that turn linear growth into exponential institutional gravity.
                      </p>
                    </div>

                    <div className="dimension-card">
                      <span className="dimension-tag">DIMENSION 02</span>
                      <h3 className="dimension-title">The Constellation of Enterprise</h3>
                      <p className="dimension-body">
                        Like stars generating their own fusion, every future operating business under CRORESTARS will be built as an autonomous, founder-led engine—with sovereign P&amp;L responsibility, distinct market leadership, and fierce speed.
                      </p>
                    </div>

                    <div className="dimension-card">
                      <span className="dimension-tag">DIMENSION 03</span>
                      <h3 className="dimension-title">The Conglomerate Holding</h3>
                      <p className="dimension-body">
                        CRORESTARS acts as the central gravitational core: allocating capital rationally, managing counter-cyclical risk, and incubating frontier initiatives without diluting existing operations or relying on fragile external debt.
                      </p>
                    </div>

                    <div className="dimension-card">
                      <span className="dimension-tag">DIMENSION 04</span>
                      <h3 className="dimension-title">The Generational Lineage</h3>
                      <p className="dimension-body">
                        Rooted in ancestral identity and built with classical Roman discipline, CRORESTARS is engineered to endure across generations—transcending transient market cycles, speculative hype, and technological shifts.
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
                <span>The Master Doctrine · Architecture of Value</span>
              </div>

              <div className="grid-12">
                <div style={{ gridColumn: "span 12" }}>
                  <h2 id="philosophy-title" className="philosophy-statement">
                    Many possibilities. One vision.
                  </h2>

                  <p className="philosophical-quote mb-6">
                    &ldquo;The history of civilization proves that the most resilient enterprises are not single-product monopolies, but synergistic constellations built to weather technological revolutions.&rdquo;
                  </p>

                  <p className="philosophy-body reading-measure">
                    Like the world&apos;s most formidable industrial houses—from Berkshire Hathaway to Reliance, from Alphabet to Tata—CRORESTARS is architected around three foundational laws of capital and operational physics:
                  </p>

                  {/* The 3 Conglomerate Doctrines */}
                  <div className="doctrine-grid">
                    <div className="doctrine-card">
                      <span className="doctrine-number">PRINCIPLE 01</span>
                      <h3 className="doctrine-title">Infrastructure-Grade Moats</h3>
                      <p className="doctrine-body">
                        We reject ephemeral software trends and transient consumer fads. Every venture entering the CRORESTARS portfolio must solve structural bottlenecks, possess enduring pricing power, and command a wide, defensible operational moat.
                      </p>
                    </div>

                    <div className="doctrine-card">
                      <span className="doctrine-number">PRINCIPLE 02</span>
                      <h3 className="doctrine-title">Compounding Capital Engine</h3>
                      <p className="doctrine-body">
                        Internal capital allocation is the ultimate competitive advantage. Cash flows generated by mature foundational operations will be strategically redeployed into frontier technological vectors, compounding capital velocity without dilutive dependency.
                      </p>
                    </div>

                    <div className="doctrine-card">
                      <span className="doctrine-number">PRINCIPLE 03</span>
                      <h3 className="doctrine-title">Sovereign Autonomy</h3>
                      <p className="doctrine-body">
                        Centralized holding bureaucracies kill innovation. Every operating subsidiary under CRORESTARS will be built with autonomous leadership, sovereign P&amp;L responsibility, and extreme operational agility, while drawing on the group&apos;s collective scale.
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
            4. THE MASTER PLAN: Four Phases to Inter-Generational Scale
            ==================================================================== */}
        <section className="section-3d section-ambition" aria-labelledby="ambition-title">
          <div className="container">
            <div className="cosmic-panel">
              <div className="waypoint-badge">
                <span className="waypoint-dot" aria-hidden="true" />
                <span>The Master Plan · Horizon Roadmap</span>
              </div>

              <div className="grid-12">
                <div style={{ gridColumn: "span 12" }}>
                  <h2 id="ambition-title" className="ambition-headline">
                    The Phased Horizon Framework
                  </h2>

                  <div className="reading-measure mb-8">
                    <p className="ambition-body">
                      We think in decades, not quarters. Great corporate empires are not improvised overnight; they are deployed in calculated, irreversible stages:
                    </p>
                  </div>

                  <div className="doctrine-grid">
                    <div className="doctrine-card">
                      <span className="doctrine-number" style={{ color: "#FFFFFF" }}>PHASE I · ACTIVE</span>
                      <h3 className="doctrine-title" style={{ color: "var(--color-gold)" }}>The Sovereign Bedrock</h3>
                      <p className="doctrine-body">
                        Pristine institutional architecture. Zero debt. Rigorous macroeconomic and technological sector mapping. Establishing the sovereign holding brand and capital governance standards.
                      </p>
                    </div>

                    <div className="doctrine-card">
                      <span className="doctrine-number">PHASE II · UPCOMING</span>
                      <h3 className="doctrine-title">The Anchor Enterprise</h3>
                      <p className="doctrine-body">
                        Identifying, capitalizing, and launching the foundational operating company. Building an engine of real cash flow, undeniable customer utility, and defensible market dominance.
                      </p>
                    </div>

                    <div className="doctrine-card">
                      <span className="doctrine-number">PHASE III · HORIZON</span>
                      <h3 className="doctrine-title">Synergistic Scale</h3>
                      <p className="doctrine-body">
                        Deploying capital into adjacent and frontier industries—digital infrastructure, energy transition, advanced manufacturing, and specialized services—unlocking compounding group synergies.
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
