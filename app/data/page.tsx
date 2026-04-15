"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/language-context";

const articles = [
  {
    es: "Microdosis: Guía Básica",
    en: "Microdosing: Basic Guide",
    href: "https://drive.google.com/file/d/1bZF8ANjGtdZlQP5ThLXZ8N6MAZAuee-0/view?usp=sharing",
    available: true,
  },
  {
    es: "Micelio y Neuronas: El Arte de Reconectar",
    en: "Mycelium and Neurons: The Art of Reconnecting",
    href: "https://drive.google.com/file/d/1mC63NPBVNQRQkXN5jCJn8XQ9WNloZd0G/view?usp=sharing",
    available: true,
  },
  {
    es: "Más que Alimento, Más que Medicina",
    en: "More than Food, More than Medicine",
    href: "https://drive.google.com/file/d/1Auq9Ols-7Ic3hsp0o2j2nK_friqDTtFb/view?usp=sharing",
    available: true,
  },
  {
    es: "Tipos de Hongos",
    en: "Types of Mushrooms",
    href: "https://drive.google.com/file/d/1Vc--yXwlbjn1jwmmrv84NhTxvPuNAUzV/view?usp=sharing",
    available: true,
  },
  {
    es: "Niños Santos",
    en: "Holy Children",
    href: "https://drive.google.com/file/d/1siFaPVPiU7iWiU-kF_M7_9eHkaJ-qb28/view?usp=sharing",
    available: true,
  },
  {
    es: "¿Cómo se siente consumir un psicodélico?",
    en: "What does it feel like to consume a psychedelic?",
    href: "https://drive.google.com/file/d/13zV7wDiTaApqBDWHYOQjv9u885UZetyr/view?usp=sharing",
    available: true,
  },
  {
    es: "Medicina o Droga",
    en: "Medicine or Drug",
    href: "https://drive.google.com/file/d/1pKHu5MX1gZZe9L-brs4tQIsyv_Hmhfrl/view?usp=sharing",
    available: true,
  },
  {
    es: "Psicofarmacología de la Psilocibina",
    en: "Psychopharmacology of Psilocybin",
    href: "https://drive.google.com/file/d/1dh6TewGHH5oaMM87XgdUhYNSbYZIkC4l/view?usp=sharing",
    available: true,
  },
  {
    es: "Renacimiento Psicodélico",
    en: "Psychedelic Renaissance",
    href: "https://drive.google.com/file/d/12AlnLb8THWk23Ld8LRegg7mOpirZmOOt/view?usp=sharing",
    available: true,
  },
  {
    es: "¿Qué es la Default Mode Network?",
    en: "What is the Default Mode Network?",
    href: "#",
    available: false,
  },
  {
    es: "Legalidad",
    en: "Legality",
    href: "#",
    available: false,
  },
];

export default function DataPage() {
  const { locale } = useLanguage();

  return (
    <main className="bg-[#E8DCC4] text-[#3B1B0E] min-h-screen font-sans">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen w-full flex items-end overflow-hidden">
        <Image
          src="/images/data/data-hero-desktop.webp"
          alt="Data — Trama Viva"
          fill
          className="object-cover object-center hidden md:block"
          priority
        />
        <Image
          src="/images/data/data-hero-mobile.webp"
          alt="Data — Trama Viva"
          fill
          className="object-cover object-center block md:hidden"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#292E17]/90 via-[#292E17]/30 to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-12 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              >
              <span className="inline-flex items-center bg-[#E8DCC4]/15 backdrop-blur-sm border border-[#E8DCC4]/30 text-[#E8DCC4] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                {locale === "es" ? "Centro de conocimiento" : "Knowledge center"}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-[#E8DCC4] mb-6 leading-tight">
                Data
              </h1>
              <p className="text-lg md:text-xl text-[#E8DCC4]/80 max-w-2xl leading-relaxed">
                {locale === "es"
                  ? "Los hongos y el proceso de desarrollo humano"
                  : "Mushrooms and the human development process"}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
              {locale === "es" ? "Biblioteca" : "Library"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17]">
              {locale === "es" ? "Artículos y recursos" : "Articles and resources"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {article.available ? (
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 p-6 bg-white border border-[#868859]/20 rounded-2xl hover:border-[#868859] hover:shadow-lg transition-all h-full"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#292E17] flex items-center justify-center flex-shrink-0">
                        <BookOpen size={16} className="text-[#E8DCC4]" />
                      </div>
                      <h3 className="font-bold text-[#292E17] group-hover:text-[#7E2625] transition-colors leading-snug">
                        {locale === "es" ? article.es : article.en}
                      </h3>
                    </div>
                    <ArrowRight size={18} className="text-[#868859] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <div className="flex items-center justify-between gap-4 p-6 bg-white border border-[#868859]/10 rounded-2xl opacity-50 h-full">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#868859]/20 flex items-center justify-center flex-shrink-0">
                        <BookOpen size={16} className="text-[#868859]" />
                      </div>
                      <h3 className="font-bold text-[#292E17] leading-snug">
                        {locale === "es" ? article.es : article.en}
                      </h3>
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#868859] flex-shrink-0">
                      {locale === "es" ? "Próximamente" : "Coming soon"}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Historias Reales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-[#868859]/20 pt-16"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
              {locale === "es" ? "Próximamente" : "Coming soon"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17] mb-4">
              {locale === "es" ? "Historias Reales" : "Real Stories"}
            </h2>
            <p className="text-[#3B1B0E]/60 text-lg max-w-xl">
              {locale === "es"
                ? "Experiencias personales de transformación a través de la medicina de los hongos. Próximamente."
                : "Personal experiences of transformation through mushroom medicine. Coming soon."}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}