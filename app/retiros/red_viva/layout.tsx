import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RED VIVA — Retiro de Psilocibina en Minas, Uruguay",
  alternates: {
  canonical: "https://trama-viva.com/retiros/red_viva",
  },
  description:
    "Retiro terapéutico de 4 días en Minas, Uruguay. Conexión somática y micelial. Ceremonia de macrodosis de psilocibina. Cupos limitados. 1-4 Octubre 2026.",
  openGraph: {
    title: "RED VIVA — Retiro de Psilocibina en Minas, Uruguay",
    description:
      "Retiro terapéutico de 4 días en Minas, Uruguay. Conexión somática y micelial. Ceremonia de macrodosis de psilocibina. Cupos limitados.",
    url: "https://trama-viva.com/retiros/red_viva",
    images: [
      {
        url: "/images/red-viva/hero-red-viva-desktop.webp",
        width: 1200,
        height: 630,
        alt: "Retiro RED VIVA — Uruguay",
      },
    ],
  },
};

export default function RedVivaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}