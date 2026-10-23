"use client";

import React, { useEffect, useState } from "react";

interface WordmarkProps {
  className?: string;
}

/**
 * Wordmark Component
 *
 * 1. Big Bang Collision Intro: CRORE and STARS rush in at high speed and collide.
 * 2. Big Bang Energy Flash at the point of impact.
 * 3. Moving Orange Starlight Border: An orange laser/starlight beam glides across
 *    the border of each letter continuously.
 * 4. Responsive:
 *    - Desktop (>= 640px): Full-width monumental single-line wordmark.
 *    - Mobile (< 640px): Monumental stacked block (CRORE over STARS) that looks
 *      huge, impressive, and perfectly fitted on any screen (including Fold mobiles).
 */
export default function Wordmark({ className = "" }: WordmarkProps) {
  const [fused, setFused] = useState(false);
  const [bangActive, setBangActive] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    // Collision & Big Bang flash triggers at 600ms
    const bangTimer = setTimeout(() => {
      setBangActive(true);
    }, 600);

    // Complete fusion into one solid word at 720ms
    const fuseTimer = setTimeout(() => {
      setFused(true);
    }, 720);

    return () => {
      clearTimeout(bangTimer);
      clearTimeout(fuseTimer);
    };
  }, [animKey]);

  const handleReplay = () => {
    setFused(false);
    setBangActive(false);
    setAnimKey((prev) => prev + 1);
  };

  return (
    <div
      key={animKey}
      className={`wordmark-container ${fused ? "is-fused" : "is-colliding"} ${
        bangActive ? "is-banging" : ""
      } ${className}`}
      role="img"
      aria-label="CRORESTARS"
      onClick={handleReplay}
      title="Click to re-experience the collision"
    >
      {/* ====================================================================
          DESKTOP WORDMARK (>= 640px)
          Single line, full width, with traveling orange starlight border
          ==================================================================== */}
      <div className="wordmark-desktop-view">
        {/* Big Bang flash anchor at center seam */}
        <div className="big-bang-anchor" aria-hidden="true">
          <div className="big-bang-flash" />
          <div className="big-bang-shockwave ring-1" />
          <div className="big-bang-shockwave ring-2" />
          <div className="big-bang-flare" />
        </div>

        <div className="wordmark-track desktop-track">
          <div className="word-part word-crore">
            <svg
              viewBox="0 0 540 120"
              className="word-svg-half"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="starlight-crore" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(242, 163, 58, 0.2)">
                    <animate attributeName="offset" values="-0.5; 1.5" dur="3.2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="15%" stopColor="#FF6B00">
                    <animate attributeName="offset" values="-0.35; 1.65" dur="3.2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="22%" stopColor="#FFFFFF">
                    <animate attributeName="offset" values="-0.28; 1.72" dur="3.2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="30%" stopColor="#FFAA00">
                    <animate attributeName="offset" values="-0.2; 1.8" dur="3.2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="45%" stopColor="rgba(242, 163, 58, 0.2)">
                    <animate attributeName="offset" values="-0.05; 1.95" dur="3.2s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>
              {/* Solid White Fill */}
              <text x="5" y="92" className="svg-fill-text">
                CRORE
              </text>
              {/* Moving Orange Starlight Border */}
              <text x="5" y="92" className="svg-stroke-text" stroke="url(#starlight-crore)">
                CRORE
              </text>
            </svg>
          </div>

          <div className="word-part word-stars">
            <svg
              viewBox="0 0 540 120"
              className="word-svg-half"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="starlight-stars" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(242, 163, 58, 0.2)">
                    <animate attributeName="offset" values="-0.5; 1.5" dur="3.2s" begin="0.3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="15%" stopColor="#FF6B00">
                    <animate attributeName="offset" values="-0.35; 1.65" dur="3.2s" begin="0.3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="22%" stopColor="#FFFFFF">
                    <animate attributeName="offset" values="-0.28; 1.72" dur="3.2s" begin="0.3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="30%" stopColor="#FFAA00">
                    <animate attributeName="offset" values="-0.2; 1.8" dur="3.2s" begin="0.3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="45%" stopColor="rgba(242, 163, 58, 0.2)">
                    <animate attributeName="offset" values="-0.05; 1.95" dur="3.2s" begin="0.3s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>
              {/* Solid White Fill */}
              <text x="5" y="92" className="svg-fill-text">
                STARS
              </text>
              {/* Moving Orange Starlight Border */}
              <text x="5" y="92" className="svg-stroke-text" stroke="url(#starlight-stars)">
                STARS
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* ====================================================================
          MOBILE WORDMARK (< 640px)
          Monumental Stacked Block (CRORE over STARS)
          Looks massive, imposing, and perfectly proportioned on phones & fold screens
          ==================================================================== */}
      <div className="wordmark-mobile-view" aria-hidden="true">
        {/* Mobile Big Bang flash */}
        <div className="big-bang-anchor mobile-anchor">
          <div className="big-bang-flash" />
          <div className="big-bang-shockwave ring-1" />
        </div>

        <div className="wordmark-mobile-stack">
          {/* Top Line: CRORE */}
          <div className="mobile-word-row row-crore">
            <svg
              viewBox="0 0 520 115"
              className="word-svg-mobile"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="starlight-mob-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(242, 163, 58, 0.2)">
                    <animate attributeName="offset" values="-0.5; 1.5" dur="2.8s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="16%" stopColor="#FF6B00">
                    <animate attributeName="offset" values="-0.34; 1.66" dur="2.8s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="24%" stopColor="#FFFFFF">
                    <animate attributeName="offset" values="-0.26; 1.74" dur="2.8s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="32%" stopColor="#FFAA00">
                    <animate attributeName="offset" values="-0.18; 1.82" dur="2.8s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="48%" stopColor="rgba(242, 163, 58, 0.2)">
                    <animate attributeName="offset" values="-0.02; 1.98" dur="2.8s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>
              <text x="5" y="88" className="svg-fill-text-mobile">
                CRORE
              </text>
              <text x="5" y="88" className="svg-stroke-text-mobile" stroke="url(#starlight-mob-1)">
                CRORE
              </text>
            </svg>
          </div>

          {/* Bottom Line: STARS */}
          <div className="mobile-word-row row-stars">
            <svg
              viewBox="0 0 520 115"
              className="word-svg-mobile"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="starlight-mob-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(242, 163, 58, 0.2)">
                    <animate attributeName="offset" values="-0.5; 1.5" dur="2.8s" begin="0.35s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="16%" stopColor="#FF6B00">
                    <animate attributeName="offset" values="-0.34; 1.66" dur="2.8s" begin="0.35s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="24%" stopColor="#FFFFFF">
                    <animate attributeName="offset" values="-0.26; 1.74" dur="2.8s" begin="0.35s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="32%" stopColor="#FFAA00">
                    <animate attributeName="offset" values="-0.18; 1.82" dur="2.8s" begin="0.35s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="48%" stopColor="rgba(242, 163, 58, 0.2)">
                    <animate attributeName="offset" values="-0.02; 1.98" dur="2.8s" begin="0.35s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>
              <text x="5" y="88" className="svg-fill-text-mobile">
                STARS
              </text>
              <text x="5" y="88" className="svg-stroke-text-mobile" stroke="url(#starlight-mob-2)">
                STARS
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
