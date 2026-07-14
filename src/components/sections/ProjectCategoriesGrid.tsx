import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import { projectCategories } from "@/lib/data";
import { categoryImages } from "@/lib/images";

export function ProjectCategoriesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projectCategories.map((category, index) => {
        const Icon = category.icon;
        const image = categoryImages[category.slug];
        return (
          <Reveal key={category.slug} delay={index * 0.08} className="h-full">
            <Link href={`/projects/${category.slug}`} className="block h-full">
              <Card className="group h-full overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-primary-foreground/80 transition-colors group-hover:text-accent" />
                </div>
                <CardContent className="flex flex-col p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {category.summary}
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-widest text-accent">
                    {category.projects.length} Projects
                  </p>
                </CardContent>
              </Card>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
