"use client";

import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";
import { profile } from "@/lib/content";
import { ProfileImage } from "@/components/ProfileImage";
import { Aurora } from "@/components/animations/Aurora";
import { Magnetic } from "@/components/animations/Magnetic";
import { Orbit } from "@/components/animations/Orbit";
import { HeroName } from "@/components/animations/HeroName";
import { CvDownload } from "@/components/CvDownload";

const initials = `${profile.firstName[0]}${profile.lastName[0]}`;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function HeroPortrait({ showOrbit = true }: { showOrbit?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-20 mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[420px]"
    >
      <div className="relative">
        <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent-2/20 to-accent-3/20 blur-2xl sm:-inset-4" />
        <div className="glass glow-ring relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
          <ProfileImage
            src={profile.image}
            alt={profile.name}
            initials={initials}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>
      </div>

      {showOrbit && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block"
        >
          <Orbit />
        </motion.div>
      )}
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative z-10 overflow-x-clip pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pb-28 lg:pt-28"
    >
      <motion.div style={{ y: blobY }} className="absolute inset-0 -z-10">
        <Aurora />
      </motion.div>

      <motion.div
        style={{ opacity, scale, y }}
        className="container-page"
      >
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="min-w-0"
          >
            {profile.available && (
              <motion.div
                variants={item}
                className="glass mb-5 inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted sm:mb-6 sm:px-4 sm:text-sm"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for new projects
              </motion.div>
            )}

            <motion.p
              variants={item}
              className="mb-3 text-[0.65rem] font-mono uppercase leading-relaxed tracking-[0.12em] text-accent-2 sm:mb-4 sm:text-sm sm:tracking-[0.2em]"
            >
              {profile.role}
            </motion.p>

            <HeroName />

            <motion.p
              variants={item}
              className="mt-4 max-w-xl text-base text-muted sm:mt-6 sm:text-lg md:text-xl"
            >
              {profile.tagline}
            </motion.p>

            {/* Mobile / tablet portrait */}
            <motion.div variants={item} className="mt-8 lg:hidden">
              <HeroPortrait showOrbit={false} />
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Magnetic className="w-full sm:w-auto">
                <a
                  href="#work"
                  className="group relative block w-full overflow-hidden rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-center font-semibold text-ink-500 shadow-lg shadow-accent/30 sm:w-auto"
                >
                  <span className="relative z-10">View my work</span>
                  <span className="absolute inset-0 -z-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
                </a>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <CvDownload variant="glass" className="w-full justify-center sm:w-auto" />
              </Magnetic>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted sm:mt-12 sm:gap-6"
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

          {/* Desktop portrait */}
          <div className="hidden lg:block">
            <HeroPortrait />
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-dark md:flex"
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
