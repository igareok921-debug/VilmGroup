"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Curved SVG path that draws progressively as the user scrolls,
 * with a luminous comet head, glow halo, and pulse rings.
 * Sits behind page content, full document height.
 */
export default function ScrollPathLine() {
  const [pageHeight, setPageHeight] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const cometRef = useRef<SVGGElement>(null);
  const trailRef = useRef<SVGCircleElement>(null);

  const { scrollYProgress } = useScroll();

  // Path drawing uses a light spring for buttery feel.
  // Comet head reads scrollYProgress DIRECTLY for zero lag.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 50,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  // Build a richer, more dramatic curve
  // Start ~140px below page top so comet is visible (not under fixed navbar)
  const { d, viewW } = useMemo(() => {
    if (pageHeight < 100) return { d: "", viewW: 400 };
    const W = 400;
    const cx = W / 2;
    const startY = 140;
    const endY = pageHeight - 60;
    const usableH = endY - startY;
    const segments = Math.max(8, Math.round(usableH / 500));
    const segH = usableH / segments;

    let path = `M ${cx} ${startY}`;
    for (let i = 0; i < segments; i++) {
      const yEnd = startY + (i + 1) * segH;
      const yMid = startY + i * segH + segH / 2;
      const baseOffset = i % 2 === 0 ? 1 : -1;
      // Adapt amplitude to viewport width — smaller curves on mobile
      const isMobile =
        typeof window !== "undefined" && window.innerWidth < 768;
      const baseAmp = isMobile ? 60 : 110;
      const variance = isMobile ? 20 : 40;
      const amplitude = baseAmp + Math.sin(i * 0.7) * variance;
      const cpx = cx + baseOffset * amplitude;
      path += ` Q ${cpx} ${yMid}, ${cx} ${yEnd}`;
    }
    return { d: path, viewW: W };
  }, [pageHeight]);

  // Helper to position the comet at a given progress value
  const positionComet = (v: number) => {
    const path = pathRef.current;
    if (!path) return;
    try {
      const totalLen = path.getTotalLength();
      if (!totalLen) return;
      const pt = path.getPointAtLength(
        totalLen * Math.min(Math.max(v, 0), 1)
      );
      if (cometRef.current) {
        cometRef.current.setAttribute(
          "transform",
          `translate(${pt.x}, ${pt.y})`
        );
      }
      if (trailRef.current) {
        const r = 4 + Math.sin(v * Math.PI * 8) * 0.6;
        trailRef.current.setAttribute("r", String(r));
      }
    } catch {
      /* path not measurable yet */
    }
  };

  // Comet follows raw scroll progress with NO smoothing for instant response
  useMotionValueEvent(scrollYProgress, "change", positionComet);

  // Initial placement once the SVG path is in the DOM and measurable
  useEffect(() => {
    if (!d) return;
    const place = () => positionComet(scrollYProgress.get());
    place();
    const raf = requestAnimationFrame(place);
    const t1 = setTimeout(place, 200);
    const t2 = setTimeout(place, 800);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [d, pageHeight]);

  // Track page height
  useEffect(() => {
    const update = () => {
      const content = document.querySelector<HTMLElement>(
        "[data-page-content]"
      );
      setPageHeight(content?.offsetHeight ?? document.body.scrollHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    const observedNode =
      document.querySelector<HTMLElement>("[data-page-content]") ??
      document.documentElement;
    ro.observe(observedNode);
    window.addEventListener("resize", update);
    const t = setTimeout(update, 600);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      clearTimeout(t);
    };
  }, []);

  if (pageHeight < 100 || !d) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 block"
      style={{ height: pageHeight }}
    >
      <svg
        width="100%"
        height={pageHeight}
        viewBox={`0 0 ${viewW} ${pageHeight}`}
        preserveAspectRatio="none"
        className="absolute inset-0 mx-auto max-w-[1400px]"
      >
        <defs>
          <linearGradient id="vilm-path-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8a96a" stopOpacity="0" />
            <stop offset="10%" stopColor="#e1c896" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#c8a96a" stopOpacity="1" />
            <stop offset="90%" stopColor="#e1c896" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c8a96a" stopOpacity="0" />
          </linearGradient>

          <filter id="vilm-path-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="vilm-comet-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="b1" />
            <feMerge>
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="vilm-comet-rad">
            <stop offset="0%" stopColor="#fff8e8" stopOpacity="1" />
            <stop offset="40%" stopColor="#e1c896" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#c8a96a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Faint background guide path */}
        <path
          d={d}
          fill="none"
          stroke="#c8a96a"
          strokeOpacity="0.06"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* Soft glow under the active path */}
        <motion.path
          d={d}
          ref={pathRef}
          fill="none"
          stroke="url(#vilm-path-grad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeOpacity="0.35"
          filter="url(#vilm-path-glow)"
          style={{ pathLength }}
        />

        {/* Sharp main path */}
        <motion.path
          d={d}
          fill="none"
          stroke="url(#vilm-path-grad)"
          strokeWidth="1.75"
          strokeLinecap="round"
          style={{ pathLength }}
        />

        {/* Comet head — initial transform so it's visible even before first scroll event */}
        <g
          ref={cometRef}
          filter="url(#vilm-comet-glow)"
          transform={`translate(${viewW / 2}, 140)`}
        >
          <circle r="22" fill="url(#vilm-comet-rad)" opacity="0.55" />
          <circle r="10" fill="url(#vilm-comet-rad)" opacity="0.85" />
          <circle ref={trailRef} r="4" fill="#fff8e8" />
          <circle
            r="14"
            fill="none"
            stroke="#e1c896"
            strokeOpacity="0.5"
            strokeWidth="1"
          >
            <animate
              attributeName="r"
              from="6"
              to="34"
              dur="2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              from="0.6"
              to="0"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}
