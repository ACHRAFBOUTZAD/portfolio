import { Reveal } from "@/components/animations/Reveal";
import { CvDownload } from "@/components/CvDownload";
import { profile } from "@/lib/content";

export function Contact() {
  const links = profile.socials.filter((s) => s.label !== "Email");

  return (
    <section
      id="contact"
      className="container-page scroll-mt-24 py-20 sm:py-28"
    >
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          {profile.available && "I'm open to new roles, in Morocco or remote. "}
          Email is the fastest way to reach me.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block break-all font-display text-2xl font-semibold text-foreground underline decoration-border decoration-2 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent sm:text-4xl md:text-5xl"
        >
          {profile.email}
        </a>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
          <CvDownload variant="primary" className="self-start" />
          <div className="flex flex-wrap gap-6 text-muted">
            {links.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {social.label} ↗
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
