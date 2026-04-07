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
  const homeHref = isArabic ? "/ar" : "/en";

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
            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)] bg-gradient-to-r from-[color:var(--text)] via-[color:var(--accent)] to-[color:var(--text)] bg-clip-text text-transparent drop-shadow-2xl">
              {lang === "ar"
                ? "اشعر بالرؤية - اشعر بالفنون"
                : "Feel the Vision - Feel the Artz"}
            </p>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {orderedSections.map((section) => {
            return (
              <Link
                key={section.id}
                href={`/${lang}/#${section.id}`}
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

        <div className=" flex items-center gap-2 lg:gap-3 mr-2 lg:mr-0">
          {/* lang btn */}
          <motion.div
            key={lang}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="group  switch-lang cursor-none hover:scale-[1.02] active:scale-[0.98]"
          >
            <input
              id="language-toggle"
              class="check-toggle check-toggle-lang"
              type="checkbox"
              checked={lang === "ar"}
              onChange={toggleLang}
            />
            <label for="language-toggle"></label>
            <span class="on">AR</span>
            <span class="off">EN</span>
          </motion.div>

          {/* theme btn */}
          <label class="theme-switch">
            <input
              type="checkbox"
              class="theme-switch__checkbox"
              onClick={toggleTheme}
            />
            <div class="theme-switch__container">
              <div class="theme-switch__clouds"></div>
              <div class="theme-switch__stars-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 144 55"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div class="theme-switch__circle-container">
                <div class="theme-switch__sun-moon-container">
                  <div class="theme-switch__moon">
                    <div class="theme-switch__spot"></div>
                    <div class="theme-switch__spot"></div>
                    <div class="theme-switch__spot"></div>
                  </div>
                </div>
              </div>
            </div>
          </label>

          {/* <button
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
          </button> */}

          {/* <motion.label
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
              {/* Simple professional sun on knob *}
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
          </motion.label> */}

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
