import type { Metadata } from "next";
import { ProjectCategoryDetail } from "@/components/sections/ProjectCategoryDetail";
import { projectCategories } from "@/lib/data";

const category = projectCategories.find((c) => c.slug === "educational")!;

export const metadata: Metadata = {
  title: category.name,
  description: category.description,
};

export default function EducationalProjectsPage() {
  return <ProjectCategoryDetail category={category} />;
}
