"use client";

import React, { useEffect, useState } from "react";

interface WordmarkProps {
  className?: string;
}

/**
 * Wordmark Component
 *
 * 1. Intro Collision: "CRORE" (from left) and "STARS" (from right) rush in at high speed.
 * 2. Big Bang Energy Flash at the point of collision.
 * 3. Fusion: The two words attach and become ONE SINGLE SOLID WORD: "CRORESTARS".
 * 4. Starlight Border: The orange starlight travels STRICTLY along the outer borders of the letters
 *    (stroke only, fill=none), while the letter interior remains crisp solid white.
 * 5. One word on all screens: Desktop, tablet, mobile, and fold screens.
 */
export default function Wordmark({ className = "" }: WordmarkProps) {
  const [fused, setFused] = useState(false);
  const [bangActive, setBangActive] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    // Collision & Big Bang flash triggers at 620ms
    const bangTimer = setTimeout(() => {
      setBangActive(true);
    }, 620);

    // Fuse into ONE unified solid wordmark at 720ms
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
      <div className="wordmark-stage">
        {/* Big Bang energy flash & shockwave at collision point */}
        <div className="big-bang-anchor" aria-hidden="true">
          <div className="big-bang-flash" />
          <div className="big-bang-shockwave ring-1" />
          <div className="big-bang-shockwave ring-2" />
          <div className="big-bang-flare" />
        </div>

        {/* 1. INTRO COLLISION: CRORE rushing from left, STARS rushing from right */}
        <div className={`wordmark-collision-track ${fused ? "is-hidden" : "is-visible"}`}>
          <span className="word-part word-crore">CRORE</span>
          <span className="word-part word-stars">STARS</span>
        </div>

        {/* 2. THE UNIFIED WORD: Attached as ONE SINGLE WORD with traveling orange starlight BORDER */}
        <div className={`wordmark-unified-wrap ${fused ? "is-visible" : "is-hidden"}`}>
          <svg
            viewBox="0 0 1100 125"
            className="wordmark-unified-svg"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Traveling Starlight Beam strictly along the outer borders */}
              <linearGradient id="border-starlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(242, 163, 58, 0.2)">
                  <animate attributeName="offset" values="-0.4; 1.2" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="12%" stopColor="#FF5500">
                  <animate attributeName="offset" values="-0.28; 1.32" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="18%" stopColor="#FFAA00">
                  <animate attributeName="offset" values="-0.22; 1.38" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="22%" stopColor="#FFFFFF">
                  <animate attributeName="offset" values="-0.18; 1.42" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="26%" stopColor="#FF5500">
                  <animate attributeName="offset" values="-0.14; 1.46" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="38%" stopColor="rgba(242, 163, 58, 0.2)">
                  <animate attributeName="offset" values="-0.02; 1.58" dur="3s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>

            {/* Solid crisp white interior letter fill */}
            <text x="5" y="94" className="fused-word-fill">
              CRORESTARS
            </text>

            {/* Traveling orange starlight strictly on the borders (fill=none) */}
            <text
              x="5"
              y="94"
              className="fused-word-border"
              stroke="url(#border-starlight)"
              fill="none"
            >
              CRORESTARS
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
