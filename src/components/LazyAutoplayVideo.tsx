"use client";

import { useEffect, useRef, useState } from "react";

/** Muted looping background video that only downloads when it is about to scroll into view. */
export function LazyAutoplayVideo({ src, className, id }: { src: string; className?: string; id?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <video ref={ref} id={id} className={className} src={load ? src : undefined} autoPlay loop muted playsInline preload="none" />;
}
