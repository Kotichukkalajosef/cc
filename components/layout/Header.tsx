"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/brand/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ventures", label: "Ventures" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Add subtle shadow once user scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => setMenuOpen(false), [pathname]);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(23,22,20,0.1)]" : "border-b border-[#171614]/8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Logo />

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-[#E5932B]"
                      : "text-[#171614] hover:text-[#E5932B]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#171614] rounded-sm hover:bg-[#E5932B] transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="md:hidden p-2 rounded-sm text-[#171614] hover:text-[#E5932B] transition-colors"
          >
            {menuOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-label="Mobile navigation"
          className="md:hidden absolute inset-x-0 top-full bg-white border-t border-[#171614]/8 shadow-lg"
        >
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-2 py-3 text-base font-medium border-b border-[#171614]/6 last:border-0 transition-colors ${
                    isActive ? "text-[#E5932B]" : "text-[#171614] hover:text-[#E5932B]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-[#171614] rounded-sm hover:bg-[#E5932B] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
