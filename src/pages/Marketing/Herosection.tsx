"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export  function HeroSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }} 
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-[#52e500] max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Marketing crafts compelling stories that  
        <Highlight className="text-black dark:text-white"> captivate, inspire, and impact.</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}

export default HeroSection;
