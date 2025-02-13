"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useCallback, useRef } from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      // Using requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        containerRef.current?.style.setProperty("--mouse-x", `${event.clientX - left}px`);
        containerRef.current?.style.setProperty("--mouse-y", `${event.clientY - top}px`);
      });
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[50rem] flex items-center bg-white dark:bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 pointer-events-none" />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} // Shorter duration & better ease
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500",
        className
      )}
    >
      {children}
    </motion.span>
  );
};
