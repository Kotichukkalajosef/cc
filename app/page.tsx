import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import ContactForm from "@/components/ContactForm";
import ThreeBackground from "@/components/ThreeBackground";

export default function HomePage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@crorestars.com";

  return (
    <>
      {/* 3D Interactive WebGL Starfield & Constellation Canvas */}
      <ThreeBackground />

      {/* Site Header */}
      <header className="site-header" role="banner">
        <div className="container site-header-inner">
          <Link href="/" className="brand-mark" aria-label="CRORESTARS — Home">
            <span className="brand-dot" aria-hidden="true" />
            <span>CRORESTARS</span>
          </Link>
          <nav aria-label="Primary navigation">
            <a href="#contact" className="nav-link">
              Get in touch
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* 1. Hero Section (Deep Cosmic Black with Ambient 3D Depth) */}
        <section className="section-3d section-hero" aria-labelledby="hero-title">
          <div className="container">
            {/* The One Memorable Thing: Giant Width-Fitting Wordmark (100% visible, never clipped) */}
            <Wordmark />

            <div className="grid-12">
              <div style={{ gridColumn: "span 12" }}>
                <h1 id="hero-title" className="hero-headline">
                  A crore of stars. One direction.
                </h1>
                <p className="hero-support reading-measure">
                  CRORESTARS is a company in its earliest days, being built to create businesses across industries over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-transition-glow" aria-hidden="true" />

        {/* 2. Origin Section (Atmospheric Obsidian with 3D Glass Depth Panel) */}
        <section className="section-3d section-origin" aria-labelledby="origin-title">
          <div className="container">
            <div className="origin-card">
              <div className="grid-12">
                <div style={{ gridColumn: "span 12" }}>
                  {/* Oversized number visual set in display face */}
                  <div className="numeral-display" aria-hidden="true">
                    1,00,00,000
                  </div>

                  <h2 id="origin-title" className="visually-hidden">
                    Origin of the name
                  </h2>

                  <div className="reading-measure">
                    <p className="telugu-entry">
                      <span lang="te">కోటి</span> (koti) — crore, ten million.
                    </p>
                    <p className="telugu-entry">
                      <span lang="te">చుక్కలు</span> (chukkalu) — stars, small points of light.
                    </p>

                    <p className="origin-body">
                      My surname is Kotichukkala. Koti is ten million. Chukkalu are stars. Together: a crore of stars, more lights than anyone can count, each small, each its own. This company carries that name, and the idea inside it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-transition-glow" aria-hidden="true" />

        {/* 3. Philosophy Section (Deep Space Horizon) */}
        <section className="section-3d section-philosophy" aria-labelledby="philosophy-title">
          <div className="container">
            <div className="cosmic-panel">
              <div className="grid-12">
                <div style={{ gridColumn: "span 12" }}>
                  <h2 id="philosophy-title" className="philosophy-statement">
                    Many possibilities. One vision.
                  </h2>
                  <div className="reading-measure">
                    <p className="philosophy-body">
                      One idea is small. So is one person, one team, one company. Brought together under a clear direction, they can become something none of them could be alone. That is how a star forms, and it is how we intend to build.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-transition-glow" aria-hidden="true" />

        {/* 4. Ambition Section (Horizon Flight) */}
        <section className="section-3d section-ambition" aria-labelledby="ambition-title">
          <div className="container">
            <div className="cosmic-panel">
              <div className="grid-12">
                <div style={{ gridColumn: "span 12" }}>
                  <h2 id="ambition-title" className="visually-hidden">
                    Our ambition
                  </h2>
                  <div className="reading-measure">
                    <p className="ambition-body">
                      Over time, we intend to build meaningful businesses across industries, wherever there is a genuine opportunity to create value. We have not chosen the first one yet, and we will not pretend otherwise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-transition-glow" aria-hidden="true" />

        {/* 5. Journey & 6. Contact Sections */}
        <section className="section-3d section-journey-contact" aria-labelledby="journey-title">
          <div className="container">
            {/* Journey */}
            <div className="grid-12">
              <div style={{ gridColumn: "span 12" }}>
                <h2 id="journey-title" className="visually-hidden">
                  The journey
                </h2>
                <div className="reading-measure">
                  <p className="journey-body">
                    This is the beginning. There are no subsidiaries, clients or track record to show yet. What exists is a name, a direction, and a commitment to build carefully. We will add to this page only what is true.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="grid-12">
              <div style={{ gridColumn: "span 12" }}>
                <ContactForm fallbackEmail={contactEmail} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <footer className="site-footer" role="contentinfo">
        <div className="container footer-inner">
          <div>
            &copy; 2026 CRORESTARS
          </div>
          <div className="footer-meta">
            <span>[REGISTERED BUSINESS NAME, CITY, COUNTRY]</span>
            <Link href="/privacy" className="footer-link">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
