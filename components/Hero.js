"use client";

import { motion } from "framer-motion";
import HeroImageCut from "./HeroImageCut";

const enText = `I'm Omvr Salah, a Video Editor and Visual Architect focused on creating clear and engaging visual experiences. My work is centered around shaping ideas into visual stories through editing, rhythm, and thoughtful visual structure.`;

const arText = `أنا عمر صلاح، أعمل كـ Video Editor و Visual Architect، مهتم بصناعة محتوى بصري يوازن بين الفكرة والشكل. أركز على تحويل الأفكار إلى تجربة مرئية واضحة ومؤثرة من خلال المونتاج وبناء الإيقاع البصري للفيديو.`;

export default function Hero({ lang }) {
  const text = lang === "ar" ? arText : enText;
  const isArabic = lang === "ar";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-20 sm:py-20 md:py-24 lg:py-28"
    >
      <div
        className={`relative z-10 grid grid-cols-1 md:grid-cols-2  gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-stretch lg:items-center w-full ${isArabic ? "lg:[direction:rtl]" : "lg:[direction:ltr]"}`}
      >
        <div className="hidden md:block relative lg:[direction:ltr] order-2 md:order-2">
          <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-[color:var(--glow-1)] blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-[color:var(--glow-2)] blur-3xl" />

          <div className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-8 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-[color:var(--accent)]/10 hover:border-[color:color-mix(in oklab, var(--accent) 50%, transparent)] hover:-translate-y-1 transition-all duration-600 cursor-pointer backdrop-blur-sm">
            <div className="absolute inset-0 opacity-5 [background-image:radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.08),transparent_50%)]" />
            <div className="relative space-y-4">
              <div className="grid gap-4 ">
                <HeroImageCut />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${isArabic ? "font-arabic text-right lg:[direction:ltr] order-2 md:order-1" : "order-1"}`}
        >
          <h1
            className={`text-4xl leading-[0.95] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[color:var(--text)] ${isArabic ? "" : "display-font"}`}
          >
            {isArabic ? (
              <div className="text-5xl sm:text-6xl font-bold">
                من
                <motion.span
                  className="block text-[color:var(--accent)] hover-glow pt-6"
                  whileHover={{ scale: 1.02 }}
                >
                  أكون
                </motion.span>
              </div>
            ) : (
              <>
                Who
                <motion.span
                  className="block text-[color:var(--accent)] hover-glow"
                  whileHover={{ scale: 1.02 }}
                >
                  Am
                </motion.span>
                I
              </>
            )}
          </h1>
          <p
            className={`mt-6 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-base md:text-lg lg:text-xl xl:text-2xl text-[color:var(--text-muted)] leading-relaxed ${isArabic ? "" : "dir-ltr"}`}
          >
            {text}
          </p>
          <div
            className={`mt-8 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 ${isArabic ? "sm:justify-end" : ""}`}
          >
            <motion.button
              className="group rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[color:var(--surface)] hover-lift btn-hover hover-glow shadow-lg hover:shadow-md hover:shadow-[0_0_20px_rgba(127,184,184,0.3)] hover:-translate-y-px transition-all duration-300 w-full sm:w-auto"
              onClick={() => scrollToSection("clients")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {isArabic ? "عرض الأعمال" : "View Portfolio"}
            </motion.button>
            <motion.button
              className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[color:var(--text)] hover-lift hover-glow link-hover group w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {isArabic ? "تواصل معي" : "Contact Me"}
            </motion.button>
          </div>
          <div
            className={`mt-10 flex  sm:flex-wrap items-start sm:items-center gap-8 text-[color:var(--text-muted)] sm:flex-row ${isArabic ? "sm:justify-end" : ""}`}
          >
            <motion.div
              className="group hover:shadow-md hover:-translate-y-px hover-glow transition-all duration-300 cursor-pointer flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl md:text-3xl  font-semibold text-[color:var(--text)] group-hover:text-[color:var(--accent)] transition-colors duration-300">
                200+
              </p>
              <p className="text-xs uppercase tracking-widest text-center">
                {isArabic ? "مشروع تم تنفيذه" : "Projects Delivered"}
              </p>
            </motion.div>
            <motion.div
              className="group hover:shadow-md hover:-translate-y-px hover-glow transition-all duration-300 cursor-pointer flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl md:text-3xl font-semibold text-[color:var(--text)] group-hover:text-[color:var(--accent)] transition-colors duration-300">
                50+
              </p>
              <p className="text-xs uppercase tracking-widest text-center">
                {isArabic ? "عملاء سعداء" : "Happy Clients"}
              </p>
            </motion.div>
            <motion.div
              className="group hover:shadow-md hover:-translate-y-px hover-glow transition-all duration-300 cursor-pointer flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl md:text-3xl font-semibold text-[color:var(--text)] group-hover:text-[color:var(--accent)] transition-colors duration-300">
                3M+
              </p>
              <p className="text-xs uppercase tracking-widest text-center">
                {isArabic ? "إجمالي المشاهدات" : "Total Views"}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dir-ltr {
          direction: ltr;
        }
      `}</style>
    </section>
  );
}
