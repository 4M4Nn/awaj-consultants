import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { services, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AWAJ provides architectural design, structural design, electro-mechanical engineering, project management and full pre- and post-contract cost consultancy across the UAE.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Services
          </p>
          <h1 className="font-heading mt-2 max-w-3xl text-4xl font-bold sm:text-5xl">
            Technical expertise for projects of every scale
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">
            {siteConfig.fullName} has the technical expertise and
            infrastructure to provide services to all types and magnitude of
            projects — from first design sketch through to contract close-out.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={`${services.length} Disciplines`}
          title="Our service offering"
          description="Every service below is delivered in-house, so design intent, cost and buildability stay aligned from start to finish."
        />
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </section>

      <CTASection
        heading="Not sure which service you need?"
        description="Share your project brief with our team and we'll recommend the right combination of services to take it forward."
      />
    </>
  );
}
