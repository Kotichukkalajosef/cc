import Link from "next/link";
import { siteConfig } from "@/lib/config";
import StarSymbol from "./StarSymbol";

interface LogoProps {
  /** White variant for dark backgrounds */
  inverted?: boolean;
  /** Additional CSS classes for size and typography */
  className?: string;
  /** Skip the link wrapper */
  noLink?: boolean;
  /** Custom size scale: "sm" | "md" | "lg" */
  size?: "sm" | "md" | "lg";
}

/**
 * Official CRORESTARS Wordmark
 *
 * Designed with geometric precision:
 * - Pure uppercase lettering with uniform kerning (no split text gaps).
 * - Custom "A" featuring the signature 4-point amber star/spark in its counter.
 */
export default function Logo({
  inverted = false,
  className = "",
  noLink = false,
  size = "md",
}: LogoProps) {
  const sizeClasses = {
    sm: "text-lg tracking-[0.16em]",
    md: "text-xl sm:text-2xl tracking-[0.18em]",
    lg: "text-3xl sm:text-4xl lg:text-5xl tracking-[0.18em]",
  }[size];

  const textColor = inverted ? "text-white" : "text-[#171614]";

  const wordmark = (
    <span
      className={`inline-flex items-baseline font-black uppercase select-none leading-none ${sizeClasses} ${textColor} ${className}`}
      aria-label={siteConfig.name}
    >
      <span>CROREST</span>
      {/* Custom A with embedded 4-point amber star/spark */}
      <span className="relative inline-flex items-center justify-center mx-[0.02em] self-baseline">
        <span>A</span>
        {/* Amber Star embedded in the upper counter of A */}
        <span
          className="absolute top-[24%] left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center"
          aria-hidden="true"
        >
          <StarSymbol className="w-[0.38em] h-[0.38em]" color="#E5932B" />
        </span>
      </span>
      <span>RS</span>
    </span>
  );

  if (noLink) return wordmark;

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Home`}
      className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5932B] rounded-sm py-1"
    >
      {wordmark}
    </Link>
  );
}
