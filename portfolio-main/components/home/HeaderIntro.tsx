"use client";

import { File, FileText, Github } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function HeaderIntro() {
  return (
    <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-emerald-500/10 rounded-full blur-[100px] lg:blur-[120px] -z-10 pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="lg:col-span-3 space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-4">
          <div className="text-xs sm:text-sm text-emerald-400/80 font-mono tracking-widest uppercase">
            SOFTWARE DEVELOPER / {new Date().getFullYear()}
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.1] sm:leading-[1.1] lg:leading-[1.1]">
            <span className="block text-foreground">Sarthak</span>
            <span className="block text-muted-foreground">Srivastav</span>
          </h1>
        </div>

        <div className="space-y-6 max-w-md mt-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Software Developer building fast and scalable digital products using{" "}
            <span className="text-foreground">Next.js</span>,{" "}
            <span className="text-foreground">TypeScript</span>,{" "}
            <span className="text-foreground">Node.js</span>, and{" "}
            <span className="text-foreground">PostgreSQL</span>.
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/about-me" className="underline underline-offset-4 ml-1 text-emerald-400/80 hover:text-emerald-400 transition-colors">
                  Learn more about me.
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">
                About me — experience, skills, and contact
              </TooltipContent>
            </Tooltip>
          </p>

          <div className="flex flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={"mailto:sarthak.srivastav0203@gmail.com"}>
                    Software Developer for Hire
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">
                  sarthak.srivastav0203@gmail.com
                </TooltipContent>
              </Tooltip>
            </div>
            <div>India</div>
          </div>

          <div className="flex flex-wrap gap-3 pt-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://drive.google.com/file/d/18g5QcK0euGL4C_JQc61z1NMqLOME6PhU/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-2.5 bg-foreground rounded-xl text-sm font-medium text-background transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">Open resume (new tab)</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/projects"
                  className="flex-1 px-5 py-2.5 rounded-xl border border-border bg-transparent text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Projects
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">View projects</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/blog"
                  className="max-sm:hidden flex-1 px-5 py-2.5 rounded-xl border border-border bg-transparent text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent flex items-center justify-center gap-2"
                >
                  <File className="w-4 h-4" />
                  Read Blogs
                  <span className="sm:hidden">/ Articles</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">Browse blog posts</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground font-mono">
            PREVIOUSLY
          </div>
          <div className="space-y-2">
            <div className="text-foreground">SDE Intern</div>
            <div className="text-muted-foreground">@ Giftlaya</div>
            <div className="text-xs text-muted-foreground">
              May 2025 — August 2025
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "TypeScript",
              "Node.js",
              "Go",
              "PostgreSQL",
              "Prisma",
              "Redis",
              "AWS",
              "WebSockets",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div> */}

      <div className="lg:col-span-2 flex flex-col justify-center space-y-10 mt-12 lg:mt-0 lg:pl-12">
        <div className="space-y-4">
          <div className="text-xs sm:text-sm text-emerald-400/80 font-mono tracking-widest uppercase">
            WHAT I DO
          </div>
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl text-foreground font-medium">Building Products</h2>
            <p className="text-muted-foreground">
              From idea → architecture → development → launch
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-xs sm:text-sm text-emerald-400/80 font-mono tracking-widest uppercase">FOCUS</div>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Full-Stack Development",
              "Next.js / TypeScript",
              "Golang / Redis",
              "AI & RAG Infrastructure",
              "API Design & Async Queues",
              "Docker & Devops",
              "Observability (Prometheus/Grafana)",
            ].map((service) => (
              <span
                key={service}
                className="px-4 py-1.5 text-xs bg-black/40 border border-white/5 rounded-full text-zinc-300 hover:bg-white/5 hover:border-white/10 transition-colors duration-300"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
