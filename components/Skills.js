"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ScrollVelocity from "./ScrollVelocity";

const labels = {
  en: {
    title: "Skills",
    subtitle: "Capabilities & Tools",
    core: "Core Skills",
    softwares: "Software",
    ai: "AI Tools",
  },
  ar: {
    title: "المهارات",
    subtitle: "القدرات والأدوات",
    core: "المهارات الأساسية",
    softwares: "البرامج",
    ai: "أدوات الذكاء الاصطناعي",
  },
};

const skillsData = {
  core: [
    "Video Editing",
    "Storytelling",
    "Color correction",
    "Color grading",
    "Sound design",
    "Motion graphic",
    "Kinetic typography",
    "Explainer videos",
  ],
  coreAr: [
    "Video Editing",
    "Storytelling",
    "Color correction",
    "Color grading",
    "Sound design",
    "Motion graphic",
    "Kinetic typography",
    "Explainer videos",
  ],
  softwares: [
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "DaVinci Resolve",
    "CapCut",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Audition",
    "Audacity",
    "Canva",
    "Notion",
  ],
  softwaresAr: [
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "DaVinci Resolve",
    "CapCut",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Audition",
    "Audacity",
    "Canva",
    "Notion",
  ],
  ai: [
    "ChatGPT",
    "Gemini",
    "Flow",
    "Nanobanana Pro",
    "Freepik",
    "Adobe Express",
  ],
  aiAr: [
    "ChatGPT",
    "Gemini",
    "Flow",
    "Nanobanana Pro",
    "Freepik",
    "Adobe Express",
  ],
};

export default function Skills({ lang = "en" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isArabic = lang === "ar";
  const copy = labels[lang] || labels.en;
  const coreList = skillsData.core;
  const softwaresList = skillsData.softwares;
  const aiList = skillsData.ai;

  return (
    <section
      id="skills"
      className="relative px-6 py-28 md:px-12 md:py-36 overflow-hidden"
    >
      <div className="relative z-10 mx-[-6]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`text-center mb-14 md:mb-16`}
        >
          <p className=" text-sm uppercase tracking-[0.4em] text-[color:var(--text-muted)] mb-4">
            {copy.subtitle}
          </p>
          <h2 className="text-6xl md:text-7xl pb-3 font-bold bg-gradient-to-r from-[color:var(--text)] via-[color:var(--accent)] to-[color:var(--text)] bg-clip-text text-transparent drop-shadow-2xl mb-3">
            {copy.title}
          </h2>
          <div className="mx-auto h-px w-28 bg-[linear-gradient(90deg,transparent,rgba(17,19,24,0.35),transparent)] [data-theme=dark]:bg-[linear-gradient(90deg,transparent,rgba(248,247,242,0.35),transparent)]" />
        </motion.div>

        <div className={`relative`}>
          <div className="absolute -left-px -right-px top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(17,19,24,0.2),transparent)] [data-theme=dark]:bg-[linear-gradient(90deg,transparent,rgba(248,247,242,0.2),transparent)]" />
          <div className="absolute -left-px -right-px bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(17,19,24,0.16),transparent)] [data-theme=dark]:bg-[linear-gradient(90deg,transparent,rgba(248,247,242,0.16),transparent)]" />

          <div className="space-y-4 md:space-y-5">
            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)] text-center">
              {copy.core}
            </p>
            <div className="relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]/70 px-4 py-4 md:px-6 md:py-5 overflow-hidden">
              <div
                className={`relative h-11 md:h-18 pointer-events-none overflow-hidden [mask-image:linear-gradient("90deg",transparent,black_10%,black_90%,transparent)]`}
              >
                <ScrollVelocity
                  texts={[coreList.join(" • ")]}
                  velocity={50}
                  numCopies={20}
                  damping={60}
                  stiffness={500}
                  scrollerClassName="text-lg md:text-xl leading-none"
                  className="text-[color:var(--accent)]/85 font-medium tracking-[0.06em] uppercase [&_.flex]:gap-6"
                />
              </div>
            </div>

            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)] text-center">
              {copy.softwares}
            </p>
            <div className="relative uppercase rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]/70 px-4 py-4 md:px-6 md:py-5 overflow-hidden">
              <div
                className={` relative h-11 md:h-18 pointer-events-none overflow-hidden [mask-image:linear-gradient("90deg",transparent,black_10%,black_90%,transparent)]`}
              >
                <ScrollVelocity
                  texts={[softwaresList.join(" • ")]}
                  velocity={-50}
                  numCopies={20}
                  damping={60}
                  stiffness={500}
                  scrollerClassName="text-base md:text-lg leading-none"
                  className="text-[color:var(--accent-strong)]/90 tracking-[0.02em] [&_.flex]:gap-6 "
                />
              </div>
            </div>

            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)] text-center">
              {copy.ai}
            </p>
            <div className="relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]/70 px-4 py-4 md:px-6 md:py-5 overflow-hidden">
              <div
                className={`relative h-11 md:h-18 pointer-events-none overflow-hidden [mask-image:linear-gradient("90deg",transparent,black_10%,black_90%,transparent)]`}
              >
                <ScrollVelocity
                  texts={[aiList.join(" • ")]}
                  velocity={50}
                  numCopies={20}
                  damping={60}
                  stiffness={500}
                  scrollerClassName="text-sm md:text-lg leading-none"
                  className="text-[color:var(--accent)]/85 font-medium tracking-[0.06em] uppercase [&_.flex]:gap-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
