import type { Metadata } from "next";
import Link from "next/link";
import StarBackground from "@/components/StarBackground";

export const metadata: Metadata = {
  title: "About Us | The Meaning Behind the Name",
  description:
    "Learn about the origins of CRORESTARS, inspired by Kotichukkala, and our core philosophy: Built to Become More.",
};

export default function AboutPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@crorestars.com";
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Subtle Star Travel Background (Light Opacity, non-intrusive) */}
      <StarBackground />

      {/* Site Header */}
      <header className="site-header" role="banner">
        <div className="container site-header-inner">
          <Link href="/" className="brand-mark" aria-label="CRORESTARS — Home">
            <span className="brand-dot" aria-hidden="true" />
            <span>CRORESTARS</span>
          </Link>
          <nav className="site-nav" aria-label="Primary navigation">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link" style={{ color: "var(--color-white)" }}>
              About
            </Link>
            <Link href="/about#vision" className="nav-link">
              Our Vision
            </Link>
            <Link href="/#contact" className="nav-btn">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* ====================================================================
            1. ABOUT HERO
            ==================================================================== */}
        <section className="about-hero" aria-labelledby="about-title">
          <div className="container">
            <div className="reading-measure">
              <div className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                <span>About CRORESTARS</span>
              </div>

              <h1 id="about-title" className="hero-title" style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}>
                The Meaning Behind the Name.
              </h1>

              <p className="section-lead">
                CRORESTARS is inspired by the founder&apos;s surname, Kotichukkala. In its roots, the name connects two powerful concepts: scale and countless individual possibilities.
              </p>
            </div>
          </div>
        </section>

        {/* ====================================================================
            2. ORIGIN & ETYMOLOGY
            ==================================================================== */}
        <section className="section" aria-labelledby="origin-title">
          <div className="container">
            <div className="reading-measure">
              <h2 id="origin-title" className="section-title">
                A name with a bigger meaning.
              </h2>

              <p style={{ color: "var(--color-text-body)", fontSize: "var(--text-base)", lineHeight: 1.8 }}>
                The name CRORESTARS draws direct inspiration from the meaning of <strong>Kotichukkala</strong>:
              </p>

              <div className="origin-word-pair">
                <div className="origin-word-card">
                  <div className="origin-word-term">KOTI</div>
                  <span className="origin-word-telugu" lang="te">కోటి</span>
                  <p className="origin-word-meaning">
                    Meaning <strong>crore</strong> — ten million, symbolizing scale, abundance, and the ambition to build with significant reach.
                  </p>
                </div>

                <div className="origin-word-card">
                  <div className="origin-word-term">CHUKKALA</div>
                  <span className="origin-word-telugu" lang="te">చుక్కలు</span>
                  <p className="origin-word-meaning">
                    Meaning <strong>stars</strong> — small points of light, symbolizing countless individual ideas, opportunities, and ventures.
                  </p>
                </div>
              </div>

              <p style={{ color: "var(--color-text-body)", fontSize: "var(--text-base)", lineHeight: 1.8 }}>
                Together, the name connects scale with countless individual possibilities. It reflects the ambition to build something meaningful from many ideas, opportunities, and ventures brought together under one coherent standard.
              </p>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. CORE PHILOSOPHY: BUILT TO BECOME MORE
            ==================================================================== */}
        <section className="section" id="philosophy" aria-labelledby="philosophy-about-title">
          <div className="container">
            <div className="reading-measure">
              <div className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                <span>Core Philosophy</span>
              </div>

              <h2 id="philosophy-about-title" className="section-title">
                Built to Become More.
              </h2>

              <p className="section-lead">
                Built to Become More is the guiding principle behind everything we do. It represents continuous evolution, disciplined growth, and the ambition to create enduring businesses.
              </p>

              <div className="editorial-box">
                <p style={{ color: "var(--color-text-main)", fontSize: "var(--text-base)", lineHeight: 1.8, marginBottom: "1rem" }}>
                  We do not believe in standing still, nor do we believe in reckless haste. Becoming more means:
                </p>
                <ul style={{ paddingLeft: "1.25rem", color: "var(--color-text-body)", lineHeight: 1.8 }}>
                  <li style={{ marginBottom: "0.5rem" }}>Continually improving what we build and learning from practice.</li>
                  <li style={{ marginBottom: "0.5rem" }}>Exploring genuine possibilities rather than following fleeting trends.</li>
                  <li>Creating stronger, more resilient foundations for future generations of enterprise.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. VISION & MISSION
            ==================================================================== */}
        <section className="section" id="vision" aria-labelledby="vision-mission-title">
          <div className="container">
            <div className="reading-measure">
              <div className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                <span>Our Direction</span>
              </div>

              <h2 id="vision-mission-title" className="section-title">
                Vision &amp; Mission.
              </h2>

              <p className="section-lead">
                These statements represent our guiding direction and standards, not proof of historical achievements.
              </p>
            </div>

            <div className="vision-mission-grid">
              <div className="vision-card">
                <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>
                  Long-Term Ambition
                </span>
                <h3 className="vision-card-title">Vision</h3>
                <p className="vision-card-body">
                  To build an enduring group of businesses that creates lasting value across industries and generations.
                </p>
              </div>

              <div className="vision-card">
                <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>
                  Operational Focus
                </span>
                <h3 className="vision-card-title">Mission</h3>
                <p className="vision-card-body">
                  To identify meaningful opportunities, build strong enterprises, and grow through disciplined execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. CURRENT STAGE & TRANSPARENCY
            ==================================================================== */}
        <section className="section" aria-labelledby="transparency-title">
          <div className="container">
            <div className="reading-measure">
              <div className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                <span>Current Stage</span>
              </div>

              <h2 id="transparency-title" className="section-title">
                Honesty in the Foundation.
              </h2>

              <p style={{ color: "var(--color-text-body)", fontSize: "var(--text-base)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                CRORESTARS is in its genesis stage. We have not chosen our initial commercial vertical yet, and we refuse to posture otherwise. We do not manufacture fake traction, claim unearned revenue, or invent a roster of clients.
              </p>

              <p style={{ color: "var(--color-text-body)", fontSize: "var(--text-base)", lineHeight: 1.8, marginBottom: "2rem" }}>
                What exists today is strategic clarity, disciplined patience, and a long-term commitment to build carefully. We will add to our story only what is true.
              </p>

              <div className="btn-group">
                <Link href="/#contact" className="btn-primary">
                  Start a Conversation
                </Link>
                <Link href="/" className="btn-secondary">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          FOOTER
          ==================================================================== */}
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-brand">CRORESTARS</div>
              <p className="footer-tagline">Built to Become More.</p>
            </div>

            <nav className="footer-links" aria-label="Footer navigation">
              <Link href="/" className="footer-link">
                Home
              </Link>
              <Link href="/about" className="footer-link">
                About
              </Link>
              <Link href="/about#vision" className="footer-link">
                Our Vision
              </Link>
              <Link href="/#contact" className="footer-link">
                Contact
              </Link>
              <Link href="/privacy" className="footer-link">
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div className="footer-bottom">
            <span>&copy; {currentYear} CRORESTARS. All rights reserved.</span>
            <span>Direct correspondence: <a href={`mailto:${contactEmail}`} style={{ color: "var(--color-text-muted)", textDecoration: "underline" }}>{contactEmail}</a></span>
          </div>
        </div>
      </footer>
    </>
  );
}
