/**
 * Logo component — CRORESTARS wordmark.
 *
 * To swap the logo asset, update the `logo.src` path in lib/config.ts.
 * No other files need to change.
 */

import Link from "next/link";
import { siteConfig } from "@/lib/config";

interface LogoProps {
  /** White variant for dark backgrounds */
  inverted?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Skip the link wrapper (e.g. when already on the home page hero) */
  noLink?: boolean;
}

export default function Logo({ inverted = false, className = "", noLink = false }: LogoProps) {
  const wordmark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 340 52"
      fill="none"
      role="img"
      aria-label={siteConfig.name}
      className={`h-8 w-auto ${className}`}
    >
      {/* Main wordmark letters — colour adapts to inverted prop */}
      <text
        x="0"
        y="40"
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="36"
        fontWeight="800"
        letterSpacing="5"
        fill={inverted ? "#FFFFFF" : "#171614"}
      >
        CROREST
      </text>
      {/* A with amber spark */}
      <text
        x="220"
        y="40"
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="36"
        fontWeight="800"
        letterSpacing="5"
        fill={inverted ? "#FFFFFF" : "#171614"}
      >
        ARS
      </text>
      {/* Amber spark/dot — the signature detail inside the A */}
      <circle cx="232" cy="24" r="3.5" fill="#E5932B" />
    </svg>
  );

  if (noLink) return wordmark;

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Back to home`}
      className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5932B] rounded-sm"
    >
      {wordmark}
    </Link>
  );
}
