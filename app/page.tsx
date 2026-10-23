import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import ContactForm from "@/components/ContactForm";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@crorestars.com";
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Subtle Star Travel Background (Light Opacity, non-intrusive) */}
      <StarBackground />

      {/* Redesigned Responsive Navbar */}
      <Navbar />

      <main id="main-content">
        {/* ====================================================================
            1. HERO SECTION
            ==================================================================== */}
        <section className="section" aria-labelledby="hero-title" style={{ paddingTop: "clamp(3.5rem, 6vw, 6rem)" }}>
          <div className="container">
            {/* Elegant, scalable CRORESTARS wordmark */}
            <Wordmark />

            <div className="reading-measure">
              <div className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                <span>An Ambition in the Making</span>
              </div>

              <h1 id="hero-title" className="hero-title">
                Built to Become More.
              </h1>

              <p className="section-lead">
                CRORESTARS is founded on the ambition to build, grow, and create lasting value. We believe what begins with one idea can develop into something far greater through vision, discipline, and purposeful execution.
              </p>

              <div className="btn-group">
                <Link href="/about" className="btn-primary">
                  Discover Our Vision
                </Link>
                <a href="#contact" className="btn-secondary">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            2. THE PHILOSOPHY
            ==================================================================== */}
        <section className="section" id="philosophy" aria-labelledby="philosophy-title">
          <div className="container">
            <div className="reading-measure">
              <div className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                <span>Our Philosophy</span>
              </div>

              <h2 id="philosophy-title" className="section-title">
                Growth is not a destination. It is a commitment.
              </h2>

              <p className="section-lead">
                Becoming more means continually improving what we build, exploring what is possible, and creating stronger foundations for the future. It is a commitment to progress through learning, discipline, and meaningful action.
              </p>

              <div className="editorial-box" style={{ marginTop: "2rem" }}>
                <p style={{ color: "var(--color-text-main)", fontSize: "var(--text-base)", lineHeight: 1.8 }}>
                  Real growth requires the patience to build carefully and the courage to think beyond the immediate horizon. It is not about premature expansion, but about compounding capabilities steadily until potential becomes enduring reality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. THE AMBITION
            ==================================================================== */}
        <section className="section" id="ambition" aria-labelledby="ambition-title">
          <div className="container">
            <div className="split-layout">
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-dot" aria-hidden="true" />
                  <span>Our Ambition</span>
                </div>

                <h2 id="ambition-title" className="section-title">
                  Beyond a Single Venture.
                </h2>
              </div>

              <div>
                <p className="section-lead" style={{ marginBottom: "1.5rem" }}>
                  Our long-term ambition is to develop a diversified group of businesses. The industries we enter will be determined by careful evaluation, genuine opportunities, and the potential to build enterprises that endure.
                </p>
                <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", lineHeight: 1.7 }}>
                  We are in our foundational stage. Our immediate focus is on rigorous evaluation rather than rushed deployment. We will announce each business venture only when it is real, operational, and ready to deliver genuine value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. THE PRINCIPLES
            ==================================================================== */}
        <section className="section" id="principles" aria-labelledby="principles-title">
          <div className="container">
            <div className="reading-measure">
              <div className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                <span>Guiding Principles</span>
              </div>

              <h2 id="principles-title" className="section-title">
                What It Takes to Become More.
              </h2>
            </div>

            <div className="principles-grid">
              <div className="principle-card">
                <span className="principle-num">Principle 01</span>
                <h3 className="principle-title">Think Further</h3>
                <p className="principle-desc">
                  Look beyond immediate limitations and evaluate opportunities with an open mind. Question conventional limits and remain curious about emerging possibilities.
                </p>
              </div>

              <div className="principle-card">
                <span className="principle-num">Principle 02</span>
                <h3 className="principle-title">Build with Discipline</h3>
                <p className="principle-desc">
                  Turn promising ideas into practical plans and execute them with consistency and integrity. Value disciplined execution over hasty assumptions.
                </p>
              </div>

              <div className="principle-card">
                <span className="principle-num">Principle 03</span>
                <h3 className="principle-title">Grow for the Long Term</h3>
                <p className="principle-desc">
                  Focus on sustainable progress and creating value that can endure. Build enterprises that stand the test of time and market cycles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. THE JOURNEY
            ==================================================================== */}
        <section className="section" id="journey" aria-labelledby="journey-title">
          <div className="container">
            <div className="reading-measure">
              <div className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                <span>The Foundation</span>
              </div>

              <h2 id="journey-title" className="section-title">
                Every Great Journey Begins with a Foundation.
              </h2>

              <p className="section-lead">
                CRORESTARS is at the beginning of its journey. Our focus is to establish the right foundations, identify meaningful opportunities, and build steadily toward a larger ambition.
              </p>

              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", lineHeight: 1.8 }}>
                Every respected institution was once an idea guided by conviction and quiet work. We will add to this page only what has been earned and verified in practice.
              </p>
            </div>
          </div>
        </section>

        {/* ====================================================================
            6. CONTACT
            ==================================================================== */}
        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <div className="split-layout">
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-dot" aria-hidden="true" />
                  <span>Get in Touch</span>
                </div>

                <h2 id="contact-title" className="section-title">
                  Let&apos;s Build What Comes Next.
                </h2>

                <p className="section-lead">
                  For general enquiries, potential collaborations, or conversations about future opportunities, get in touch with CRORESTARS.
                </p>
              </div>

              <div>
                <ContactForm fallbackEmail={contactEmail} />
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
              <a href="#contact" className="footer-link">
                Contact
              </a>
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
