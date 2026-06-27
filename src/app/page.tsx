import { Home, Toggle, Contact, About, Projects, Achievements, Skills, Footer } from "@/components";

export default function Page() {
  return (
    <div className="relative overflow-x-hidden selection:bg-[#0f172a] selection:text-gray-50 dark:selection:text-[#0f172a] dark:selection:bg-gray-50">
      <Home />
      <Toggle />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
