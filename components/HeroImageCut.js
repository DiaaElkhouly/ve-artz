"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImageCut({ className = "" }) {
  return (
    <motion.div
      className={`relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] w-full aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden border-2 border-[color:var(--border)] group shadow-2xl shadow-black/20 transition-all duration-500 before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:pointer-events-none before:opacity-60 before:bg-[radial-gradient(ellipse_at_60%_40%,rgba(0,255,255,0.10)_0%,transparent_70%)] hover:before:opacity-90 \${className}`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 98%, 95% 100%, 3% 100%)",
        WebkitClipPath: "polygon(0 0, 100% 0, 100% 98%, 95% 100%, 3% 100%)",
      }}
      initial={{ y: 0 }}
      animate={{
        y: [0, -1, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.035,
        rotate: -1.5,
        boxShadow: "0 0 0 4px var(--accent), 0 8px 32px 0 rgba(0,0,0,0.25)",
        borderColor: "var(--accent)",
        y: 0,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <Image
        src="/omer-salah.jpeg"
        alt="Omer Salah"
        fill
        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
        className="object-cover w-full h-full rounded-3xl object-center group-hover:scale-105 group-hover:blur-[1px] transition-all duration-500"
        priority
      />
      {/* Overlay gradient for professional look */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-[color:var(--accent)]/10 opacity-0 group-hover:opacity-80 transition-all duration-500 rounded-3xl pointer-events-none" />
      {/* Animated accent line on hover */}
      <div className="absolute bottom-8 left-8 w-24 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent group-hover:scale-100 scale-0 transition-all duration-500 origin-left z-10" />
      {/* Subtle accent border glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[color:var(--accent)] group-hover:shadow-[0_0_32px_0_var(--accent)] transition-all duration-500" />
    </motion.div>
  );
}
