import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { profile } from "@/lib/content";

const details = [
  { label: "Location", value: profile.location },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  { label: "Languages", value: profile.languages },
];

export function About() {
  return (
    <section id="about" className="container-page scroll-mt-24 py-16 sm:py-24">
      <SectionHeading title="About me" />

      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
        <Reveal className="max-w-[65ch] space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="space-y-6 border-l border-border pl-6">
            {details.map((detail) => (
              <div key={detail.label}>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-dark">
                  {detail.label}
                </dt>
                <dd className="mt-1 break-words text-foreground">
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="transition-colors hover:text-accent"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
