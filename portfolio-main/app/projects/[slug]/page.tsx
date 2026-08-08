import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { generateProjectMetadata } from "@/lib/seo";
import ProjectDetail from "@/components/projects/project-detail";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Sarthak Srivastav",
      robots: { index: false, follow: false },
    };
  }

  return generateProjectMetadata(project);
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ProjectDetail slug={slug} />;
}
