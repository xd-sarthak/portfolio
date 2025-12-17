"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { blogPosts } from "@/lib/data";
import { Search } from "lucide-react";

export default function SearchWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");

  // Only show on blog routes
  const isBlog = pathname?.startsWith("/blog");

  // Simple debounce to reduce work while typing
  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim()), 160);
    return () => clearTimeout(t);
  }, [query]);

  // Compute filtered results
  const results = useMemo(() => {
    if (!debounced) return [];
    const q = debounced.toLowerCase();
    return blogPosts.filter((p) => {
      const inTitle = p.title.toLowerCase().includes(q);
      const inExcerpt = p.excerpt.toLowerCase().includes(q);
      const inTags = (p.tags || []).some((t) => t.toLowerCase().includes(q));
      return inTitle || inExcerpt || inTags;
    });
  }, [debounced]);

  // Close panel on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!isBlog) return null;

  return (
    <div className="w-full mx-auto">
      <div className="relative">
        {/* Search pill */}
        <div className="flex items-center w-full">
          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center w-full bg-accent/45 border border-border text-sm rounded-lg px-3 py-2 shadow-sm hover:shadow transition-shadow duration-150 backdrop-blur-lg">
              {/* Magnifier */}
              <Search className="w-4 h-4 text-muted-foreground mr-2 shrink" />

              <label htmlFor="search-input" className="sr-only">
                Search blog posts
              </label>
              <input
                id="search-input"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(true);
                }}
                onFocus={() => setOpen(true)}
                placeholder="Search posts — try “devops”, “redis”, or tags"
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm outline-none"
                aria-label="Search blog posts"
                autoComplete="off"
              />

              {query && (
                <button
                  aria-label="Clear search"
                  onClick={() => {
                    setQuery("");
                    setDebounced("");
                    setOpen(false);
                  }}
                  className="ml-2 p-1 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results dropdown */}
        {open && (
          <div className="absolute left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-md overflow-hidden max-h-64">
            <div className="divide-y divide-border">
              {debounced && results.length === 0 && (
                <div className="px-4 py-3 text-sm text-muted-foreground">
                  No results for "{debounced}".
                </div>
              )}

              {results.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  onClick={() => setOpen(false)}
                >
                  <div className="px-4 py-3 hover:bg-accent/5 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-foreground">
                        {r.title}
                      </h3>
                      <time className="text-xs text-muted-foreground font-mono">
                        {r.date}
                      </time>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
