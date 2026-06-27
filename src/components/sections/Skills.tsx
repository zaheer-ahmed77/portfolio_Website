import Icon from "@/components/ui/Icon";
import { SKILLS } from "@/data/skills";

export default function Skills() {
  return (
    <section className="w-dvw bg-gray-50 text-[#0f172a] dark:bg-[#0f172a] dark:text-white md:px-16 pt-16 px-6 pb-32 relative overflow-hidden" id="skills">
      {/* Background glowing orb */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] -z-10"></div>
      
      <h2 className="text-4xl font-bold gradient-text inline-block">
        <u>Tech</u>nical Skills
      </h2>
      <div className="mt-14 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4" id="skillsDiv">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            title={skill.name}
            className="flex space-x-2 sm:items-center cursor-pointer items-end glass-panel rounded-xl p-4 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
          >
            <Icon icon={`${skill.icon}`} className="dark:hidden" width="28" height="28"></Icon>
            <Icon icon={`${skill.dark ? skill.dark : `${skill.icon}`}`} className="hidden dark:block text-blue-400" width="28" height="28"></Icon>
            <p className="sm:text-xl text-sm font-semibold text-gray-700 dark:text-gray-200">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
