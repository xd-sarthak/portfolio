"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { generateBlogMetadata, generateStructuredData } from "@/lib/seo";
import { ThemeToggle } from "@/components/theme-toggle";
import { BlogContentRenderer } from "@/components/blog-content-renderer";
import React, { useEffect } from "react";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-light">Blog Post Not Found</h1>
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  const structuredData = generateStructuredData("blog", post);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="min-h-screen">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-32">
          <div className="flex items-center justify-between mb-12">
            <Link
              href="/blog"
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
              Back to blog
            </Link>
            <ThemeToggle />
          </div>

          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground font-mono">
                  <span>{post.date}</span>
                  <span className="hidden sm:block">•</span>
                  <span>{post.readTime} read</span>
                  <span className="hidden sm:block">•</span>
                  <span>Sarthak Srivastav</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <BlogContentRenderer content={post.content!} />

            {/* Tags */}
            <div className="space-y-4 pt-8 border-t border-border/50">
              <h3 className="text-sm text-muted-foreground font-mono">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags!.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-border rounded-full text-sm text-muted-foreground hover:border-muted-foreground/50 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <div className="space-y-4 pt-8 border-t border-border/50">
              <h3 className="text-sm text-muted-foreground font-mono">
                More Articles
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {blogPosts
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group p-4 border border-border rounded hover:border-muted-foreground/50 transition-all duration-300"
                    >
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {relatedPost.date}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
