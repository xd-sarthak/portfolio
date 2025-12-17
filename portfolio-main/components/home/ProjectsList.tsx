"use client";

import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function ProjectsList({ projects }: { projects: any[] }) {
  return (
    <div className="space-y-12 sm:space-y-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl font-medium">Featured Projects</h2>
        <div className="text-sm text-muted-foreground font-mono">SHOWCASE</div>
      </div>

      <div className="space-y-8 sm:space-y-12">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/projects/${project.slug}`}
            className="group block py-4 mx-auto sm:py-6 border-b border-border rounded-lg hover:border-muted-foreground/30 transition-all duration-700"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-700">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.year}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all duration-700 shrink-0 mt-1 transform group-hover:translate-x-0.5"
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

              <div className="flex flex-wrap gap-x-2 gap-y-1 pt-2">
                {project.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg text-muted-foreground group-hover:border-muted-foreground/30 transition-colors duration-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/projects"
              className="px-4 py-2 rounded-lg hover:border-muted-foreground/50 text-sm transition-all duration-300 hover:shadow-sm flex items-center gap-2 bg-accent"
            >
              All Projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="top">See all projects</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
