"use client";

import { useEffect, useState } from "react";

export default function InitialLoader({ lang = "en" }) {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const isArabic = lang === "ar";

  useEffect(() => {
    let fadeTimer;
    let hideTimer;

    const startFade = () => {
      fadeTimer = setTimeout(() => setFadeOut(true), 150);
      hideTimer = setTimeout(() => setShow(false), 650);
    };

    if (document.readyState === "complete") {
      startFade();
    } else {
      window.addEventListener("load", startFade);
    }

    return () => {
      window.removeEventListener("load", startFade);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className={`fixed inset-0 z-[250] flex items-center justify-center bg-[color:var(--surface)] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-[color:var(--border)] border-t-[color:var(--accent)]" />
        <div className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
          Loading...
        </div>
      </div>
    </div>
  );
}




