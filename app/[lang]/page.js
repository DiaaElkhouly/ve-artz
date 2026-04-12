"use client";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import About from "../../components/About";
import Contact from "../../components/Contact";
import InitialLoader from "../../components/InitialLoader";
import CustomCursor from "../../components/CustomCursor";
// import { getGroupedProjects } from "../../data/clients.js"; // legacy removed
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ClientsGrid from "../../components/ClientsGrid";

export default function HomePage() {
  const pathname = usePathname();
  const router = useRouter();
  const [lang, setLang] = useState("en");
  // const groupedProjects = getGroupedProjects(); // no longer used

  useEffect(() => {
    const match = pathname.match(/^\/(en|ar)/);
    if (match) {
      setLang(match[1]);
    }
  }, [pathname]);

  const handleLangChange = (newLang) => {
    localStorage.setItem("lang", newLang);
    setLang(newLang);
    router.push(`/${newLang}`);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "en" || savedLang === "ar") {
      setLang(savedLang);
    }
  }, []);

  // const grouped = getGroupedProjects(); // no longer used
  return (
    <div className="scroll-smooth">
      <InitialLoader lang={lang} />
      <Navbar lang={lang} onLangChange={handleLangChange} />
      <main className="">
        <Hero lang={lang} />
        <Skills lang={lang} />
        <ClientsGrid lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
        {/* <CustomCursor /> */}
      </main>
    </div>
  );
}
