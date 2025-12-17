"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";

interface BlogContentRendererProps {
  content: string;
}

export function BlogContentRenderer({ content }: BlogContentRendererProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl sm:text-4xl font-medium text-foreground mt-10 mb-6">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl sm:text-3xl font-medium text-foreground mt-8 mb-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl sm:text-2xl font-medium text-foreground mt-6 mb-3">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="space-y-3 list-none pl-0 mb-6">{children}</ul>
          ),
          li: ({ children }) => (
            <li className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="text-foreground font-light shrink-0 mt-1">
                →
              </span>
              <span>{children}</span>
            </li>
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            const code = String(children).replace(/\n$/, "");
            const index = node?.position?.start?.line || 0;

            if (!inline && match) {
              return (
                <div className="relative group rounded-lg border border-border bg-muted/30 overflow-hidden my-6">
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-1 text-xs font-mono text-muted-foreground bg-background/80 backdrop-blur-sm border border-border/50 rounded">
                      {match[1]}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(code, index)}
                    className={`
                      absolute top-2 left-2 z-10 p-2 rounded-md text-muted-foreground 
                      transition-all duration-200 transform bg-background/80 backdrop-blur-sm border border-border/50 
                      hover:text-foreground hover:border-muted-foreground/50 hover:scale-105 hover:shadow-sm
                      active:scale-95
                      ${
                        copiedIndex === index
                          ? "text-green-500 scale-110 border-green-500/50"
                          : "scale-100"
                      }
                    `}
                    title="Copy code"
                  >
                     <div className="relative w-4 h-4">
                    {copiedIndex === index ? (
                      <svg
                        className="w-4 h-4 animate-in fade-in zoom-in duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>
                  </button>
                  <pre className="p-4 pt-12 overflow-x-auto m-0">
                    <code className={`text-sm font-mono text-muted-foreground font-semibold whitespace-pre-wrap wrap-break-word ${className}`} {...props}>
                      {children}
                    </code>
                  </pre>
                </div>
              );
            }
            return (
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground" {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
