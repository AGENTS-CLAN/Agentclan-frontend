"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { DotPattern } from "@/components/ui/dot-pattern";

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.2, // Adds a staggered effect to reveal cards one by one
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%", // Trigger when the cards come into view
            end: "top 30%",
            toggleActions: "play none none reverse", // Animation plays on scroll down, reverses on scroll up
            markers: false, // Optional: Set to true to see the scroll trigger markers
          },
        }
      );
    }
  }, []);

  return (
    <div
      className="max-w-7xl relative mx-auto py-20 md:py-20 px-4 w-full left-0 top-0"
    >
      <h1 className="text-2xl md:text-6xl font-bold dark:text-[#52e500]">
        Services
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-2 dark:text-white">
        We Provide
      </p>
      <div ref={cardsRef}>
        <HoverEffect className="max-w-5xl mx-auto px-8" items={projects} />
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
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
