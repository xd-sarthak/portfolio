"use client";

import Link from "next/link";
import { projects } from "@/lib/data";
import { generateStructuredData } from "@/lib/seo";
import { ThemeToggle } from "@/components/theme-toggle";
import React, { useEffect } from "react";
import { parseLongDescription } from "@/lib/parse";
import Image from "next/image";
import { Github } from "lucide-react";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-light">Project Not Found</h1>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const structuredData = generateStructuredData("project", project);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="min-h-screen">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-32">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to projects
            </Link>
            <ThemeToggle />
          </div>

          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  {project.year}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light">
                  {project.name}
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  {project.description}
                </p>

                {/* Live + Source Buttons (Side-by-Side) */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  {project.link && (
                    <Link
                      href={project.link}
                      className="bg-foreground text-background inline-flex items-center gap-2 px-6 py-3 border border-muted-foreground/30 rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      Live Project
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  )}

                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-flex bg-accent/45 backdrop-blur-lg items-center gap-2 px-6 py-3 border border-muted-foreground/30 rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      Source Code
                      <Github className="w-4 h-4" />
                    </Link>
                  )}

                  {project.blogSlug && (
                    <Link
                      href={`/blog/${project.blogSlug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-muted-foreground/30 rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      Read more
                      <svg
                        className="w-4 h-4"
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
                    </Link>
                  )}
                </div>
                {/* Technology Stack */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Technology Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Image */}
            {project.image && (
              <div className="w-full h-96 bg-muted rounded-lg overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  height={100}
                  width={100}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-invert max-w-none space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-light">Overview</h2>
                {/* Enhanced Long Description */}
                <div className="space-y-16">
                  {parseLongDescription(project.longDescription || "").map(
                    (section, index) => (
                      <div key={index} className="space-y-6">
                        {/* Section Header */}
                        <div className="flex items-center gap-3">
                          <div className="h-5 w-1.5 rounded bg-muted-foreground/40"></div>
                          <h3 className="text-2xl font-medium tracking-tight">
                            {section.title}
                          </h3>
                        </div>

                        {/* Section Content */}
                        {section.bullets ? (
                          <ul className="space-y-3 pl-1">
                            {section.bullets.map((item, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-muted-foreground leading-relaxed"
                              >
                                <span className="text-base mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-muted-foreground leading-relaxed text-[17px] whitespace-pre-line">
                            {section.content}
                          </p>
                        )}

                        {/* Subtle Divider */}
                        {index !==
                          parseLongDescription(project.longDescription || "")
                            .length -
                            1 && (
                          <div className="h-px w-full bg-border/50 my-10"></div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
