"use client";

import { motion } from "framer-motion";
import { Leaf, Users, Heart } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { homePage } from "@/lib/content";
import { SectionWrapper } from "@/components/section-wrapper";

const icons = [Leaf, Heart, Users];

export function AboutSection() {
  const { locale } = useLanguage();
  const content = homePage[locale].about;

  return (
    <SectionWrapper id="que-es" variant="alt">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Columna Izquierda: Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full" 
        >
          {content.title && (
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              {content.title}
            </h2>
          )}
          
          {/* Tamaño de texto reducido a algo mucho más sutil y proporcionado */}
          <p 
            className={`font-serif text-foreground/90 leading-relaxed text-balance
              ${content.title ? 'mt-8 text-lg' : 'text-xl md:text-2xl'}`}
          >
            {content.description}
          </p>
        </motion.div>

        {/* Columna Derecha: Tarjetas con Iconos */}
        <div className="grid gap-6">
          {content.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex gap-5 p-6 bg-background rounded-2xl border border-border/50 hover:border-secondary transition-colors duration-300"              >
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-sm flex items-center justify-center">
                  <Icon className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-foreground/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}