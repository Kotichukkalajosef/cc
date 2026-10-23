import React from "react";

interface WordmarkProps {
  className?: string;
}

/**
 * The One Memorable Thing: CRORESTARS Wordmark
 *
 * - Desktop (>= 640px): One expansive line, width-filling.
 * - Mobile (< 640px): A designed stacked block (CRORE over STARS)
 *   with both lines mathematically balanced to fill the screen width.
 * - Single CSS load animation: letter-spacing converges (wide to tight, 1.4s ease-out).
 *   Disabled under prefers-reduced-motion.
 * - Can be swapped with the final logo SVG later without touching the rest of the site.
 */
export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <div className={`wordmark-wrap ${className}`} role="img" aria-label="CRORESTARS">
      {/* Desktop rendering: One continuous line */}
      <span className="wordmark-desktop">
        CRORESTARS
      </span>

      {/* Mobile rendering: Designed stacked block */}
      <div className="wordmark-mobile" aria-hidden="true">
        <span className="wordmark-mobile-line">CRORE</span>
        <span className="wordmark-mobile-line">STARS</span>
      </div>
    </div>
  );
}
