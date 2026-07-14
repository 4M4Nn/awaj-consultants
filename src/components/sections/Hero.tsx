"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig, yearsInBusiness } from "@/lib/data";
import { heroImage } from "@/lib/images";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/50" />
      <div className="bg-grid-pattern absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <Reveal>
          <Badge className="border-accent/40 bg-accent/10 text-accent hover:bg-accent/10">
            Established {siteConfig.founded} &middot; Dubai, UAE
          </Badge>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-heading mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">
            {siteConfig.fullName} is a Dubai-based firm of consulting architects,
            engineers and planners with {yearsInBusiness()}+ years designing
            residential, educational, industrial, master-planned and special
            projects across the UAE.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/projects">
                View Our Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
