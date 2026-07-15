"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { experience } from "@/lib/content";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 border-y border-border bg-background-soft/40 py-16 sm:py-24 md:py-32"
    >
      <div className="container-page">
        <SectionHeading
          index="04"
          title="Experience"
          subtitle="My journey so far — building, learning and growing."
        />

        <div ref={ref} className="relative pl-6 sm:pl-8 md:pl-10">
          <div className="absolute left-[5px] top-2 h-full w-px bg-border sm:left-[7px] md:left-[11px]" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[5px] top-2 h-full w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3 sm:left-[7px] md:left-[11px]"
          />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <Reveal key={item.role + item.company} delay={i * 0.05}>
                <div className="relative">
                  <ProgressDot progress={scrollYProgress} index={i} total={experience.length} />
                  <div className="glass rounded-2xl p-4 sm:p-6">
                    <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-2">
                      <h3 className="font-display text-lg font-semibold sm:text-xl">
                        {item.role}
                      </h3>
                      <span className="font-mono text-xs text-accent-2 sm:text-sm">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground/80">
                      {item.company} · {item.location}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted sm:text-base">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressDot({
  progress,
  index,
  total,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const threshold = index / Math.max(total - 1, 1);
  const scale = useTransform(
    progress,
    [threshold - 0.15, threshold],
    [0.8, 1.3]
  );

  return (
    <motion.span
      style={{ scale }}
      className="absolute -left-6 top-6 grid h-4 w-4 place-items-center rounded-full border-2 border-accent bg-background sm:-left-8 md:-left-10"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
    </motion.span>
  );
}
