import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WITHIN — Retiro de Psilocibina en Costa Rica",
  alternates: {
  canonical: "https://trama-viva.com/retiros/within",
  },
  description:
    "Retiro terapéutico de 4 días en Santa Teresa, Costa Rica. Ceremonia de macrodosis de psilocibina, yoga, ice bath y sauna. Cupos limitados. 29 Abril - 2 Mayo 2027.",
  openGraph: {
    title: "WITHIN — Retiro de Psilocibina en Costa Rica",
    description:
      "Retiro terapéutico de 4 días en Santa Teresa, Costa Rica. Ceremonia de macrodosis de psilocibina, yoga, ice bath y sauna. Cupos limitados.",
    url: "https://trama-viva.com/retiros/within",
    images: [
      {
        url: "/images/within/hero-within-desktop.webp",
        width: 1200,
        height: 630,
        alt: "Retiro WITHIN — Costa Rica",
      },
    ],
  },
};

export default function WithinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}