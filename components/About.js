"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function About({ lang }) {
  const { theme } = useTheme();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const aboutEn = `With years of experience in video production and visual storytelling, I combine technical precision with creative vision. My workflow focuses on rhythm, pacing, and emotional impact to create videos that resonate.`;
  const aboutAr = `مع سنوات من الخبرة في إنتاج الفيديو وسرد القصص البصرية، أجمع بين الدقة التقنية والرؤية الإبداعية. يركز سير عملي على الإيقاع والتسلسل والتأثير العاطفي لإنشاء مقاطع فيديو تتجاوب مع المشاهدين.`;
  const detailEn =
    "Every frame is intentional. Every cut is purposeful. From color grading to sound design, we obsess over the details that make content impossible to scroll past.";
  const detailAr =
    "كل لقطة مقصودة. كل قطعة تحرير لها هدف. من تصحيح الألوان إلى تصميم الصوت، نحن نهتم بالتفاصيل التي تجعل المحتوى من الصعب تجاوزه.";

  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.25)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.35)] hover:shadow-[color:var(--accent)]/20 hover:-translate-y-1 hover:border-[color:color-mix(in oklab, var(--accent) 60%, transparent)] transition-all duration-500 cursor-pointer">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(93,186,220,0.2),transparent_35%)]" />
            <div className="absolute inset-0 bg-[color:var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl" />
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] group-hover:scale-[1.02] transition-transform duration-500">
              <Image
                src={theme === "light" ? "/logo-dark.jpg" : "/logo-light.jpg"}
                alt="VE Artz Logo"
                fill
                className="h-full w-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-5 left-5 h-3 w-32 rounded-full bg-[color:var(--border)]" />
              <div className="absolute bottom-5 left-40 h-3 w-16 rounded-full bg-[color:var(--border-70)]" />
            </div>
            <div className="absolute -left-4 top-8 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)] group-hover:bg-[color:var(--accent)]/10 group-hover:text-[color:var(--accent)] group-hover:border-[color:color-mix(in oklab, var(--accent) 60%, transparent)] transition-all duration-300">
              {lang === "ar" ? "2+ سنوات خبرة" : "2+ Years Experience"}
            </div>
            <div className="absolute -right-8 bottom-12 h-28 w-28 rotate-[8deg] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_50%)]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`${lang === "ar" ? "font-arabic text-right" : ""}`}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
            {lang === "ar" ? "القصة" : "The Story"}
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[color:var(--text)] md:text-5xl lg:text-6xl\">
            {lang === "ar" ? "عن" : "About"}
            {""}
            <span
              className={`text-[color:var(--accent)] ${lang === "ar" ? "" : "display-font"}`}
            >
              {" "}
              VE Artz{" "}
            </span>
          </h2>
          <p className="mt-5 text-base text-[color:var(--text-muted)] md:text-lg">
            {lang === "ar" ? aboutAr : aboutEn}
          </p>
          <p className="mt-4 text-sm text-[color:var(--text-muted)] md:text-base">
            {lang === "ar" ? detailAr : detailEn}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: lang === "ar" ? "جودة سينمائية" : "Cinematic Quality",
                desc:
                  lang === "ar"
                    ? "صور مصممة بأسلوب وإيقاع سينمائي."
                    : "Crafted visuals with cinematic tone and pacing.",
              },
              {
                title: lang === "ar" ? "تسليم سريع" : "Fast Turnaround",
                desc:
                  lang === "ar"
                    ? "تسليم سريع دون التضحية بالجودة."
                    : "Agile delivery without sacrificing polish.",
              },
              {
                title: lang === "ar" ? "متوافق مع المنصات" : "Platform Native",
                desc:
                  lang === "ar"
                    ? "مُحسَّن لتنسيق وإيقاع كل منصة."
                    : "Optimized for each platform's format and rhythm.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4 hover:bg-[color:var(--surface-2)] hover:shadow-md hover:border-[color:color-mix(in oklab, var(--accent) 60%, transparent)] hover:-translate-y-px transition-all duration-300 cursor-pointer"
              >
                <p className="text-sm font-semibold text-[color:var(--text)] group-hover:text-[color:var(--accent)] transition-colors duration-300">
                  {item.title}
                </p>
                <p className="mt-2 text-xs text-[color:var(--text-muted)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className={`mt-8 flex ${lang === "ar" ? "justify-end" : ""}`}>
            <button
              className="group rounded-full bg-[color:var(--accent)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[color:var(--surface)] transition-all duration-300 hover:brightness-110 hover:shadow-md hover:shadow-[color:var(--accent)]/30 hover:-translate-y-px"
              onClick={() => scrollToSection("contact")}
            >
              {lang === "ar" ? "اعمل معنا" : "Work With Us"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
