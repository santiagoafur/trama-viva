"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sparkles,
  Stethoscope,
  HeartHandshake,
  Eye,
  Zap,
  RefreshCw,
  ShieldCheck,
  Heart,
  Check,
  ArrowRight,
  Calendar,
  FileText, // Ícono nuevo para el PDF
  Download,
  ChevronRight,
  ChevronLeft,
  Quote,
  Users, // Ícono nuevo para el botón
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

const testimoniosRetiro = [
  {
    name: "Andrea",
    age: "Argentina",
    image: "/images/testimonios/andrea-testimonio.webp",
    hasImage: true,
    initial: "A",
    text: `Recuerdo mucho nuestras sesiones, nuestros encuentros, las charlas. Entre tu calidez, tu presencia, tus palabras y las micro liberaron en mí, entre otros mundos, un gran enojo que tenía adentro, enquistado, callado, silenciado.
Hoy me siento más liviana, aprendiendo a poner límites y así cuidarme. Con el paso de los meses está queriendo aparecer, ya mucho más despejada, la creatividad y junto con ella el gozo, la diversión y la alegría.
Agradezco la sabiduría de esos 🍄guitos, que sutilmente despejaban camino y agradezco tu sostén en todo momento.
Gracias Eli, gracias 🙏. Desde Argentina, aprendiendo a vivir al suave.
Te mando amor. Ojalá llegue ✨`,
  },
  {
    name: "Matías",
    age: "33 años · Argentina",
    image: "",
    hasImage: false,
    initial: "M",
    text: `Arranqué el programa queriendo deshacerme de mis distintas ansiedades y otras emociones que me incomodaban. Hoy en día intento no taparlas y comprenderlas, percibir qué me quieren decir y así poder ir direccionando mi vida.`,
  },
  {
    name: "Micaela",
    age: "36 años · Argentina",
    image: "/images/testimonios/micaela-testimonio.webp",
    hasImage: true,
    initial: "M",
    text: `Me encantó estar en esta experiencia con el acompañamiento de Eli, cada encuentro era el momento de relajar, escuchar y entender. Aprendí a cuidarme, a verme y a darme cuenta de lo que ya no quiero más para mi vida. Noté mayor conexión con lo que sentía e iba pasando en mi vida. Hermoso!`,
  },
  {
    name: "Marcela",
    age: "39 años · Costa Rica",
    image: "/images/testimonios/marcela-testimonio.webp",
    hasImage: true,
    initial: "M",
    text: `Cuando inicié este camino sabía que las microdosis podían servirme para aliviar mi ansiedad, para conectar conmigo, en general para encontrar respuestas, pero lo estaba haciendo sin entender muy bien cómo guiarme en el proceso. Este programa y específicamente Eli fue el punto perfecto para entender el proceso desde la teoría, se adaptó a mi realidad y me ayudó desde ahí con las herramientas que yo tenía y me dio otras nuevas, pero sobre todo agradezco el amor y la empatía que recibí que me ayudaron a conectar con mi corazón.`,
  },
];
const CHAR_LIMIT = 280;

function TestimonialText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > CHAR_LIMIT;
  const displayed = expanded || !isLong ? text : text.slice(0, CHAR_LIMIT).trimEnd() + "…";

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-base md:text-lg italic font-serif leading-relaxed text-[#3B1B0E]/90 whitespace-pre-line">
        "{displayed}"
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-semibold tracking-widest uppercase text-[#868859] hover:text-[#292E17] transition-colors border-b border-[#868859]/40 hover:border-[#292E17] pb-0.5"
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
}

export default function MicrodosisPage() {
  const { locale } = useLanguage();
  const content = microdosisPage[locale];
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const benefitsContainerRef = useRef<HTMLDivElement>(null);
  const [currentBenefit, setCurrentBenefit] = useState(0);
  const [benefitOffset, setBenefitOffset] = useState(0);
  const isMobile = useIsMobile(); // ya existe en el proyecto

  const getCardWidth = () => {
    if (!benefitsContainerRef.current) return 0;
    const container = benefitsContainerRef.current;
    const visibleCards = isMobile ? 1 : 3;
    const gap = 16;
    return (container.offsetWidth - gap * (visibleCards - 1)) / visibleCards + gap;
  };

  const maxIndex = isMobile
    ? content.benefits.cards.length - 1
    : content.benefits.cards.length - 3;

  const goToBenefit = (index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentBenefit(clamped);
    setBenefitOffset(clamped * getCardWidth());
  };

  const prevBenefit = () => goToBenefit(currentBenefit - 1);
  const nextBenefit = () => goToBenefit(currentBenefit + 1);
    // Estado para el Carrusel de Testimonios
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
    const nextTestimonial = () => {
      setCurrentTestimonial((prev) => (prev + 1) % testimoniosRetiro.length);
    };
  
    const prevTestimonial = () => {
      setCurrentTestimonial((prev) => (prev - 1 + testimoniosRetiro.length) % testimoniosRetiro.length);
    };

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
              <p className="whitespace-pre-line">
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

      {/* Quote con imagen de fondo */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
  
        {/* Imagen de fondo */}
        <Image
          src="/images/microdosis/quote-bg.webp"
          alt="Fondo frase microdosis"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-[#292E17]/60" />

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-8 py-24 text-center"
        >
        <Quote size={48} className="text-[#E8DCC4]/40 mx-auto mb-8" />
          <p className="text-2xl md:text-4xl font-serif italic text-[#E8DCC4] leading-relaxed">
          {locale === "es"
            ? "Los hongos te tejen de nuevo a la realidad. Como una red silenciosa, empieza a unir los hilos que alguna vez se cortaron: los del cuerpo, la mente, el sentir y el entorno."
            : "Mushrooms weave you back into reality. Like a silent net, they begin to reconnect the threads that were once broken: those of the body, the mind, feeling, and the world around you."}
          </p>
        </motion.div>

      </section>

      {/* Desde dónde acompaño */}
      <SectionWrapper variant="alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center mb-16"
          >
          {content.considerations.title}
        </motion.h2>

        <div className="max-w-4xl mx-auto flex flex-col gap-6">

        {/* Bloque 1 — Fundamentos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-background rounded-2xl border border-border/50 p-6 md:p-8"
        >
        <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#292E17]/10 flex items-center justify-center flex-shrink-0">
          <ShieldCheck size={20} className="text-[#292E17]" />
        </div>
        <h3 className="font-semibold text-[#292E17]">
          {locale === "es" ? "El acompañamiento se fundamenta en" : "This accompaniment is grounded in"}
        </h3>
      </div>
      <ul className="flex flex-col gap-3">
        {[
          locale === "es"
            ? "Priorizar la seguridad física, emocional y psicológica de cada persona."
            : "Prioritizing the physical, emotional and psychological safety of each person.",
          locale === "es"
            ? "Mantener confidencialidad, respeto y no juicio."
            : "Maintaining confidentiality, respect and non-judgment.",
          locale === "es"
            ? "Reconocer mis propios límites como acompañante, derivando a profesionales de salud o realizando interconsultas cuando sea necesario."
            : "Recognizing my own limits as a guide, referring to health professionals or seeking consultation when necessary.",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm leading-relaxed">
            <Check size={16} className="flex-shrink-0 mt-0.5 text-[#292E17]" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>

    {/* Bloque 2 — Enfoque */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="bg-background rounded-2xl border border-border/50 p-6 md:p-8"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#7E2625]/10 flex items-center justify-center flex-shrink-0">
          <Heart size={20} className="text-[#7E2625]" />
        </div>
        <h3 className="font-semibold text-[#7E2625]">
          {locale === "es" ? "El enfoque integrativo tiene como propósito" : "The integrative approach aims to"}
        </h3>
      </div>
      <ul className="flex flex-col gap-3">
        {[
          locale === "es"
            ? "Combinar la escucha profunda del cuerpo, la psicoeducación y la autorreflexión consciente."
            : "Combine deep body listening, psychoeducation and conscious self-reflection.",
          locale === "es"
            ? "Apoyar procesos de autoconocimiento, regulación emocional y conexión interior."
            : "Support processes of self-knowledge, emotional regulation and inner connection.",
          locale === "es"
            ? "Acompañar desde la presencia empática y compasiva."
            : "Accompany from an empathetic and compassionate presence.",
          locale === "es"
            ? "Facilitar que la persona reconozca su sabiduría interna y encuentre sentido a su experiencia."
            : "Facilitate the person's recognition of their inner wisdom and find meaning in their experience.",
          locale === "es"
            ? "Promover un vínculo basado en confianza, compromiso y responsabilidad."
            : "Promote a bond based on trust, commitment and responsibility.",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm leading-relaxed">
            <Check size={16} className="flex-shrink-0 mt-0.5 text-[#7E2625]" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>

    {/* Bloque 3 — Herramientas */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="bg-background rounded-2xl border border-border/50 p-6 md:p-8"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#868859]/10 flex items-center justify-center flex-shrink-0">
          <Sparkles size={20} className="text-[#868859]" />
        </div>
        <h3 className="font-semibold text-[#868859]">
          {locale === "es" ? "Herramientas que utilizo" : "Tools I use"}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          "Coaching Ontológico", "PNL", "Focusing",
          "Teoría Polivagal", "Yoga", "Respiración consciente", "Escritura reflexiva"
        ].map((tool) => (
          <span
            key={tool}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#868859]/10 text-[#868859]"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>

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

        <div className="relative overflow-hidden" ref={benefitsContainerRef}>
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${benefitOffset}px)` }}
          >
            {content.benefits.cards.map((card, index) => {
              const Icon = benefitIcons[card.frontIcon] || Eye;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-11px)] aspect-[3/4] cursor-pointer"
                  style={{ perspective: "1000px" }}
                  onClick={() => toggleCard(index)}
                >
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Frente */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <Image
                        src={card.image}
                        alt={card.frontTitle}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <div className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-3">
                          <Icon size={20} className="text-primary-foreground" />
                        </div>
                        <h3 className="text-base font-semibold text-primary-foreground leading-snug">
                          {card.frontTitle}
                        </h3>
                        <p className="text-xs text-primary-foreground/40 mt-2">
                          {locale === "es" ? "Clic para ver más" : "Click to see more"}
                        </p>
                      </div>
                    </div>

                    {/* Dorso */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden bg-[#3B1B0E] p-6 flex flex-col justify-center"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <h3 className="text-base font-semibold text-primary-foreground mb-4">
                        {card.frontTitle}
                      </h3>
                      <p className="text-sm text-primary-foreground/70 leading-relaxed">
                        {card.backContent}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navegación */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prevBenefit}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:border-foreground hover:text-foreground transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: content.benefits.cards.length - (isMobile ? 0 : 2) }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToBenefit(i)}
                className={`h-2 rounded-full transition-all ${currentBenefit === i ? "w-6 bg-[#868859]" : "w-2 bg-[#868859]/30"}`}
              />
            ))}
          </div>

          <button
            onClick={nextBenefit}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:border-foreground hover:text-foreground transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </SectionWrapper>

      {/* Calendly */}
      <section className="py-16 md:py-24 px-4 w-full bg-[#E8DCC4]">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
              {locale === "es" ? "Primer paso" : "First step"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17]">
              {locale === "es"
                ? "¿Estás listo para dar el primer paso?"
                : "Are you ready to take the first step?"}
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Columna izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {/* Imagen */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/microdosis/calendly-bg.webp"
                  alt="Primer encuentro"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Descripción */}
              <p className="text-[#3B1B0E]/70 text-lg leading-relaxed">
                {locale === "es"
                  ? "Coordinamos un primer encuentro gratuito online de 40' para generar contexto, establecer el acuerdo de acompañamiento, intenciones claras y un marco de compromiso y responsabilidad."
                  : "We coordinate a free 40' online first meeting to generate context, establish the accompaniment agreement, clear intentions and a framework of commitment and responsibility."}
              </p>

              {/* Aclaraciones */}
              <div className="bg-[#292E17] rounded-2xl p-6 space-y-4">
                <p className="text-xs font-bold tracking-widest uppercase text-[#868859]">
                  {locale === "es" ? "A tener en cuenta" : "Please note"}
                </p>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#868859]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#868859] text-xs font-bold">!</span>
                  </div>
                  <p className="text-[#E8DCC4]/60 text-sm leading-relaxed">
                    {locale === "es"
                      ? "El acompañamiento NO incluye la entrega de microdosis. Te ofrezco el contacto de un facilitador de confianza en tu lugar."
                      : "The accompaniment does NOT include the delivery of microdoses. I offer you the contact of a trusted facilitator in your area."}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#868859]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#868859] text-xs font-bold">!</span>
                  </div>
                  <p className="text-[#E8DCC4]/60 text-sm leading-relaxed">
                    {locale === "es"
                      ? "El acompañamiento es para utilización personal y no tiene fines formativos."
                      : "The accompaniment is for personal use and has no training purposes."}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Columna derecha — Calendly */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="w-full h-[700px] rounded-2xl overflow-hidden">
                <InlineWidget
                  url="https://calendly.com/trama-viva/30min"
                  styles={{ height: "100%", width: "100%" }}
                  pageSettings={{
                    backgroundColor: "ffffff",
                    textColor: "3b1b0e",
                    primaryColor: "7e2625",
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                  }}
                />
              </div>
              <p className="text-center text-[#3B1B0E]/50 text-sm">
                {locale === "es"
                  ? "Agendá nuestra primera sesión gratuita para conocernos"
                  : "Schedule our first free session to get to know each other"}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

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

      {/* Quote con foto — variación side by side */}
      <section className="relative w-full overflow-hidden bg-[#292E17]">
        <div className="grid lg:grid-cols-2 min-h-[500px]">

          {/* Imagen */}
          <div className="relative w-full min-h-[350px] lg:min-h-full">
            <Image
              src="/images/microdosis/quote-2-bg.webp"
              alt="Reconectá con quien realmente sos"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#292E17]/30" />
          </div>

          {/* Frase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center px-10 py-16 lg:px-16"
          >
            <Quote size={40} className="text-[#868859]/50 mb-8" />
            <p className="text-2xl md:text-3xl font-serif italic text-[#E8DCC4] leading-relaxed mb-6">
              {locale === "es"
                ? "Este camino no busca \"arreglarte\", sino acompañarte a reconectar con quien realmente sos."
                : "This path doesn't seek to \"fix you\", but to accompany you in reconnecting with who you truly are."}
            </p>
            <p className="text-lg font-serif text-[#E8DCC4]/70 leading-relaxed">
              {locale === "es"
                ? "En el proceso, podés descubrir nuevas formas de estar en tu cuerpo, en tus vínculos y en tu vida, con más confianza, apertura y amor propio."
                : "In the process, you can discover new ways of being in your body, in your relationships and in your life, with more confidence, openness and self-love."}
            </p>
            <div className="mt-10 w-12 h-0.5 bg-[#868859]/50" />
          </motion.div>

        </div>
      </section>

      {/* Microverse */}
      <section className="w-full bg-[#E8DCC4] py-16 md:py-24">
        <div className="grid lg:grid-cols-2 min-h-[600px]">

          {/* Columna izquierda — Contenido */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="px-8 py-16 md:px-16 md:py-24 flex flex-col gap-6 justify-center"
          >
            {/* Tag */}
            <div className="flex items-center gap-2 bg-[#292E17] text-[#E8DCC4] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full w-fit">
              <Users size={12} />
              {locale === "es" ? "Programa grupal" : "Group program"}
            </div>

            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#292E17] leading-tight">
              {locale === "es" ? "Acompañamiento grupal:" : "Group accompaniment:"}
              <span className="text-[#7E2625]"> Microverse</span>
            </h2>

            {/* Descripción */}
            <p className="text-[#3B1B0E]/70 text-base leading-relaxed">
              {locale === "es"
                ? "Recorrido grupal de 8 semanas para incorporar las microdosis de manera segura y eficiente."
                : "An 8-week group journey to incorporate microdoses in a safe and efficient way."}
            </p>

            {/* Items */}
            <ul className="flex flex-col gap-3">
              {(locale === "es"
                ? [
                    "Encuentros semanales online",
                    "Clases grabadas de Yoga y Meditación",
                    "Material educativo sobre sistema nervioso, respiración y gestión emocional",
                    "Seguimiento e integración",
                  ]
                : [
                    "Weekly online meetings",
                    "Recorded Yoga and Meditation classes",
                    "Educational material on the nervous system, breathing and emotional management",
                    "Follow-up and integration",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#3B1B0E]/80 text-sm leading-relaxed">
                  <Check size={16} className="flex-shrink-0 mt-0.5 text-[#868859]" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="w-full h-px bg-[#3B1B0E]/10" />

            {/* Fecha */}
            <div className="flex items-center gap-3">
              <span className="bg-[#7E2625] text-[#E8DCC4] text-xs font-semibold px-4 py-1.5 rounded-full">
                {locale === "es" ? "Julio 2026" : "July 2026"}
              </span>
              <span className="text-sm text-[#3B1B0E]/50">
                {locale === "es" ? "Próximo grupo" : "Next group"}
              </span>
            </div>

            {/* CTA WhatsApp */}
            <a
              href="https://wa.me/TUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#292E17] text-[#E8DCC4] text-sm font-semibold px-6 py-3 rounded-full w-fit hover:bg-[#3a3d20] transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#E8DCC4]" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.856L.057 23.243a.75.75 0 0 0 .922.899l5.233-1.53A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.678-.524-5.2-1.433l-.374-.223-3.865 1.131 1.086-3.966-.243-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              {locale === "es" ? "Escribime para más información" : "Message me for more information"}
            </a>
          </motion.div>

          {/* Columna derecha — Imagen */}
          <div className="relative min-h-[350px] lg:min-h-full">
            <Image
              src="/images/microdosis/microverse.webp"
              alt="Programa Microverse"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8DCC4] via-transparent to-transparent lg:block hidden" />
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-[#E8DCC4] text-[#3B1B0E] px-4 border-t border-[#868859]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-[#292E17]">
            Testimonios
          </h2>
          <p className="text-base opacity-80 mb-16 text-[#7E2625]">
            {locale === "es"
              ? "Experiencias de Acompañamiento Microdosis"
              : "Microdosing Accompaniment Experiences"}
          </p>

          <div className="relative flex flex-col items-center justify-start min-h-[380px]">
            <Quote className="text-[#868859]/40 mb-8" size={48} />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center w-full"
              >
                {/* Texto truncado o completo */}
                <TestimonialText text={testimoniosRetiro[currentTestimonial].text} />

                <div className="flex flex-col items-center gap-4 mt-8">
                  {testimoniosRetiro[currentTestimonial].hasImage ? (
                    <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-[#868859]">
                      <Image
                        src={testimoniosRetiro[currentTestimonial].image}
                        alt={testimoniosRetiro[currentTestimonial].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-[#292E17] border-2 border-[#868859] flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold font-serif text-[#E8DCC4]">
                        {testimoniosRetiro[currentTestimonial].initial}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-base text-[#292E17]">
                      {testimoniosRetiro[currentTestimonial].name}
                    </h4>
                    <p className="text-sm text-[#7E2625]">
                      {testimoniosRetiro[currentTestimonial].age}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navegación */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-[#868859] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#E8DCC4] transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimoniosRetiro.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentTestimonial === index
                      ? "w-8 bg-[#868859]"
                      : "w-2 bg-[#868859]/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-[#868859] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#E8DCC4] transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}