import "../globals.css";
import { Manrope, Playfair_Display } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

export default function LangLayout({ children, params: paramsPromise }) {
  const params = paramsPromise; // Direct access - stable in layouts for Next.js 16
  const lang = params?.lang || "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <div
      lang={lang}
      dir={dir}
      className={`${manrope.variable} ${playfair.variable} font-sans antialiased site-grid-content`}
    >
      {children}
    </div>
  );
}
