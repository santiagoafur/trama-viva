"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Stethoscope,
  HeartHandshake,
  Eye,
  Zap,
  RefreshCw,
  Heart,
  Check,
  ArrowRight,
  Calendar,
  FileText, // Ícono nuevo para el PDF
  Download, // Ícono nuevo para el botón
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { useLanguage } from "@/lib/language-context";
import { microdosisPage } from "@/lib/content";
import { InlineWidget } from "react-calendly";

const considerationIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  "heart-handshake": HeartHandshake,
};

const benefitIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  eye: Eye,
  zap: Zap,
  "refresh-cw": RefreshCw,
  heart: Heart,
};

export default function MicrodosisPage() {
  const { locale } = useLanguage();
  const content = microdosisPage[locale];
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <main>
      <Navbar />
      <PageHero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        backgroundImage={content.hero.backgroundImage}
      />

      {/* Intro con Imagen */}
      <SectionWrapper variant="default">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">
          
          {/* Columna de Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/microdosis/primer-hongo.jpg" 
              alt="Acompañamiento con Microdosis"
              width={800}
              height={500}
              className="object-cover"
            />
          </motion.div>

          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:pl-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17]">
              Un proceso a tu propio ritmo
            </h2>
            <div className="text-lg md:text-xl text-foreground/80 leading-relaxed space-y-4 font-medium">
              <p>
                {content.intro.description}
              </p>
            </div>
            
            {/* Detalle decorativo para sumar a la identidad visual */}
            <div className="pt-6 border-t border-[#868859]/30">
              <p className="text-sm font-bold text-[#7E2625] tracking-widest uppercase">
                Acompañamiento Integral y Seguro
              </p>
            </div>
          </motion.div>

        </div>
      </SectionWrapper>

      {/* Considerations */}
      <SectionWrapper variant="alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center mb-16"
        >
          {content.considerations.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {content.considerations.items.map((item, index) => {
            const Icon = considerationIcons[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8 bg-background rounded-sm border border-border/50 text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Target Audience */}
      <SectionWrapper variant="default">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {content.targetAudience.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {content.targetAudience.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-card rounded-sm border-l-4 border-secondary hover:border-accent transition-colors"
              >
                <Check className="flex-shrink-0 mt-0.5 text-secondary" size={20} />
                <span className="text-foreground/80">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper variant="alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center mb-16"
        >
          {content.benefits.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.benefits.cards.map((card, index) => {
            const Icon = benefitIcons[card.frontIcon] || Eye;
            return (
              <motion.div
                key={card.frontTitle}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative w-full aspect-square cursor-pointer group"
                style={{ perspective: "1000px" }}
                onClick={() => toggleCard(index)}
                onKeyDown={(e) => e.key === "Enter" && toggleCard(index)}
                tabIndex={0}
                role="button"
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-sm overflow-hidden bg-primary flex flex-col items-center justify-center p-6"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={40} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-foreground text-center">
                      {card.frontTitle}
                    </h3>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-sm overflow-hidden bg-card border border-border p-6 flex items-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {card.backContent}
                    </p>
                  </div>
                </motion.div>

                <div className="absolute bottom-2 right-2 text-xs text-primary-foreground/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  Click
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* NUEVA SECCIÓN: PDF Descargable */}
      <SectionWrapper variant="default">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-[#292E17] rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Elemento decorativo de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#868859]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 relative z-10">
              <div className="w-20 h-20 bg-[#E8DCC4] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transform -rotate-3">
                <FileText size={40} className="text-[#3B1B0E]" />
              </div>
              <div>
                <h3 className="text-3xl font-bold font-serif text-[#E8DCC4] mb-3">
                  { locale === 'es' ? 'Guía básica para microdosis' : 'Basic guide for microdosis' }
                </h3>
                <p className="text-[#E8DCC4]/80 text-lg max-w-xl leading-relaxed">
                  { locale === 'es' ? 
                  'Descarga nuestro material gratuito para conocer en detalle los protocolos, recomendaciones y cómo prepararte para iniciar tu proceso.' :
                  'Download our free material to know in detail protocols, recomendations and how to prepaire yourself for starting this process.' }
                </p>
              </div>
            </div>

            <a
              href="/docs/guia-microdosis.pdf"
              download="Guia_Microdosis_TramaViva.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-[#E8DCC4] text-[#3B1B0E] font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Download size={20} />
              Descargar PDF
            </a>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* SECCIÓN CALENDLY */}
      <section className="pt-12 pb-24 px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17] mb-4">
            {locale === "es" ? "Agenda tu sesión" : "Book your session"}
          </h2>
          <p className="text-lg text-[#3B1B0E]/70 mb-10">
            {locale === "es" 
              ? "Elige el día y horario que mejor se adapte a ti para nuestra primera charla." 
              : "Choose the day and time that best suits you for our first chat."}
          </p>

          {/* Contenedor del Widget LIMPIO (sin bordes, ni sombras, ni fondo extra) */}
          <div className="w-full h-[750px]">
            <InlineWidget 
              url="https://calendly.com/trama-viva/30min" 
              styles={{ height: '100%', width: '100%' }}
              pageSettings={{
                //backgroundColor: 'e8dcc4', // Este color hace que se funda invisiblemente con tu fondo
                textColor: '3b1b0e',
                primaryColor: '7e2625',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
              }}
            />
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}