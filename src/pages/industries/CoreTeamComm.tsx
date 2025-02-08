"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// CoreTeam component to render cards with static content
export function CoreTeamComm() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} /> // Pass static content without interactive behavior
  ));

  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-20 px-4 w-full left-0 top-0">
      <div className="w-full h-full py-20">
        <h1 className="text-2xl md:text-6xl font-bold dark:text-[#52e500]">Core Team</h1>
        <Carousel items={cards} />
      </div>
    </div>
  );
};

// Data used to generate the cards, without dummy content and no "Productivity" card
const data = [
  {
    category: "Person 1",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "", // Static content here
  },
  {
    category: "Person 2",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "", // Static content here
  },
  {
    category: "Person 3",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "", // Static content here
  },
  {
    category: "Person 4",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "", // Static content here
  },
  {
    category: "Person 5",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "", // Static content here
  },
];
