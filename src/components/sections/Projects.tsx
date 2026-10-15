import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { projects, type Project } from "@/lib/content";

function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      {project.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 36rem"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold leading-snug">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border px-2 py-0.5 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.href && (
          <span className="mt-auto pt-5 text-sm font-medium text-accent">
            View on GitHub ↗
          </span>
        )}
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface";

  if (!project.href) {
    return <article className={className}>{body}</article>;
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} transition-colors hover:border-muted-dark`}
    >
      {body}
    </a>
  );
}

export function Projects() {
  return (
    <section id="work" className="container-page scroll-mt-24 py-16 sm:py-24">
      <SectionHeading title="Selected work" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
