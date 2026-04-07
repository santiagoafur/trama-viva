import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://trama-viva.com"),
  title: {
    default: "Trama Viva | Retiros de Psilocibina y Microdosis",
    template: "%s | Trama Viva",
  },
  description:
    "Trama Viva es un espacio terapéutico orientado al autoconocimiento y transformación personal. Ofrecemos retiros de psilocibina, acompañamiento en microdosis y ceremonias en Costa Rica, Argentina y Uruguay.",
  keywords: [
    "retiros psilocibina",
    "microdosis acompañamiento",
    "terapia asistida psicodélicos",
    "retiro Costa Rica",
    "retiro Córdoba Argentina",
    "retiro Uruguay",
    "transformación personal",
    "autoconocimiento",
    "medicina sagrada",
    "trama viva",
  ],
  authors: [{ name: "Trama Viva", url: "https://trama-viva.com" }],
  creator: "Trama Viva",
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
    url: "https://trama-viva.com",
    siteName: "Trama Viva",
    title: "Trama Viva | Retiros de Psilocibina y Microdosis",
    description:
      "Espacio terapéutico orientado al autoconocimiento y transformación personal a través de retiros de psilocibina, microdosis y ceremonias.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Trama Viva — Retiros de Psilocibina y Microdosis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trama Viva | Retiros de Psilocibina y Microdosis",
    description:
      "Espacio terapéutico orientado al autoconocimiento y transformación personal.",
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#E8DCC4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="pGmZE86Q-ZxHx5PX7x6lsCGXJnsDYOSVsYuGZC4yYo0" />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
