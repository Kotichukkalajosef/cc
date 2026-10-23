"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * StarBackground
 *
 * Lightweight, elegant star travel engine with light opacity.
 * Continuously glides forward through deep space, accelerating softly on scroll.
 * Non-intrusive, sitting quietly behind the editorial content.
 */
export default function StarBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- 1. Scene & Camera Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      3000
    );
    camera.position.z = 0;

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true, // Transparent canvas so charcoal page background shines through
        powerPreference: "high-performance",
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.style.cssText =
        "position:absolute;top:0;left:0;width:100%;height:100%;display:block;pointer-events:none;";
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL not available for star background", e);
      return;
    }

    // --- 2. Soft Star Glow Texture ---
    const createStarTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.2, "rgba(255, 245, 220, 0.9)");
        gradient.addColorStop(0.5, "rgba(242, 163, 58, 0.35)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(32, 32, 30, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const starTexture = createStarTexture();

    // --- 3. Forward Traveling Stars Geometry ---
    const starCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const baseSpeed = 0.85;

    // Spread stars in a long corridor stretching forward (-2400 to +100)
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 1200;     // X
      positions[i3 + 1] = (Math.random() - 0.5) * 900;  // Y
      positions[i3 + 2] = -Math.random() * 2400;        // Z (depth)

      const rand = Math.random();
      const col =
        rand > 0.65
          ? new THREE.Color(0xf2a33a) // Amber accent
          : rand > 0.3
          ? new THREE.Color(0xffffff) // Diamond white
          : new THREE.Color(0xdbeafe); // Soft celestial blue

      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 4.5,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starField = new THREE.Points(geometry, material);
    scene.add(starField);

    // --- 4. Scroll Acceleration & Mouse Parallax ---
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let scrollVelocity = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      scrollVelocity = Math.min(delta * 0.4, 25);
      lastScrollY = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 40;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 30;
    };

    const handleResize = () => {
      if (!renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // --- 5. Animation Loop (Continuous Star Cruise) ---
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        // Smoothly decay scroll velocity
        scrollVelocity *= 0.94;
        const currentSpeed = baseSpeed + scrollVelocity;

        // Smooth mouse glide
        mouseX += (targetMouseX - mouseX) * 0.04;
        mouseY += (targetMouseY - mouseY) * 0.04;

        camera.position.x = mouseX;
        camera.position.y = -mouseY;

        // Advance all stars along Z axis toward camera
        const posAttr = geometry.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;

        for (let i = 0; i < starCount; i++) {
          const zIndex = i * 3 + 2;
          posArray[zIndex] += currentSpeed;

          // Once a star passes behind camera, loop back to the far distance
          if (posArray[zIndex] > 50) {
            posArray[zIndex] = -2400 + (Math.random() - 0.5) * 100;
            posArray[i * 3] = (Math.random() - 0.5) * 1200;
            posArray[i * 3 + 1] = (Math.random() - 0.5) * 900;
          }
        }

        posAttr.needsUpdate = true;
      }

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer && renderer.domElement && container) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
      geometry.dispose();
      material.dispose();
      starTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="star-background-canvas"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.3, // Light, tasteful opacity as requested
        overflow: "hidden",
      }}
    />
  );
}
