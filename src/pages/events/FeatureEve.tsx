import { cn } from "@/lib/utils";
import {
  IconUsersGroup, // For Meetups
  IconCode, // For Hackathons
  IconMicrophone, // For Conferences
  IconDeviceGamepad2, // For Roadshows and Game Jams
  IconSchool, // For Institutional Collaboration
} from "@tabler/icons-react";

export function FeaturesEve() {
  const features = [
    {
      title: "MEETUPS IN ALL REGIONS:",
      description:
        "Agents Clan hosts regional meetups to foster authentic connections among developers, artists, and tech enthusiasts. Designed as inclusive spaces for idea exchange, these gatherings encourage engagement and creativity. By bringing local talent closer to global opportunities, each event transforms conversations into possibilities and connections into initiatives.",
      icon: <IconUsersGroup />,
    },
    {
      title: "HACKATHONS",
      description:
        "At Agents Clan, hackathons are designed as dynamic spaces for innovation, collaboration, and problem-solving. More than just competitions, these events provide participants with the tools, support, and opportunities needed to bring ideas to life. From ideation to execution, every element is crafted to inspire, challenge, and drive real impact.",
      icon: <IconCode />,
    },
    {
      title: "CONFERENCES",
      description:
        "At Agents Clan, conferences inspire and energize every participant. Featuring keynote speakers, panel discussions, and interactive sessions, they foster insightful dialogue. Whether a seasoned professional or an emerging innovator, attendees gain opportunities to learn, network, and grow. Each interaction transforms traditional conferences into dynamic ecosystems of ideas.",
      icon: <IconMicrophone />,
    },
    {
      title: "ROADSHOWS AND GAMING JAMS",
      description:
        "At Agents Clan, roadshows and game jams bring creativity and technology directly to communities. Through interactive showcases, roadshows introduce new audiences to innovative projects and ideas. Meanwhile, game jams provide a space for creators and coders to collaborate, turning concepts into playable experiences. More than just events, these gatherings inspire engagement, spark innovation, and transform passion into action.",
      icon: <IconDeviceGamepad2 />,
    },
    {
      title: "INSTITUTIONAL COLLABORATION",
      description:
        "Agents Clan facilitates impactful collaborations between businesses, academic institutions, and aspiring professionals. Through workshops, seminars, and networking sessions, we create an environment where learning, mentorship, and innovation thrive. Our events bridge academia and industry, fostering connections, inspiring technological advancements, and empowering future talent.",
      icon: <IconSchool />,
    },
  ];

  return (
    <>
      <div className="max-w-7xl relative mx-auto py-12 px-4 w-full left-0 top-0">
        <h1 className="text-4xl lg:text-5xl md:text-6xl font-bold dark:text-[#52e500]">
          Expertise Solutions
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
