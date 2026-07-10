"use client";

import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";
import { profile } from "@/lib/content";
import { ProfileImage } from "@/components/ProfileImage";
import { Aurora } from "@/components/animations/Aurora";
import { Magnetic } from "@/components/animations/Magnetic";
import { Orbit } from "@/components/animations/Orbit";

const initials = `${profile.firstName[0]}${profile.lastName[0]}`;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: "0.5em", rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 200, damping: 18 },
  },
};

const letterGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      variants={letterGroup}
      className={className}
      style={{ display: "inline-block" }}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={letter}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-linked: fade + push hero content back as the user scrolls away.
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative z-10 flex min-h-[100svh] items-center overflow-x-hidden overflow-y-visible pb-20 pt-28 lg:pb-28"
    >
      {/* Animated aurora background */}
      <motion.div style={{ y: blobY }} className="absolute inset-0 -z-10">
        <Aurora />
      </motion.div>

      <motion.div
        style={{ opacity, scale, y }}
        className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {profile.available && (
            <motion.div
              variants={item}
              className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </motion.div>
          )}

          <motion.p
            variants={item}
            className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent-2"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ perspective: 600 }}
          >
            <AnimatedText text={profile.firstName} className="block text-gradient" />
            <AnimatedText text={profile.lastName} className="block text-foreground/90" />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-muted md:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                className="group relative block overflow-hidden rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-semibold text-ink-500 shadow-lg shadow-accent/30"
              >
                <span className="relative z-10">View my work</span>
                <span className="absolute inset-0 -z-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="glass block rounded-xl px-6 py-3 font-medium text-foreground transition-colors hover:bg-white/10"
              >
                Get in touch
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex items-center gap-6 text-sm text-muted"
          >
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
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 mx-auto hidden w-full max-w-[420px] lg:block"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent-2/20 to-accent-3/20 blur-2xl" />
            <div className="glass glow-ring relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <ProfileImage
                src={profile.image}
                alt={profile.name}
                initials={initials}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Orbiting keywords under the photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Orbit />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-dark md:flex"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
        <div className="flex h-9 w-5 justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-accent-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
