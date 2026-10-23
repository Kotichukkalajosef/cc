"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ventures", label: "Ventures" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const { footer, tagline, email, social } = siteConfig;
  const [copyrightYear, setCopyrightYear] = useState<number>(footer.foundedYear);

  useEffect(() => {
    setCopyrightYear(new Date().getFullYear());
  }, []);

  const copyrightRange =
    copyrightYear > footer.foundedYear
      ? `${footer.foundedYear}–${copyrightYear}`
      : `${footer.foundedYear}`;

  const activeSocials = Object.entries(social).filter(([, url]) => url);

  return (
    <footer className="bg-[#171614] text-white">
      {/* Main footer area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Logo inverted />
            <p className="mt-4 text-sm text-white/55 leading-relaxed max-w-xs">
              {tagline}
            </p>
            {email && (
              <a
                href={`mailto:${email}`}
                className="mt-6 inline-block text-sm text-[#E5932B] hover:text-white transition-colors"
              >
                {email}
              </a>
            )}
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white/35 uppercase mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/65 hover:text-[#E5932B] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / social */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white/35 uppercase mb-5">
              Connect
            </h3>
            {activeSocials.length > 0 ? (
              <ul className="flex flex-col gap-3">
                {activeSocials.map(([key, url]) => (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/65 hover:text-[#E5932B] transition-colors capitalize"
                    >
                      {key}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-white/35 italic">
                Social profiles will be listed here once established.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            &copy; {copyrightRange} {footer.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            {/* Amber spark accent */}
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5932B] inline-block" aria-hidden="true" />
            <span className="text-xs text-white/25">CRORESTARS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
