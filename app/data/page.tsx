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
  descEs: "Una introducción simple para entender qué son las microdosis y cómo pueden ayudarte a ganar claridad, conectar con tus emociones y potenciar tu creatividad. Incluye recomendaciones prácticas para empezar de forma consciente y segura.",
  descEn: "A simple introduction to understanding what microdosing is and how it can help you gain clarity, connect with your emotions and enhance your creativity. Includes practical recommendations to start in a conscious and safe way.",
  href: "https://drive.google.com/file/d/1bZF8ANjGtdZlQP5ThLXZ8N6MAZAuee-0/view?usp=sharing",
  available: true,
  },
  {
    es: "Micelio y Neuronas: El Arte de Reconectar",
    en: "Mycelium and Neurons: The Art of Reconnecting",
    descEs: "Una mirada inspiradora sobre cómo la naturaleza y el cerebro humano comparten un mismo lenguaje: la conexión. Este contenido invita a comprender cómo nuestras redes de comportamiento internas pueden expandirse, generando nuevas formas de percibir, sentir y pensar.",
    descEn: "An inspiring look at how nature and the human brain share the same language: connection. This content invites you to understand how our internal behavioral networks can expand, generating new ways of perceiving, feeling and thinking.",
    href: "https://drive.google.com/file/d/1mC63NPBVNQRQkXN5jCJn8XQ9WNloZd0G/view?usp=sharing",
    available: true,
  },
  {
    es: "Más que Alimento, Más que Medicina",
    en: "More than Food, More than Medicine",
    descEs: "Una mirada profunda sobre el rol de los hongos en la vida humana: desde la nutrición hasta la expansión de la conciencia. Un contenido que invita a reconectar con la naturaleza, comprender su potencial y explorar una relación más consciente con estos organismos.",
    descEn: "A deep look at the role of mushrooms in human life: from nutrition to the expansion of consciousness. Content that invites you to reconnect with nature, understand their potential and explore a more conscious relationship with these organisms.",
    href: "https://drive.google.com/file/d/1Auq9Ols-7Ic3hsp0o2j2nK_friqDTtFb/view?usp=sharing",
    available: true,
  },
  {
    es: "Tipos de Hongos",
    en: "Types of Mushrooms",
    descEs: "Una guía clara para conocer los diferentes tipos de hongos: desde adaptógenos que apoyan el bienestar integral, hasta aquellos con psilocibina y su impacto en la mente y la conciencia. Un primer acercamiento para entender sus propiedades, usos y el valor de una relación consciente con ellos.",
    descEn: "A clear guide to understanding the different types of mushrooms: from adaptogens that support integral wellbeing, to those containing psilocybin and their impact on the mind and consciousness. A first approach to understanding their properties, uses and the value of a conscious relationship with them.",
    href: "https://drive.google.com/file/d/1Vc--yXwlbjn1jwmmrv84NhTxvPuNAUzV/view?usp=sharing",
    available: true,
  },
  {
    es: "Niños Santos",
    en: "Holy Children",
    descEs: "Un recorrido por la historia y el uso ancestral de los hongos sagrados en distintas culturas. Este contenido invita a comprender su dimensión espiritual, su simbolismo y el profundo vínculo entre naturaleza, ritual y conciencia.",
    descEn: "A journey through the history and ancestral use of sacred mushrooms across different cultures. This content invites you to understand their spiritual dimension, their symbolism and the deep bond between nature, ritual and consciousness.",
    href: "https://drive.google.com/file/d/1siFaPVPiU7iWiU-kF_M7_9eHkaJ-qb28/view?usp=sharing",
    available: true,
  },
  {
    es: "¿Cómo se siente consumir un psicodélico?",
    en: "What does it feel like to consume a psychedelic?",
    descEs: "Una guía para acercarte a la experiencia psicodélica desde sus principales efectos: cambios en la percepción, emociones, pensamiento y sentido de identidad. Un contenido que ayuda a comprender, de forma simple, cómo se transforma la experiencia interna.",
    descEn: "A guide to approaching the psychedelic experience through its main effects: changes in perception, emotions, thinking and sense of identity. Content that helps you understand, in a simple way, how the internal experience transforms.",
    href: "https://drive.google.com/file/d/13zV7wDiTaApqBDWHYOQjv9u885UZetyr/view?usp=sharing",
    available: true,
  },
  {
    es: "Medicina o Droga",
    en: "Medicine or Drug",
    descEs: "Una reflexión que invita a cuestionar la mirada tradicional sobre los psicodélicos. Explora la diferencia entre uso consciente e inconsciente, abriendo una nueva perspectiva sobre su potencial en el bienestar y el autoconocimiento.",
    descEn: "A reflection that invites you to question the traditional view of psychedelics. It explores the difference between conscious and unconscious use, opening a new perspective on their potential for wellbeing and self-knowledge.",
    href: "https://drive.google.com/file/d/1pKHu5MX1gZZe9L-brs4tQIsyv_Hmhfrl/view?usp=sharing",
    available: true,
  },
  {
    es: "Psicofarmacología de la Psilocibina",
    en: "Psychopharmacology of Psilocybin",
    descEs: "Una explicación simple y accesible sobre cómo la psilocibina actúa en el cuerpo y el cerebro. Explora su impacto en la mente, la emoción y la plasticidad cerebral, abriendo una mirada científica a su potencial terapéutico.",
    descEn: "A simple and accessible explanation of how psilocybin acts in the body and brain. It explores its impact on the mind, emotion and brain plasticity, opening a scientific perspective on its therapeutic potential.",
    href: "https://drive.google.com/file/d/1dh6TewGHH5oaMM87XgdUhYNSbYZIkC4l/view?usp=sharing",
    available: true,
  },
  {
    es: "Renacimiento Psicodélico",
    en: "Psychedelic Renaissance",
    descEs: "",
    descEn: "",
    href: "https://drive.google.com/file/d/12AlnLb8THWk23Ld8LRegg7mOpirZmOOt/view?usp=sharing",
    available: true,
  },
  {
    es: "¿Qué es la Default Mode Network?",
    en: "What is the Default Mode Network?",
    descEs: "",
    descEn: "",
    href: "#",
    available: false,
  },
  {
    es: "Legalidad",
    en: "Legality",
    descEs: "",
    descEn: "",
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
                className="h-full"
              >
                
                {article.available ? (
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-4 p-6 bg-white border border-[#868859]/20 rounded-2xl hover:border-[#868859] hover:shadow-lg transition-all h-full">
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#292E17] flex items-center justify-center flex-shrink-0">
                        <BookOpen size={16} className="text-[#E8DCC4]" />
                      </div>
                      <ArrowRight size={18} className="text-[#868859] flex-shrink-0 group-hover:translate-x-1 transition-transform mt-1" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="font-bold text-[#292E17] group-hover:text-[#7E2625] transition-colors leading-snug text-lg">
                        {locale === "es" ? article.es : article.en}
                      </h3>
                      {(locale === "es" ? article.descEs : article.descEn) && (
                        <p className="text-sm text-[#3B1B0E]/60 leading-relaxed">
                          {locale === "es" ? article.descEs : article.descEn}
                        </p>
                      )}
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col gap-4 p-6 bg-white border border-[#868859]/10 rounded-2xl opacity-50 h-full">
                    <div className="w-10 h-10 rounded-full bg-[#868859]/20 flex items-center justify-center flex-shrink-0">
                      <BookOpen size={16} className="text-[#868859]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="font-bold text-[#292E17] leading-snug text-lg">
                        {locale === "es" ? article.es : article.en}
                      </h3>
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#868859]">
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