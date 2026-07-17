"use client";

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
    <div
      className="orbit-ring pointer-events-none absolute inset-0"
      style={{
        animationDuration: `${duration}s`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
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
              transform: `rotate(${angle}deg) translate(${radius}px)`,
            }}
          >
            <div
              className="orbit-label relative"
              style={{
                animationDuration: `${duration}s`,
                animationDirection: reverse ? "reverse" : "normal",
              }}
            >
              <span className="whitespace-nowrap rounded-full border border-border bg-surface/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-lg">
                {item}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Orbit() {
  return (
    <div className="relative mx-auto h-[230px] w-full max-w-[380px] sm:h-[250px] sm:max-w-[400px]">
      <div className="absolute left-1/2 top-[64%] z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-14 w-14 place-items-center rounded-full shadow-[0_0_40px_-4px_var(--accent)] sm:h-16 sm:w-16">
          <Logo size={52} className="h-12 w-12 sm:h-14 sm:w-14" />
        </div>
      </div>

      <div className="absolute inset-x-0 top-[64%] h-0 -translate-y-1/2">
        {rings.map((ring) => (
          <OrbitRing key={ring.radius} {...ring} />
        ))}
      </div>
    </div>
  );
}
