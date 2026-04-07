import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retiros de Psilocibina — Costa Rica, Argentina y Uruguay",
  description:
    "Retiros terapéuticos de psilocibina en Costa Rica, Argentina y Uruguay. Experiencias inmersivas de transformación profunda con acompañamiento profesional. WITHIN, UNIÓN y RED VIVA.",
  openGraph: {
    title: "Retiros de Psilocibina — Costa Rica, Argentina y Uruguay",
    description:
      "Retiros terapéuticos de psilocibina con acompañamiento profesional. WITHIN en Costa Rica, UNIÓN en Argentina y RED VIVA en Uruguay.",
    url: "https://trama-viva.com/retiros",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Retiros Trama Viva",
      },
    ],
  },
};

export default function RetirosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}