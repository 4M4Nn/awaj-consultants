"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { introSlides } from "@/lib/images";
import { siteConfig } from "@/lib/data";

const SESSION_KEY = "awaj-intro-played";
const SLIDE_DURATION_MS = 1100;
const WORDMARK_HOLD_MS = 900;
const FADE_OUT_MS = 500;

type Phase = "slides" | "wordmark" | "done";

export function IntroSequence() {
  const [shouldRender, setShouldRender] = useState(false);
  const [phase, setPhase] = useState<Phase>("slides");
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const alreadyPlayed = window.sessionStorage.getItem(SESSION_KEY);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (alreadyPlayed || prefersReducedMotion) {
      window.sessionStorage.setItem(SESSION_KEY, "1");
      return;
    }

    queueMicrotask(() => setShouldRender(true));
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!shouldRender || phase !== "slides") return;

    if (slideIndex >= introSlides.length - 1) {
      const timer = setTimeout(() => setPhase("wordmark"), SLIDE_DURATION_MS);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => setSlideIndex((i) => i + 1), SLIDE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [shouldRender, phase, slideIndex]);

  useEffect(() => {
    if (phase !== "wordmark") return;
    const timer = setTimeout(() => setPhase("done"), WORDMARK_HOLD_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "done") return;
    window.sessionStorage.setItem(SESSION_KEY, "1");
    document.documentElement.style.overflow = "";
    const timer = setTimeout(() => setShouldRender(false), FADE_OUT_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  function handleSkip() {
    window.sessionStorage.setItem(SESSION_KEY, "1");
    document.documentElement.style.overflow = "";
    setShouldRender(false);
  }

  if (!shouldRender) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden bg-primary"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "done" ? 0 : 1 }}
      transition={{ duration: FADE_OUT_MS / 1000, ease: "easeInOut" }}
    >
      <AnimatePresence mode="sync">
        {phase === "slides" && (
          <motion.div
            key={introSlides[slideIndex].src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.18 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.4, ease: "easeInOut" },
              scale: { duration: SLIDE_DURATION_MS / 1000, ease: "linear" },
            }}
          >
            <Image
              src={introSlides[slideIndex].src}
              alt={introSlides[slideIndex].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/40" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "wordmark" && (
          <motion.div
            key="wordmark"
            className="absolute inset-0 flex flex-col items-center justify-center bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl"
            >
              {siteConfig.name}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              className="mt-3 text-sm uppercase tracking-[0.3em] text-accent"
            >
              {siteConfig.tagline}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {phase === "slides" && (
        <button
          type="button"
          onClick={handleSkip}
          className="absolute right-6 top-6 z-10 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
        >
          Skip intro
        </button>
      )}
    </motion.div>
  );
}
