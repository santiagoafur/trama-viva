import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNIÓN — Retiro de Psilocibina en Córdoba, Argentina",
  alternates: {
  canonical: "https://trama-viva.com/retiros/union",
  },
  description:
    "Retiro terapéutico de 4 días en las sierras de Córdoba, Argentina. Ceremonia de macrodosis de psilocibina, yoga, meditación y Breathwork. Cupos limitados. 10-13 Septiembre 2026.",
  openGraph: {
    title: "UNIÓN — Retiro de Psilocibina en Córdoba, Argentina",
    description:
      "Retiro terapéutico de 4 días en las sierras de Córdoba, Argentina. Ceremonia de macrodosis de psilocibina, yoga, meditación y Breathwork. Cupos limitados.",
    url: "https://trama-viva.com/retiros/union",
    images: [
      {
        url: "/images/union/hero-union-desktop.webp",
        width: 1200,
        height: 630,
        alt: "Retiro UNIÓN — Córdoba Argentina",
      },
    ],
  },
};

export default function UnionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}