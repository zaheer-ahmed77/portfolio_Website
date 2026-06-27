"use client";
import { useState } from "react";
import Icon from "../ui/Icon";
import User from "@/data/user.json";

export default function Header() {
  const [menuStatus, setmenuStatus] = useState(false);

  const openMenu = () => {
    setmenuStatus(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeMenu = () => {
    setmenuStatus(false);
    document.body.classList.remove("overflow-hidden");
  };

  const sections = [
    { name: "home", icon: "lucide:home" },
    { name: "about", icon: "lucide:user" },
    { name: "skills", icon: "lucide:code" },
    { name: "projects", icon: "lucide:briefcase" },
    { name: "achievements", icon: "lucide:award" },
    { name: "contact", icon: "lucide:mail" },
  ];

  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-2 dark:text-white">
        <Icon icon="lucide:cpu" className="w-8 h-8 text-blue-500 dark:text-blue-400 select-none" />
        <h1 className="font-bold text-gray-900 dark:text-white text-xl">{User.name}</h1>
      </div>

      <div className="*:cursor-pointer items-center space-x-8 pr-4 font-medium hidden md:flex">
        {sections.map((section, index) => (
          <a key={index} href={`#${section.name}`} className="relative group flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 capitalize transition-colors duration-300">
            <Icon icon={section.icon} className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span>{section.name}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>
      <button aria-label="Open menu" onClick={() => openMenu()} className="md:hidden text-gray-900 dark:text-white">
        <Icon icon="charm:menu-hamburger" className="h-6 w-6" />
      </button>

      <div
        id="menu"
        className={`fixed inset-0 text-[#0f172a] bg-[#f8f8f8] dark:bg-[#0f172a] dark:text-white flex-col items-center justify-center space-y-6 text-xl z-50 ${menuStatus ? "flex" : "hidden"}`}
      >
        <button onClick={() => closeMenu()} aria-label="Close menu" id="close-btn" className="absolute top-6 right-5">
          <Icon icon="charm:cross" className="w-8 h-8" />
        </button>
        {sections.map((item, index) => (
          <a key={index} href={`#${item.name}`} onClick={closeMenu} className="group relative flex items-center gap-3 font-medium capitalize text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
            <Icon icon={item.icon} className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span>{item.name}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>
    </header>
  );
}
