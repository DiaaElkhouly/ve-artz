"use client";

import { useState, useEffect } from "react";
import { Send, Mail, Phone } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Contact({ lang }) {
  const [formData, setFormData] = useState({
    countryCode: "+20",
    phoneNumber: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("clientPhone");
    if (saved) {
      const { countryCode, phoneNumber } = JSON.parse(saved);
      setFormData({ countryCode, phoneNumber });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullPhone = formData.countryCode + formData.phoneNumber;
    const text = `New Contact Request%0APhone:%20${fullPhone}%0AMessage:%20${formData.message || "No additional message provided."}`;
    const whatsappUrl = `https://wa.me/201143993072?text=${text}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  const isArabic = lang === "ar";

  const labels = isArabic
    ? {
        countryCode: "رمز الدولة",
        phone: "رقم الهاتف",
        message: "رسالتك",
        send: "إرسال",
        thanks: "تم الإرسال! سنتصل بك قريباً.",
      }
    : {
        countryCode: "Country Code",
        phone: "Phone Number",
        message: "Your Message",
        send: "Send",
        thanks: "Sent! We'll contact you soon.",
      };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 md:px-12 md:py-28"
    >
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-center ${isArabic ? "font-arabic" : ""}`}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)] mb-4">
            {isArabic ? "التواصل" : "Contact"}
          </p>
          <h2 className="text-6xl md:text-7xl pb-3 font-bold bg-gradient-to-r from-[color:var(--text)] via-[color:var(--accent)] to-[color:var(--text)] bg-clip-text text-transparent drop-shadow-2xl mb-3">
            {isArabic ? "تواصل معنا" : "Get in Touch"}
          </h2>
        </motion.div>

        <div className="mt-5 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div
              className={`rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-6 ${isArabic ? "text-right" : ""}`}
            >
              <a
                href="https://wa.me/201143993072"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center gap-4 hover:bg-[color:var(--surface)] p-2 -m-2 rounded-2xl transition group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-20)] text-[color:var(--accent)] flex-shrink-0">
                  <FaWhatsapp size={26} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[color:var(--text)]">
                    WhatsApp
                  </h3>
                  <p className="text-sm text-[color:var(--text-muted)]">
                    {isArabic
                      ? "محادثة مباشرة - تلك أسرع طريقه للتواصل "
                      : "Direct chat - fastest way to get in touch"}
                  </p>
                  <p className="text-sm text-[color:var(--text-muted)]">
                    +201143993072
                  </p>
                </div>
              </a>
            </div>

            <div
              className={`rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-6 ${isArabic ? "text-right" : ""}`}
            >
              <a
                href="tel:+201143993072"
                className="flex w-full items-center gap-4 hover:bg-[color:var(--surface)] p-2 -m-2 rounded-2xl transition group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-20)] text-[color:var(--accent)] flex-shrink-0">
                  <Phone size={26} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[color:var(--text)]">
                    Phone
                  </h3>
                  <p className="text-sm text-[color:var(--text-muted)]">
                    +20 114 399 3072
                  </p>
                </div>
              </a>
              <a
                href="mailto:Apomarsalah1234@gmail.com"
                className="flex w-full items-center gap-4 hover:bg-[color:var(--surface)] p-2 -m-2 rounded-2xl transition group mt-4 block"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-20)] text-[color:var(--accent)] flex-shrink-0">
                  <Mail size={26} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[color:var(--text)]">
                    Email
                  </h3>
                  <p className="text-sm text-[color:var(--text-muted)]">
                    Apomarsalah1234@gmail.com
                  </p>
                </div>
              </a>
            </div>

            <div
              className={`rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-6 ${isArabic ? "text-right" : ""}`}
            >
              <h3 className="text-lg font-semibold text-[color:var(--text)] mb-4">
                Social
              </h3>
              <div
                className={`grid grid-cols-2 gap-4 ${isArabic ? "text-right" : ""}`}
              >
                <a
                  href="https://www.facebook.com/share/1F7FtdzoxJ/"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3 rounded-xl border border-[color:var(--border)] hover:bg-[color:var(--surface)] hover:shadow-glow transition-all"
                >
                  <FaFacebook
                    size={24}
                    className="text-[color:var(--accent)] group-hover:scale-110 transition-transform"
                  />
                  <p className="text-sm text-[color:var(--text-muted)] mt-2 font-medium">
                    @ve.artz (Facebook)
                  </p>
                </a>
                <a
                  href="https://www.instagram.com/ve.artz?igsh=MW04NW5xeWtmYzBjbg=="
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3 rounded-xl border border-[color:var(--border)] hover:bg-[color:var(--surface)] hover:shadow-glow transition-all"
                >
                  <FaInstagram
                    size={24}
                    className="text-[color:var(--accent)] group-hover:scale-110 transition-transform"
                  />
                  <p className="text-sm text-[color:var(--text-muted)] mt-2 font-medium">
                    @ve.artz (Instagram)
                  </p>
                </a>
                <a
                  href="https://www.tiktok.com/@ve.artz?_r=1&_t=ZS-94nH4UwglHg"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3 rounded-xl border border-[color:var(--border)] hover:bg-[color:var(--surface)] hover:shadow-glow transition-all"
                >
                  <FaTiktok
                    size={24}
                    className="text-[color:var(--accent)] group-hover:scale-110 transition-transform"
                  />
                  <p className="text-sm text-[color:var(--text-muted)] mt-2 font-medium">
                    @ve.artz (TikTok)
                  </p>
                </a>
                <a
                  href="https://x.com/Ve_Artz1"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3 rounded-xl border border-[color:var(--border)] hover:bg-[color:var(--surface)] hover:shadow-glow transition-all"
                >
                  <FaXTwitter
                    size={24}
                    className="text-[color:var(--accent)] group-hover:scale-110 transition-transform"
                  />
                  <p className="text-sm text-[color:var(--text-muted)] mt-2 font-medium">
                    @Ve_Artz1 (X)
                  </p>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className={`rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-8 ${isArabic ? "text-right" : ""}`}
          >
            <div className="space-y-6">
              <div className={isArabic ? "text-right" : ""}>
                <label className="block text-xs uppercase tracking-widest text-[color:var(--text-muted)] mb-3">
                  {labels.countryCode}
                </label>
                <select
                  value={formData.countryCode}
                  onChange={(e) =>
                    setFormData({ ...formData, countryCode: e.target.value })
                  }
                  className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--accent)] focus:ring-2 ring-[color:var(--accent)]/30 transition-all"
                  required
                  dir="ltr"
                >
                  <option value="">Select</option>
                  <option value="+1">+1 - USA</option>
                  <option value="+7">+7 - Russia</option>
                  <option value="+20">+20 - Egypt</option>
                  <option value="+27">+27 - South Africa</option>
                  <option value="+34">+34 - Spain</option>
                  <option value="+44">+44 - UK</option>
                  <option value="+49">+49 - Germany</option>
                  <option value="+61">+61 - Australia</option>
                  <option value="+81">+81 - Japan</option>
                  <option value="+90">+90 - Turkey</option>
                  <option value="+966">+966 - Saudi Arabia</option>
                  <option value="+971">+971 - UAE</option>
                  <option value="+98">+98 - Iran</option>
                  <option value="+212">+212 - Morocco</option>
                  <option value="+213">+213 - Algeria</option>
                  <option value="+216">+216 - Tunisia</option>
                  <option value="+962">+962 - Jordan</option>
                  <option value="+964">+964 - Iraq</option>
                  <option value="+965">+965 - Kuwait</option>
                  <option value="+968">+968 - Oman</option>
                  <option value="+974">+974 - Qatar</option>
                  <option value="+995">+995 - Georgia</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[color:var(--text-muted)] mb-3">
                  {labels.phone}
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      phoneNumber: e.target.value.replace(/\\D/g, ""),
                    });
                    localStorage.setItem(
                      "clientPhone",
                      JSON.stringify({
                        countryCode: formData.countryCode,
                        phoneNumber: e.target.value.replace(/\\D/g, ""),
                      }),
                    );
                  }}
                  placeholder="1143993072"
                  className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--accent)] focus:ring-2 ring-[color:var(--accent)]/30 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[color:var(--text-muted)] mb-3">
                  {labels.message}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder={
                    isArabic
                      ? "اكتب رسالتك هنا..."
                      : "Tell us about your project or inquiry..."
                  }
                  rows={4}
                  className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-sm text-[color:var(--text)] outline-none resize-vertical focus:border-[color:var(--accent)] focus:ring-2 ring-[color:var(--accent)]/30 transition-all"
                  required
                />
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group gap-2 flex items-center justify-center rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent)]/80 w-full px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[color:var(--surface)] shadow-lg shadow-[color:var(--accent)]/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[color:var(--accent)]/40 active:scale-95"
              >
                <Send size={16} />
                <span>{labels.send}</span>
              </motion.button>
              {submitted && (
                <p className="text-sm text-green-600 text-center font-medium">
                  {labels.thanks}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
