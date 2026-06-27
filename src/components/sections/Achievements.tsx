"use client";
import { useState, useMemo } from "react";
import AchivementName from "@/components/cards/AchivementName";
import AchievementCard from "@/components/cards/AchievementCard";
import achievements from "@/data/achivements.json";

export default function Achievements() {
  const [currentId, setCurrentId] = useState(1);

  const currentAchievement = useMemo(() => {
    return achievements.find((a) => a.id === currentId);
  }, [currentId]);

  return (
    <section className="w-full text-[#0f172a] dark:text-white bg-gray-50 dark:bg-[#0f172a] md:px-16 py-16 px-6 relative overflow-hidden" id="achievements">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
      
      <h2 className="text-4xl font-bold gradient-text inline-block">
        <u>Achieve</u>ments
      </h2>
      <div className="mt-14 grid md:grid-cols-3 grid-cols-1 gap-7 relative z-10">
        <div className="col-span-1 space-y-3" id="achievementsNameDiv">
          {achievements.map((achievement) => (
            <AchivementName key={achievement.id} achievement={achievement} isActive={achievement.id === currentId} setCurrentId={setCurrentId} />
          ))}
        </div>
        <div className="col-span-2 p-6 rounded-2xl space-y-3 glass-panel shadow-[0_0_20px_rgba(139,92,246,0.1)] border border-white/10" id="achievementsDetailsDiv">
          {currentAchievement && <AchievementCard achievement={currentAchievement} />}
        </div>
      </div>
    </section>
  );
}
