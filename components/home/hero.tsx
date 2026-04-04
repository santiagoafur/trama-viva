"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { homePage } from "@/lib/content";

export function Hero() {
  const { locale } = useLanguage();
  const content = homePage[locale].hero;

  return (
    <section className="relative min-h-screen w-full flex items-end overflow-hidden">

      {/* Imagen de fondo */}
      <Image
        src={content.backgroundImage}
        alt="Trama Viva"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient de abajo hacia arriba */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#292E17]/90 via-[#292E17]/30 to-transparent" />

      {/* Contenido — abajo a la izquierda */}
      <div className="relative z-10 w-full px-6 lg:px-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-[#E8DCC4] mb-6 leading-tight"
            >
              {content.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[#E8DCC4]/80 max-w-2xl leading-relaxed mb-8"
            >
              {content.slogan}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Link
                href="#caminos"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#7E2625] text-[#E8DCC4] font-bold rounded-full hover:bg-[#7E2625]/90 transition-all hover:-translate-y-1 shadow-lg"
              >
                {content.cta}
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#E8DCC4]/40 text-[#E8DCC4] font-bold rounded-full hover:bg-[#E8DCC4]/10 transition-all"
              >
                {locale === "es" ? "Conocer más" : "Learn more"}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}