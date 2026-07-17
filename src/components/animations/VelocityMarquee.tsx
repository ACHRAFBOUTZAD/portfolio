"use client";

import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import { useRef } from "react";

export function VelocityMarquee({
  text,
  baseVelocity = 2,
}: {
  text: string;
  baseVelocity?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: "200px 0px" });
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 200,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [-2000, 0, 2000],
    [-1.2, 0, 1.2],
    { clamp: true },
  );

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    if (!inView) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const factor = velocityFactor.get();

    if (factor < 0) {
      directionFactor.current = -1;
    } else if (factor > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  const items = Array.from({ length: 4 });

  return (
    <div
      ref={containerRef}
      className="relative z-0 flex flex-nowrap overflow-hidden whitespace-nowrap border-y border-border bg-background-soft/40 py-4 sm:py-6"
    >
      <motion.div
        style={{ x }}
        className="flex flex-nowrap whitespace-nowrap will-change-transform"
      >
        {items.map((_, i) => (
          <span
            key={i}
            className="mx-3 font-display text-2xl font-bold uppercase tracking-tight text-foreground/25 sm:mx-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {text}
            <span className="mx-6 text-accent">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
