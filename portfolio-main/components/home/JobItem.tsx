"use client";

import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../ui/collapsible";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import { TechBadge } from "../ui/TechBadge";

export default function JobItem({ job, index }: { job: any; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      key={index}
      className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
    >
      <div className="lg:col-span-2">
        <div className="text-xl sm:text-2xl font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-500">
          {job.year}
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div>
          <h3 className="text-lg sm:text-xl font-medium group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-500/90 group-hover:to-cyan-500/90 transition-all duration-500">{job.role}</h3>
          <div className="text-muted-foreground font-medium leading-tight">
            {job.company}
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {job.tech.map((tech: string) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>

        <div className="mt-2">
          <div>
            <Collapsible open={open} onOpenChange={setOpen}>
              <CollapsibleTrigger asChild>
                <button className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <span>Details</span>
                  {open ? (
                    <ChevronsDownUp className="w-4 h-4" />
                  ) : (
                    <ChevronsUpDown className="w-4 h-4" />
                  )}
                </button>
              </CollapsibleTrigger>

              <CollapsibleContent className="mt-3">
                <ul className="text-muted-foreground font-medium text-sm leading-relaxed list-disc list-inside space-y-2 break-words whitespace-normal">
                  {job.description.map((point: string, idx: number) => (
                    <li key={idx} className="break-words whitespace-normal">
                      {point}
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 self-start flex flex-wrap justify-start lg:justify-end gap-2" />
    </div>
  );
}
