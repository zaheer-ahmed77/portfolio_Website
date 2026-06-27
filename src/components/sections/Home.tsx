import Header from "@/components/layouts/Header";
import Image from "next/image";
import Link from "next/link";
import Icon from "../ui/Icon";
import User from "@/data/user.json";

export default function Home() {
  return (
    <section className="w-full h-full p-2 relative overflow-hidden" id="home">
      <Image src="/img/homeBg.webp" alt="Home background" fill priority sizes="100vw" className="object-cover object-center -z-10 opacity-30 dark:opacity-100 dark:brightness-40" />

      {/* Modern gradient overlay / glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white dark:from-transparent dark:to-[#0f172a] z-0 opacity-100 dark:opacity-80"></div>

      <div className="relative z-10 sm:px-6 px-4 py-4 h-full flex flex-col justify-start">
        <Header />

        <div className="text-center sm:mt-8 mt-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -z-10"></div>
          <h2 className="md:text-[4.6rem] sm:text-6xl text-4xl leading-[1.10] font-bold gradient-text pb-2 whitespace-nowrap">{User.name}</h2>
          <p className="md:text-5xl sm:text-4xl text-2xl sm:mt-0 mt-2 font-bold text-gray-800 dark:text-gray-200">{User.title}</p>
          <p className="md:text-2xl sm:text-xl text-base text-gray-600 dark:text-gray-400 mt-6 px-2">{User.intro}</p>
        </div>
        <div className="mt-10 sm:mt-14 flex justify-center items-center gap-4 sm:gap-6">
          <Link
            href="#contact"
            className="glass-panel py-3 px-6 sm:px-8 text-base sm:text-lg flex items-center justify-center font-semibold rounded-md hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300 text-gray-900 dark:text-white whitespace-nowrap"
          >
            Get in Touch
          </Link>

          <a
            href="/pdf/resume.pdf"
            download={`${User.name.split(" ").join("_")}_Resume.pdf`}
            className="py-3 px-6 sm:px-8 flex items-center justify-center gap-2 text-base sm:text-lg font-semibold rounded-md bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:opacity-90 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-300 whitespace-nowrap"
          >
            <Icon icon="bx:file" className="w-5.5 h-5.5" /> Resume
          </a>
        </div>

        <div className="flex justify-center text-gray-600 dark:text-gray-300 space-x-8 mt-14 items-center select-none">
          <a href={User.social.github.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${User.name}'s github profile`}>
            <Icon icon="lucide:github" className="w-7 h-7 hover:text-black dark:hover:text-white hover:scale-110 hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 cursor-pointer" />
          </a>
          <a href={User.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${User.name}'s Linkedin profile`}>
            <Icon icon="meteor-icons:linkedin" className="w-7 h-7 hover:text-blue-400 hover:scale-110 hover:shadow-[0_0_10px_rgba(96,165,250,0.5)] transition-all duration-300 cursor-pointer" />
          </a>
          {User.social.website && (
            <a href={`https://${User.social.website}`} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${User.name}'s Website`}>
              <Icon
                icon="mdi:web"
                className="w-7 h-7 hover:text-purple-400 hover:scale-110 hover:shadow-[0_0_10px_rgba(192,132,252,0.5)] transition-all duration-300 cursor-pointer"
              />
            </a>
          )}
        </div>
        <Link aria-label="Go to second section" href="#about" className="flex justify-center items-center text-gray-700 dark:text-white sm:mt-10 mt-14 select-none">
          <Icon
            icon="mdi:arrow-bottom"
            className="w-10 h-10 animate-bounce hover:text-blue-500 dark:hover:text-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.6)] rounded-full transition-all duration-300 cursor-pointer"
          />
        </Link>
      </div>
    </section>
  );
}
