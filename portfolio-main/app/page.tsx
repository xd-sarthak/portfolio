import ConnectSection from "@/components/home/ConnectSection";
import FooterMain from "@/components/home/FooterMain";
import HeaderIntro from "@/components/home/HeaderIntro";
import HomeClient from "@/components/home/HomeClient";
import JobItem from "@/components/home/JobItem";
import ProjectsList from "@/components/home/ProjectsList";
import ThoughtsList from "@/components/home/ThoughtsList";

export default function Home() {
  const jobs = [
    {
      year: "2025",
      role: "Fullstack Intern",
      company: "Quantus Management System Pvt. Ltd. | New Delhi, India",
      description: [
        "Built a scalable KYC verification platform supporting secure onboarding and compliance workflows.",
        "Developed REST APIs for authentication, document management, RBAC, and admin approval workflows, reducing manual verification effort by 60%.",
        "Integrated OCR-based document validation with 92%+ extraction accuracy and implemented real-time dashboards with audit logging.",
      ],
      tech: [
        "React",
        "Node.js",
        "TypeScript",
        "REST APIs",
        "OCR",
        "RBAC",
      ],
    },
    {
      year: "2024",
      role: "Trainee Analyst",
      company: "Path Infotech Ltd. | Noida, India",
      description: [
        "Designed and deployed an internal RAG-based support chatbot using Python, Chroma vector search, and transformer embeddings, reducing response turnaround time by 42%.",
        "Implemented retrieval pipelines with FAISS/Chroma and MiniLM embeddings to index internal Markdown and PDF knowledge bases with 88–94% contextual hit accuracy.",
        "Optimized response synthesis by combining top-k retrieved contexts with a local LLM inference endpoint, improving average response latency.",
      ],
      tech: [
        "Python",
        "RAG Pipelines",
        "Chroma",
        "FAISS",
        "LLMs",
        "Vector Search",
      ],
    },
  ];

  const projects = [
    {
      name: "Distributed Task Queue",
      description:
        "A high-performance, educational distributed task queue built with Go, Redis, and Next.js, featuring priority queuing, delayed tasks, worker state visualization, and high-density metrics.",
      tech: ["Go", "Redis", "Next.js", "React", "Tailwind CSS", "Docker"],
      github: "https://github.com/xd-sarthak/dtq",
      year: "2026",
      slug: "distributed-task-queue",
    },
    {
      name: "routerx — LLM API Gateway",
      description:
        "A self-hosted API gateway for LLM providers with key management, rate limiting, semantic caching, usage tracking, and a real-time admin dashboard.",
      tech: ["Go", "Next.js", "PostgreSQL", "Redis"],
      github: "https://github.com/xd-sarthak/llm-api-gateway",
      year: "2026",
      slug: "llm-api-gateway",
    },
    {
      name: "CodeRevU — AI-Powered GitHub PR Review SaaS",
      description:
        "Built an AI-powered GitHub pull request review platform that automatically generates structured code reviews using RAG and Gemini AI, eliminating manual review overhead for repetitive PRs.",
      tech: [
        "Next.js 16",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Gemini AI",
        "Pinecone",
        "Inngest",
        "GitHub Webhooks",
      ],
      github: "https://github.com/xd-sarthak/CodeRevU",
      link: "https://coderevu.vercel.app",
      year: "2025",
      slug: "coderevu-ai-pr-review",
    },
  ];

  const thoughts = [
    {
      title:
        "Designing Production-Grade RAG Pipelines: What Actually Breaks in the Real World",
      excerpt:
        "A practical breakdown of failure modes in RAG systems—retrieval drift, embedding mismatch, latency bottlenecks—and how to design pipelines that survive production load.",
      date: "Dec 2025",
      readTime: "12 min",
      slug: "production-grade-rag-pipelines",
    },
    {
      title:
        "Asynchronous Backends at Scale: Redis, RabbitMQ, and Event-Driven Design",
      excerpt:
        "An engineering-focused deep dive into async communication, message guarantees, cache invalidation strategies, and why most distributed systems fail silently.",
      date: "Dec 2025",
      readTime: "14 min",
      slug: "async-backends-redis-rabbitmq",
    },
    {
      title:
        "WebSockets vs Polling vs Queues: Choosing the Right Real-Time Primitive",
      excerpt:
        "A backend-first comparison of real-time communication models, tradeoffs, and system design implications beyond frontend convenience.",
      date: "Dec 2025",
      readTime: "11 min",
      slug: "realtime-communication-primitives",
    },
  ];

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
      <HomeClient />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header id="intro" className="min-h-screen flex items-center">
          <HeaderIntro />
        </header>

        <section id="work" className="min-h-screen py-20 sm:py-32">
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-medium">
                Selected Work
              </h2>
              <div className="text-sm text-muted-foreground font-mono">
                2024 - {new Date().getFullYear()}
              </div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {jobs.map((job, index) => (
                <div key={index} className="space-y-8 sm:space-y-12">
                  <JobItem job={job} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen py-20 sm:py-32 lg:opacity-15"
        >
          <ProjectsList projects={projects} />
        </section>

        <section
          id="thoughts"
          className="min-h-screen py-20 sm:py-32 lg:opacity-15"
        >
          <ThoughtsList posts={thoughts} />
        </section>

        <section id="connect" className="py-20 sm:py-32">
          <ConnectSection socials={socials} />
        </section>

        <FooterMain />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
