"use client";

import Navbar from "@/components/Navbar";
import ClientPage from "@/components/ClientPage";
import CustomCursor from "@/components/CustomCursor";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientDetailPage() {
  const pathname = usePathname();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const match = pathname.match(/^\/(en|ar)/);
    if (match) {
      setLang(match[1]);
    }
  }, [pathname]);

  return (
    <>
      <Navbar lang={lang} />
      <ClientPage lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
      {/* <CustomCursor /> */}
    </>
  );
}
