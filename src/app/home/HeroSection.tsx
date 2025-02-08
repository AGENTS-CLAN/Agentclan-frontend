"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ColourfulText } from "@/components/ui/colourful-text";
import { RippleButton } from "../../components/ui/ripple-button";
import Image from "next/image";

export function HeroSection() {
  useEffect(() => {
    // Create a GSAP timeline for controlling animations
    const tl = gsap.timeline();

    // Text Animation
    tl.fromTo(
      ".hero-text", // Target the text elements
      { opacity: 0, y: 20 }, // Start position (invisible and slightly down)
      {
        opacity: 1, // End position (fully visible)
        y: 0, // Move to its original position
        duration: 2, // Duration of text animation
        ease: "power3.out", // Smooth easing
      }
    );

    // Image Animation (starts after text animation)
    tl.fromTo(
      ".robot-image", // Target the image element
      { opacity: 0, y: 200 }, // Start position (invisible and lower)
      {
        opacity: 1, // End position (fully visible)
        y: 0, // Arises to its original position
        duration: 3, // Duration of image animation
        ease: "power3.out", // Smooth easing
      },
      "-=1" // Image starts 1 second before the text animation finishes
    );
  }, []);

  return (
    <div className="relative flex h-[700px] w-full flex-col items-center sm:items-center justify-center overflow-clip">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/cyberpunk.svg"
          alt="Cyberpunk Robot"
          height={1000}
          width={700}
          className="robot-image object-contain sm:object-cover opacity-80"
        />
      </div>
      
      {/* Header Section */}
      <h1 className="z-10 text-center sm:text-left text-4xl sm:text-6xl md:text-7xl lg:text-7xl  xl:text-7xl font-bold tracking-tight text-white font-poppins hero-text">
        Agents Assemble
      </h1>

      {/* Subheading */}
      <p className="z-10 text-center sm:text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-semibold tracking-tight text-white font-poppins mt-4 hero-text">
        <ColourfulText text="It's Time To Make Revolution" />
      </p>

      {/* Shimmer Button */}
      <RippleButton rippleColor="#52e500" className="bg-green-500 text-white mt-9">
        Join Clan
      </RippleButton>
    </div>
  );
}
