"use client";

import React, { useEffect, useState } from "react";

interface WordmarkProps {
  className?: string;
}

/**
 * Wordmark Component
 *
 * Features the signature "Big Bang Collision" intro:
 * 1. "CRORE" rushes in at high velocity from the left.
 * 2. "STARS" rushes in at high velocity from the right.
 * 3. They collide with a celestial Big Bang energy flash and shockwave burst.
 * 4. Both words seamlessly fuse into the unified wordmark: "CRORESTARS".
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

    // Complete fusion into one solid word at 740ms
    const fuseTimer = setTimeout(() => {
      setFused(true);
    }, 740);

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
        {/* Collision Shockwave & Energy Burst (at the seam of impact) */}
        <div className="big-bang-anchor" aria-hidden="true">
          <div className="big-bang-flash" />
          <div className="big-bang-shockwave ring-1" />
          <div className="big-bang-shockwave ring-2" />
          <div className="big-bang-flare" />
        </div>

        {/* The Two Halves: CRORE & STARS colliding into CRORESTARS */}
        <h1 className="wordmark-track">
          <span className="word-part word-crore">CRORE</span>
          <span className="word-part word-stars">STARS</span>
        </h1>
      </div>
    </div>
  );
}
