import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acompañamiento en Microdosis de Psilocibina",
  description:
    "Programa de acompañamiento integral para el uso consciente de microdosis de psilocibina. Proceso seguro, educativo y personalizado con Eliana Martínez.",
  openGraph: {
    title: "Acompañamiento en Microdosis de Psilocibina — Trama Viva",
    description:
      "Programa de acompañamiento integral para el uso consciente de microdosis de psilocibina. Proceso seguro, educativo y personalizado.",
    url: "https://trama-viva.com/microdosis",
    images: [
      {
        url: "/images/microdosis/hero-microdosis.webp",
        width: 1200,
        height: 630,
        alt: "Microdosis — Trama Viva",
      },
    ],
  },
};

export default function MicrodosisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}