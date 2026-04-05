"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ClientsGrid from "@/components/ClientsGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InitialLoader from "@/components/InitialLoader";
import CustomCursor from "@/components/CustomCursor";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function HomePage() {
  const pathname = usePathname();
  const router = useRouter();
  const [lang, setLang] = useState("en");

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

  return (
    <>
      <InitialLoader lang={lang} />
      <Navbar lang={lang} onLangChange={handleLangChange} />
      <main className="">
        <Hero lang={lang} />
        <Skills lang={lang} />
        <ClientsGrid lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
        <CustomCursor />
      </main>
    </>
  );
}




