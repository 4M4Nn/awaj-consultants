import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig, yearsInBusiness } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="bg-grid-pattern absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Badge className="border-accent/40 bg-accent/10 text-accent hover:bg-accent/10">
          Established {siteConfig.founded} &middot; Dubai, UAE
        </Badge>
        <h1 className="font-heading mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {siteConfig.tagline}.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">
          {siteConfig.fullName} is a Dubai-based firm of consulting architects,
          engineers and planners with {yearsInBusiness()}+ years designing
          residential, educational, industrial, master-planned and special
          projects across the UAE.
        </p>
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
      </div>
    </section>
  );
}
