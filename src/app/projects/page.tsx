import type { Metadata } from "next";
import Image from "next/image";
import { ProjectCategoriesGrid } from "@/components/sections/ProjectCategoriesGrid";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { projectCategories, yearsInBusiness } from "@/lib/data";
import { heroImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore AWAJ's portfolio of residential, educational, industrial, master-planned and special projects delivered across the United Arab Emirates.",
};

export default function ProjectsPage() {
  const totalProjects = projectCategories.reduce(
    (sum, category) => sum + category.projects.length,
    0
  );

  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/55" />

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Projects
            </p>
            <h1 className="font-heading mt-2 max-w-3xl text-4xl font-bold sm:text-5xl">
              {yearsInBusiness()}+ years of work across the UAE
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">
              From standalone villas to full university master plans, our
              portfolio spans {totalProjects}+ listed projects across five
              categories.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Browse by Category"
            title="Our project categories"
          />
        </Reveal>
        <div className="mt-10">
          <ProjectCategoriesGrid />
        </div>
      </section>

      <CTASection
        heading="Want to discuss a similar project?"
        description="Tell us about your site and programme and our team will help scope the right approach."
      />
    </>
  );
}
