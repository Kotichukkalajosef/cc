import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How CRORESTARS handles communication data.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="site-header" role="banner">
        <div className="container site-header-inner">
          <Link href="/" className="brand-mark" aria-label="CRORESTARS — Home">
            CRORESTARS
          </Link>
          <nav aria-label="Primary navigation">
            <Link href="/" className="nav-link">
              Return to home
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content" className="section section-black privacy-page">
        <div className="container">
          <h1 className="privacy-title">Privacy</h1>

          <div className="privacy-content">
            <p>
              CRORESTARS is in its earliest stage. We collect only what you choose to send through our contact form: your name, your email address, and your message.
            </p>
            <p>
              <strong>Purpose:</strong> This information is transmitted directly to the founder&apos;s inbox via secure SMTP. It is used solely to reply to your inquiry.
            </p>
            <p>
              <strong>No tracking or sale:</strong> We do not sell, rent, or share contact details with any third party. We do not use third-party tracking cookies or advertising pixels.
            </p>
            <p>
              If you wish for your past communication to be deleted, you can email us directly with your request.
            </p>
          </div>
        </div>
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="container footer-inner">
          <div>&copy; 2026 CRORESTARS</div>
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
