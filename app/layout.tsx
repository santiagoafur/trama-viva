import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trama Viva | Despertar la inteligencia vincular",
  description:
    "Espacio de bienestar holístico. Retiros, microdosis y ceremonias para tu transformación personal. Acompañamiento profesional con Eliana Martínez.",
  keywords: [
    "retiros",
    "microdosis",
    "ceremonias",
    "bienestar",
    "transformación personal",
    "coaching ontológico",
    "psilocibina",
    "wellness",
    "mindfulness",
  ],
  authors: [{ name: "Trama Viva" }],
  creator: "Whitespacez",
  openGraph: {
    title: "Trama Viva | Despertar la inteligencia vincular",
    description:
      "Espacio de bienestar holístico. Retiros, microdosis y ceremonias para tu transformación personal.",
    url: "https://tramaviva.com",
    siteName: "Trama Viva",
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trama Viva | Despertar la inteligencia vincular",
    description:
      "Espacio de bienestar holístico. Retiros, microdosis y ceremonias para tu transformación personal.",
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
