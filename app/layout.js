import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "VE Artz || OMVR SALAH",
    template: "%s | VE Artz",
  },
  description: `Omar Salah - Professional Video Editor and Visual Architect. Transforming ideas into engaging visual stories with cinematic rhythm and refined design.`,
  keywords: [
    "video editing",
    "visual architecture",
    "motion design",
    "ve artz",
    "omar salah",
    "portfolio",
  ],
  authors: [{ name: "Omar Salah" }],
  creator: "Omar Salah",
  publisher: "VE Artz",
  metadataBase: new URL("https://ve-arts.vercel.app"),
  icons: {
    icon: { url: "/logo-dark.jpg", type: "image/jpg" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ve-arts.vercel.app",
    siteName: "VE Artz",
    title: "VE Artz - Video Editing & Visual Architecture",
    description: `Omar Salah - Professional Video Editor and Visual Architect. Transforming ideas into engaging visual stories.`,
    images: [
      {
        url: "/logo-light.jpg",
        width: 1200,
        height: 630,
        alt: "VE Artz Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VE Artz - Video Editing Portfolio",
    description: `Omar Salah - Professional Video Editor and Visual Architect.`,
    images: ["/logo-light.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export const viewport = {
  themeColor: "#7fb8b8",
  colorScheme: "dark light",
};

export default async function RootLayout({ children, params }) {
  const { lang = "en" } = (await params) || {};
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-dark.jpg" />
      </head>
      <body className="antialiased site-grid">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          suppressHydrationWarning
        >
          <div className="site-grid-content">
            {children}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[color:var(--border)] to-transparent my-24 mx-auto max-w-6xl" />
            <Footer lang={lang} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
