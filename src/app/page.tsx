import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProjectCategoriesGrid } from "@/components/sections/ProjectCategoriesGrid";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { GallerySection } from "@/components/sections/GallerySection";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { services, siteConfig, yearsInBusiness } from "@/lib/data";

export default function Home() {
  const featuredServices = services.slice(0, 6);

  return (
    <>
      <Hero />
      <StatsBand />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What We Do"
              title="A full consultancy under one roof"
              description={`${siteConfig.fullName} brings architectural, engineering and cost consultancy disciplines together, so every project is designed, costed and delivered by one accountable team.`}
            />
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/services">
                All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
        <div className="mt-10">
          <ServicesGrid items={featuredServices} />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="Our Work"
                title="Projects across the UAE"
                description={`${yearsInBusiness()}+ years of residential, educational, industrial, master-planned and special projects.`}
              />
              <Button asChild variant="outline" className="shrink-0">
                <Link href="/projects">
                  All Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <div className="mt-10">
            <ProjectCategoriesGrid />
          </div>
        </div>
      </section>

      <GallerySection />

      <CTASection
        heading="Have a project in mind?"
        description="Tell us about your site, your programme and your goals — our team will get back to you to scope the right services for your project."
      />
    </>
  );
}
