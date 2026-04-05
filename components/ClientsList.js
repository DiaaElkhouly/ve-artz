"use client";

import Navbar from "./Navbar";
import ClientCard from "./ClientCard";
import { getClients } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientsList({ lang }) {
  const pathname = usePathname();
  const isArabic = lang === "ar";
  const clientsList = getClients();

  return (
    <>
      <Navbar lang={lang} showBack={true} />
      <div className="min-h-screen pt-20 px-6 md:px-12 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-24">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[color:var(--surface)] hover:shadow-lg hover:shadow-[color:var(--accent)/0.3] hover:-translate-y-px transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {isArabic ? "العودة للرئيسية" : "Back to Home"}
                </span>
              </motion.button>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-secondary)] bg-clip-text text-transparent mb-6 mt-8">
              {isArabic ? "عملاؤنا" : "Our Clients"}
            </h1>
            <p className="text-xl text-[color:var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
              {isArabic
                ? "شراكات طويلة الأمد مع أبرز العلامات في مختلف الصناعات."
                : "Long-term partnerships with leading brands across industries."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientsList.map((client, index) => (
              <ClientCard
                key={client.id}
                clientId={client.id}
                lang={lang}
                variant="list"
              />
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-[color:var(--surface)] border-2 border-[color:var(--accent)] text-[color:var(--accent)] px-12 py-6 rounded-full font-semibold text-lg hover:bg-[color:var(--accent)] hover:text-[color:var(--surface)] transition-all hover:shadow-[color:var(--accent)/0.3]"
            >
              {isArabic ? "عملاء آخرون" : "See Selected Work"}
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}





