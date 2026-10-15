import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-border bg-background-soft py-16 sm:py-24"
    >
      <div className="container-page">
        <SectionHeading title="Skills & tools" />

        <div className="grid gap-x-12 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 0.05}>
              <div className="border-t border-border pb-8 pt-5">
                <h3 className="mb-4 font-display text-lg font-semibold">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
