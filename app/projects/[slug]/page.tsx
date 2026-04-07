import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectPageClient from "./ProjectPageClient";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Projet non trouvé" };
  return {
    title: `${project.title} — VG Portfolio`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectPageClient project={project} />;
}