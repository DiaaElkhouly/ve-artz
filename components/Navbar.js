"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar({
  lang = "en",
  onLangChange,
  showBack = false,
}) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isArabic = lang === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLang = () => {
    if (onLangChange) {
      onLangChange(lang === "en" ? "ar" : "en");
    } else {
      window.location.href = `/${lang === "en" ? "ar" : "en"}${pathname.replace(/^\/(en|ar)/, "")}`;
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "clients", "about", "contact"];
      for (let section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top < 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const sections = isArabic
    ? [
        { id: "hero", label: "الرئيسية" },
        { id: "skills", label: "المهارات" },
        { id: "clients", label: "العملاء" },
        { id: "about", label: "من نحن" },
        { id: "contact", label: "تواصل" },
      ]
    : [
        { id: "hero", label: "Home" },
        { id: "skills", label: "Skills" },
        { id: "clients", label: "Clients" },
        { id: "about", label: "About" },
        { id: "contact", label: "Contact" },
      ];

  const orderedSections = isArabic ? [...sections].reverse() : sections;
  const homeHref = isArabic ? "/ar" : "/";

  const isClientsPage =
    pathname.startsWith("/clients") ||
    pathname.startsWith("/ar/clients") ||
    pathname.startsWith("/en/clients");

  return (
    <header
      dir="ltr"
      className="fixed top-0 left-0 right-0 z-[100] border-b border-[color:var(--border)] bg-[color:var(--surface-90)] backdrop-blur-xl px-4 md:px-8 lg:px-10 py-3"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href={homeHref} className="flex items-center gap-3">
          <Image
            src={theme === "light" ? "/logo-light.jpg" : "/logo-dark.jpg"}
            alt="Logo"
            width="40"
            height="40"
            className="rounded-2xl object-contain"
          />
          <span className="hidden lg:block text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
            VE ARTZ
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {orderedSections.map((section) => {
            return (
              <Link
                key={section.id}
                href={`/#${section.id}`}
                className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] ${
                  activeSection === section.id
                    ? "bg-[color:var(--surface-2)] text-[color:var(--text)] ring-1 ring-[color:var(--border)]"
                    : "text-[color:var(--text-muted)] hover:text-[color:var(--text)] hover:bg-[color:var(--surface-2)]"
                }`}
                type="button"
              >
                {section.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 lg:gap-3 mr-2 lg:mr-0">
          <button
            onClick={toggleLang}
            className={`group relative rounded-full border border-[color:color-mix(in oklab, var(--border) 50%, transparent)] backdrop-blur-sm bg-[color:var(--surface-95)]/80 px-4 py-2.5 gap-1.5 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ease-out hover:bg-[color:var(--surface-2)]/90 hover:scale-[1.05] hover:-translate-y-0.5 hover:border-[color:color-mix(in oklab, var(--accent) 70%, transparent)] hover:shadow-lg hover:shadow-[color:var(--accent)]/20 hover:shadow-xl active:scale-[0.97] active:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] ${isArabic ? "bg-[color:var(--accent)]/10 border-[color:color-mix(in oklab, var(--accent) 50%, transparent)] text-[color:var(--accent)]" : ""}`}
            title={isArabic ? "العربية / English" : "English / العربية"}
            type="button"
          >
            <svg
              className={`w-4 h-4 transition-all duration-500 group-hover:scale-110 ${isArabic ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s.745-2.868.967-3.935c.17-.842.338-1.684.493-2.52.262-1.327 1.127-2.06 2.038-2.06 1.114 0 1.919.918 2.04 2.06.156.836.325 1.678.494 2.52.22 1.067.966 3.935 0.967 3.935" />
              <path d="M16 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
              <circle cx="9.1" cy="8.7" r=".4" />
              <circle cx="14.9" cy="8.7" r=".4" />
              <circle cx="12" cy="17" r=".4" />
            </svg>
            <span className="hidden sm:inline">{isArabic ? "EN" : "AR"}</span>
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--surface-2)] px-3 py-1.5 text-xs font-bold text-[color:var(--text)] shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-20 border border-[color:var(--border)]">
              {isArabic ? "AR" : "EN"}
            </span>
          </button>

          <motion.label
            className="switch relative p-1 cursor-none"
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
            whileTap={{ scale: 0.92 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              rotateY: { duration: 0.2 },
              scale: { duration: 0.4 },
              rotate: { duration: 0.3 },
            }}
          >
            <motion.input
              checked={theme === "dark"}
              onChange={toggleTheme}
              id="theme-switch"
              type="checkbox"
              initial={{ scale: 1 }}
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
            />
            <span className="slider">
              {/* Simple professional sun on knob */}
              <svg
                className="icon"
                viewBox="0 0 24 24"
                style={{ display: theme === "dark" ? "none" : "block" }}
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <svg
                className="icon"
                viewBox="0 0 24 24"
                style={{ display: theme === "light" ? "none" : "block" }}
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </span>
          </motion.label>

          <button
            className="lg:hidden rounded-xl p-3 transition-all duration-300 ease-out hover:bg-[color:var(--surface-2)] active:scale-[0.96]"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            <Menu
              size={22}
              className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
            />
            <ChevronLeft
              size={22}
              className={`absolute transition-transform duration-300 ${isOpen ? "opacity-100 rotate-180" : "opacity-0"}`}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-1000"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: isArabic ? "-100%" : "100%" }}
            animate={{ x: isOpen ? 0 : isArabic ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`lg:hidden fixed top-16 z-40 h-[calc(100vh-4rem)] w-72 bg-[color:var(--surface)] shadow-2xl border-l border-[color:var(--border)]/50 ${isArabic ? "left-0" : "right-0"}`}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="p-3 border-b border-[color:var(--border)]/50 flex-shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src={
                      theme === "light" ? "/logo-light.jpg" : "/logo-dark.jpg"
                    }
                    alt="VE ARTZ"
                    width={40}
                    height={40}
                    className="rounded-xl"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-[color:var(--text)] leading-tight">
                      VE ARTZ
                    </h2>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-[color:var(--surface-2)]/50 transition-colors group text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-[color:var(--accent)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[color:var(--accent)]/20 transition-colors">
                    <ChevronLeft
                      size={20}
                      className={`transition-transform ${isArabic ? "" : "rotate-180"}`}
                    />
                  </div>
                  <span className="font-medium text-sm uppercase tracking-wide">
                    {isArabic ? "إغلاق القائمة" : "Close Menu"}
                  </span>
                </button>
              </div>

              {/* Menu */}
              <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {orderedSections.map((section, index) => {
                  const isActive = activeSection === section.id;
                  const isClients = section.id === "clients";
                  const href = isClients
                    ? isArabic
                      ? "/ar/clients"
                      : "/clients"
                    : null;

                  return (
                    <Link
                      key={section.id}
                      href={`/#${section.id}`}
                      whileHover={{ scale: 1.01, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex p-4 rounded-xl border border-[color:var(--border)]/30 transition-all duration-200 ease-out text-left hover:border-[color:var(--accent)]/40 hover:bg-[color:var(--surface-2)]/60 hover:shadow-md ${isActive ? "border-[color:var(--accent)]/60 bg-[color:var(--surface-2)]/80 shadow-lg ring-1 ring-[color:var(--accent)]/30" : ""}`}
                    >
                      <span className="flex text-sm text-center font-semibold uppercase tracking-[0.3em] text-[color:var(--text)] group-hover:text-[color:var(--text)]">
                        {section.label}
                      </span>
                      {isActive && (
                        <motion.div
                          className="h-px bg-gradient-to-r from-[color:var(--accent)] to-transparent mt-2"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </header>
  );
}
