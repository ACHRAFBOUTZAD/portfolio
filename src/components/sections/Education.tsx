import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { certifications, education } from "@/lib/content";

export function Education() {
  return (
    <section
      id="education"
      className="container-page scroll-mt-24 py-16 sm:py-24"
    >
      <SectionHeading title="Education & certifications" />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <ul className="space-y-8">
            {education.map((item) => (
              <li
                key={item.degree}
                className="grid gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
              >
                <span className="font-mono text-sm text-muted sm:pt-0.5">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-muted">{item.school}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-lg font-semibold">Certifications</h3>
            <ul className="mt-5 space-y-4">
              {certifications.map((cert) => (
                <li key={cert.title}>
                  <p className="text-foreground/90">{cert.title}</p>
                  <p className="text-sm text-muted">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
