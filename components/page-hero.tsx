"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Importamos el optimizador mágico

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden">
      
      {/* 1. Imagen optimizada de fondo */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority // ESTA ES LA CLAVE: Le dice a Next.js que la precargue instantáneamente
        quality={85} // Le bajamos un pelín la calidad imperceptible para ganar velocidad
      />
      
      {/* 2. Capa oscura arriba de la foto (Overlay) */}
      <div className="absolute inset-0 bg-primary/70 z-0" />

      {/* 3. Contenido (Textos) */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground tracking-tight text-balance max-w-5xl mx-auto"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-xl md:text-2xl text-primary-foreground/80 font-light max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}