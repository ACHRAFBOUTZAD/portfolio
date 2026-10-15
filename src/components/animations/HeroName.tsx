"use client";

import { motion, type Variants } from "motion/react";
import { profile } from "@/lib/content";

const nameGroup: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const revealLine: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroName() {
  return (
    <motion.h1
      variants={nameGroup}
      className="font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
    >
      <span className="block overflow-hidden pb-1">
        <motion.span variants={revealLine} className="block">
          {profile.firstName}
        </motion.span>
      </span>
      <span className="block overflow-hidden pb-1">
        <motion.span variants={revealLine} className="block text-muted">
          {profile.lastName}
        </motion.span>
      </span>
    </motion.h1>
  );
}
