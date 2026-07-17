"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
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
      href={project.href ?? "#"}
      target={project.href?.startsWith("http") ? "_blank" : undefined}
      rel={project.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      whileHover={{ y: layout === "stack" ? -4 : -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface ${
        layout === "scroll"
          ? "h-[min(34rem,calc(100vh-11rem))] w-[22rem] shrink-0 xl:w-[24rem]"
          : "w-full"
      }`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />

      {project.image ? (
        <div
          className={`relative w-full shrink-0 overflow-hidden ${
            layout === "scroll" ? "h-40 xl:h-44" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            sizes="(max-width: 640px) 85vw, 24rem"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/25 to-transparent" />
          <span className="absolute right-4 top-4 z-10 font-mono text-3xl font-bold text-white/25 sm:right-5 sm:top-5 sm:text-4xl">
            0{index + 1}
          </span>
        </div>
      ) : (
        <div className="relative flex shrink-0 items-center justify-between px-6 pt-6 sm:px-8 sm:pt-8">
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
          <span className="font-mono text-4xl font-bold text-white/[0.04] sm:text-5xl">
            0{index + 1}
          </span>
        </div>
      )}

      <div
        className={`relative z-10 flex min-h-0 flex-1 flex-col px-5 pb-5 sm:px-6 sm:pb-6 ${
          project.image ? "pt-4" : "pt-5 sm:pt-6"
        }`}
      >
        <h3 className="font-display text-lg font-semibold leading-snug sm:text-xl xl:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-accent">
          View project
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function ProjectsHeading({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <Reveal>
        <div
          className={`flex items-center gap-3 font-mono text-sm text-accent-2 ${
            compact ? "mb-2" : "mb-3"
          }`}
        >
          <span>03</span>
          <span className="h-px w-10 bg-gradient-to-r from-accent-2 to-transparent" />
        </div>
      </Reveal>
      <div
        className={`flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-4 ${
          compact ? "mb-5" : "mb-8 sm:mb-10"
        }`}
      >
        <Reveal delay={0.05}>
          <h2
            className={`font-display font-bold tracking-tight ${
              compact
                ? "text-3xl xl:text-4xl"
                : "text-3xl sm:text-4xl md:text-5xl"
            }`}
          >
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
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-8">
        <div className="container-page shrink-0">
          <ProjectsHeading compact />
        </div>

        <motion.div
          style={{ x }}
          className="flex shrink-0 items-stretch gap-6 pl-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              layout="scroll"
            />
          ))}
          <div className="grid w-[18rem] shrink-0 place-items-center self-stretch">
            <a
              href="#contact"
              className="glass glow-ring flex h-full max-h-[min(34rem,calc(100vh-11rem))] w-full flex-col items-center justify-center gap-3 rounded-3xl px-8 py-10 text-center"
            >
              <span className="font-display text-2xl font-semibold">
                Have an idea?
              </span>
              <span className="text-muted">Let&apos;s build it →</span>
            </a>
          </div>
        </motion.div>

        <div className="container-page mt-6 shrink-0">
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
