import type { Metadata } from "next";
import { Building, Target, Users } from "lucide-react";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatsBand } from "@/components/sections/StatsBand";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { leadership, siteConfig, yearsInBusiness } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AWAJ (Al Wasl Al Jadeed Consultants) — a Dubai-based firm of consulting architects and engineers founded in 1981, delivering projects across the UAE for over four decades.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            About Us
          </p>
          <h1 className="font-heading mt-2 max-w-3xl text-4xl font-bold sm:text-5xl">
            {yearsInBusiness()}+ years of concept-to-completion delivery
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">
            {siteConfig.fullName} was established in {siteConfig.founded} by
            Obaid Ghanim A. R. Al Mutaiwei and Shyam Kolhatkar, recognising the
            need for a local design practice in the rapidly growing coastal
            city of Dubai. The firm has since grown into a leading consultancy
            of architects, engineers and planners with specialised expertise
            in residential, commercial and industrial developments.
          </p>
        </div>
      </section>

      <StatsBand />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <Building className="h-8 w-8 text-accent" />
              <h3 className="font-heading mt-4 text-lg font-semibold text-primary">
                Who We Are
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                An integrated firm of architects, structural and
                electro-mechanical engineers, planners and cost consultants
                operating out of Dubai, United Arab Emirates.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <Target className="h-8 w-8 text-accent" />
              <h3 className="font-heading mt-4 text-lg font-semibold text-primary">
                How We Work
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Based on collective work and shared knowledge, we work
                collaboratively with clients, communities and end users to
                create buildings that work well on every level.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-accent" />
              <h3 className="font-heading mt-4 text-lg font-semibold text-primary">
                What We Deliver
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Residential, educational, industrial, master planning and
                special projects — carried from concept through to
                completion by one accountable team.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind AWAJ"
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {leadership.map((leader) => (
              <Card key={leader.name} className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-primary">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {leader.role}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to build with AWAJ?"
        description="From first sketch to final handover, our team is ready to bring the same rigour to your next project."
      />
    </>
  );
}
