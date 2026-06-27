import Icon from "@/components/ui/Icon";
import { TECH_MAPPING } from "@/data/tech_mapping";
import GithubLink from "@/components/ui/GithubLink";
import Image from "next/image";
import Link from "next/link";

type projectInterface = {
  html_url: string;
  created_at: string;
  updated_at: string;
  full_name: string;
  description: string;
  topics: string[];
  name: string;
  homepage: string;
};

type Props = {
  project: projectInterface;
};

export default function ProjectCard({ project }: Props) {
  function GenerateImageUrl(repo: string) {
    return `https://raw.githubusercontent.com/${repo}/main/assets/preview.webp`;
  }

  function formatDate(start: string, end: string): string {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const startStr = startDate.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

    const endStr = endDate.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

    const isPresent = Math.abs(new Date().getTime() - endDate.getTime()) < 1000 * 60 * 60 * 24 * 7;
    if (isPresent) return `${startStr} – Present`;

    const sameMonth = startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear();
    if (sameMonth) return startStr;

    return `${startStr} – ${endStr}`;
  }

  function formatTechName(tech: string): string {
    const lowerTech = tech.toLowerCase();
    if (TECH_MAPPING[lowerTech]) {
      return TECH_MAPPING[lowerTech];
    }
    return tech
      .split("-")
      .map((word) => {
        const lowerWord = word.toLowerCase();
        return TECH_MAPPING[lowerWord] || (word.charAt(0).toUpperCase() + word.slice(1));
      })
      .join(" ");
  }

  return (
    <div className="relative group mt-14 grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-7 justify-between items-center transition-all duration-500 ease-in-out transform hover:scale-[1.02] glass-panel p-4 rounded-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
      <div className="relative md:col-span-1 w-full h-44 sm:h-44 overflow-hidden rounded-xl shadow-lg border border-white/5">
        <Image
          src={GenerateImageUrl(project.full_name)}
          alt={project.name}
          fill
          unoptimized
          loading="lazy"
          className="object-cover select-none transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="md:col-span-2 space-y-3 p-2">
        <div className="flex items-center justify-between relative z-20">
          <h3 className="text-xs font-medium text-violet-600 dark:text-violet-300 bg-violet-100 dark:bg-violet-500/10 px-3 py-1 rounded-full border border-violet-200 dark:border-violet-500/20">
            {formatDate(project.created_at, project.updated_at)}
          </h3>
          <GithubLink url={project.html_url} />
        </div>

        <div className="text-xl sm:text-2xl font-bold flex items-center text-gray-900 dark:text-white">
          <Link
            href={project.homepage || project.html_url}
            target="_blank"
            className="after:absolute after:inset-0 after:z-10 focus:outline-none hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {formatTechName(project.name)}
          </Link>
          <Icon
            icon="heroicons:arrow-up-right-16-solid"
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1 group-hover:-translate-y-1 group-active:-translate-y-1 text-blue-500 dark:text-blue-400"
            width="20"
            height="20"
          />
        </div>
        <p className="font-normal text-gray-600 dark:text-gray-300 selection:opacity-100 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 relative z-20 pt-2">
          {project.topics
            .filter((t) => t !== "include")
            .slice(0, 5)
            .map((tech) => (
              <button
                key={tech}
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/10 transition-all shadow-sm"
              >
                {formatTechName(tech)}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
