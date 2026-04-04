"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  locations?: string[]; // ← NUEVO: prop opcional para mostrar ubicaciones
}

export function PageHero({ title, subtitle, backgroundImage, locations }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden">
      
      {/* 1. Imagen optimizada de fondo */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
        quality={85}
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

        {/* 4. Location Labels (NUEVO) */}
        {locations && locations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-2 md:gap-3 flex-wrap"
          >
            {locations.map((location, index) => (
              <span key={location} className="flex items-center gap-2 md:gap-3">
                <span className="text-primary-foreground/70 text-xs md:text-sm tracking-[0.15em] uppercase font-medium">
                  {location}
                </span>
                {/* Separador (no mostrar después del último) */}
                {index < locations.length - 1 && (
                  <span className="text-primary-foreground/30 text-sm">·</span>
                )}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
