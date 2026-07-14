import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";

interface CTASectionProps {
  heading: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CTASection({
  heading,
  description,
  buttonLabel = "Get in Touch",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {description}
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href={buttonHref}>
              {buttonLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
