"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Bentham } from "next/font/google";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { motion } from "framer-motion";
import ClientCard from "../../components/ClientCard";
import { clients, getGroupedClients } from "../../data/clients.js";

/**
 * ClientsPage component displays a page showing clients with language support
 * and interactive elements with animations
 */
export default function ClientsPage() {
  // Get current pathname from router
  const pathname = usePathname();
  // State for current language, default is English

  const [lang, setLang] = useState("en");
  const router = useRouter();
  const isArabic = lang === "ar";

  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    router.push(`/${newLang}${pathname.replace(/^\/(en|ar)/, "")}`);
    setLang(newLang);
  };

  // Effect to detect language from URL pathname
  useEffect(() => {
    // Match language code (en or ar) at the start of pathname
    const match = pathname.match(/^\/(en|ar)/);
    if (match) {
      // Set language based on URL match
      setLang(match[1]);
    }
  }, [pathname]);

  // Get grouped clients data (assuming this function is imported elsewhere)
  const groupedClients = getGroupedClients(); // Assuming you have a function to group clients

  return (
    <>
      {/* Navigation bar with current language prop */}
      <Navbar lang={lang} />
      <main className="pt-16">
        {/* Back to home button with hover animations */}
        <div className="flex justify-start px-2 pt-5 sm:px-10 sm:pt-10">
          <Link href={`/${lang}`} className="group">
            <button
              className="group-hover:scale-[1.05] group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-[color:var(--accent)]/20 group-hover:border-[color:color-mix(in oklab, var(--accent) 70%, transparent)] active:scale-[0.97] active:shadow-md rounded-xl border border-[color:var(--border)] p-4 backdrop-blur-sm bg-[color:var(--surface-95)]/80 transition-all duration-300 ease-out flex items-center gap-2 font-semibold uppercase tracking-[0.2em] text-sm hover:bg-[color:var(--surface-2)]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)]"
              type="button"
            >
              {/* Chevron left icon with hover animation */}
              <ChevronLeft
                size={20}
                className="group-hover:translate-x-[-2px] transition-transform duration-300"
              />
              <span>{lang == "ar" ? "الرئيسية" : "Home"}</span>
            </button>
          </Link>
        </div>
        {/* Title  */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-center ${isArabic ? "font-arabic" : ""}`}
        >
          {/* Subtitle with language-specific text */}
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
            {isArabic ? "عملاؤنا" : "Our Clients"}
          </p>
          {/* Main heading with language-specific text */}
          <h2 className="mt-3 text-4xl font-semibold text-[color:var(--text)] md:text-5xl">
            {isArabic ? "شركاء النجاح" : "Success Partners"}
          </h2>
        </motion.div>

        {/* Main clients section with responsive grid layout */}
        <section
          id="clients"
          className="relative overflow-hidden  p-10 md:px-12 w-full"
        >
          <div className="relative z-10 w-full">
            {/* Animated heading section with language support */}

            {/* Grid of client cards with responsive columns */}
            <div className=" grid grid-cols-2  gap-8">
              {groupedClients.map((client, index) => (
                // Individual client card with teaser variant
                <ClientCard
                  key={client.id}
                  clientId={client.id}
                  lang={lang}
                  variant="teaser"
                />
              ))}
            </div>
          </div>
        </section>
        <About />
        <Contact />
        <CustomCursor />
      </main>
    </>
  );
}
