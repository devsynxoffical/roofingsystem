"use client";

import { useEffect, type ReactNode } from "react";
import { isTouchDevice, prefersReducedMotion } from "@/lib/motion";

type SmoothScrollProps = {
  children: ReactNode;
  lerp?: number;
};

export function SmoothScroll({ children, lerp = 0.09 }: SmoothScrollProps) {
  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion()) return;

    let raf = 0;
    let lenis: { destroy: () => void; raf: (t: number) => void } | null = null;

    const init = async () => {
      const Lenis = (await import("lenis")).default;
      const instance = new Lenis({ lerp });
      lenis = instance;
      window.__lenis = instance;

      const scrollFn = (time: number) => {
        instance.raf(time * 1000);
        raf = requestAnimationFrame(scrollFn);
      };
      raf = requestAnimationFrame(scrollFn);
    };

    void init();

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      delete window.__lenis;
    };
  }, [lerp]);

  return <>{children}</>;
}
