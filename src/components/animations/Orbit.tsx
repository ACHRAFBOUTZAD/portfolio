"use client";

import { motion } from "motion/react";
import { Logo } from "@/components/Logo";

type Ring = {
  radius: number;
  duration: number;
  reverse?: boolean;
  items: string[];
};

const rings: Ring[] = [
  {
    radius: 112,
    duration: 42,
    items: ["Software Engineer", "Spring Boot", "Kafka", "DevOps"],
  },
  {
    radius: 74,
    duration: 30,
    reverse: true,
    items: ["Realtime", "MQTT", "WebSockets", "CI/CD"],
  },
  {
    radius: 38,
    duration: 20,
    items: ["FastAPI", "Docker"],
  },
];

function OrbitRing({ radius, duration, reverse, items }: Ring) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      style={{ borderRadius: "9999px" }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border/70"
        style={{ width: radius * 2, height: radius * 2 }}
      />
      {items.map((item, i) => {
        const angle = (i / items.length) * 360;
        return (
          <div
            key={item}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
            }}
          >
            <motion.div
              className="relative -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
              <span className="glass whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-foreground shadow-lg">
                {item}
              </span>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

export function Orbit() {
  return (
    <div className="relative mx-auto h-[230px] w-full max-w-[380px] sm:h-[250px] sm:max-w-[400px]">
      {/* Center pulled down so rings stay below the photo card */}
      <div className="absolute left-1/2 top-[64%] z-10 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative grid h-14 w-14 place-items-center rounded-full shadow-[0_0_40px_-4px_var(--accent)] sm:h-16 sm:w-16"
        >
          <Logo size={52} className="h-12 w-12 sm:h-14 sm:w-14" />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 top-[64%] h-0 -translate-y-1/2">
        {rings.map((ring) => (
          <OrbitRing key={ring.radius} {...ring} />
        ))}
      </div>
    </div>
  );
}
