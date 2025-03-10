import React from "react";
// import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

export default function HeroCom() {
  return (
    <div className="h-[20rem] md:h-[50rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#52e500"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#52e500] to-[#52e500] bg-opacity-50">
          Community <br /> that drives impact.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          At Agents Clan, we build thriving communities that empower, engage, 
          and connect. Whether fostering brand loyalty or creating global 
          ecosystems, our strategies turn audiences into unstoppable forces of growth.
        </p>
      </div>
    </div>
  );
}
