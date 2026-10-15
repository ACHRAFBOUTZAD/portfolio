import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-border bg-background-soft py-16 sm:py-24"
    >
      <div className="container-page">
        <SectionHeading title="Experience" />

        <ol className="relative space-y-12 border-l border-border pl-6 sm:pl-8">
          {experience.map((item) => (
            <li key={item.role + item.company} className="relative">
              <span
                aria-hidden
                className="absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-accent sm:-left-[calc(2rem+5px)]"
              />
              <Reveal>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="font-display text-xl font-semibold">
                    {item.role}
                  </h3>
                  <span className="shrink-0 font-mono text-sm text-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-foreground/80">
                  {item.company}
                  <span className="text-muted-dark"> · {item.location}</span>
                </p>
                <ul className="mt-4 max-w-[75ch] list-disc space-y-2 pl-5 text-muted marker:text-muted-dark">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
