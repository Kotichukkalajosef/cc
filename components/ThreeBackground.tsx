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
    scene.fog = new THREE.FogExp2(0x020205, 0.0007);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      4000
    );

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
    const createGlowTexture = (innerColor = "#FFFFFF", midColor = "#F2A33A") => {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, innerColor);
        gradient.addColorStop(0.15, midColor);
        gradient.addColorStop(0.4, "rgba(242, 163, 58, 0.25)");
        gradient.addColorStop(0.7, "rgba(242, 163, 58, 0.05)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(64, 64, 64, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const goldStarTexture = createGlowTexture("#FFFFFF", "#F2A33A");
    const diamondStarTexture = createGlowTexture("#FFFFFF", "#E2E8F0");
    const cyanStarTexture = createGlowTexture("#FFFFFF", "#7DD3FC");

    // --- 3. Zig-Zag Waypoint Stars ("Meeting the Stars" in Space) ---
    // The camera flies along a distinct 3D zig-zag trajectory, swooping to meet each star directly!
    const waypoints = [
      {
        name: "Genesis · Alpha Kotichukkala",
        pos: new THREE.Vector3(55, 20, 40),
        size: 38,
        color: 0xf2a33a,
        label: "Waypoint I",
      },
      {
        name: "Magnitude · The Crore Beacon",
        pos: new THREE.Vector3(-65, -15, -550),
        size: 46,
        color: 0xffffff,
        label: "Waypoint II",
      },
      {
        name: "Convergence · The Core Vision",
        pos: new THREE.Vector3(60, 30, -1150),
        size: 42,
        color: 0xf2a33a,
        label: "Waypoint III",
      },
      {
        name: "Horizon · Frontier Ventures",
        pos: new THREE.Vector3(-55, -25, -1750),
        size: 36,
        color: 0x7dd3fc,
        label: "Waypoint IV",
      },
      {
        name: "Terminal · The Constellation Gate",
        pos: new THREE.Vector3(0, 0, -2350),
        size: 52,
        color: 0xf2a33a,
        label: "Waypoint V",
      },
    ];

    // Create 3D Flight Curve (Catmull-Rom Spline for graceful zig-zag flight)
    // Points lead the camera slightly in front of each star so you encounter each beacon intimately
    const flightPoints = [
      new THREE.Vector3(15, 5, 120), // Start point behind Hero
      new THREE.Vector3(45, 15, 50), // Swoop to Star 1
      new THREE.Vector3(0, 5, -250), // Transition curve
      new THREE.Vector3(-50, -12, -540), // Swoop to Star 2 (Origin)
      new THREE.Vector3(10, 10, -850), // Transition curve
      new THREE.Vector3(48, 24, -1140), // Swoop to Star 3 (Philosophy)
      new THREE.Vector3(-10, -5, -1450), // Transition curve
      new THREE.Vector3(-42, -20, -1740), // Swoop to Star 4 (Ambition)
      new THREE.Vector3(-15, -8, -2050), // Transition curve
      new THREE.Vector3(0, 0, -2320), // Final approach to Star 5 (Contact)
    ];
    const flightPath = new THREE.CatmullRomCurve3(flightPoints, false, "catmullrom", 0.35);

    // Render Waypoint Star Meshes (Multi-layered brilliant beacons)
    const waypointSprites: THREE.Sprite[] = [];
    const orbitalRings: THREE.Mesh[] = [];

    waypoints.forEach((wp) => {
      // 1. Brilliant core star sprite
      const texture = wp.color === 0x7dd3fc ? cyanStarTexture : wp.color === 0xffffff ? diamondStarTexture : goldStarTexture;
      const mat = new THREE.SpriteMaterial({
        map: texture,
        color: wp.color,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.position.copy(wp.pos);
      sprite.scale.set(wp.size, wp.size, 1);
      scene.add(sprite);
      waypointSprites.push(sprite);

      // 2. Rotating orbital gravitational rings around each star
      const ringGeo = new THREE.RingGeometry(wp.size * 0.42, wp.size * 0.45, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: wp.color,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(wp.pos);
      ring.rotation.x = Math.PI * 0.38;
      ring.rotation.y = Math.PI * 0.15;
      scene.add(ring);
      orbitalRings.push(ring);

      // 3. Second counter-rotating coordinate ring
      const outerRingGeo = new THREE.RingGeometry(wp.size * 0.65, wp.size * 0.67, 48);
      const outerRingMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.12,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });
      const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
      outerRing.position.copy(wp.pos);
      outerRing.rotation.x = -Math.PI * 0.25;
      scene.add(outerRing);
      orbitalRings.push(outerRing);
    });

    // --- 4. Deep Space Star Corridor (4,000 Twinkling Stars) ---
    const starCount = 3800;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starTwinkleSpeeds = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      // Scatter stars around the winding flight path
      const t = Math.random();
      const pathPoint = flightPath.getPoint(t);
      const radius = 20 + Math.random() * 260;
      const angle = Math.random() * Math.PI * 2;

      starPositions[i3] = pathPoint.x + Math.cos(angle) * radius;
      starPositions[i3 + 1] = pathPoint.y + Math.sin(angle) * radius;
      starPositions[i3 + 2] = pathPoint.z + (Math.random() - 0.5) * 200;

      const rand = Math.random();
      const col = rand > 0.75 ? new THREE.Color(0xf2a33a) : rand > 0.4 ? new THREE.Color(0xffffff) : new THREE.Color(0xa5c9ff);
      starColors[i3] = col.r;
      starColors[i3 + 1] = col.g;
      starColors[i3 + 2] = col.b;

      starTwinkleSpeeds[i] = Math.random() * 3 + 1;
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 3.6,
      map: goldStarTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // --- 5. Dynamic Light-Year Warp Speed Streaks ---
    const streakCount = 450;
    const streakPositions = new Float32Array(streakCount * 6);
    for (let i = 0; i < streakCount; i++) {
      const idx = i * 6;
      const t = Math.random();
      const pt = flightPath.getPoint(t);
      const rad = 25 + Math.random() * 190;
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
    });
    const streakLines = new THREE.LineSegments(streakGeometry, streakMaterial);
    scene.add(streakLines);

    // --- 6. Interstellar Constellation Zig-Zag Vector Track ---
    // Visual line connecting the stars in a dramatic zig-zag path
    const trackPoints = flightPath.getPoints(200);
    const trackGeo = new THREE.BufferGeometry().setFromPoints(trackPoints);
    const trackMat = new THREE.LineBasicMaterial({
      color: 0xf2a33a,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
    });
    const trackLine = new THREE.Line(trackGeo, trackMat);
    scene.add(trackLine);

    // --- 7. Interactive Mouse Parallax & Flight Curve Tracking ---
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
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 30;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 25;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      targetScrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 0.999);

      const delta = Math.abs(window.scrollY - lastScrollY);
      scrollVelocity = Math.min(delta, 140);
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

    // --- 8. Animation & Warp Speed Flight Loop ---
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.014;

      // Smooth interpolation for mouse and scroll flight
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.045;

      smoothVelocity += (scrollVelocity - smoothVelocity) * 0.08;
      scrollVelocity *= 0.92;

      if (!prefersReducedMotion) {
        // Evaluate position along the zig-zag Catmull-Rom spline curve!
        const currentPathPoint = flightPath.getPoint(scrollProgress);
        // Look-ahead point on the curve (so camera points into the curve turning toward the next star)
        const lookAheadT = Math.min(scrollProgress + 0.04, 1);
        const lookAheadPoint = flightPath.getPoint(lookAheadT);

        // Position camera directly along the zig-zag curve with cursor parallax offset
        camera.position.x = currentPathPoint.x + mouseX;
        camera.position.y = currentPathPoint.y - mouseY;
        camera.position.z = currentPathPoint.z;

        // Dynamic banking roll as camera curves left and right!
        const tangent = flightPath.getTangent(scrollProgress);
        const rollAngle = -tangent.x * 0.45;
        camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, rollAngle, 0.05);

        camera.lookAt(
          lookAheadPoint.x + mouseX * 0.4,
          lookAheadPoint.y - mouseY * 0.4,
          lookAheadPoint.z
        );

        // Rotate celestial star field gently
        starField.rotation.z = time * 0.015;

        // Animate orbital rings around the stars
        orbitalRings.forEach((ring, idx) => {
          ring.rotation.z += 0.008 * (idx % 2 === 0 ? 1 : -1);
        });

        // Pulsing breathing effect on Waypoint Stars as you approach
        waypointSprites.forEach((sprite, idx) => {
          const pulse = 1 + Math.sin(time * 2.5 + idx * 1.5) * 0.15;
          const baseSize = waypoints[idx].size;
          sprite.scale.set(baseSize * pulse, baseSize * pulse, 1);
        });

        // Warp speed streaks effect during scroll
        const warpIntensity = Math.min(smoothVelocity / 35, 1);
        streakMaterial.opacity = THREE.MathUtils.lerp(streakMaterial.opacity, warpIntensity * 0.85, 0.1);

        const streakPosAttr = streakGeometry.attributes.position as THREE.BufferAttribute;
        const streakArr = streakPosAttr.array as Float32Array;
        const stretchDist = 50 + smoothVelocity * 3.5;

        for (let i = 0; i < streakCount; i++) {
          const idx = i * 6;
          // Stretch tail back along flight tangent
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
      starGeometry.dispose();
      starMaterial.dispose();
      streakGeometry.dispose();
      streakMaterial.dispose();
      trackGeo.dispose();
      trackMat.dispose();
      goldStarTexture.dispose();
      diamondStarTexture.dispose();
      cyanStarTexture.dispose();
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
        opacity: 1,
        background: "transparent",
      }}
    />
  );
}
