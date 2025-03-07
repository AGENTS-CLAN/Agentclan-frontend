import { cn } from "@/lib/utils";
import {
  IconUsersGroup,
  IconArticle,
  IconUserSearch,
  IconBrandTwitter,
  IconChartBar,
} from "@tabler/icons-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "INFLUENCE MARKETING",
      description:
        "At Agents Clan, we maximize the value of influence by crafting authentic partnerships that leave a lasting impact. More than just connecting influencers and businesses, our strategy amplifies voices through targeted campaigns and niche communities. From viral trends to thought-provoking discussions, every collaboration is designed to shape culture, build trust, and drive action—going beyond mere numbers.",
      icon: <IconUsersGroup />,
    },
    {
      title: "CONTENT MARKETING",
      description:
        "At Agents Clan, we craft content that captivates, informs, and inspires. From engaging social media posts to compelling blogs and videos, every piece is designed to enhance visibility, drive engagement, and convert leads into loyal clients. With strategy at its core and creativity at the forefront, our content ensures your brand stands out in a competitive digital world.",
      icon: <IconArticle />,
    },
    {
      title: "LEAD GENERATION",
      description:
        "Agents Clan streamlines your lead generation process by connecting you with potential partners, clients, and customers who align with your goals. Through advanced technology and industry expertise, we ensure a pipeline filled with qualified leads ready to convert. Whether launching a new project or expanding your business, our approach keeps outreach focused, efficient, and effective—building lasting connections for long-term success.",
      icon: <IconUserSearch />,
    },
    {
      title: "SOCIAL MEDIA MANAGEMENT",
      description:
        "Agents Clan keeps your brand at the center of conversations. On X (formerly Twitter), we craft engaging threads that build authority, while on Instagram, we ensure your message resonates. From witty posts that grab attention to insightful content that informs and inspires, your voice stays heard.",
      icon: <IconBrandTwitter />,
    },
    {
      title: "ANALYTICS",
      description:
        "At Agents Clan, we translate numbers into insights. Engagement rates are monitored, audience behavior is analyzed, and high-performing content is identified to refine strategies. Trends are continuously observed to adapt tactics, ensuring data-driven decisions and measurable results. With detailed reports and actionable insights, opportunities are created in a data-driven world.",
      icon: <IconChartBar />,
    },
  ];

  return (
    <>
      <div className="max-w-7xl relative mx-auto py-12 px-4 w-full left-0 top-0">
        <h1 className="text-2xl md:text-6xl font-bold dark:text-[#52e500]">
          Expertise Solutions
        </h1>
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
