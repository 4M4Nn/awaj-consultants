import type { Metadata } from "next";
import { ProjectCategoryDetail } from "@/components/sections/ProjectCategoryDetail";
import { projectCategories } from "@/lib/data";

const category = projectCategories.find((c) => c.slug === "master-planning")!;

export const metadata: Metadata = {
  title: category.name,
  description: category.description,
};

export default function MasterPlanningProjectsPage() {
  return <ProjectCategoryDetail category={category} />;
}
