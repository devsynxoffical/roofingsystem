"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

/*
  Local roofing images used when a remote photo (e.g. Unsplash) fails to load,
  so a card never shows up blank. Picked deterministically from the src so the
  same card always gets the same backup.
*/
const FALLBACKS = [
  "/roofing-content/images/1f.jpg",
  "/roofing-content/images/3f.jpg",
  "/roofing-content/images/4.jpg",
  "/roofing-content/images/1f.jpg.jpeg",
  "/roofing-content/images/2%20(2).jpg",
  "/roofing-content/images/1%20(1).jpg",
  "/roofing-content/images/3.png",
];

export function fallbackFor(src: string) {
  let h = 0;
  for (let i = 0; i < src.length; i++) h = (h * 31 + src.charCodeAt(i)) >>> 0;
  return FALLBACKS[h % FALLBACKS.length];
}

const isRemote = (src: string) => /^https?:\/\//.test(src);

/** next/image that swaps to a local roofing image if the source fails. */
export function SafeImage({ src, alt, ...rest }: ImageProps & { src: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);
  const current = failed ? fallbackFor(src) : src;

  // catch a failure that happened before React attached onError
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0 && el.currentSrc) {
      const t = window.setTimeout(() => setFailed(true), 0);
      return () => window.clearTimeout(t);
    }
  }, [src]);

  return (
    <Image
      {...rest}
      ref={ref}
      src={current}
      alt={alt}
      // Remote photos are already sized by their URL; skipping the optimizer avoids
      // image-optimization quota/timeouts on the host turning them blank.
      unoptimized={isRemote(current) || rest.unoptimized}
      onError={() => setFailed(true)}
    />
  );
}

/** Plain <img> with the same fallback, also catching failures that happened before hydration. */
export function SafeImg({ src, alt, ...rest }: React.ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) {
      const t = window.setTimeout(() => setFailed(true), 0);
      return () => window.clearTimeout(t);
    }
  }, [src]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img ref={ref} {...rest} src={failed ? fallbackFor(src) : src} alt={alt} onError={() => setFailed(true)} />
  );
}
