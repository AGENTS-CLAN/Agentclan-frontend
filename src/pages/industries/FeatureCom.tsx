import { cn } from "@/lib/utils";
import {
  IconDeviceGamepad2,
  IconCoin,
  IconWorld,
  IconAntennaBars5,
  IconRocket,
} from "@tabler/icons-react";

export default function FeaturesCom() {
  const features = [
    {
      title: "GAMING AND METAVERSE",
      description:
        "Gaming and the metaverse are shaping the next wave of technology. At Agents Clan, immersive experiences are crafted by blending art and technology. From innovative game concepts to virtual world infrastructure, expertise is provided to enhance engagement and growth. Strategies for community building, revenue, and user adoption ensure every project thrives. With Agents Clan, the metaverse is not just joined—it is redefined.",
      icon: <IconDeviceGamepad2 />,
    },
    {
      title: "CRYPTO AND FINANCES",
      description:
        "Stay ahead in the fast-moving world of crypto and finance with Agents Clan. From tokenomics to blockchain integration, we simplify complex concepts, build trust, and drive adoption. Whether launching a crypto asset, developing a finance platform, or exploring Web3, we turn ideas into impact.",
      icon: <IconCoin />,
    },
    {
      title: "WEB 2",
      description:
        "While Web3 is on the rise, Web2 remains essential. At Agents Clan, we enhance user experience, optimize websites, and refine social media strategies to strengthen digital presence. By bridging Web2 with emerging Web3 technologies, we help businesses stay competitive and future-ready.",
      icon: <IconWorld />,
    },
    {
      title: "TELECOM",
      description:
        "We specialize in enhancing client engagement, optimizing services, and driving innovation in the ever-evolving telecom industry. Through strategic marketing and community-driven solutions, brands connect meaningfully with their audiences. At Agents Clan, telecom is about fostering connections, not just communication.",
      icon: <IconAntennaBars5 />,
    },
    {
      title: "STARTUPS",
      description:
        "At Agents Clan, we empower startups by providing specialized support from ideation to execution. Challenges are met with expert guidance, ensuring seamless growth, community building, and brand development. With our resources and expertise, great ideas turn into lasting legacies. Agents Clan isn’t just about business—it’s about shaping the future of technology.",
      icon: <IconRocket />,
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
