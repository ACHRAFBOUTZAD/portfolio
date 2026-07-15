"use client";

import {
  motion,
  useAnimationFrame,
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
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 200,
  });
  // Gentle scroll influence: caps how much scrolling can boost the marquee.
  const velocityFactor = useTransform(smoothVelocity, [-2000, 0, 2000], [-1.2, 0, 1.2], {
    clamp: true,
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const items = Array.from({ length: 6 });

  return (
    <div className="relative z-0 flex flex-nowrap overflow-hidden whitespace-nowrap border-y border-border bg-background-soft/40 py-4 sm:py-6">
      <motion.div style={{ x }} className="flex flex-nowrap whitespace-nowrap">
        {items.map((_, i) => (
          <span
            key={i}
            className="mx-3 font-display text-2xl font-bold uppercase tracking-tight text-transparent sm:mx-6 sm:text-4xl md:text-5xl lg:text-6xl"
            style={{
              WebkitTextStroke: "1px rgba(255,247,237,0.35)",
            }}
          >
            {text}
            <span className="mx-6 text-accent" style={{ WebkitTextStroke: "0" }}>
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
