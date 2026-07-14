import Image from "next/image";
import { Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { categoryImages } from "@/lib/images";
import type { ProjectCategory } from "@/types";

interface ProjectCategoryDetailProps {
  category: ProjectCategory;
}

export function ProjectCategoryDetail({ category }: ProjectCategoryDetailProps) {
  const Icon = category.icon;
  const image = categoryImages[category.slug];

  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/55" />

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon className="h-7 w-7" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading mt-6 max-w-3xl text-4xl font-bold sm:text-5xl">
              {category.name}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">
              {category.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-2xl font-bold text-primary">
              Selected Projects
            </h2>
            <span className="text-sm font-medium text-muted-foreground">
              {category.projects.length} Projects
            </span>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.projects.map((project, index) => (
            <Reveal key={project} delay={Math.min(index, 8) * 0.04}>
              <Card className="border-border bg-card">
                <CardContent className="flex items-center gap-3 p-5">
                  <Building2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    {project}
                  </span>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        heading={`Planning a ${category.name.toLowerCase()} project?`}
        description="Bring us your brief and we'll walk you through how our team can take it from concept to completion."
      />
    </>
  );
}
