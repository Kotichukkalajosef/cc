import type { Metadata } from "next";
import Link from "next/link";
import ThreeBackground from "@/components/ThreeBackground";

export const metadata: Metadata = {
  title: "Privacy Doctrine | CRORESTARS",
  description: "The principles of privacy, data discretion, and institutional confidentiality at CRORESTARS.",
};

export default function PrivacyPage() {
  return (
    <>
      <ThreeBackground />

      <header className="site-header" role="banner">
        <div className="container site-header-inner">
          <Link href="/" className="brand-mark" aria-label="CRORESTARS — Home">
            <span className="brand-beacon" aria-hidden="true" />
            <span>CRORESTARS</span>
          </Link>
          <nav aria-label="Primary navigation">
            <Link href="/" className="nav-link">
              Return to Zenith
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content" className="section-3d privacy-page">
        <div className="container">
          <div className="cosmic-panel" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="waypoint-badge">
              <span className="waypoint-dot" aria-hidden="true" />
              <span>Institutional Policy · Discretion</span>
            </div>

            <h1 className="privacy-title">Privacy Doctrine</h1>

            <div className="privacy-content">
              <p>
                CRORESTARS operates with absolute discretion. In this foundational era, we collect solely the information you voluntarily submit through our contact terminal: your name, your direct email, and your communication.
              </p>
              <p>
                <strong>Sole Purpose of Communication:</strong> All transmissions are relayed directly to the founder&apos;s executive inbox over encrypted, secure SSL channels. Information is used exclusively to evaluate partnerships, collaborations, or commercial inquiries.
              </p>
              <p>
                <strong>Zero Commercialization:</strong> We do not monetize, distribute, broker, or disclose your contact details to third-party data aggregators. We employ zero invasive tracking cookies, third-party analytics pixels, or behavioral advertising trackers.
              </p>
              <p>
                <strong>Permanent Erasure:</strong> Should you require past correspondence to be expunged from our records, an email to <a href="mailto:contact@crorestars.com" style={{ color: "var(--color-gold)", textDecoration: "underline" }}>contact@crorestars.com</a> will trigger immediate, permanent deletion.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="container footer-inner">
          <div>&copy; 2026 CRORESTARS. All rights reserved.</div>
          <div className="footer-meta">
            <span>[REGISTERED BUSINESS NAME, CITY, COUNTRY]</span>
            <Link href="/" className="footer-link">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
