"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });
const ScrollPathLine = dynamic(() => import("./ScrollPathLine"), {
  ssr: false,
});

type IdleWindow = Window &
  typeof globalThis & {
    requestIdleCallback?: (callback: () => void) => number;
    cancelIdleCallback?: (handle: number) => void;
  };

/**
 * Keeps decorative Three.js and scroll-animation bundles out of the mobile path.
 * Desktop effects are loaded only after the critical hero has rendered.
 */
export default function DesktopVisualEffects() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
    );
    const idleWindow = window as IdleWindow;
    let idleHandle: number | undefined;
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;

    const cancelPending = () => {
      if (idleHandle !== undefined) {
        idleWindow.cancelIdleCallback?.(idleHandle);
      }
      if (timeoutHandle !== undefined) clearTimeout(timeoutHandle);
      idleHandle = undefined;
      timeoutHandle = undefined;
    };

    const schedule = () => {
      cancelPending();
      if (!media.matches) {
        setEnabled(false);
        return;
      }

      const activate = () => setEnabled(true);
      if (idleWindow.requestIdleCallback) {
        idleHandle = idleWindow.requestIdleCallback(activate);
      } else {
        timeoutHandle = setTimeout(activate, 1200);
      }
    };

    schedule();
    media.addEventListener("change", schedule);
    return () => {
      cancelPending();
      media.removeEventListener("change", schedule);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <HeroCanvas />
      <ScrollPathLine />
    </>
  );
}
