"use client";

import Link from "next/link";
import Image from "next/image";
import clients from "../data/clients.json";

const getClientById = (id) => clients.find((c) => c.id === id);

export default function ClientCard({ clientId, lang, variant = "teaser" }) {
  const client = getClientById(clientId);
  if (!client) return null;

  const isArabic = lang === "ar";
  const mediaSrc = client.image[0];

  const baseClasses =
    "group relative overflow-hidden rounded-3xl bg-[color:var(--surface-2)] border border-[color:color-mix(in oklab, var(--border) 60%, transparent)] shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[color:color-mix(in oklab, var(--accent) 50%, transparent)] hover:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.85)]";

  if (variant === "teaser") {
    return (
      <Link
        scroll={true}
        href={`/${lang}/clients/${client.slug}`}
        className={`${baseClasses} h-70 sm:h-88 md:h-150 w-full  cursor-pointer`}
      >
        <div className="absolute inset-0">
          <video
            src={mediaSrc}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            muted
            loop
            playsInline
            autoPlay
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-0 ring-1 ring-white/0 transition duration-500 group-hover:ring-white/10" />

        <div className="absolute bottom-6 left-6 right-6 translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
          <h3
            className={`mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-white drop-shadow-2xl ${isArabic ? "text-right" : "text-left"}`}
          >
            {client.name}
          </h3>

          <div
            className={`mt-5 flex ${isArabic ? "justify-end" : "justify-start"}`}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white border border-white/20 backdrop-blur transition-colors duration-300 group-hover:bg-white/20">
              {isArabic ? "عرض المزيد" : "Show More"}
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

}
