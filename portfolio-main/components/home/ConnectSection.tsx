"use client";

import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import React from "react";

export default function ConnectSection({ socials }: { socials: any[] }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
      <div className="space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-4xl font-medium">Let's Connect</h2>

        <div className="space-y-6">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Always interested in new opportunities, collaborations, and
            conversations about technology and design.
          </p>

          <div className="space-y-4 min-w-0">
            <Link
              href="mailto:sarthak.srivastav0203@gmail.com"
              className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300 min-w-0"
            >
              <span className="text-base sm:text-lg break-words min-w-0">
                sarthak.srivastav0203@gmail.com
              </span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socials.map((social) => (
                <Tooltip key={social.name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      target={social.url.startsWith('mailto:') || social.url.startsWith('tel:') || social.url.startsWith('https://wa.me') ? undefined : "_blank"}
                      rel={social.url.startsWith('mailto:') || social.url.startsWith('tel:') || social.url.startsWith('https://wa.me') ? undefined : "noopener noreferrer"}
                      className="group p-4 bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                    >
                      <div className="space-y-2">
                        <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                          {social.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.handle}
                        </div>
                      </div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">Open {social.name}</TooltipContent>
                </Tooltip>
              ))}
        </div>
      </div>
    </div>
  );
}
