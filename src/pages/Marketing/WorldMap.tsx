"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export default function WorldMapSection() {
  return (
    <div className="py-40 dark:bg-black w-full">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-bold text-4xl sm:text-6xl dark:text-white text-black">
        Global
        {" "} <br />
          <span className="text-[#52e500] shadow-[#52e500] hover:scale-105 transition-transform">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>
        <p className="text-sm md:text-lg text-neutral-400 max-w-2xl mx-auto py-4">
        Expand beyond borders and collaborate seamlessly from anywhere. Our services empower businesses worldwide, ensuring smooth communication and efficiency—no matter where you are. Perfect for global teams, digital nomads, and enterprises seeking remote excellence.
        </p>
      </div>
      <WorldMap
        dots={[
          { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
          { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
          { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
          { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
          { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
          { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
        ]}
      />
    </div>
  );
}
