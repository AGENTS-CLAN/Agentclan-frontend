"use client";

import Carousel from "@/components/ui/premiumPartners";
export function PremiumPartners() {
  const slideData = [
    {
      title: "Mystic Mountains",
      
        src: "/images/logo1.jpeg", // Fix: Close the string properly

    },
    {
      title: "Urban Dreams",
      
        src: "/images/logo2.jpeg", // Fix: Close the string properly

    },
    {
      title: "Neon Nights",
      
        src: "/images/logo3.jpeg", // Fix: Close the string properly

    },
    {
      title: "Desert Whispers",
      
        src: "/images/logo4.jpeg", // Fix: Close the string properly

    },
    {
      title: "Mystic Mountains",
      
        src: "/images/logo5.jpeg", // Fix: Close the string properly

    },
    {
      title: "Urban Dreams",
      
        src: "/images/logo6.jpeg", // Fix: Close the string properly

    },
    {
      title: "Neon Nights",
      
        src: "/images/logo7.jpeg", // Fix: Close the string properly

    },
 
  ];
  return (
    <div className="max-w-7xl relative mx-auto py-12 md:py-20 px-4 w-full left-0 top-0">
      <div className="w-full h-full py-20">
          <h1 className="text-2xl md:text-6xl font-bold dark:text-[#52e500]">
          Premium Partners
  </h1>
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
    </div>
    </div>
  );
}
