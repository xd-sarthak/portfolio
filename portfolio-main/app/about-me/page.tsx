"use client";
import React from "react";
import ConnectSection from "@/components/home/ConnectSection";
import { ChevronLeft } from "lucide-react";

export default function AboutPage() {
  const socials = [
    {
      name: "GitHub",
      handle: "@xd-sarthak",
      url: "https://github.com/xd-sarthak",
    },
    {
      name: "LinkedIn",
      handle: "@sarthak-srivastav",
      url: "https://www.linkedin.com/in/sarthak-srivastav-a51207257/",
    },
    {
      name: "LeetCode",
      handle: "@real_sarthakkk",
      url: "https://leetcode.com/real_sarthakkk/",
    },
    {
      name: "Call / Whatsapp",
      handle: "@+91-9990439451",
      url: "https://wa.me/919990439451",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main
        className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12"
        aria-labelledby="about-heading"
      >
        <a className="sr-only sr-only-focusable" href="#main-content">
          Skip to content
        </a>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="h-5 w-5" />
          Back
        </button>

        <header className="mb-12">
          <h1
            id="about-heading"
            className="text-4xl sm:text-5xl font-medium tracking-tight"
          >
            About me
          </h1>

          <div className="mt-4 flex flex-wrap gap-2 items-center" aria-hidden>
            <span className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg">
              Full Stack Developer
            </span>
            <span className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg">
              AI & RAG Infrastructure
            </span>
            <span className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg">
              India
            </span>
          </div>

          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
            I’m a backend-focused software engineer building reliable systems at
            the intersection of distributed backends and AI. My work centers on
            designing clean APIs, scalable data pipelines, and
            RAG systems that solve real operational problems.
          </p>
        </header>

        <section id="intro" className="mb-12" aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="text-2xl font-semibold">
            Introduction
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I am a senior Electronics and Instrumentation Engineering student at the <strong className="text-foreground font-semibold">National Institute of Technology, Silchar</strong> (CGPA: 8.83) building high-performance full-stack systems at the intersection of distributed backends and AI.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Alongside my academic studies, I am an active competitive programmer and a <strong className="text-foreground font-semibold">Knight on LeetCode</strong> (Peak Rating: 1888, 700+ solved). I am also passionate about open-source security, having recently patched a critical path traversal vulnerability in the file jail check of the <strong className="text-foreground font-semibold">PocketPaw</strong> project.
          </p>
        </section>

        <section
          id="what-i-do"
          className="mb-12"
          aria-labelledby="what-i-do-heading"
        >
          <h2 id="what-i-do-heading" className="text-2xl font-semibold">
            What I do
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I focus on turning complex technical specifications into reliable, scalable digital products. That means defining clear API schemas, implementing robust event-driven message architectures, designing context-aware RAG pipelines, and integrating rich real-time frontends.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Full-Stack Engineering & Architecture
            </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              RAG pipelines & high-throughput vector search
            </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              API design, WebSockets, & event-driven queuing
            </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              System performance, concurrency, & observability
            </li>
          </ul>
        </section>

        <section
          id="skills"
          className="mb-12"
          aria-labelledby="skills-heading"
        >
          <h2 id="skills-heading" className="text-2xl font-semibold mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                category: "Languages",
                items: ["TypeScript", "JavaScript", "Python", "C++", "SQL", "Golang"],
              },
              {
                category: "Fullstack",
                items: [
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "WebSockets",
                  "React",
                  "RabbitMQ",
                  "Docker",
                  "Prometheus",
                  "Grafana",
                ],
              },
              {
                category: "AI & RAG",
                items: [
                  "LLM Prompting",
                  "RAG Pipelines",
                  "Vector Search",
                  "Embeddings (Gemini)",
                  "Pinecone",
                ],
              },
              {
                category: "Databases",
                items: ["PostgreSQL (Prisma)", "MongoDB", "Redis"],
              },
              {
                category: "Core CS",
                items: [
                  "Operating Systems",
                  "Computer Networks",
                  "DBMS",
                  "Data Structures & Algorithms",
                ],
              },
            ].map((skillGroup, index) => (
              <div
                key={index}
                className="p-5 bg-accent/20 border border-border/50 rounded-lg space-y-3"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs bg-background/50 border border-border/80 rounded-md hover:border-muted-foreground/35 transition-colors duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="beliefs"
          className="mb-12"
          aria-labelledby="beliefs-heading"
        >
          <h2 id="beliefs-heading" className="text-2xl font-semibold">
            What I believe in
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Systems should be boring in production. Predictability beats
              cleverness, and explicit tradeoffs beat magical abstractions.
            </p>
            <p>
              Architecture is about constraint management. Clear boundaries and
              data contracts reduce bugs more effectively than endless testing.
            </p>
            <p>
              Measure reality. Logs, metrics, and traces matter more than
              opinions when systems start failing under load.
            </p>
          </div>
        </section>

        <section
          id="who-with"
          className="mb-12"
          aria-labelledby="who-with-heading"
        >
          <h2 id="who-with-heading" className="text-2xl font-semibold">
            Who I work with
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I work best with teams that value engineering discipline — founders
            and engineers who care about system correctness, not just shipping
            features fast and fixing them later.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Backend engineers
            </div>
            <div className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Product-focused teams
            </div>
            <div className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              AI & platform teams
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="mb-12"
          aria-labelledby="approach-heading"
        >
          <h2 id="approach-heading" className="text-2xl font-semibold">
            How I approach problems
          </h2>
          <ol className="mt-4 list-decimal ml-5 space-y-3 text-muted-foreground leading-relaxed">
            <li>
              Understand the failure modes first — what breaks under scale,
              latency, or bad data.
            </li>
            <li>
              Design explicit interfaces and data models before writing code.
            </li>
            <li>
              Build async-first where blocking becomes a liability.
            </li>
            <li>
              Instrument early, iterate based on evidence, not assumptions.
            </li>
          </ol>
        </section>

        <section id="cta" className="py-8" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-2xl font-semibold">
            Open to opportunities
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I’m open to backend, platform, and AI-infrastructure roles where
            system design and reliability actually matter. If you’re building
            something non-trivial and want an engineer who thinks in systems,
            reach out.
          </p>

          <div className="mt-8">
            <ConnectSection socials={socials} />
          </div>
        </section>
      </main>
    </div>
  );
}
