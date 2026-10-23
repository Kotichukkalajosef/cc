"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll position to add elevated glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Vision", href: "/about#vision" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} role="banner">
      <div className="container site-header-inner">
        {/* Brand Logo */}
        <Link href="/" className="brand-mark" aria-label="CRORESTARS — Home">
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-text">CRORESTARS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="site-nav desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "is-active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/#contact" className="nav-btn">
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`hamburger-btn ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-nav-drawer"
        >
          <span className="hamburger-line line-1" />
          <span className="hamburger-line line-2" />
          <span className="hamburger-line line-3" />
        </button>
      </div>

      {/* Mobile Drawer Overlay — Rendered ONLY when opened so nothing leaks or bleeds */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className="mobile-drawer is-active"
          aria-hidden={!isOpen}
        >
          <div className="mobile-drawer-content">
            <div className="mobile-drawer-links">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`mobile-nav-link ${pathname === link.href ? "is-active" : ""}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.name}</span>
                  <span className="mobile-link-arrow">&rarr;</span>
                </Link>
              ))}
            </div>

            <div className="mobile-drawer-footer">
              <Link
                href="/#contact"
                className="btn-primary mobile-cta-btn"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
              <div className="mobile-brand-tagline">
                <strong>CRORESTARS</strong>
                <span>Built to Become More.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
