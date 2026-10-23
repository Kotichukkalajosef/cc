import React from "react";

interface WordmarkProps {
  className?: string;
}

/**
 * CRORESTARS Inscribed Wordmark
 *
 * Classical Roman proportions rendered with scalable SVG architecture.
 * Features a luminous platinum-gold gradient fill that shines against the deep space starfield.
 * Guaranteed 100% visible across any screen width or device scale without clipping.
 */
export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <div className={`wordmark-container ${className}`} role="img" aria-label="CRORESTARS">
      {/* Desktop scalable SVG wordmark */}
      <div className="wordmark-desktop-wrap">
        <svg
          viewBox="0 0 1100 130"
          className="wordmark-svg"
          preserveAspectRatio="xMinYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gold-metallic-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#FFF2D6" />
              <stop offset="70%" stopColor="#F2A33A" />
              <stop offset="100%" stopColor="#C97D1A" />
            </linearGradient>
          </defs>
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
          viewBox="0 0 520 220"
          className="wordmark-svg-mobile"
          preserveAspectRatio="xMinYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gold-metallic-grad-mob" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#FFF2D6" />
              <stop offset="80%" stopColor="#F2A33A" />
              <stop offset="100%" stopColor="#C97D1A" />
            </linearGradient>
          </defs>
          <text x="0" y="94" className="wordmark-svg-mobile-text" fill="url(#gold-metallic-grad-mob)">
            CRORE
          </text>
          <text x="0" y="198" className="wordmark-svg-mobile-text" fill="url(#gold-metallic-grad-mob)">
            STARS
          </text>
        </svg>
      </div>
    </div>
  );
}
