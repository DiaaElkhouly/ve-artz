"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import ClientCard from "./ClientCard";
import clients from "../data/clients.json";

const getGroupedClients = () => clients.filter((c) => c.featured);
const getClientById = (id) => clients.find((c) => c.id === id);

const ClientCards = ({ clientId, lang }) => {
  const client = getClientById(clientId);
  if (!client) return null;

  const isArabic = lang === "ar";
  const mediaSrc = Array.isArray(client.image) ? client.image[0] : client.image;
  const isVideo =
    typeof mediaSrc === "string" && /.(mp4|webm|ogg|m4v)$/i.test(mediaSrc);
  const videoRef = useRef(null);

  const handlePlay = () => videoRef.current?.play();
  const handlePause = () => videoRef.current?.pause();
};

export default function ClientsGrid({ lang }) {
  const isArabic = lang === "ar";
  const featuredClients = getGroupedClients().slice(0, 8);

  return (
    <section
      id="clients"
      className="relative isolate px-4 py-24 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32 md:py-32 lg:py-40 "
    >
      <div className="mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`pb-20 lg:pb-28 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 ${isArabic ? "font-arabic lg:text-right" : ""}`}
        >
          <div className="lg:max-w-lg lg:basis-1/2">
            <p className="text-xs md:text-sm uppercase tracking-[0.5em] md:tracking-[0.4em] text-muted-foreground/80 font-medium mb-6">
              {isArabic ? "عملاؤنا" : "Our Clients"}
            </p>
            <h2 className="text-6xl md:text-7xl pb-3 font-bold bg-gradient-to-r from-[color:var(--text)] via-[color:var(--accent)] to-[color:var(--text)] bg-clip-text text-transparent drop-shadow-2xl mb-3">
              {isArabic ? "شركاء النجاح" : "Success Partners"}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex  justify-center"
          >
            <Link
              scroll
              href={`/${lang}/clients`}
              className="group inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-4.5 text-sm md:text-base font-black uppercase tracking-[0.25em] border-2 border-border bg-surface rounded-2xl backdrop-blur-xl shadow-xl transition-all duration-600 hover:border-accent/60 hover:bg-accent/5 hover:text-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 focus-visible:ring-offset-4 focus-visible:ring-offset-surface\"
              aria-label="Browse all clients"
            >
              <span>{isArabic ? "جميع الشركاء" : "View All Partners"}</span>
              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]"
                whileHover={{ scale: 1.4, x: 6 }}
                transition={{ type: "spring", stiffness: 500 }}
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2  gap-10">
          {featuredClients.map((client) => (
            <div key={client.id || client.slug || client.name} className="flex">
              <ClientCard
                key={client.id}
                clientId={client.id}
                lang={lang}
                variant="teaser"
              />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 md:hidden flex justify-center"
        >
          <Link
            href={`/${lang}/clients`}
            className="group inline-flex items-center gap-3 px-10 py-4 text-base font-black uppercase tracking-[0.2em] border-2 border-border bg-surface rounded-2xl backdrop-blur-xl shadow-xl transition-all duration-600 hover:border-accent/60 hover:bg-accent/5 hover:text-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 focus-visible:ring-offset-4 focus-visible:ring-offset-surface\"
            aria-label="Browse all clients (mobile)"
          >
            <span>{isArabic ? "جميع الشركاء" : "View All Partners"}</span>
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]"
              whileHover={{ scale: 1.4, x: 6 }}
              transition={{ type: "spring", stiffness: 500 }}
            />
          </Link>
        </motion.div>
      </div>

      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-white/20 rounded-full animate-ping [animation-delay:-1s]" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent/40 rounded-full animate-bounce [animation-delay:-2s]" />
      </div>
    </section>
  );
}
