"use client";

import Navbar from "./Navbar";
import { ChevronLeft, Play, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import clients from "../data/clients.json";

const getClientBySlug = (slug) => clients.find((c) => c.slug === slug);

export default function ClientPage({ lang }) {
  const routerParams = useParams();
  const rawClient = routerParams?.client;
  const clientSlug = Array.isArray(rawClient) ? rawClient[0] : rawClient;
  const clientData = getClientBySlug(clientSlug);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  if (!clientData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[color:var(--text-muted)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Client Not Found</h1>
          <Link
            href="/clients"
            className="text-[color:var(--accent)] hover:underline"
          >
            Back to Clients
          </Link>
        </div>
      </div>
    );
  }

  const clientMedia = clientData.image || [];
  const clientVideos = clientMedia.filter(
    (media) =>
      typeof media === "string" && /\.(mp4|webm|ogg|m4v)$/i.test(media),
  );
  const totalMedia = clientMedia.length;

  const currentMedia = clientMedia[activeMediaIndex];

  const isCurrentVideo =
    typeof currentMedia === "string" &&
    /.(mp4|webm|ogg|m4v)$/i.test(currentMedia);
  const mediaLabel = isCurrentVideo ? "Video" : "Image";

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen relative overflow-hidden"
    >
      <Navbar lang={lang} showBack={true} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative pt-24 pb-16 lg:pb-24 px-6 lg:px-12 xl:px-24  mx-auto"
      >
        {/* Back button */}
        <Link
          href={`/${lang}/`}
          className="group mb-2 inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] text-sm font-semibold uppercase tracking-wide text-[color:var(--text-muted)] hover:border-accent/50 hover:text-accent hover:shadow-lg backdrop-blur-sm transition-all duration-400 hover:-translate-y-1"
        >
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          {lang === "ar" ? "الرئيسية" : "Home"}
        </Link>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-24 items-center">
          {/* Client Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left lg:text-right"
          >
            <h1 className="text-left text-5xl lg:text-7xl xl:text-8xl font-black mb-6 leading-none bg-gradient-to-br from-[color:var(--text)] to-[color:var(--text-muted)] bg-clip-text">
              {clientData.name}
            </h1>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-[color:var(--text-muted)]">
                <span className="font-bold text-accent">{totalMedia}</span>{" "}
                Media Assets
              </div>
            </div>
            <div className="flex gap-4 mt-10 items-center justify-center">
              <Link
                href={`/${lang}/clients/${clientSlug}/#videos`}
                className="group flex-1 justify-center items-center inline-flex  gap-3 px-8 py-4 rounded-2xl border-2 border-accent/50 bg-accent/10 text-accent font-bold uppercase tracking-wide text-base hover:bg-accent hover:text-surface hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-500 backdrop-blur-sm"
              >
                <span>
                  {(lang = "ar" ? "جميع الفيديوهات" : "See All Videos")}
                </span>

                <motion.span
                  className="h-3 w-3 rounded-full bg-accent"
                  whileHover={{ scale: 1.2, x: 4 }}
                />
              </Link>
            </div>
          </motion.div>

          {/* Hero Media */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/12] rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl group/media">
              {isCurrentVideo ? (
                <video
                  src={currentMedia}
                  className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={clientData.image?.[0] || ""}
                />
              ) : (
                <Image
                  src={currentMedia}
                  alt={`${clientData.name} - ${mediaLabel}`}
                  fill
                  className="object-cover group-hover/media:scale-105 transition-transform duration-700"
                />
              )}
              {/* Media counter */}
              {/* <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl text-white/90 font-mono text-sm border border-white/20">
                {activeMediaIndex + 1} / {totalMedia}
              </div> */}
            </div>
            {/* Media navigation */}
            {/* {totalMedia > 1 && (
              <div className="flex gap-3 mt-6 justify-center">
                {Array.from({ length: totalMedia }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMediaIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === activeMediaIndex
                        ? "bg-accent scale-125 shadow-lg"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )} */}
          </motion.div>
        </div>
      </motion.section>

      {clientVideos.length > 0 && (
        <motion.section
          id="videos"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 px-6 lg:px-12 xl:px-24"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.45em] text-[color:var(--text-muted)]">
                {lang === "ar" ? "كل الفيديوهات" : "All Videos"}
              </p>
              <h3 className="mt-4 text-3xl lg:text-4xl font-black bg-gradient-to-r from-[color:var(--text)] to-[color:var(--text-muted)] bg-clip-text text-transparent">
                {lang === "ar" ? "معرض وسائط العميل" : "Client Media Gallery"}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-8">
              {clientVideos.map((videoSrc, index) => (
                <motion.article
                  key={`${videoSrc}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)] shadow-2xl hover:-translate-y-2 hover:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] transition-all duration-500"
                >
                  <div className="relative aspect- w-full">
                    <video
                      src={videoSrc}
                      className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      loop
                      playsInline
                      controls
                    />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-10 items-center justify-center">
            <Link
              href={`/${lang}/clients`}
              className="group inline-flex  gap-3 px-8 py-4 rounded-2xl border-2 border-accent/50 bg-accent/10 text-accent font-bold uppercase tracking-wide text-base hover:bg-accent hover:text-surface hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-500 backdrop-blur-sm"
            >
              {console.log(lang)}
              <span>{(lang = "ar" ? "جميع العملاء" : "See All Clients")}</span>

              <motion.span
                className="h-3 w-3 rounded-full bg-accent"
                whileHover={{ scale: 1.2, x: 4 }}
              />
            </Link>
          </div>
        </motion.section>
      )}
    </div>
  );
}
