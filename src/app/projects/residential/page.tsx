import type { Metadata } from "next";
import { ProjectCategoryDetail } from "@/components/sections/ProjectCategoryDetail";
import { projectCategories } from "@/lib/data";

const category = projectCategories.find((c) => c.slug === "residential")!;

export const metadata: Metadata = {
  title: category.name,
  description: category.description,
};

export default function ResidentialProjectsPage() {
  return <ProjectCategoryDetail category={category} />;
}
