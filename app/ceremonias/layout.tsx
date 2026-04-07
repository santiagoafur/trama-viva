import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ceremonias de Macrodosis de Psilocibina — Costa Rica",
  description:
    "Ceremonias terapéuticas de macrodosis de psilocibina en Santa Teresa, Costa Rica. Un espacio sagrado y seguro para la transformación personal guiado por facilitadores certificados.",
  openGraph: {
    title: "Ceremonias de Macrodosis de Psilocibina — Costa Rica",
    description:
      "Ceremonias terapéuticas de macrodosis de psilocibina en Santa Teresa, Costa Rica. Un espacio sagrado y seguro para la transformación personal.",
    url: "https://trama-viva.com/ceremonias",
    images: [
      {
        url: "/images/ceremonias/ceremonias-hero.webp",
        width: 1200,
        height: 630,
        alt: "Ceremonias — Trama Viva",
      },
    ],
  },
};

export default function CeremoniasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}