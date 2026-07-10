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

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative flex h-full w-[80vw] shrink-0 flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:w-[26rem] md:p-10"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <span
          className="grid h-14 w-14 place-items-center rounded-2xl text-xl font-bold"
          style={{
            background: `${project.accent}1f`,
            color: project.accent,
            boxShadow: `0 0 40px -8px ${project.accent}`,
          }}
        >
          {project.title.charAt(0)}
        </span>
        <span className="font-mono text-6xl font-bold text-white/[0.04]">
          0{index + 1}
        </span>
      </div>

      <h3 className="relative z-10 mt-8 font-display text-2xl font-semibold md:text-3xl">
        {project.title}
      </h3>
      <p className="relative z-10 mt-3 flex-1 text-muted">
        {project.description}
      </p>

      <div className="relative z-10 mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-medium text-accent">
        View project
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </motion.a>
  );
}

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  // Move the horizontal track as the user scrolls through the tall section.
  const x = useTransform(smooth, [0, 1], ["2%", "-78%"]);
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="work" ref={targetRef} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="container-page">
          <Reveal>
            <div className="mb-3 flex items-center gap-3 font-mono text-sm text-accent-2">
              <span>03</span>
              <span className="h-px w-10 bg-gradient-to-r from-accent-2 to-transparent" />
            </div>
          </Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Selected work
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="hidden max-w-sm text-muted md:block">
                Scroll to explore — AI products, DevOps platforms and full-stack
                builds.
              </p>
            </Reveal>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
          <div className="grid w-[60vw] shrink-0 place-items-center sm:w-[20rem]">
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
