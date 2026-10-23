"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- 1. Scene & Camera Setup ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      6000
    );

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false, // Solid rendering with clearColor guarantees deep space background is always visible
        powerPreference: "high-performance",
      });
      renderer.setClearColor(0x020207, 1);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;display:block;";
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL initialization failed", e);
      return;
    }

    // --- 2. Ultra-Luminous Star & Flare Texture Generators ---
    const createStarTexture = (color = "#FFFFFF", glowColor = "#F2A33A", withSpikes = false) => {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Soft outer radial glow
        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 60);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.2, glowColor);
        gradient.addColorStop(0.5, "rgba(242, 163, 58, 0.35)");
        gradient.addColorStop(0.8, "rgba(242, 163, 58, 0.08)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(64, 64, 60, 0, Math.PI * 2);
        ctx.fill();

        // Optional sharp celestial diffraction spikes
        if (withSpikes) {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.75)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(64, 8);
          ctx.lineTo(64, 120);
          ctx.moveTo(8, 64);
          ctx.lineTo(120, 64);
          ctx.stroke();
        }
      }
      return new THREE.CanvasTexture(canvas);
    };

    const createNebulaTexture = (colorStop1: string, colorStop2: string) => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 120);
        gradient.addColorStop(0, colorStop1);
        gradient.addColorStop(0.4, colorStop2);
        gradient.addColorStop(0.8, "rgba(10, 5, 25, 0.04)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(128, 128, 120, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const goldStarTexture = createStarTexture("#FFFFFF", "#F2A33A", true);
    const diamondStarTexture = createStarTexture("#FFFFFF", "#93C5FD", false);
    const amberNebulaTexture = createNebulaTexture("rgba(242, 163, 58, 0.14)", "rgba(180, 83, 9, 0.05)");
    const purpleNebulaTexture = createNebulaTexture("rgba(139, 92, 246, 0.12)", "rgba(49, 46, 129, 0.04)");
    const cyanNebulaTexture = createNebulaTexture("rgba(56, 189, 248, 0.10)", "rgba(14, 116, 144, 0.03)");

    // --- 3. Omnidirectional Deep Space Skybox (6,000+ Stars) ---
    // Guaranteed to be visible at all times, no matter where the camera points
    const omniCount = 4500;
    const omniGeometry = new THREE.BufferGeometry();
    const omniPositions = new Float32Array(omniCount * 3);
    const omniColors = new Float32Array(omniCount * 3);

    for (let i = 0; i < omniCount; i++) {
      const i3 = i * 3;
      // Distribute in a vast 360-degree sphere
      const radius = 600 + Math.random() * 2400;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      omniPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      omniPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      omniPositions[i3 + 2] = -radius * Math.cos(phi) - 1000;

      const rand = Math.random();
      const col =
        rand > 0.65
          ? new THREE.Color(0xf2a33a) // Celestial Gold
          : rand > 0.35
          ? new THREE.Color(0xffffff) // Diamond White
          : new THREE.Color(0x93c5fd); // Stellar Blue

      omniColors[i3] = col.r;
      omniColors[i3 + 1] = col.g;
      omniColors[i3 + 2] = col.b;
    }

    omniGeometry.setAttribute("position", new THREE.BufferAttribute(omniPositions, 3));
    omniGeometry.setAttribute("color", new THREE.BufferAttribute(omniColors, 3));

    const omniMaterial = new THREE.PointsMaterial({
      size: 5.5,
      map: diamondStarTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const omniStarField = new THREE.Points(omniGeometry, omniMaterial);
    scene.add(omniStarField);

    // --- 4. Volumetric Deep Space Nebulae ---
    const nebulaCount = 45;
    const nebulaSprites: THREE.Sprite[] = [];
    const nebulaTextures = [amberNebulaTexture, purpleNebulaTexture, cyanNebulaTexture];

    for (let i = 0; i < nebulaCount; i++) {
      const mat = new THREE.SpriteMaterial({
        map: nebulaTextures[i % 3],
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(mat);
      const dist = 400 + Math.random() * 2200;
      const angle = Math.random() * Math.PI * 2;
      const zOffset = -Math.random() * 2500;

      sprite.position.set(
        Math.cos(angle) * dist,
        Math.sin(angle) * dist,
        zOffset
      );
      const scale = 500 + Math.random() * 600;
      sprite.scale.set(scale, scale, 1);
      scene.add(sprite);
      nebulaSprites.push(sprite);
    }

    // --- 5. 3D Zig-Zag Flight Path & The 5 Sovereign Star Waypoints ---
    const waypoints = [
      {
        pos: new THREE.Vector3(70, 25, -20),
        size: 85,
        color: 0xf2a33a,
      },
      {
        pos: new THREE.Vector3(-90, -30, -650),
        size: 95,
        color: 0xffffff,
      },
      {
        pos: new THREE.Vector3(85, 40, -1350),
        size: 90,
        color: 0xf2a33a,
      },
      {
        pos: new THREE.Vector3(-80, -35, -2050),
        size: 85,
        color: 0x93c5fd,
      },
      {
        pos: new THREE.Vector3(0, 0, -2800),
        size: 120,
        color: 0xf2a33a,
      },
    ];

    // Spline curve guiding the camera right past the stars in an aerospace zig-zag
    const flightPoints = [
      new THREE.Vector3(0, 10, 160),     // Camera start in Hero
      new THREE.Vector3(45, 20, 40),     // Approach Star I
      new THREE.Vector3(-15, 0, -320),   // Transition
      new THREE.Vector3(-65, -22, -620), // Approach Star II
      new THREE.Vector3(20, 15, -980),   // Transition
      new THREE.Vector3(60, 30, -1320),  // Approach Star III
      new THREE.Vector3(-20, -10, -1700),// Transition
      new THREE.Vector3(-55, -25, -2020),// Approach Star IV
      new THREE.Vector3(-10, -5, -2420), // Transition
      new THREE.Vector3(0, 0, -2760),    // Approach Star V (Contact Terminal)
    ];
    const flightPath = new THREE.CatmullRomCurve3(flightPoints, false, "catmullrom", 0.35);

    // Render Waypoint Stars: Glowing Solars with Multi-Ring Accents
    const waypointSprites: THREE.Sprite[] = [];
    const orbitalRings: THREE.Mesh[] = [];

    waypoints.forEach((wp) => {
      // Radiant Core Star
      const mat = new THREE.SpriteMaterial({
        map: goldStarTexture,
        color: wp.color,
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.position.copy(wp.pos);
      sprite.scale.set(wp.size, wp.size, 1);
      scene.add(sprite);
      waypointSprites.push(sprite);

      // Celestial Ring 1
      const ringGeo1 = new THREE.RingGeometry(wp.size * 0.42, wp.size * 0.45, 64);
      const ringMat1 = new THREE.MeshBasicMaterial({
        color: wp.color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });
      const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      ring1.position.copy(wp.pos);
      ring1.rotation.x = Math.PI * 0.35;
      ring1.rotation.y = Math.PI * 0.15;
      scene.add(ring1);
      orbitalRings.push(ring1);

      // Celestial Ring 2
      const ringGeo2 = new THREE.RingGeometry(wp.size * 0.65, wp.size * 0.68, 48);
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.18,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });
      const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      ring2.position.copy(wp.pos);
      ring2.rotation.x = -Math.PI * 0.28;
      scene.add(ring2);
      orbitalRings.push(ring2);
    });

    // --- 6. Dynamic Light-Year Warp Streaks ---
    const streakCount = 550;
    const streakPositions = new Float32Array(streakCount * 6);

    for (let i = 0; i < streakCount; i++) {
      const idx = i * 6;
      const t = Math.random();
      const pt = flightPath.getPoint(t);
      const rad = 30 + Math.random() * 240;
      const ang = Math.random() * Math.PI * 2;

      const px = pt.x + Math.cos(ang) * rad;
      const py = pt.y + Math.sin(ang) * rad;
      const pz = pt.z;

      streakPositions[idx] = px;
      streakPositions[idx + 1] = py;
      streakPositions[idx + 2] = pz;
      streakPositions[idx + 3] = px;
      streakPositions[idx + 4] = py;
      streakPositions[idx + 5] = pz;
    }

    const streakGeometry = new THREE.BufferGeometry();
    streakGeometry.setAttribute("position", new THREE.BufferAttribute(streakPositions, 3));
    const streakMaterial = new THREE.LineBasicMaterial({
      color: 0xf2a33a,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      linewidth: 1.5,
    });
    const streakLines = new THREE.LineSegments(streakGeometry, streakMaterial);
    scene.add(streakLines);

    // Glowing Constellation Vector Track
    const trackPoints = flightPath.getPoints(250);
    const trackGeo = new THREE.BufferGeometry().setFromPoints(trackPoints);
    const trackMat = new THREE.LineBasicMaterial({
      color: 0xf2a33a,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const trackLine = new THREE.Line(trackGeo, trackMat);
    scene.add(trackLine);

    // --- 7. Interactive Parallax & Scroll Listeners ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    let scrollProgress = 0;
    let targetScrollProgress = 0;
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let scrollVelocity = 0;
    let smoothVelocity = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 35;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 28;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      targetScrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 0.999);

      const delta = Math.abs(window.scrollY - lastScrollY);
      scrollVelocity = Math.min(delta, 160);
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

    // Initial position
    handleScroll();

    // --- 8. Render & Animation Loop ---
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.012;

      // Smooth interpolation for mouse and scroll flight
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.045;

      smoothVelocity += (scrollVelocity - smoothVelocity) * 0.08;
      scrollVelocity *= 0.92;

      if (!prefersReducedMotion) {
        // Evaluate position along the zig-zag Catmull-Rom spline curve
        const currentPathPoint = flightPath.getPoint(scrollProgress);
        const lookAheadT = Math.min(scrollProgress + 0.04, 1);
        const lookAheadPoint = flightPath.getPoint(lookAheadT);

        // Position camera with mouse parallax
        camera.position.x = currentPathPoint.x + mouseX;
        camera.position.y = currentPathPoint.y - mouseY;
        camera.position.z = currentPathPoint.z;

        // Dynamic banking roll on turns
        const tangent = flightPath.getTangent(scrollProgress);
        const rollAngle = -tangent.x * 0.42;
        camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, rollAngle, 0.05);

        camera.lookAt(
          lookAheadPoint.x + mouseX * 0.4,
          lookAheadPoint.y - mouseY * 0.4,
          lookAheadPoint.z
        );

        // Slow celestial rotation of the skybox
        omniStarField.rotation.y = time * 0.015;
        omniStarField.rotation.z = time * 0.008;

        // Rotate orbital rings
        orbitalRings.forEach((ring, idx) => {
          ring.rotation.z += 0.01 * (idx % 2 === 0 ? 1 : -1);
        });

        // Pulsing breathing effect on Waypoint Stars
        waypointSprites.forEach((sprite, idx) => {
          const pulse = 1 + Math.sin(time * 2.5 + idx * 1.5) * 0.15;
          const baseSize = waypoints[idx].size;
          sprite.scale.set(baseSize * pulse, baseSize * pulse, 1);
        });

        // Warp speed streaks effect during scroll
        const warpIntensity = Math.min(smoothVelocity / 30, 1);
        streakMaterial.opacity = THREE.MathUtils.lerp(streakMaterial.opacity, warpIntensity * 0.9, 0.12);

        const streakPosAttr = streakGeometry.attributes.position as THREE.BufferAttribute;
        const streakArr = streakPosAttr.array as Float32Array;
        const stretchDist = 60 + smoothVelocity * 4;

        for (let i = 0; i < streakCount; i++) {
          const idx = i * 6;
          streakArr[idx + 5] = streakArr[idx + 2] + stretchDist;
        }
        streakPosAttr.needsUpdate = true;
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
      omniGeometry.dispose();
      omniMaterial.dispose();
      streakGeometry.dispose();
      streakMaterial.dispose();
      trackGeo.dispose();
      trackMat.dispose();
      goldStarTexture.dispose();
      diamondStarTexture.dispose();
      amberNebulaTexture.dispose();
      purpleNebulaTexture.dispose();
      cyanNebulaTexture.dispose();
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
        overflow: "hidden",
      }}
    />
  );
}