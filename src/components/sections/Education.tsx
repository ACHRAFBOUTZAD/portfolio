"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { certifications, education } from "@/lib/content";

export function Education() {
  return (
    <section
      id="education"
      className="container-page scroll-mt-24 py-16 sm:py-24 md:py-32"
    >
      <SectionHeading
        index="05"
        title="Education & certifications"
        subtitle="Academic background and continuous learning."
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.05}>
              <div className="glass rounded-2xl p-4 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-2">
                  <h3 className="font-display text-base font-semibold sm:text-lg">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-xs text-accent-2 sm:text-sm">
                    {item.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted sm:text-base">{item.school}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="glass glow-ring h-full rounded-2xl p-6">
            <h3 className="font-display text-xl font-semibold">Certifications</h3>
            <ul className="mt-5 space-y-3 text-muted">
              {certifications.map((cert) => (
                <li key={cert} className="flex gap-3">
                  <span className="text-accent">✦</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
