"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// CoreTeam component to render cards with static content
export default function CoreTeamComm() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} /> // Pass static content without interactive behavior
  ));

  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-20 px-4 w-full left-0 top-0">
      <div className="w-full h-full py-20">
        <h1 className="text-2xl md:text-6xl font-bold dark:text-[#52e500]">Incubation Team</h1>
        <Carousel items={cards} />
      </div>
    </div>
  );
};

// Data used to generate the cards, without dummy content and no "Productivity" card
const data = [
  {
    category: "Person 1",
      src: "/images/person1.jpeg", // Remove extra text and ensure correct path
    content: "", // Static content here
  },
  {
    category: "Person 2",
      src: "/images/person2.jpeg", // Remove extra text and ensure correct path
    content: "", // Static content here
  },
  {
    category: "Person 3",
      src: "/images/person3.jpeg", // Remove extra text and ensure correct path
    content: "", // Static content here
  },
  {
    category: "Person 4",
      src: "/images/person4.jpeg", // Remove extra text and ensure correct path
    content: "", // Static content here
  },
  {
    category: "Person 5",
      src: "/images/person5.jpeg", // Remove extra text and ensure correct pathtatic content here
  },
];
