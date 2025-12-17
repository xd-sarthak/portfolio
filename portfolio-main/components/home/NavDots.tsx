"use client";

import React from "react";

export default function NavDots({
  activeSection,
  setHoveredSection,
}: {
  activeSection: string;
  setHoveredSection: (s: string | null) => void;
}) {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
      <div className="flex flex-col gap-4">
        {["intro", "work", "projects", "thoughts", "connect"].map((section) => (
          <div key={section} className="relative group">
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-foreground text-background px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
              <div className="absolute right-full mr-1 top-1/2 -translate-y-1/2 border-4 border-transparent border-r-foreground"></div>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? "bg-foreground"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
              onMouseEnter={() => setHoveredSection(section)}
              onMouseLeave={() => setHoveredSection(null)}
            />
          </div>
        ))}
      </div>
    </nav>
  );
}
