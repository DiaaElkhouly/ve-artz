"use client";

import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Footer({ lang = "en" }) {
  const { theme } = useTheme();
  const year = new Date().getFullYear();
  const isArabic = lang === "ar";

  const links = isArabic
    ? [
        { href: "#hero", label: "الرئيسية" },
        { href: "#skills", label: "المهارات" },
        { href: "#clients", label: "الأعمال" },
        { href: "#about", label: "من نحن" },
        { href: "#contact", label: "تواصل" },
      ]
    : [
        { href: "#hero", label: "Home" },
        { href: "#skills", label: "Skills" },
        { href: "#clients", label: "Clients" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
      ];

  const socials = isArabic
    ? [
        { href: "https://www.facebook.com/share/1F7FtdzoxJ/", label: "فيسبوك" },
        {
          href: "https://www.instagram.com/ve.artz?igsh=MW04NW5xeWtmYzBjbg==",
          label: "إنستجرام",
        },
        {
          href: "https://www.tiktok.com/@ve.artz?_r=1&_t=ZS-94nH4UwglHg",
          label: "تيك توك",
        },
        { href: "https://x.com/Ve_Artz1", label: "إكس" },
      ]
    : [
        {
          href: "https://www.facebook.com/share/1F7FtdzoxJ/",
          label: "Facebook",
        },
        {
          href: "https://www.instagram.com/ve.artz?igsh=MW04NW5xeWtmYzBjbg==",
          label: "Instagram",
        },
        {
          href: "https://www.tiktok.com/@ve.artz?_r=1&_t=ZS-94nH4UwglHg",
          label: "TikTok",
        },
        { href: "https://x.com/Ve_Artz1", label: "X" },
      ];

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[color:var(--surface)] px-6 py-14 md:px-12"
    >
      <div
        className={`relative  grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr] w-full ${
          isArabic ? "text-right" : ""
        }`}
      >
        <div>
          <div
            className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}
          >
            <Link href={"/#home"} className="flex items-center gap-3">
              <Image
                src={theme === "light" ? "/logo-light.jpg" : "/logo-dark.jpg"}
                alt="Logo"
                width="40"
                height="40"
                className="rounded-2xl object-contain"
              />
              <span className="hidden lg:block text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                VE ARTZ
              </span>
            </Link>
          </div>
          <div></div>
          <p className="mt-4 max-w-sm text-sm text-[color:var(--text-muted)]">
            {isArabic
              ? "نحوّل الأفكار إلى محتوى بصري احترافي بإيقاع سينمائي ولمسة تصميم دقيقة."
              : "We shape ideas into polished visual stories with cinematic rhythm and refined design."}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
            {isArabic ? "روابط سريعة" : "Quick Links"}
          </p>
          <div className="mt-4 gap-4 sm:gap-2 px-2 text-sm text-[color:var(--text)] group/link-container w-fit flex flex-wrap sm:grid">
            {links.map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                className="group/link relative inline-flex items-center py-1 px-2 rounded-md hover:text-[color:var(--accent)] hover:scale-[1.05] transition-all duration-300 ease-out hover:shadow-[0_4px_12px_rgba(127,184,184,0.25)] hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[rgb(var(--accent))] hover:after:transition-all hover:after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
            {isArabic ? "التواصل" : "Contact"}
          </p>
          <div
            className={`mt-4 flex flex-wrap items-center gap-4 ${isArabic ? "justify-end" : ""}`}
          >
            {/* Phone */}
            <a
              href="https://wa.me/+201143993072"
              className="group flex items-center gap-2 rounded-xl p-2 transition-all duration-300 ease-out hover:bg-[rgb(var(--accent)/0.15)] hover:shadow-[0_0_16px_rgba(127,184,184,0.3)] hover:scale-[1.02]"
              aria-label="Email"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgb(var(--accent)/0.1)] text-[color:var(--accent)] group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_12px_rgba(127,184,184,0.4)] transition-all duration-300">
                <FaWhatsapp size={18} />
              </div>
              <span className="text-sm font-medium text-[color:var(--text)] group-hover:text-[color:var(--accent)] group-hover:font-semibold">
                +20 114 399 3072
              </span>
            </a>
            {/* Email */}
            <a
              href="mailto:Apomarsalah1234@gmail.com"
              className="group flex items-center gap-2 rounded-xl p-2 transition-all duration-300 ease-out hover:bg-[rgb(var(--accent)/0.15)] hover:shadow-[0_0_16px_rgba(127,184,184,0.3)] hover:scale-[1.02]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgb(var(--accent)/0.1)] text-[color:var(--accent)] group-hover:scale-110 group-hover:rotate-[-2deg] group-hover:shadow-[0_0_12px_rgba(127,184,184,0.4)] transition-all duration-300">
                <Mail size={18} />
              </div>
              <span className="text-sm font-medium text-[color:var(--text)] group-hover:text-[color:var(--accent)] group-hover:font-semibold">
                Apomarsalah1234@gmail.com
              </span>
            </a>
          </div>
          {/* Socials */}
          <div className="mt-4 flex gap-4 ">
            {socials.map((social) => {
              const Icon =
                social.label === "Facebook" || social.label === "فيسبوك"
                  ? FaFacebook
                  : social.label === "Instagram" || social.label === "إنستجرام"
                    ? FaInstagram
                    : social.label === "TikTok" || social.label === "تيك توك"
                      ? FaTiktok
                      : FaXTwitter;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <Icon className="w-10 h-10 group-hover:scale-110 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 rounded-lg p-1" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-between relative  mt-12 w-full border-t border-[color:var(--border)] pt-6 text-xs text-[color:var(--text-muted)]">
        © {year} VE ARTS.{" "}
        {isArabic ? "كل الحقوق محفوظة" : "All rights reserved."}
        <div>
          {isArabic ? (
            <>
              تطوير{" "}
              <a
                href="https://diaaelkhouly.github.io/diaa-portfolio"
                target="_blank"
                rel="noreferrer"
                className="group/link relative inline-flex items-center py-1 px-2 rounded-md font-medium text-[color:var(--text-muted)] hover:text-[color:var(--accent)] hover:scale-[1.05] transition-all duration-300 ease-out hover:shadow-[0_4px_12px_rgba(127,184,184,0.25)] hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[rgb(var(--accent))] hover:after:transition-all hover:after:duration-300"
              >
                ضياء الخولي
              </a>
            </>
          ) : (
            <>
              Developed by{" "}
              <a
                href="https://wa.me/201201449924"
                target="_blank"
                rel="noreferrer"
                className="group/link relative inline-flex items-center py-1 px-2 rounded-md font-medium text-[color:var(--text-muted)] hover:text-[color:var(--accent)] hover:scale-[1.05] transition-all duration-300 ease-out hover:shadow-[0_4px_12px_rgba(127,184,184,0.25)] hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[rgb(var(--accent))] hover:after:transition-all hover:after:duration-300"
              >
                Diaa Elkhouly
              </a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
