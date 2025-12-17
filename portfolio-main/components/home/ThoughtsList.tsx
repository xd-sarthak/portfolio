"use client";

import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function ThoughtsList({ posts }: { posts: any[] }) {
  return (
    <div className="space-y-12 sm:space-y-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl font-medium">Featured Thoughts</h2>
        <div className="text-sm text-muted-foreground font-mono">
          PERSPECTIVES
        </div>
      </div>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.slug}`}
            className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300 line-clamp-2 text-ellipsis">
                {post.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed line-clamp-3 text-ellipsis">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
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
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/blog"
              className="px-4 py-2 bg-accent border border-border rounded-lg hover:border-muted-foreground/50 text-sm transition-all duration-300 hover:shadow-sm flex items-center gap-2"
            >
              More Blogs
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="top">More blog posts</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
