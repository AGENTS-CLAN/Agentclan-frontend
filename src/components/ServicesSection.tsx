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
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/services",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
