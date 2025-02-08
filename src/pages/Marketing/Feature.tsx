import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
    },
    // Removed one feature to display only 5
  ];
  
  return (<>
        <div className="max-w-7xl relative mx-auto py-12 px-4 w-full left-0 top-0">
        <h1 className="text-2xl md:text-6xl font-bold dark:text-[#52e500]">
Extertise Solution</h1>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 relative z-10 py-16 max-w-7xl mx-auto">
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
