import React from "react";

// Matches `inline code` and **bold**, keeping the delimiters as capture groups
// so the surrounding plain text survives the split.
const TOKEN_RE = /(`[^`]+`|\*\*[^*]+\*\*)/g;

/**
 * Renders the small subset of inline markdown used in project descriptions:
 * `code` and **bold**. Everything else is passed through as plain text.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN_RE).filter(Boolean);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
          return (
            <code
              key={i}
              className="rounded bg-muted-foreground/10 px-1.5 py-0.5 font-mono text-[0.9em] text-foreground/90"
            >
              {part.slice(1, -1)}
            </code>
          );
        }

        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
          return (
            <strong key={i} className="font-medium text-foreground/90">
              {part.slice(2, -2)}
            </strong>
          );
        }

        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}
