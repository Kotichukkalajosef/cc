"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- 1. Scene & Camera Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020204, 0.0008);

    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      3500
    );
    camera.position.set(0, 0, 100);

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL not available", e);
      return;
    }

    // --- 2. Circular Star Glow Texture Helper ---
    const createGlowTexture = (innerColor = "#FFFFFF", outerColor = "#E5932B") => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, innerColor);
        gradient.addColorStop(0.2, outerColor);
        gradient.addColorStop(0.5, "rgba(229, 147, 43, 0.2)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(32, 32, 32, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const starTexture = createGlowTexture("#FFFFFF", "#F2A33A");
    const blueStarTexture = createGlowTexture("#FFFFFF", "#90CDF4");

    // --- 3. Deep Space Field (3,500 Stars along the Z Corridor) ---
    const starCount = 3200;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    const baseZPositions = new Float32Array(starCount);

    const colorAmber = new THREE.Color(0xf2a33a);
    const colorWhite = new THREE.Color(0xffffff);
    const colorBlue = new THREE.Color(0xb0d4ff);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      // Cylindrical spread along the Z flight path (-2400 to +300)
      const radius = 25 + Math.random() * 220;
      const angle = Math.random() * Math.PI * 2;
      const zPos = 300 - Math.random() * 2800;

      starPositions[i3] = Math.cos(angle) * radius;
      starPositions[i3 + 1] = Math.sin(angle) * radius;
      starPositions[i3 + 2] = zPos;
      baseZPositions[i] = zPos;

      // Color variation
      const rand = Math.random();
      const col = rand > 0.75 ? colorAmber : rand > 0.4 ? colorWhite : colorBlue;
      starColors[i3] = col.r;
      starColors[i3 + 1] = col.g;
      starColors[i3 + 2] = col.b;

      starSizes[i] = Math.random() * 3.5 + 1.2;
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 3.5,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // --- 4. Light-Year Warp Streaks (Lines that stretch during scroll speed) ---
    const streakCount = 350;
    const streakPositions = new Float32Array(streakCount * 6);
    for (let i = 0; i < streakCount; i++) {
      const idx = i * 6;
      const radius = 20 + Math.random() * 180;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = 300 - Math.random() * 2700;

      streakPositions[idx] = x;
      streakPositions[idx + 1] = y;
      streakPositions[idx + 2] = z;

      // Initial head and tail at the same point (stretches dynamically when traveling)
      streakPositions[idx + 3] = x;
      streakPositions[idx + 4] = y;
      streakPositions[idx + 5] = z;
    }
    const streakGeometry = new THREE.BufferGeometry();
    streakGeometry.setAttribute("position", new THREE.BufferAttribute(streakPositions, 3));
    const streakMaterial = new THREE.LineBasicMaterial({
      color: 0xf2a33a,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
    });
    const streakLines = new THREE.LineSegments(streakGeometry, streakMaterial);
    scene.add(streakLines);

    // --- 5. Major Waypoint Stars ("Moving in Space from Star to Star") ---
    // Corresponding to sections: Hero -> Origin -> Philosophy -> Ambition -> Journey/Contact
    const waypoints = [
      { name: "Alpha Kotichukkala", z: 20, x: 25, y: 15, size: 28, color: 0xf2a33a },
      { name: "Crore Beacon", z: -450, x: -35, y: 20, size: 34, color: 0xffffff },
      { name: "Convergence Core", z: -1000, x: 30, y: -25, size: 32, color: 0xf2a33a },
      { name: "Horizon Star", z: -1550, x: -28, y: 10, size: 26, color: 0xb0d4ff },
      { name: "Terminal Star", z: -2100, x: 0, y: 0, size: 38, color: 0xf2a33a },
    ];

    const waypointMeshes: THREE.Sprite[] = [];
    waypoints.forEach((wp) => {
      const spriteMat = new THREE.SpriteMaterial({
        map: wp.color === 0xb0d4ff ? blueStarTexture : starTexture,
        color: wp.color,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(wp.x, wp.y, wp.z);
      sprite.scale.set(wp.size, wp.size, 1);
      scene.add(sprite);
      waypointMeshes.push(sprite);

      // Add orbiting coronal halo ring around each waypoint star
      const ringGeo = new THREE.RingGeometry(wp.size * 0.45, wp.size * 0.48, 48);
      const ringMat = new THREE.MeshBasicMaterial({
        color: wp.color,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(wp.x, wp.y, wp.z);
      ring.rotation.x = Math.PI * 0.35;
      scene.add(ring);
    });

    // --- 6. Interstellar Constellation Web (Connecting Nearby Waypoints) ---
    const webGeo = new THREE.BufferGeometry();
    const webPoints: number[] = [];
    for (let i = 0; i < waypoints.length - 1; i++) {
      webPoints.push(waypoints[i].x, waypoints[i].y, waypoints[i].z);
      webPoints.push(waypoints[i + 1].x, waypoints[i + 1].y, waypoints[i + 1].z);
    }
    webGeo.setAttribute("position", new THREE.Float32BufferAttribute(webPoints, 3));
    const webMat = new THREE.LineBasicMaterial({
      color: 0xf2a33a,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const webLines = new THREE.LineSegments(webGeo, webMat);
    scene.add(webLines);

    // --- 7. Interactive Parallax & Scroll Light-Year Warp Flight Physics ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    let scrollProgress = 0;
    let targetScrollProgress = 0;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let smoothVelocity = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 25;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      targetScrollProgress = window.scrollY / maxScroll;

      const delta = Math.abs(window.scrollY - lastScrollY);
      scrollVelocity = Math.min(delta, 120);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      if (!renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // --- 8. Animation & Warp Speed Loop ---
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.012;

      // Smooth interpolation for mouse and scroll travel
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.06;

      // Decaying velocity for warp effect
      smoothVelocity += (scrollVelocity - smoothVelocity) * 0.08;
      scrollVelocity *= 0.92;

      if (!prefersReducedMotion) {
        // Space flight travel: Camera glides from Z = +100 down to Z = -2200
        const flightZ = 100 - scrollProgress * 2300;
        camera.position.z = flightZ;
        camera.position.x = mouseX + Math.sin(time * 0.5) * 4;
        camera.position.y = -mouseY + Math.cos(time * 0.4) * 4;

        // Subtle look-ahead target along flight path
        camera.lookAt(
          mouseX * 0.3,
          -mouseY * 0.3,
          flightZ - 300
        );

        // Slow rotation of cosmic space
        starField.rotation.z = time * 0.02 + scrollProgress * 0.5;

        // Warp speed streaks effect when user scrolls through space
        const warpIntensity = Math.min(smoothVelocity / 35, 1);
        streakMaterial.opacity = THREE.MathUtils.lerp(streakMaterial.opacity, warpIntensity * 0.75, 0.1);

        const streakPosAttr = streakGeometry.attributes.position as THREE.BufferAttribute;
        const streakArr = streakPosAttr.array as Float32Array;
        const stretchLength = 40 + smoothVelocity * 2.5;

        for (let i = 0; i < streakCount; i++) {
          const idx = i * 6;
          // Tail stretches backward along Z-axis creating light-year streaks
          streakArr[idx + 5] = streakArr[idx + 2] + stretchLength;
        }
        streakPosAttr.needsUpdate = true;

        // Waypoint stars breathing pulse & rotation
        waypointMeshes.forEach((mesh, idx) => {
          const pulse = 1 + Math.sin(time * 2 + idx) * 0.12;
          const baseSize = waypoints[idx].size;
          mesh.scale.set(baseSize * pulse, baseSize * pulse, 1);
        });
      }

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (renderer && renderer.domElement && container) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
      starGeometry.dispose();
      starMaterial.dispose();
      streakGeometry.dispose();
      streakMaterial.dispose();
      starTexture.dispose();
      blueStarTexture.dispose();
      webGeo.dispose();
      webMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="three-space-canvas"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 1, // Completely visible
        background: "transparent",
      }}
    />
  );
}
