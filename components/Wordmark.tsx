import React from "react";

interface WordmarkProps {
  className?: string;
}

export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <div className={`wordmark-container ${className}`} role="img" aria-label="CRORESTARS">
      {/* Desktop scalable SVG wordmark */}
      <div className="wordmark-desktop-wrap">
        <svg
          viewBox="0 0 1100 115"
          className="wordmark-svg"
          preserveAspectRatio="xMinYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="0"
            y="92"
            className="wordmark-svg-text"
          >
            CRORESTARS
          </text>
        </svg>
      </div>

      {/* Mobile stacked block (< 640px): CRORE over STARS */}
      <div className="wordmark-mobile-wrap" aria-hidden="true">
        <svg
          viewBox="0 0 520 215"
          className="wordmark-svg-mobile"
          preserveAspectRatio="xMinYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="0" y="92" className="wordmark-svg-mobile-text">
            CRORE
          </text>
          <text x="0" y="196" className="wordmark-svg-mobile-text">
            STARS
          </text>
        </svg>
      </div>
    </div>
  );
}
