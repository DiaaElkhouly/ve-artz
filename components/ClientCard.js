"use client";

import Link from "next/link";
import Image from "next/image";
import { getClientById } from "../data/clients.js";

export default function ClientCard({ clientId, lang, variant = "teaser" }) {
  const client = getClientById(clientId);
  if (!client) return null;

  const isArabic = lang === "ar";
  const mediaSrc = client.image[0];
  const isVideo =
    typeof mediaSrc === "string" && /\.(mp4|webm|ogg|m4v)$/i.test(mediaSrc);

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
          {isVideo ? (
            <video
              src={mediaSrc}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              muted
              loop
              playsInline
              autoPlay
            />
          ) : (
            <Image
              src={mediaSrc}
              alt={client.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-0 ring-1 ring-white/0 transition duration-500 group-hover:ring-white/10" />

        {/* <div className="absolute top-4 left-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/90">
          <span className="rounded-full bg-black/50 px-3 py-1 border border-white/10">
            {client.tagLeft || "0:30"}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/90 border border-white/10">
            {client.tagRight || "REEL"}
          </span>
        </div> */}

        <div className="absolute bottom-6 left-6 right-6 translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
          {/* <p className="text-[11px] uppercase tracking-[0.35em] text-white/70">
            {client.title || (isArabic ? "محتوى علامتك" : "Brand Content")}
          </p> */}
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

  return (
    <Link
      href={`/${lang}/clients/${client.slug}`}
      className={`${baseClasses} h-80 p-8`}
    >
      <Image
        src={client.image}
        alt={client.name}
        width={400}
        height={200}
        className="w-full h-48 object-cover rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500"
      />
      <h3 className="text-2xl font-bold text-[color:var(--text)] mb-2">
        {client.name}
      </h3>
      <p className="text-[color:var(--text-muted)]">{client.description}</p>
    </Link>
  );
}
