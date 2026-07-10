"use client";

import { motion } from "motion/react";

export function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        className="absolute -left-1/4 top-[-10%] h-[45rem] w-[45rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,125,0,0.35), transparent 65%)",
        }}
        animate={{
          x: [0, 120, -40, 0],
          y: [0, 60, 120, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[10%] h-[40rem] w-[40rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(62,197,218,0.30), transparent 65%)",
        }}
        animate={{
          x: [0, -100, 40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[30%] h-[38rem] w-[38rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(230,98,53,0.28), transparent 65%)",
        }}
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Rotating conic sheen */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
        style={{
          background:
            "conic-gradient(from 0deg, #ff7d00, #3ec5da, #e66235, #ff7d00)",
          maskImage:
            "radial-gradient(circle, transparent 30%, black 55%, transparent 75%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
