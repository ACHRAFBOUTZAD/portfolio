"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/animations/Reveal";
import { profile } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="container-page scroll-mt-24 py-24 md:py-32"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface px-6 py-16 text-center md:px-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-accent-2/15 blur-[120px]" />
        </div>

        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-2">
            05 — Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
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
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-8 py-4 text-lg font-medium text-white shadow-xl shadow-accent/30"
          >
            {profile.email}
            <span aria-hidden>→</span>
          </motion.a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted">
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
