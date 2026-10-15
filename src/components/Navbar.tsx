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
    const nextScrolled = current > 24;
    setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
    if (menuOpen) return;
    const nextHidden = diff > 8 && current > 200;
    const nextVisible = diff < -8 || current <= 200;
    if (nextHidden) {
      setHidden((prev) => (prev ? prev : true));
    } else if (nextVisible) {
      setHidden((prev) => (prev ? false : prev));
    }
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: hidden ? -100 : 0,
        opacity: 1,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between gap-2 rounded-2xl border px-3 py-2 transition-colors sm:px-4 ${
          scrolled || menuOpen
            ? "border-border bg-background/85 backdrop-blur-md"
            : "border-transparent"
        }`}
      >
        <a
          href="#top"
          className="flex shrink-0 items-center"
          aria-label={profile.name}
        >
          <Logo size={48} className="h-11 w-11 sm:h-12 sm:w-12" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <CvDownload className="px-4 py-2 text-sm" />
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden"
          >
            <div className="space-y-1.5">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-5 bg-foreground"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-5 bg-foreground"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-5 bg-foreground"
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-3 top-[4.75rem] rounded-2xl border border-border bg-background/95 p-3 backdrop-blur-md sm:inset-x-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-muted transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-1">
                <CvDownload variant="primary" className="w-full" />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
