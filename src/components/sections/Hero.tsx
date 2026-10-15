"use client";

import { motion, type Variants } from "motion/react";
import { profile } from "@/lib/content";
import { ProfileImage } from "@/components/ProfileImage";
import { HeroName } from "@/components/animations/HeroName";
import { CvDownload } from "@/components/CvDownload";

const initials = `${profile.firstName[0]}${profile.lastName[0]}`;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section id="top" className="pb-16 pt-28 sm:pt-32 lg:pb-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="min-w-0"
        >
          <motion.p
            variants={item}
            className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-accent sm:text-sm"
          >
            {profile.role}
          </motion.p>

          <HeroName />

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 font-semibold text-ink-500 transition-colors hover:bg-tangerine-600 active:scale-[0.98]"
            >
              View my work
            </a>
            <CvDownload />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[400px]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
            <ProfileImage
              src={profile.image}
              alt={profile.name}
              initials={initials}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
