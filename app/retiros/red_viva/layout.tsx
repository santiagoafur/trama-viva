import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RED VIVA — Experiencia de Psilocibina en Punta del Este, Uruguay",
  alternates: {
  canonical: "https://trama-viva.com/retiros/red_viva",
  },
  description:
    "Experiencia terapéutica en Punta del Este, Uruguay. Conexión somática y miceliar. Ceremonia de macrodosis de psilocibina. Cupos limitados. 3-4 Octubre 2026.",
  openGraph: {
    title: "RED VIVA — Experiencia de Psilocibina en Punta del Este, Uruguay",
    description:
      "Experiencia terapéutica en Punta del Este, Uruguay. Conexión somática y miceliar. Ceremonia de macrodosis de psilocibina. Cupos limitados.",
    url: "https://trama-viva.com/retiros/red_viva",
    images: [
      {
        url: "/images/red-viva/hero-red-viva-desktop.webp",
        width: 1200,
        height: 630,
        alt: "Experiencia RED VIVA — Uruguay",
      },
    ],
  },
};

export default function RedVivaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}