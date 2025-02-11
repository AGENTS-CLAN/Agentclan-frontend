"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

export const HeroParallax = ({ products }: { products: { thumbnail: string }[] }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div className="relative flex justify-center items-center mb-12 px-4 sm:px-6 md:px-8 lg:px-10">
      <div
        ref={ref}
        className="h-[220vh] min-h-screen w-full overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
      >
        <Header />
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="flex flex-col space-y-20"
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: -1000, right: 1000 }}
            className="flex flex-row-reverse space-x-reverse space-x-10 cursor-grab"
          >
            {products.slice(0, 5).map((product, index) => (
              <ProductCard product={product} translate={translateX} key={index} />
            ))}
          </motion.div>
          <motion.div
            drag="x"
            dragConstraints={{ left: -1000, right: 1000 }}
            className="flex flex-row space-x-10 cursor-grab"
          >
            {products.slice(5, 10).map((product, index) => (
              <ProductCard product={product} translate={translateXReverse} key={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-6xl font-bold dark:text-[#52e500]">
        The Ultimate <br /> Development Studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-white">
        We don’t just code—we craft masterpieces in pixels and logic. From bold
        ideas to groundbreaking products, we make tech look easy. If it’s
        innovative, we’re already building it. Presenting Agent Clans' pristine
        studio which is user-friendly, allowing Agents to produce the desired
        output.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }: { product: { thumbnail: string }; translate: MotionValue<number> }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product h-96 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] relative flex-shrink-0 overflow-hidden rounded-lg"
    >
      <div className="relative w-full h-full">
        <Image
          src={product.thumbnail}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          alt=""
        />
      </div>
    </motion.div>
  );
};
