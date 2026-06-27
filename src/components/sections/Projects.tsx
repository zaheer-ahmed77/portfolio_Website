import ProjectCard from "@/components/cards/ProjectCard";

export default async function Projects() {
  type Repo = {
    name: string;
    html_url: string;
    description: string;
    topics: string[];
    fork: boolean;
    created_at: string;
    updated_at: string;
    full_name: string;
    homepage: string;
  };

  const filtered: Repo[] = [
    {
      name: "Medinsight",
      html_url: "https://github.com/zaheer-ahmed77/Medinsight",
      description: "Developed an AI-driven medical information platform leveraging Next.js and React. Integrated OpenAI's API for intelligent medical assistance, secured with Clerk authentication, and optimized with lightweight JSON storage.",
      topics: ["next.js", "react.js", "clerk", "openai-api", "html5", "css3", "javascript"],
      fork: false,
      created_at: "2025-01-01T00:00:00Z",
      updated_at: "2025-02-01T00:00:00Z",
      full_name: "zaheer-ahmed77/Medinsight",
      homepage: ""
    },
    {
      name: "NeuroMed",
      html_url: "https://github.com/zaheer-ahmed77/NeuroMed",
      description: "Engineered a robust backend system for brain tumor classification using Python and advanced CNN architectures (EfficientNetV2-S). Integrated Explainable AI (XAI) to provide transparent, interpretable diagnostic insights for medical professionals.",
      topics: ["python", "efficientnetv2-s", "cnn", "explainable-ai"],
      fork: false,
      created_at: "2026-01-01T00:00:00Z",
      updated_at: new Date().toISOString(),
      full_name: "zaheer-ahmed77/NeuroMed",
      homepage: ""
    }
  ];

  return (
    <section className="min-w-dvw relative overflow-hidden bg-white text-[#0f172a] dark:bg-[#0f172a] dark:text-white md:px-16 py-16 px-6" id="projects">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-96 bg-blue-500/5 rounded-full blur-[150px] -z-10"></div>
      
      <h2 className="text-4xl font-bold gradient-text inline-block">
        <u>Proj</u>ects
      </h2>
      <div className="relative z-10">
        {filtered.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
