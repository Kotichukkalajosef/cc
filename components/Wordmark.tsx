import React from "react";

interface WordmarkProps {
  className?: string;
}

/**
 * CRORESTARS Hero Wordmark
 *
 * Implemented with scalable SVG viewBox to guarantee that the full wordmark
 * ("CRORESTARS" — all 10 letters) never overflows, clips, or cuts off regardless
 * of viewport width, screen resolution, or device scaling.
 *
 * - Desktop (>= 640px): Full-width single line with mathematical edge alignment.
 * - Mobile (< 640px): A designed stacked block (CRORE over STARS) filling the screen.
 * - Pure CSS convergence animation (starts wide, tightens over 1.4s ease-out).
 */
export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <div className={`wordmark-container ${className}`} role="img" aria-label="CRORESTARS">
      {/* Desktop scalable SVG wordmark — 100% width, never clipped */}
      <div className="wordmark-desktop-wrap">
        <svg
          viewBox="0 0 1000 125"
          className="wordmark-svg"
          preserveAspectRatio="xMinYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="0"
            y="98"
            className="wordmark-svg-text"
          >
            CRORESTARS
          </text>
        </svg>
      </div>

      {/* Mobile stacked block (< 640px): CRORE over STARS */}
      <div className="wordmark-mobile-wrap" aria-hidden="true">
        <svg
          viewBox="0 0 500 210"
          className="wordmark-svg-mobile"
          preserveAspectRatio="xMinYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="0" y="92" className="wordmark-svg-mobile-text">
            CRORE
          </text>
          <text x="0" y="195" className="wordmark-svg-mobile-text">
            STARS
          </text>
        </svg>
      </div>
    </div>
  );
}
