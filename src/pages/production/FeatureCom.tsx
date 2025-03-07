import { cn } from "@/lib/utils";
import {
  IconVideo,
  IconBrush,
  IconMapPin,
} from "@tabler/icons-react";

export default function FeaturesCom() {
  const features = [
    {
      title: "VIDEO CREATION",
      description:
        "At Agents Clan, video production begins with a vision—crafted to engage and resonate. Every detail, from scripting to editing, is meticulously planned to create content that is both informative and memorable. Whether for product launches, community highlights, or technical tutorials, each video is designed to captivate and inspire action. With a seamless blend of technical precision and artistic creativity, high-quality visuals are produced using the latest software and equipment. Every frame is refined, every transition purposeful, and every second impactful. By staying ahead of industry trends, our work not only aligns with the market but sets new standards in innovation and excellence.",
      icon: <IconVideo />,
    },
    {
      title: "GRAPHICS GENERATION",
      description:
        "At Agents Clan, graphics serve as a powerful tool for clear and stylish communication. From branding elements to infographics, each design aligns with the clan’s high standards. Crafted with precision and purpose, our visuals ensure consistency across platforms, enhancing visibility and engagement. Using advanced techniques, we push the boundaries of visual storytelling, creating content that is both impactful and aesthetically refined.",
      icon: <IconBrush />,
    },
    {
      title: "ON GROUND OPERATIONS",
      description:
        "At Agents Clan, every operation is meticulously executed to create impactful experiences. From logistics management to large-scale event coordination and community outreach, excellence is ensured at every stage. Every detail is carefully planned, transforming tasks into dynamic spectacles that embody the clan’s precision and energy. The goal is simple: to enhance engagement and set new standards for performance.",
      icon: <IconMapPin />,
    },
  ];

  return (
    <>
      <div className="max-w-7xl relative mx-auto py-12 px-4 w-full left-0 top-0">
        <h1 className="text-4xl lg:text-5xl md:text-6xl font-bold dark:text-[#52e500]">
          Expertise Solution
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 relative z-10 py-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </>
  );
}


const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (


    <div
      className={cn(
        "flex flex-col lg:border-r py-16 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
    <div className="mb-6 relative z-10 text-5xl text-[#52e500] dark:text-[#52e500] px-6">
        {icon}
      </div>
      <div className="text-2xl font-bold mb-4 relative z-10 text-neutral-800 dark:text-neutral-100 px-6">
        <div className="absolute left-0 inset-y-0 h-8 group-hover/feature:h-10 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#52e500] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 text-[#52e500] transition duration-300 inline-block">
          {title}
        </span>
      </div>
      <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-sm relative z-10 px-6">
        {description}
      </p>
    </div>
  );
};
