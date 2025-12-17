"use client";

import { useEffect, useState } from "react";
import NavDots from "./NavDots";

export default function HomeClient() {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const ids = ["intro", "work", "projects", "thoughts", "connect"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavDots
        activeSection={activeSection}
        setHoveredSection={setHoveredSection}
      />
    </>
  );
}
