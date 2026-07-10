"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/animations/Stagger";
import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 border-y border-border bg-background-soft/40 py-24 md:py-32"
    >
      <div className="container-page">
        <SectionHeading
          index="02"
          title="Skills & tools"
          subtitle="The technologies I reach for to design, build and ship products."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <StaggerGroup
              key={group.title}
              className="glass rounded-2xl p-6"
            >
              <StaggerItem>
                <h3 className="mb-5 font-display text-xl font-semibold">
                  {group.title}
                </h3>
              </StaggerItem>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <StaggerItem key={item}>
                    <motion.span
                      whileHover={{ y: -3, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="inline-block rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                    >
                      {item}
                    </motion.span>
                  </StaggerItem>
                ))}
              </div>
            </StaggerGroup>
          ))}
        </div>
      </div>
    </section>
  );
}
