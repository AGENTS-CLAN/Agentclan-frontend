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

export function FeaturesEve() {
  const features = [
    {
      title: "PR Growth",
      description:
        "Agents Clan ensures your brand’s story gets the attention it deserves. From press coverage to thought-leadership articles, their PR services focus on delivering authentic, memorable messaging that establishes you as a leader in your industry.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Referral Campaigns",
      description:
        "Agents Clan turns your customers into brand ambassadors through well-designed referral programs. They optimize campaigns with appealing rewards, simplified processes, and robust tracking to ensure success and organic growth.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Airdrop Campaigns",
      description:
        "Specializing in airdrop campaigns, Agents Clan helps broaden your audience and enhance engagement. By linking token rewards with interactive tasks, they make your campaign exciting and impactful.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Community Management",
      description: "Agents Clan builds vibrant, engaging communities aligned with your goals. They handle everything from stimulating conversations to organizing events, ensuring your community thrives while fostering teamwork and inclusivity.",
      icon: <IconCloud />,
    },
    {
      title: "Bot Deployment and Analytics",
      description: "Agents Clan automates community management by deploying bots to handle repetitive tasks, answer FAQs, and boost productivity 24/7. By combining bot deployment with powerful analytics, they help monitor engagement, user behavior, and campaign performance to maximize growth.",
      icon: <IconRouteAltLeft />,
    },
    // Removed one feature to display only 5
  ];
  
  return (<>
        <div className="max-w-7xl relative mx-auto py-12 px-4 w-full left-0 top-0">
        <h1 className="text-4xl lg:text-5xl md:text-6xl font-bold dark:text-[#52e500]">
Extertise Solution</h1>
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
