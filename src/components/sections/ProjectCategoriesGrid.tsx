import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { projectCategories } from "@/lib/data";

export function ProjectCategoriesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projectCategories.map((category) => {
        const Icon = category.icon;
        return (
          <Link key={category.slug} href={`/projects/${category.slug}`}>
            <Card className="group h-full border-border bg-card transition-shadow hover:shadow-md">
              <CardContent className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <h3 className="font-heading mt-5 text-xl font-semibold text-primary">
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
        );
      })}
    </div>
  );
}
