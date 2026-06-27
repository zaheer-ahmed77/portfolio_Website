import Icon from "@/components/ui/Icon";
import aboutIcons from "@/data/about.json";
import Image from "next/image";
import User from "@/data/user.json";

export default function About() {
  return (
    <section className="min-w-dvw relative overflow-hidden bg-white text-[#0f172a] dark:bg-[#0f172a] dark:text-white md:px-16 py-16 px-0 sm:px-6" id="about">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-4 sm:px-0 px-6">
          <h2 className="text-4xl font-bold mb-14 gradient-text inline-block">
            <u>About </u>me
          </h2>
          <p className="text-2xl font-semibold">Hey! I&apos;m {User.name}</p>
          <div className="font-normal text-gray-700 dark:text-gray-300 space-y-4">
            {User.about.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        <div className="relative w-90 h-90 sm:w-120 sm:h-120 mx-auto sm:-mt-10 select-none">
          <div className="absolute border-[2px] border-dashed border-violet-500/30 rounded-full w-85 h-85 sm:w-110 sm:h-110 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute border-[2px] border-dashed border-cyan-500/40 rounded-full w-70 h-70 sm:w-90 sm:h-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite_reverse]"></div>
          <div className="absolute border-[2px] border-dashed border-blue-400/50 rounded-full w-55 h-55 sm:w-70 sm:h-70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_15s_linear_infinite]"></div>

          {aboutIcons.map((icon) => {
            return (
              <div
                key={icon.name}
                className="absolute px-3 py-3 glass-panel rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] animate-float"
                style={{ animationDelay: icon.delay, ...icon.position }}
              >
                <div className={`w-7 h-7 sm:w-8 sm:h-8 ${icon.size || ""} text-white`}>
                  <Icon icon={icon.icon} width="100%" height="100%" />
                </div>
              </div>
            );
          })}

          <div className="absolute top-1/2 left-1/2 w-36 h-36 sm:w-52 sm:h-52 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full overflow-hidden border-4 border-[#0f172a] shadow-[0_0_30px_rgba(139,92,246,0.6)]">
            <Image
              src="/img/me.webp"
              alt="Avatar"
              sizes="(max-width: 640px) 9rem, (max-width: 768px) 13rem, 208px"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
