import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CRORESTARS",
  description: "Privacy policy and data handling practices at CRORESTARS.",
};

export default function PrivacyPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@crorestars.com";
  const currentYear = new Date().getFullYear();

  return (
    <>
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
            <Link href="/about" className="nav-link">
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

      <main id="main-content" className="section" style={{ paddingTop: "clamp(4rem, 8vw, 7rem)", minHeight: "75vh" }}>
        <div className="container">
          <div className="reading-measure" style={{ maxWidth: "760px" }}>
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              <span>Transparency</span>
            </div>

            <h1 className="section-title" style={{ fontSize: "var(--text-h1)", marginBottom: "2rem" }}>
              Privacy Policy
            </h1>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", color: "var(--color-text-body)", lineHeight: 1.8 }}>
              <p>
                At CRORESTARS, we respect your privacy and handle all correspondence with straightforward integrity and care.
              </p>

              <div className="editorial-box">
                <h2 style={{ fontSize: "var(--text-h4)", color: "var(--color-white)", marginBottom: "0.75rem" }}>
                  1. Information We Collect
                </h2>
                <p>
                  We collect only the personal information that you voluntarily choose to provide when contacting us via our website form or direct email — specifically your name, email address, and the content of your message.
                </p>
              </div>

              <div className="editorial-box">
                <h2 style={{ fontSize: "var(--text-h4)", color: "var(--color-white)", marginBottom: "0.75rem" }}>
                  2. How We Use Your Information
                </h2>
                <p>
                  Information submitted through this website is used solely to respond to your inquiry, discuss potential opportunities or collaborations, and maintain relevant communication. We do not sell, rent, or share your contact details with third-party advertisers.
                </p>
              </div>

              <div className="editorial-box">
                <h2 style={{ fontSize: "var(--text-h4)", color: "var(--color-white)", marginBottom: "0.75rem" }}>
                  3. Contact &amp; Questions
                </h2>
                <p>
                  If you have any questions regarding our privacy practices or wish to update or delete any correspondence you have sent to us, please reach out directly to{" "}
                  <a href={`mailto:${contactEmail}`} style={{ color: "var(--color-amber)", textDecoration: "underline" }}>
                    {contactEmail}
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

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
