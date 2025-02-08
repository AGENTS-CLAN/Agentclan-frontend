import React from "react";
import { FlipWords } from "@/components/ui/text-flip";

export function Text() {
  const words = ["impactful", "engaging", "powerful", "unforgettable"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
    <h1>
      <div className="text-4xl md:text-5xl font-normal text-neutral-600 dark:text-neutral-400 text-center leading-loose">
        Make your brand <br /> <FlipWords words={words} className="mt-5 mb-5"/>.
        <br />
        Turn ideas into results.
      </div>
    </h1>
  </div>
  );  
}
