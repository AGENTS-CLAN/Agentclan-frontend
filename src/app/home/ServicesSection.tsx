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
      <h1 className="text-2xl md:text-6xl font-bold dark:text-[#52e500] ">
        Services
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-2 dark:text-white ">
        We Provide
      </p>
      <HoverEffect className=" mx-auto px-8 text-start flex-wrap" items={projects} />
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
      "Marketing is the art of connecting, influencing, and telling stories; it's not simply about pushing a product. At Agents Clan, we view marketing as a growth-promoting tool that combines strategy and creativity to create campaigns that make an impact.",
    link: "/services/Marketing",
  },
  {
    title: "Community",
    description:
      "Any successful endeavor depends on a vibrant community, and at Agents Clan, we are experts at creating ecosystems that are bound to flourish creating an immense impact. Our community services are intended to empower, engage, and connect your audience— fostering a feeling of community that encourages advocacy and loyalty.",
    link: "/services/community",
  },
  {
    title: "Events",
    description:
      "Events are where communities prosper, ties are formed, and visions are brought to life. At Agents Clan, we create life-changing events that stimulate creativity, encourage teamwork, and increase impact. Whether it's small gatherings, intense hackathons, or massive conferences, we unite individuals in ways that foster innovation and development.",
    link: "/services/events",
  },
  {
    title: "Industries",
    description:
    "Agents Clan is here to support innovation in all sectors, each of which has its own possibilities and problems. By harnessing our experience and community-focused methodology, we offer customised solutions that promote expansion, encourage cooperation, unleash prospects. One breakthrough at a time, we join forces with industries to shape the future; be it evolving dynamics of startups or the limitless possibilities of the metaverse.",
    link: "/services/industries",
  },
  {
    title: "Incubation",
    description:
      "Agents Clan is here to support innovation in all sectors, each of which has its own possibilities and problems. By harnessing our experience and community-focused methodology, we offer customised solutions that promote expansion, encourage cooperation and unleash prospects. One breakthrough at a time.",
    link: "/services/incubation",
  },
  {
    title: "Production",
    description:
      "In Agents Clan, production is where ideas come to life and stories are told with unparalleled inventiveness. This ecosystem pillar turns concepts into visually striking content and powerful operations. Production is the fundamental to how the clan conveys its vision, from creating immersive documentaries to designing state-of-the-art graphics and carrying out faultless on-ground projects.",
    link: "/services/production",
  },
];
