"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { navLinks, profile } from "@/lib/content";
import { Logo } from "@/components/Logo";
import { CvDownload } from "@/components/CvDownload";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;
    setScrolled(current > 24);
    if (menuOpen) return;
    setHidden(diff > 8 && current > 200);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: hidden ? -100 : 0,
        opacity: 1,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between gap-2 rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 ${
          scrolled ? "glass glow-ring" : "border border-transparent"
        }`}
      >
        <a
          href="#top"
          className="group flex shrink-0 items-center"
          aria-label={profile.name}
        >
          <Logo
            size={64}
            className="h-12 w-12 min-h-12 min-w-12 transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:min-h-14 sm:min-w-14 lg:h-16 lg:w-16 lg:min-h-16 lg:min-w-16"
          />
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-lg px-2 py-2 text-xs text-muted transition-colors hover:text-foreground xl:px-3 xl:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <CvDownload className="hidden px-4 py-2 text-sm lg:inline-flex" />
          <a
            href="#contact"
            className="hidden rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-95 sm:inline-block"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border lg:hidden"
          >
            <div className="space-y-1.5">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-5 bg-foreground"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-5 bg-foreground"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-5 bg-foreground"
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass absolute inset-x-3 top-[4.25rem] rounded-2xl p-4 sm:inset-x-4 sm:top-20 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.cv}
                  download={profile.cvFileName}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  Download CV
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 block rounded-lg bg-foreground px-4 py-3 text-center font-medium text-background"
                >
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
