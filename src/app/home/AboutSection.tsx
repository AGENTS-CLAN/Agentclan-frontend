'use client';
import { useState, useEffect } from "react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { motion } from "framer-motion";
import { 
  BuildingOfficeIcon, 
  UsersIcon, 
  GlobeAltIcon, 
  SparklesIcon, 
  AcademicCapIcon 
} from "@heroicons/react/24/outline";

export function AboutSection() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("video-dialog");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const videoSrc = "/video/intro.mp4"; // Placeholder video
  const videoImage = "/images/Video.png"; // Placeholder thumbnail

  return (
    <div className="relative flex justify-center items-center mb-12 px-4 sm:px-6 md:px-8 lg:px-10 overflow-clip">
      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12 mt-12">
        {/* Left Section (Company Information) */}
        <div className="md:w-[45%] text-center md:text-left space-y-6 px-4 md:px-0">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl font-medium text-gray-800 dark:text-white"
          >
            Who We Are
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-6xl font-extrabold text-[#52e500]"
          >
            Our Company
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-white mt-4"
          >
Agents Clan is a groundbreaking ecosystem that has been diligently crafted to empower young brains. The necessity for tailored platforms that link outstanding talents has never been greater in a world where Web3, Web2 and Ai are evolving at a breakneck pace. By assembling a vibrant group of creatives and founding an environment where ground-breaking concepts can flourish, Agents Clan responds to this need.          </motion.p>

          {/* Core Values Section */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl font-semibold text-gray-600 dark:text-white mt-8"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex items-center space-x-2"
              >
                <BuildingOfficeIcon className="h-6 w-6 text-[#52e500]" />
                <p className="text-xl font-semibold text-gray-800 dark:text-white">Innovation</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="flex items-center space-x-2"
              >
                <UsersIcon className="h-6 w-6 text-[#52e500]" />
                <p className="text-xl font-semibold text-gray-800 dark:text-white">Teamwork</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center space-x-2"
              >
                <GlobeAltIcon className="h-6 w-6 text-[#52e500]" />
                <p className="text-xl font-semibold text-gray-800 dark:text-white">Global Impact</p>
              </motion.div>
            </div>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex items-center space-x-2"
              >
                <SparklesIcon className="h-6 w-6 text-[#52e500]" />
                <p className="text-xl font-semibold text-gray-800 dark:text-white">Excellence</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex items-center space-x-2"
              >
                <AcademicCapIcon className="h-6 w-6 text-[#52e500]" />
                <p className="text-xl font-semibold text-gray-800 dark:text-white">Learning</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Section (Video) */}
        <div className="relative md:w-[50%] flex justify-center items-center mt-8 md:mt-0">
          <motion.div
            id="video-dialog"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: 0.3,
            }}
          >
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc={videoSrc}
              thumbnailSrc={videoImage}
              thumbnailAlt="Hero Video"
            />
          </motion.div>
          <motion.div
            id="video-dialog"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: 0.3,
            }}
          >
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc={videoSrc}
              thumbnailSrc={videoImage}
              thumbnailAlt="Hero Video"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
