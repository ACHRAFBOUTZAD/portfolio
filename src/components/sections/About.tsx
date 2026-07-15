"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/Stagger";
import { Parallax } from "@/components/animations/Parallax";
import { CountUp } from "@/components/animations/CountUp";
import { CvDownload } from "@/components/CvDownload";
import { profile, stats } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="container-page scroll-mt-24 py-16 sm:py-24 md:py-32">
      <SectionHeading index="01" title="About me" />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:space-y-6 sm:text-lg">
          <Reveal>
            <p>{profile.summary}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              At Haldorix, I work with MARWA Corporation on operational software —
              from real-time production dashboards and WebSocket-driven updates to
              CI/CD automation and event-driven architectures with Kafka and MQTT.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="glass rounded-full px-4 py-2 text-sm text-foreground">
                📍 {profile.location}
              </span>
              <span className="glass rounded-full px-4 py-2 text-sm text-foreground">
                ✉️ {profile.email}
              </span>
              <span className="glass rounded-full px-4 py-2 text-sm text-foreground">
                📞 {profile.phone}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="pt-4">
              <CvDownload />
            </div>
          </Reveal>
        </div>

        <Parallax offset={40}>
          <StaggerGroup className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StaggerItem
                key={stat.label}
                className="glass glow-ring rounded-2xl p-6 text-center"
              >
                <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-sm text-muted">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Parallax>
      </div>
    </section>
  );
}
