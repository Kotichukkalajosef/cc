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
              Initiate Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* ====================================================================
            1. HERO: The Sovereign Genesis (Alpha Kotichukkala)
            ==================================================================== */}
        <section className="section-3d section-hero" aria-labelledby="hero-title">
          <div className="container">
            <div className="waypoint-badge">
              <span className="waypoint-dot" aria-hidden="true" />
              <span>Waypoint I · Genesis · Alpha Kotichukkala</span>
            </div>

            {/* Inscribed Roman Wordmark (Scalable SVG, 100% visible, no clipping) */}
            <Wordmark />

            <div className="grid-12">
              <div style={{ gridColumn: "span 12" }}>
                <h1 id="hero-title" className="hero-headline">
                  A crore of stars. One direction.
                </h1>
                <p className="hero-support reading-measure">
                  CRORESTARS is a sovereign business house in its foundational era, conceived to architect, develop, and compound enduring enterprises across industries over generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-transition-glow" aria-hidden="true" />

        {/* ====================================================================
            2. ORIGIN: The Cosmology of Kotichukkala (1,00,00,000)
            ==================================================================== */}
        <section className="section-3d section-origin" aria-labelledby="origin-title">
          <div className="container">
            <div className="cosmic-panel">
              <div className="waypoint-badge">
                <span className="waypoint-dot" aria-hidden="true" />
                <span>Waypoint II · Magnitude · The Crore Beacon</span>
              </div>

              <div className="grid-12">
                <div style={{ gridColumn: "span 12" }}>
                  {/* Oversized golden display numeral */}
                  <div className="numeral-display" aria-hidden="true">
                    1,00,00,000
                  </div>

                  <h2 id="origin-title" className="visually-hidden">
                    The Origin and Cosmology of Kotichukkala
                  </h2>

                  <div className="reading-measure">
                    <p className="telugu-entry">
                      <span lang="te">కోటి</span> <strong className="text-white">Koti (Crore)</strong> — <span className="etymology-definition">Ten million; the quantum of monumental magnitude, abundance, and generation-scale compounding.</span>
                    </p>
                    <p className="telugu-entry">
                      <span lang="te">చుక్కలు</span> <strong className="text-white">Chukkalu (Stars)</strong> — <span className="etymology-definition">Countless autonomous points of light; independent sparks of intellect, initiative, and sovereign enterprise.</span>
                    </p>

                    <div className="origin-body">
                      <p className="mb-4">
                        My surname is <strong className="text-white">Kotichukkala</strong>. In our ancestral tongue, <em>Koti</em> represents the scale of ten million; <em>Chukkalu</em> are the stars.
                      </p>
                      <p className="mb-4">
                        Alone in the void of the night, a single light is fragile and imperceptible. But when ten million sovereign lights align under common gravity, they form an unshakeable constellation that commands the sky.
                      </p>
                      <p className="philosophical-quote mt-6 pt-6" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                        &ldquo;CRORESTARS carries that surname and the immutable truth inside it: that the infinite possibilities of human enterprise achieve their supreme strength when unified under one unwavering direction.&rdquo;
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
            3. PHILOSOPHY: The Architecture of Convergence
            ==================================================================== */}
        <section className="section-3d section-philosophy" aria-labelledby="philosophy-title">
          <div className="container">
            <div className="cosmic-panel">
              <div className="waypoint-badge">
                <span className="waypoint-dot" aria-hidden="true" />
                <span>Waypoint III · Convergence · The Core Vision</span>
              </div>

              <div className="grid-12">
                <div style={{ gridColumn: "span 12" }}>
                  <h2 id="philosophy-title" className="philosophy-statement">
                    Many possibilities. One vision.
                  </h2>

                  <p className="philosophical-quote mb-6">
                    &ldquo;One idea is small. So is one person, one team, one venture. Brought together by gravitational discipline, they become an enterprise that none of them could be alone.&rdquo;
                  </p>

                  <p className="philosophy-body reading-measure">
                    This is how a star ignites in deep space—through the immense concentration of diffuse energy into an enduring nuclear furnace. It is precisely how we intend to build.
                  </p>

                  {/* The Triad of Gravitational Doctrine */}
                  <div className="doctrine-grid">
                    <div className="doctrine-card">
                      <span className="doctrine-number">DOCTRINE I</span>
                      <h3 className="doctrine-title">Gravitational Longevity</h3>
                      <p className="doctrine-body">
                        Quarterly metrics measure transient weather; generational governance measures climate. We build institutional foundations designed to remain standing a century from now, rejecting short-term speculation in favor of compounding reality.
                      </p>
                    </div>

                    <div className="doctrine-card">
                      <span className="doctrine-number">DOCTRINE II</span>
                      <h3 className="doctrine-title">Autonomous Sovereignty</h3>
                      <p className="doctrine-body">
                        Every commercial division under CRORESTARS will cultivate its own unyielding standard of operational mastery—operating with entrepreneurial agility, yet fortified by the collective capital and wisdom of the group.
                      </p>
                    </div>

                    <div className="doctrine-card">
                      <span className="doctrine-number">DOCTRINE III</span>
                      <h3 className="doctrine-title">Disciplined Convergence</h3>
                      <p className="doctrine-body">
                        Breakthrough value is created at the intersection of industries. By orchestrating disparate capabilities—technology, strategic capital, and essential industrial operations—we unlock frontiers that isolated ventures cannot reach.
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
            4. AMBITION: The Uncompromised Standard of Truth
            ==================================================================== */}
        <section className="section-3d section-ambition" aria-labelledby="ambition-title">
          <div className="container">
            <div className="cosmic-panel">
              <div className="waypoint-badge">
                <span className="waypoint-dot" aria-hidden="true" />
                <span>Waypoint IV · Horizon · Frontier Ventures</span>
              </div>

              <div className="grid-12">
                <div style={{ gridColumn: "span 12" }}>
                  <h2 id="ambition-title" className="ambition-headline">
                    Built for What Comes Next
                  </h2>

                  <div className="reading-measure">
                    <p className="ambition-body mb-5">
                      Over time, our mandate is to identify and operate businesses across sectors wherever structural shifts create the opportunity for profound, lasting value creation.
                    </p>
                    <p className="ambition-body mb-5">
                      We have not selected our inaugural operating business yet, and we refuse to simulate early accomplishments. True institutional greatness requires uncompromised honesty at its foundation.
                    </p>
                    <p className="philosophical-quote mt-6 pt-6" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                      &ldquo;We do not fabricate certifications, artificial client lists, or inflated pedigrees. Our greatest asset today is absolute clarity of purpose: laying the bedrock for enterprises that will endure.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-transition-glow" aria-hidden="true" />

        {/* ====================================================================
            5. JOURNEY & 6. CONTACT: The Constellation Gate
            ==================================================================== */}
        <section className="section-3d section-journey-contact" aria-labelledby="journey-title">
          <div className="container">
            {/* The Genesis Transparency */}
            <div className="grid-12">
              <div style={{ gridColumn: "span 12" }}>
                <div className="waypoint-badge">
                  <span className="waypoint-dot" aria-hidden="true" />
                  <span>Waypoint V · Terminal · The Constellation Gate</span>
                </div>

                <h2 id="journey-title" className="visually-hidden">
                  The Genesis Journey
                </h2>

                <div className="reading-measure">
                  <p className="journey-body">
                    This is the origin. There are no subsidiaries, outside clients, or historical balance sheets to display today. What exists is a revered name, an unswerving direction, and an iron commitment to build with discipline. We will chronicle on this platform only what is verified, achieved, and true.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive 3D Contact Terminal */}
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
