"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { MouseEvent } from "react";
import { useRef } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { projects, type Project } from "@/lib/content";

function ProjectCard({
  project,
  index,
  layout = "scroll",
}: {
  project: Project;
  index: number;
  layout?: "scroll" | "stack";
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${project.accent}22, transparent 70%)`;

  return (
    <motion.a
      href={project.href}
      onMouseMove={handleMouseMove}
      whileHover={{ y: layout === "stack" ? -4 : -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-8 ${
        layout === "scroll"
          ? "w-[85vw] shrink-0 sm:w-[26rem] md:p-10"
          : "w-full"
      }`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <span
          className="grid h-12 w-12 place-items-center rounded-2xl text-lg font-bold sm:h-14 sm:w-14 sm:text-xl"
          style={{
            background: `${project.accent}1f`,
            color: project.accent,
            boxShadow: `0 0 40px -8px ${project.accent}`,
          }}
        >
          {project.title.charAt(0)}
        </span>
        <span className="font-mono text-4xl font-bold text-white/[0.04] sm:text-6xl">
          0{index + 1}
        </span>
      </div>

      <h3 className="relative z-10 mt-6 font-display text-xl font-semibold sm:mt-8 sm:text-2xl md:text-3xl">
        {project.title}
      </h3>
      <p className="relative z-10 mt-3 flex-1 text-sm text-muted sm:text-base">
        {project.description}
      </p>

      <div className="relative z-10 mt-5 flex flex-wrap gap-2 sm:mt-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-medium text-accent sm:mt-8">
        View project
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </motion.a>
  );
}

function ProjectsHeading() {
  return (
    <>
      <Reveal>
        <div className="mb-3 flex items-center gap-3 font-mono text-sm text-accent-2">
          <span>03</span>
          <span className="h-px w-10 bg-gradient-to-r from-accent-2 to-transparent" />
        </div>
      </Reveal>
      <div className="mb-8 flex flex-col gap-3 sm:mb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-4">
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Selected work
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-sm text-muted sm:text-base">
            Real-time platforms, IoT systems, and operational software I&apos;ve
            built for production teams.
          </p>
        </Reveal>
      </div>
    </>
  );
}

function ProjectsMobile() {
  return (
    <section className="py-16 sm:py-20 lg:hidden">
      <div className="container-page">
        <ProjectsHeading />
        <div className="flex flex-col gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <ProjectCard project={project} index={index} layout="stack" />
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <a
              href="#contact"
              className="glass glow-ring flex flex-col items-center gap-3 rounded-3xl px-8 py-10 text-center"
            >
              <span className="font-display text-xl font-semibold sm:text-2xl">
                Have an idea?
              </span>
              <span className="text-sm text-muted sm:text-base">
                Let&apos;s build it →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectsDesktop() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  const x = useTransform(smooth, [0, 1], ["2%", "-78%"]);
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={targetRef} className="relative hidden h-[320vh] lg:block">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="container-page">
          <ProjectsHeading />
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              layout="scroll"
            />
          ))}
          <div className="grid w-[20rem] shrink-0 place-items-center">
            <a
              href="#contact"
              className="glass glow-ring flex flex-col items-center gap-3 rounded-3xl px-10 py-12 text-center"
            >
              <span className="font-display text-2xl font-semibold">
                Have an idea?
              </span>
              <span className="text-muted">Let&apos;s build it →</span>
            </a>
          </div>
        </motion.div>

        <div className="container-page mt-10">
          <div className="h-1 w-full overflow-hidden rounded-full bg-border">
            <motion.div
              style={{ width: progressBar }}
              className="h-full rounded-full bg-gradient-to-r from-accent via-accent-2 to-accent-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <div id="work" className="scroll-mt-24">
      <ProjectsMobile />
      <ProjectsDesktop />
    </div>
  );
}
