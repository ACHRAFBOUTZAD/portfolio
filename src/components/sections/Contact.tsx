"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/animations/Reveal";
import { CvDownload } from "@/components/CvDownload";
import { profile } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="container-page scroll-mt-24 py-16 sm:py-24 md:py-32"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-4 py-12 text-center sm:rounded-[2rem] sm:px-6 sm:py-16 md:px-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-accent-2/15 blur-[120px]" />
        </div>

        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2 sm:text-sm sm:tracking-[0.3em]">
            06 — Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">exceptional</span> together.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full items-center justify-center gap-2 break-all rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3.5 text-sm font-medium text-white shadow-xl shadow-accent/30 sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-lg"
            >
              {profile.email}
              <span aria-hidden>→</span>
            </motion.a>
            <CvDownload variant="glass" className="w-full justify-center text-base sm:w-auto" />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted sm:mt-10 sm:gap-6">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
