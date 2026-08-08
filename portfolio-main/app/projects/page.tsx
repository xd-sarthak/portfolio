import type { Metadata } from "next";
import ProjectsListPage from "@/components/projects/projects-list-page";

export const metadata: Metadata = {
  title: "Projects | Sarthak Srivastav",
  description:
    "Database engines, distributed systems, AI agents, and low-level systems software built from scratch in Go, C++, Python, and TypeScript.",
  openGraph: {
    title: "Projects | Sarthak Srivastav",
    description:
      "Database engines, distributed systems, AI agents, and low-level systems software built from scratch.",
    url: "https://sarthaksri.vercel.app/projects",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Sarthak Srivastav",
    description:
      "Database engines, distributed systems, AI agents, and low-level systems software built from scratch.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://sarthaksri.vercel.app/projects" },
};

export default function Page() {
  return <ProjectsListPage />;
}
