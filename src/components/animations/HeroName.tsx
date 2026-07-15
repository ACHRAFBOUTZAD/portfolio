"use client";

import { motion, type Variants } from "motion/react";
import { profile } from "@/lib/content";

const nameGroup: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

const revealLine: Variants = {
  hidden: { y: "115%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const underline: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroName() {
  return (
    <motion.h1
      variants={nameGroup}
      className="relative font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
    >
      <span className="block overflow-hidden pb-1">
        <motion.span variants={revealLine} className="block text-gradient-animated">
          {profile.firstName}
        </motion.span>
      </span>

      <span className="block overflow-hidden pb-1">
        <motion.span variants={revealLine} className="block text-foreground/90">
          {profile.lastName}
        </motion.span>
      </span>

      <motion.span
        variants={underline}
        aria-hidden
        className="mt-2 block h-[3px] w-full max-w-[12rem] origin-left rounded-full bg-gradient-to-r from-accent via-accent-2 to-transparent sm:max-w-[16rem]"
      />
    </motion.h1>
  );
}
