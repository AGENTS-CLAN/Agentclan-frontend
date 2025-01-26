"use client";

import { ColourfulText } from "@/components/ui/colourful-text";
import { Ripple } from "./ui/ripple";
import { RippleButton } from "./ui/ripple-button";

export function HeroSection() {
  return (
    <div className="relative flex h-[700px] w-full flex-col items-center sm:items-center justify-center overflow-clip">
      {/* Header Section */}
      <h1 className="z-10 text-center sm:text-left text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl font-bold tracking-tight text-white font-poppins">
        Agents Assemble
      </h1>

      {/* Subheading */}
      <p className="z-10 text-center sm:text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-semibold tracking-tight text-white font-poppins mt-4">
        <ColourfulText text="It's Time To Make Revolution" />
      </p>

      {/* Shimmer Button */}
      <RippleButton
        rippleColor="#52e500"
        className="bg-green-500 text-white mt-9"
      >
Join Clan      </RippleButton>

      {/* Ripple Effect */}
      <Ripple/>
    </div>
  );
}
