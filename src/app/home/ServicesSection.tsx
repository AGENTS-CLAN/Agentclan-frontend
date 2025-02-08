"use client";

import { useRef } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={sectionRef}
      className="max-w-7xl relative mx-auto py-20 md:py-20 px-4 w-full left-0 top-0 opacity-100 transform scale-100 rotate-0 transition-all duration-1500 ease-out"
    >
      <h1 className="text-2xl md:text-6xl font-bold dark:text-[#52e500]">
        Services
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-2 dark:text-white">
        We Provide
      </p>
      <HoverEffect className="max-w-5xl mx-auto px-8" items={projects} />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
export const projects = [
  {
    title: "Marketing",
    description:
      "Providing influence marketing, content marketing, lead generation, social media management, and analytics.",
    link: "/services/Marketing",
  },
  {
    title: "Community",
    description:
      "Offering PR, referral campaigns, airdrop campaigns, community management, and bot deployment with analytics.",
    link: "/services/community",
  },
  {
    title: "Events",
    description:
      "Organizing meetups, hackathons, conferences, roadshows, gaming jams, and institutional events.",
    link: "/services/events",
  },
  {
    title: "Industries",
    description:
      "Serving gaming, metaverse, crypto, finance, Web-2, telecom, and startups.",
    link: "/services/industries",
  },
  {
    title: "Incubation",
    description:
      "Providing idea incubation and MVP incubation for startups and businesses.",
    link: "/services/incubation",
  },
  {
    title: "Production",
    description:
      "Specializing in video creation, graphics generation, and on-ground operations.",
    link: "/services/production",
  },
];
