"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect } from "react";
import { Calendar, ChevronLeft } from "lucide-react";
import SearchWidget from "@/components/SearchWidget";
import AdBanner from "@/components/ad-banner";
import { generateStructuredData } from "@/lib/seo";

export default function BlogPage() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Sort blog posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const structuredData = generateStructuredData("blog-list", {
    posts: sortedPosts,
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
                Blogs
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Articles and insights on web development, design systems,
                performance optimization, and modern web technologies, sharing
                what I&apos;ve learned to help developers improve their skills.
              </p>
              <SearchWidget />
            </div>

            {/* Blog Posts List */}
            <div className="space-y-12">
              {sortedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="group border-b border-border py-6 cursor-pointer">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {post.tags!.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 pt-2">
                        <span>Read more</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* <AdBanner /> */}
      </main>
    </div>
  );
}
