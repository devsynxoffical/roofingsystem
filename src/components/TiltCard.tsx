"use client";

import { ReactNode, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type CSSVars = React.CSSProperties & { "--mx"?: string; "--my"?: string };

export function TiltCard({
  children,
  className = "",
  max = 8,
  scale = 1.02,
  spotlight = true,
  borderGlow = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  scale?: number;
  spotlight?: boolean;
  borderGlow?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 160, damping: 20, mass: 0.15 });
  const sy = useSpring(py, { stiffness: 160, damping: 20, mass: 0.15 });

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    px.set(x);
    py.set(y);
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  function handleLeave() {
    setHovered(false);
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      className="group h-full [perspective:1000px]"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="h-full"
      >
        <div className={`relative h-full overflow-hidden rounded-2xl ${className}`}>
          {spotlight && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: hovered ? 1 : 0,
                background:
                  "radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), rgba(237,28,36,0.14), transparent 62%)",
              }}
            />
          )}
          {borderGlow && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style={
                {
                  opacity: hovered ? 1 : 0,
                  padding: "1.5px",
                  background:
                    "linear-gradient(140deg, rgba(237,28,36,0.85) 0%, rgba(255,107,112,0.25) 35%, transparent 55%, rgba(255,107,112,0.3) 75%, rgba(237,28,36,0.85) 100%)",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                } as CSSVars
              }
            />
          )}
          <div className="relative z-10 h-full">{children}</div>
        </div>
      </motion.div>
    </div>
  );
}
