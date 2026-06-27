import Icon from "../ui/Icon";
import User from "@/data/user.json";
export default function Footer() {
  const sections = [
    { name: "home", icon: "lucide:home" },
    { name: "about", icon: "lucide:user" },
    { name: "skills", icon: "lucide:code" },
    { name: "projects", icon: "lucide:briefcase" },
    { name: "achievements", icon: "lucide:award" },
    { name: "contact", icon: "lucide:mail" },
  ];

  return (
    <footer className="bg-[#0f172a] dark:bg-[#1e1e1e] p-10 **:selection:bg-gray-50 **:selection:text-[#0f172a]">
      <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-between items-center mb-8 pt-4 pb-6 border-b border-[#475569]">
        <div className="flex text-start items-start sm:items-center space-x-2 text-white">
          <Icon icon="lucide:cpu" className="w-7 h-7 text-blue-500 dark:text-blue-400 select-none" />
          <h1 className="font-bold text-xl">{User.name}</h1>
        </div>
        <div className="grid grid-cols-2 md:block md:space-x-4 sm:grid-cols-3 gap-2 sm:gap-4 text-gray-300 font-medium px-4 py-2">
          {sections.map((section, index) => (
            <a key={index} href={`#${section.name}`} className="relative group hover:text-white transition-colors duration-300 inline-block">
              {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <a aria-label="Scroll at top" href="#home" className="text-white p-2.5 rounded-full sm:animate-none animate-bounce bg-[#475569]">
          <Icon icon="mdi:arrow-bottom" className="w-5 h-5 hover:opacity-80 rotate-180 cursor-pointer" />
        </a>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-200">
        <p>Made By {User.name} using Next.js © {new Date().getFullYear()}</p>
        <p className="sm:block hidden">{User.title}</p>
      </div>
    </footer>
  );
}
