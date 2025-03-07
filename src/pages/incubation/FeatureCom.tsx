import { cn } from "@/lib/utils";
import {
  IconBulb,
  IconRocket,
} from "@tabler/icons-react";

export function FeaturesCom() {
  const features = [
    {
      title: "IDEA INCUBATION",
      description:
        "The journey from vision to reality begins with idea incubation. During this phase, concepts are refined, potential impacts assessed, and market research conducted. Through workshops, mentorship, and group discussions, ideas are shaped into actionable plans. By leveraging collective intelligence, even the boldest concepts are explored. A structured approach ensures innovation while minimizing risks, transforming raw ideas into solid blueprints with a clear vision and direction.",
      icon: <IconBulb />, // Light bulb icon representing idea incubation
    },
    {
      title: "MVP INCUBATION",
      description:
        "At Agents Clan, ideas evolve into reality through a structured incubation process. This phase refines concepts, develops prototypes, and transforms innovations into market-ready solutions. By emphasizing rapid iteration and user feedback, creators can test and improve their products in controlled environments. The goal is to accelerate development while ensuring real-world impact, turning creative sparks into successful ventures.",
      icon: <IconRocket />, // Rocket icon representing MVP launch and growth
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
        "flex flex-col lg:border-r mb-[38%] py-16 relative group/feature dark:border-neutral-800",
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
