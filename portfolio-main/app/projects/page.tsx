"use client";

import Link from "next/link";
import { projects } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { TechBadge } from "@/components/ui/TechBadge";

export default function ProjectsPage() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-32">
          <div className="flex items-center justify-between mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to portfolio
            </Link>
            <ThemeToggle />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light">
                Featured Projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A curated selection of projects that showcase my expertise in
                full-stack development, design systems, and devops.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="space-y-8 sm:space-y-12">
              {projects.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`}>
                  <article className="group p-6 my-6 border-b border-border rounded-lg hover:border-muted-foreground/50 hover:shadow-lg transition-all duration-500 cursor-pointer">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <h2 className="text-lg sm:text-2xl font-medium group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-500/90 group-hover:to-cyan-500/90 transition-all duration-500">
                            {project.name}
                          </h2>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            {project.year}
                            {project.ongoing && (
                              <span className="flex items-center gap-1.5 ml-1">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-emerald-500 font-medium text-xs uppercase tracking-wider">Ongoing</span>
                              </span>
                            )}
                          </p>
                        </div>
                        <svg
                          className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all duration-300 shrink-0 mt-1 transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((tech) => (
                          <TechBadge key={tech} tech={tech} />
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
