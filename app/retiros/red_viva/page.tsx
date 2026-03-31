"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Calendar, Check, ChevronLeft, ChevronRight,
  Quote, ArrowRight, Plus, Minus, Users, CreditCard,
  ShieldCheck, HeartHandshake, Info, Utensils,
  Brain, Heart, Activity, Eye, Sparkles, ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/language-context";

const CHAR_LIMIT = 280;
const GOOGLE_FORM_URL = "https://forms.gle/a5uZHamGJdTaZZvv8";
const EARLY_BIRD_DEADLINE = new Date("2026-05-31T23:59:59");

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
          className="text-xs font-semibold tracking-widest uppercase text-[#868859] hover:text-[#292E17] transition-colors border-b border-[#868859]/40 pb-0.5"
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
}

function CountdownTimer({ locale }: { locale: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = EARLY_BIRD_DEADLINE.getTime() - new Date().getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, []);

  const labels = locale === "es"
    ? ["días", "hs", "min", "seg"]
    : ["days", "hrs", "min", "sec"];

  return (
    <div className="mt-6 bg-[#7E2625]/5 border border-[#7E2625]/20 rounded-2xl p-4">
      <p className="text-xs text-[#7E2625] font-bold tracking-widest uppercase mb-3">
        {locale === "es" ? "El precio Early Bird vence en" : "Early Bird price expires in"}
      </p>
      <div className="grid grid-cols-4 gap-2">
        {[timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((val, i) => (
          <div key={i} className="flex flex-col items-center bg-white rounded-xl py-2 px-1">
            <span className="text-2xl font-bold font-serif text-[#7E2625]">
              {String(val).padStart(2, "0")}
            </span>
            <span className="text-xs text-[#3B1B0E]/50 mt-0.5">{labels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LugarSlider() {
  const [current, setCurrent] = useState(0);
  const total = 6;

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden"
        >
          <Image
            src={`/images/red-viva/lugar-${current + 1}.webp`}
            alt={`El Abrazo de las Sierras ${current + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => setCurrent((p) => (p - 1 + total) % total)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full border border-[#868859] bg-[#E8DCC4] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#E8DCC4] transition-all z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrent((p) => (p + 1) % total)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full border border-[#868859] bg-[#E8DCC4] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#E8DCC4] transition-all z-10"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${current === i ? "w-8 bg-[#868859]" : "w-2 bg-[#868859]/30"}`}
          />
        ))}
      </div>
    </div>
  );
}

function ComidaSlider() {
  const [current, setCurrent] = useState(0);
  const total = 3;

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[3/3] rounded-2xl overflow-hidden"
        >
          <Image
            src={`/images/red-viva/comidas-red-viva-${current + 1}.webp`}
            alt={`Comida ${current + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => setCurrent((p) => (p - 1 + total) % total)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full border border-[#868859] bg-[#F4EDE0] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#F4EDE0] transition-all z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrent((p) => (p + 1) % total)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full border border-[#868859] bg-[#F4EDE0] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#F4EDE0] transition-all z-10"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${current === i ? "w-8 bg-[#868859]" : "w-2 bg-[#868859]/30"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function UnionPage() {
  const { locale } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const hosRef = useRef<HTMLDivElement>(null);

  const includes = locale === "es"
    ? [
        "3 noches de alojamiento en El Abrazo de las Sierras",
        "Todas las comidas (Desayuno, Almuerzo, Merienda y Cena)",
        "Prácticas psicoterapéuticas y somáticas",
        "1 Ceremonia de Macrodosis de Psilocibina",
        "Acompañamiento de preparación e integración + 2 encuentros online",
        "Protocolo de dosis personalizado",
      ]
    : [
        "3 nights accommodation at El Abrazo de las Sierras",
        "All meals (Breakfast, Lunch, Snack and Dinner)",
        "Psychotherapeutic and somatic practices",
        "1 Macrodose Psilocybin Ceremony",
        "Preparation and integration support + 2 online meetings",
        "Personalized dosage protocol",
      ];

  const schedule = locale === "es"
    ? [
        { day: "Día 1", title: "Bienvenida y preparación", items: ["Recepción y acomodación", "Círculo de bienvenida y acuerdos", "Merienda", "Charla de preparación", "Cena"] },
        { day: "Día 2", title: "Preparación y Ceremonia", items: ["Meditación y yoga", "Desayuno", "Actividad psicoterapéutica", "Brunch y tiempo libre", "Ceremonia", "Cena"] },
        { day: "Día 3", title: "Integración", items: ["Meditación y Yoga", "Desayuno", "Actividad de integración", "Almuerzo", "Tiempo libre", "Actividad de integración", "Merienda", "Actividad de integración", "Cena"] },
        { day: "Día 4", title: "Cierre y despedida", items: ["Meditación y Yoga", "Desayuno", "Actividad de cierre", "Brunch", "Despedida"] },
      ]
    : [
        { day: "Day 1", title: "Welcome and preparation", items: ["Reception and accommodation", "Welcome circle and agreements", "Snack", "Preparation talk", "Dinner"] },
        { day: "Day 2", title: "Preparation and Ceremony", items: ["Meditation and yoga", "Breakfast", "Psychotherapeutic activity", "Brunch and free time", "Ceremony", "Dinner"] },
        { day: "Day 3", title: "Integration", items: ["Meditation and Yoga", "Breakfast", "Integration activity", "Lunch", "Free time", "Integration activity", "Snack", "Dinner"] },
        { day: "Day 4", title: "Closing and farewell", items: ["Meditation and Yoga", "Breakfast", "Closing activity", "Brunch", "Farewell"] },
      ];

  const mealSchedule = locale === "es"
    ? [
        { day: "Día 1", meals: "Almuerzo · Merienda · Cena", note: "" },
        { day: "Día 2", meals: "Desayuno · Merienda · Cena", note: "Sin almuerzo para respetar el ayuno previo a la ceremonia" },
        { day: "Día 3", meals: "Desayuno · Almuerzo · Merienda · Cena", note: "" },
        { day: "Día 4", meals: "Desayuno · Almuerzo", note: "" },
      ]
    : [
        { day: "Day 1", meals: "Lunch · Snack · Dinner", note: "" },
        { day: "Day 2", meals: "Breakfast · Snack · Dinner", note: "No lunch to respect pre-ceremony fasting" },
        { day: "Day 3", meals: "Breakfast · Lunch · Snack · Dinner", note: "" },
        { day: "Day 4", meals: "Breakfast · Lunch", note: "" },
      ];

    const testimonios = [
      {
        name: "Sofía",
        location: "Argentina",
        image: "/images/testimonios/sofia-testimonio.webp",
        text: locale === "es"
          ? "Me encantó, fue perfecto como fue. Amo al mundo, me siento super expandida, vi muchas cosas que no había podido ver antes. O que las entendía pero no las sentía de verdad.\nFue muy cuidado, el lugar alucinante y la música muy hermosa. Gracias!"
          : "I loved it, it was perfect as it was. I love the world, I feel super expanded, I saw many things I hadn't been able to see before. Or that I understood but didn't truly feel.\nIt was very carefully held, the place was amazing and the music very beautiful. Thank you!",
      },
      {
        name: "Carolina",
        location: "Argentina",
        image: "/images/testimonios/carolina-testimonio.webp",
        text: locale === "es"
          ? "Nunca había tratado con hongos desde el punto de vista medicinal. La propuesta de estar solo con uno mismo me pareció increíble. El ambiente que lograron crear fue fabuloso, desde el espacio, la música y sus palabras. Gracias ❤️"
          : "I had never worked with mushrooms from a medicinal point of view. The proposal of being alone with oneself seemed incredible to me. The atmosphere they managed to create was fabulous, from the space, the music and their words. Thank you ❤️",
      },
      {
        name: "Francisco",
        location: "Ecuador",
        image: "/images/testimonios/francisco-testimonio.webp",
        text: locale === "es"
          ? "Lleno de gratitud, amor y sobretodo mayor perspectiva y claridad mental después de una experiencia realmente mágica!!!\nGracias por tu compañía y cariño!!!\nMe sentí muy seguro, cuidado, guiado y querido!!! Gracias, gracias, gracias!!!"
          : "Full of gratitude, love and above all greater perspective and mental clarity after a truly magical experience!!!\nThank you for your company and care!!!\nI felt very safe, cared for, guided and loved!!! Thank you, thank you, thank you!!!",
      },
      {
        name: "Agustín",
        location: "Argentina",
        image: "/images/testimonios/agustin-testimonio.webp",
        text: locale === "es"
          ? "Como fue mi primera vez, el miedo a lo desconocido estaba presente pero con tu guía pude sentirme seguro para entregarme a la experiencia y el viaje a mi interior.\nLos sonidos, el lugar, tu energía y claridad en el proceso fueron claves para que haya tenido esa experiencia tan profunda. La sesión de decodificación me ayudó a entender lo vivido para poder integrar lo recibido en la ceremonia. No tengo más que gratitud y agradecimiento para con vos por guiarme en esta experiencia tan profunda, linda y sanadora. Gracias gracias gracias 🫶"
          : "As it was my first time, the fear of the unknown was present but with your guidance I was able to feel safe to surrender to the experience and the journey inward.\nThe sounds, the place, your energy and clarity in the process were key to having such a deep experience. The decoding session helped me understand what I lived to integrate what I received in the ceremony. I have nothing but gratitude and appreciation for guiding me in this deep, beautiful and healing experience. Thank you thank you thank you 🫶",
      },
    ];

  const faqs = locale === "es"
    ? [
        { q: "¿Necesito experiencia previa con psilocibina?", a: "No. El retiro está diseñado tanto para personas que nunca han tenido contacto con la medicina como para quienes ya tienen experiencia. Nos adaptamos a cada proceso individual." },
        { q: "¿Cómo es el proceso de inscripción?", a: "Completás el formulario de pre-selección, luego coordinamos una entrevista online de 30 minutos para conocernos, responder tus preguntas y confirmar que el retiro es adecuado para vos." },
        { q: "¿El retiro es seguro?", a: "Sí. Trabajamos con grupos pequeños e íntimos, con facilitadores certificados y experiencia comprobada. Cada persona pasa por una evaluación previa y contamos con protocolos de contención para toda la experiencia." },
        { q: "¿Qué pasa después del retiro?", a: "La integración es parte fundamental del proceso. Contás con un encuentro online post-retiro y acompañamiento para integrar la experiencia a tu vida cotidiana." },
        { q: "¿Qué debo llevar?", a: "Ropa cómoda, elementos de higiene personal, cuaderno de journaling personal y un corazón y mente abiertos. Una vez confirmada tu inscripción te enviamos una guía detallada de preparación." },
        { q: "¿Puedo ir solo/a?", a: "Sí, la mayoría de los participantes llegan solos. El grupo se convierte en parte fundamental de la experiencia." },
      ]
    : [
        { q: "Do I need prior experience with psilocybin?", a: "No. The retreat is designed for both people who have never had contact with the medicine and those with experience. We adapt to each individual process." },
        { q: "What is the registration process?", a: "You complete the pre-selection form, then we coordinate a 30-minute online interview to meet, answer your questions, and confirm the retreat is right for you." },
        { q: "Is the retreat safe?", a: "Yes. We work with small intimate groups, certified facilitators and proven experience. Each person goes through a prior evaluation and we have containment protocols for the entire experience." },
        { q: "What happens after the retreat?", a: "Integration is a fundamental part of the process. You have a post-retreat online meeting and support to integrate the experience into your daily life." },
        { q: "What should I bring?", a: "Comfortable clothing, personal hygiene items, a personal journaling notebook and an open heart and mind. Once your registration is confirmed we send you a detailed preparation guide." },
        { q: "Can I go alone?", a: "Yes, most participants arrive alone. The group becomes a fundamental part of the experience." },
      ];

  const galleryImages = [
    "/images/union/experiencias-pasadas-1.webp",
    "/images/union/experiencias-pasadas-2.webp",
  ];

  const carruselImages = Array.from({ length: 8 }, (_, i) => `/images/red-viva/carrusel-red-viva-${i + 1}.webp`);
  
  return (
    <main className="bg-[#E8DCC4] text-[#3B1B0E] min-h-screen font-sans">
      <Navbar />

      {/* 1. HERO */}
      <section className="relative h-screen w-full flex items-end overflow-hidden">
        <Image src="/images/red-viva/hero-red-viva-desktop.webp" alt="Retiro Red Viva - Minas Uruguay" fill className="object-cover object-center hidden md:block" priority />
        <Image src="/images/red-viva/hero-red-viva-mobile.webp" alt="Retiro Red Viva - Minas Uruguay" fill className="object-cover object-center block md:hidden" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#292E17]/90 via-[#292E17]/30 to-transparent" />

        <div className="relative z-10 w-full px-6 lg:px-12 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

              {/* Logo colaborativo */}
              <div className="mb-6">
                <Image
                  src="/images/red-viva/trama-corazon-beige.webp"
                  alt="Trama Viva x Corazón Libre"
                  width={240}
                  height={80}
                  className="w-40 md:w-56 h-auto object-contain"
                />
              </div>

              <span className="inline-flex items-center bg-[#E8DCC4]/15 backdrop-blur-sm border border-[#E8DCC4]/30 text-[#E8DCC4] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                {locale === "es" ? "Conexión Somática · Micelial" : "Somatic · Mycelial Connection"}
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-serif text-[#E8DCC4] mb-6">
                RED VIVA
              </h1>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 text-[#E8DCC4]/80 text-sm font-medium">
                  <MapPin size={16} /> Minas, Uruguay
                </span>
                <span className="flex items-center gap-2 text-[#E8DCC4]/80 text-sm font-medium">
                  <Calendar size={16} /> {locale === "es" ? "1 al 4 de Octubre 2026" : "October 1-4, 2026"}
                </span>
                <span className="flex items-center gap-2 text-[#E8DCC4]/80 text-sm font-medium">
                  <Users size={16} /> {locale === "es" ? "Cupos limitados" : "Limited spots"}
                </span>
              </div>
              <Link
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#7E2625] text-[#E8DCC4] font-bold rounded-full hover:bg-[#7E2625]/90 transition-all hover:-translate-y-1 shadow-lg"
              >
                {locale === "es" ? "Quiero reservar mi lugar" : "I want to reserve my spot"} <ArrowRight size={18} />
              </Link>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. HOOK EMOCIONAL */}
      <section className="py-28 md:py-36 px-6 lg:px-12 bg-[#E8DCC4]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-10">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#292E17] leading-relaxed">
              {locale === "es"
                ? "La verdadera transformación no ocurre en soledad, sino en conexión."
                : "True transformation does not occur in solitude, but in connection."}
            </p>
            <div className="w-12 h-0.5 bg-[#868859]/50 mx-auto" />
            <div className="space-y-6 text-lg md:text-xl text-[#3B1B0E]/70 leading-relaxed">
              <p>
                {locale === "es"
                  ? "La tierra nos habla en múltiples lenguajes. Los hongos son uno de ellos."
                  : "The earth speaks to us in multiple languages. Mushrooms are one of them."}
              </p>
              <p>
                {locale === "es"
                  ? "Bajo la tierra, el micelio teje silenciosamente una red que conecta y nutre la vida. Su enseñanza es simple: la vida prospera cuando se comparte, cuando se nutre y cuando se coopera."
                  : "Beneath the earth, the mycelium silently weaves a network that connects and nourishes life. Its teaching is simple: life thrives when shared, when nourished and when cooperating."}
              </p>
              <p>
                {locale === "es"
                  ? "Este retiro es una invitación a recordar esa sabiduría. A reunirnos como la Red Viva que ya somos, donde nuestras experiencias se entrelazan y nos permiten reconocernos parte de un mismo tejido, creando así caminos sostenibles desde lo real."
                  : "This retreat is an invitation to remember that wisdom. To gather as the Living Network we already are, where our experiences intertwine and allow us to recognize ourselves as part of the same fabric, creating sustainable paths from what is real."}
              </p>
              <p className="font-serif italic text-[#292E17] text-xl md:text-2xl text-center">
                {locale === "es"
                  ? "Porque cuando los corazones se encuentran con presencia y autenticidad, la red se expande."
                  : "Because when hearts meet with presence and authenticity, the network expands."}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TERAPIA ASISTIDA CON PSICODÉLICOS */}
      <section className="py-28 md:py-36 px-6 lg:px-12 bg-[#292E17]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Foto izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/union/terapia-asistida-psicodelicos.webp"
              alt="Terapia Asistida con Psicodélicos"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Texto derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
                {locale === "es" ? "Metodología" : "Methodology"}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#E8DCC4] leading-tight">
                {locale === "es"
                  ? "¿Qué es la Terapia Asistida con Psicodélicos?"
                  : "What is Psychedelic-Assisted Therapy?"}
              </h2>
            </div>
            <div className="space-y-6 text-[#E8DCC4]/70 text-lg leading-relaxed">
              <p>
                {locale === "es"
                  ? "La terapia asistida por psicodélicos se nutre de la sabiduría ancestral desarrollada por distintas culturas a lo largo de miles de años, y lo integra con la ciencia y los enfoques terapéuticos más efectivos para la humanidad del mundo de hoy. Ofrece un encuadre de preparación, cuidado e integración, priorizando siempre criterios de seguridad."
                  : "Psychedelic-assisted therapy draws on ancestral wisdom developed by different cultures over thousands of years, integrating it with science and the most effective therapeutic approaches for humanity today. It offers a framework of preparation, care and integration, always prioritizing safety criteria."}
              </p>
              <p>
                {locale === "es"
                  ? "Los estados ampliados de conciencia, habitados en contextos seguros, son un puente hacia procesos profundos de autoconocimiento, regulación emocional y reconexión con la vida."
                  : "Expanded states of consciousness, inhabited in safe contexts, are a bridge to deep processes of self-knowledge, emotional regulation and reconnection with life."}
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="py-28 md:py-36 px-6 lg:px-12 bg-[#F4EDE0]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17] mb-10">
              {locale === "es" ? "Este programa es para vos si..." : "This program is for you if..."}
            </h2>
            <ul className="space-y-5">
              {(locale === "es"
                ? [
                    "Buscás profundizar en tus emociones y transformar conductas limitantes.",
                    "Querés despertar tu creatividad, reconectando con la inspiración y el juego interior.",
                    "Buscás despertar tu pasión y crear espacios donde tu energía vital fluya con autenticidad.",
                    "Querés vivir un proceso consciente, respetuoso y acompañado, que te permita cultivar presencia, orden y coherencia interior.",
                  ]
                : [
                    "You seek to deepen your emotions and transform limiting behaviors.",
                    "You want to awaken your creativity, reconnecting with inspiration and inner play.",
                    "You seek to awaken your passion and create spaces where your vital energy flows authentically.",
                    "You want to live a conscious, respectful and supported process that allows you to cultivate presence, order and inner coherence.",
                  ]
              ).map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 text-lg text-[#3B1B0E]/80 border-b border-[#868859]/15 pb-5 last:border-0 last:pb-0"
                >
                  <div className="w-6 h-6 rounded-full bg-[#7E2625] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-[#E8DCC4]" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/within/eli-facilitador-1.webp"
              alt="¿Para quién es el programa de microdosis?"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#292E17]/40 to-transparent" />
          </motion.div>

        </div>
      </section>

      {/* 3. ASÍ SE VIVE */}
      <section className="py-28 md:py-36 bg-[#292E17] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
              {locale === "es" ? "El retiro" : "The retreat"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#E8DCC4]">
              {locale === "es" ? "Así se vive" : "What it looks like"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/red-viva/foto-aspiracional-1.webp"
                alt="Red Viva experiencia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden md:mt-12"
            >
              <Image
                src="/images/red-viva/foto-aspiracional-2.webp"
                alt="Red Viva experiencia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUÉ VAS A LOGRAR */}
      <section className="py-28 md:py-36 px-6 lg:px-12 bg-[#292E17]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
              {locale === "es" ? "Transformación" : "Transformation"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#E8DCC4]">
              {locale === "es" ? "Lo que cambia en vos" : "What changes in you"}
            </h2>
            <p className="mt-6 text-[#E8DCC4]/60 max-w-2xl mx-auto leading-relaxed">
              {locale === "es"
                ? "Cada persona vive una experiencia única. Estos son algunos de los cambios que manifiestan las personas que participaron."
                : "Each person lives a unique experience. These are some of the changes reported by people who have participated."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(locale === "es"
              ? [
                  { title: "Mayor claridad interna", desc: "Una comprensión más profunda de sus emociones, pensamientos y decisiones, que les permite sentirse más alineadas consigo mismas y con su camino.", icon: "brain" },
                  { title: "Regulación emocional", desc: "Una mayor capacidad para reconocer, sostener y gestionar sus emociones sin sentirse abrumadas, respondiendo con más calma, presencia y equilibrio ante lo que la vida presenta.", icon: "heart" },
                  { title: "Reconexión con tu cuerpo", desc: "Un regreso a la escucha interna, habitando el cuerpo con más presencia y sensibilidad, reconociendo sus necesidades y recuperando la conexión con el sentir.", icon: "activity" },
                  { title: "Nuevas perspectivas", desc: "Una apertura a ver la vida desde otros ángulos, ampliando la comprensión de sus experiencias y encontrando nuevas formas de interpretar y transitar lo que viven.", icon: "eye" },
                  { title: "Vínculos más auténticos", desc: "Relaciones más honestas y conscientes, donde pueden mostrarse con mayor verdad, expresar lo que sienten y conectar desde un lugar más genuino y profundo.", icon: "users" },
                  { title: "Amor propio", desc: "Una relación más amorosa y compasiva consigo mismo, donde hay reconocimiento, valoración y cuidado con mayor conciencia y respeto.", icon: "sparkles" },
                ]
              : [
                  { title: "Greater inner clarity", desc: "A deeper understanding of their emotions, thoughts and decisions, allowing them to feel more aligned with themselves and their path.", icon: "brain" },
                  { title: "Emotional regulation", desc: "A greater capacity to recognize, hold and manage their emotions without feeling overwhelmed, responding with more calm, presence and balance.", icon: "heart" },
                  { title: "Reconnection with your body", desc: "A return to inner listening, inhabiting the body with more presence and sensitivity, recognizing its needs and recovering the connection with feeling.", icon: "activity" },
                  { title: "New perspectives", desc: "An openness to see life from other angles, broadening the understanding of their experiences and finding new ways to interpret and navigate what they live.", icon: "eye" },
                  { title: "More authentic bonds", desc: "More honest and conscious relationships, where they can show up with greater truth, express what they feel and connect from a more genuine and profound place.", icon: "users" },
                  { title: "Self-love", desc: "A more loving and compassionate relationship with oneself, where there is recognition, appreciation and care with greater awareness and respect.", icon: "sparkles" },
                ]
            ).map((item, i) => {
              const icons: Record<string, React.ReactNode> = {
                brain: <Brain size={20} className="text-[#868859]" />,
                heart: <Heart size={20} className="text-[#868859]" />,
                activity: <Activity size={20} className="text-[#868859]" />,
                eye: <Eye size={20} className="text-[#868859]" />,
                users: <Users size={20} className="text-[#868859]" />,
                sparkles: <Sparkles size={20} className="text-[#868859]" />,
              };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#E8DCC4]/5 border border-[#E8DCC4]/10 rounded-2xl p-8 flex flex-col gap-3 hover:bg-[#E8DCC4]/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#868859]/20 flex items-center justify-center flex-shrink-0">
                    {icons[item.icon]}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#E8DCC4]">{item.title}</h3>
                  <p className="text-sm text-[#E8DCC4]/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. QUÉ INCLUYE */}
      <section className="py-28 md:py-36 px-6 lg:px-12 bg-[#E8DCC4]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda — Lista */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17] mb-12">
              {locale === "es" ? "¿Qué incluye?" : "What's included?"}
            </h2>
            <ul className="space-y-5">
              {includes.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 text-lg text-[#3B1B0E]/80 border-b border-[#868859]/15 pb-5 last:border-0 last:pb-0"
                >
                  <div className="w-6 h-6 rounded-full bg-[#292E17] flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-[#E8DCC4]" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
            <Link
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-12 px-8 py-4 bg-[#7E2625] text-[#E8DCC4] font-bold rounded-full hover:bg-[#7E2625]/90 transition-all hover:-translate-y-1 shadow-lg"
            >
              {locale === "es" ? "Reservar mi lugar" : "Reserve my spot"}
              <ArrowRight size={18} />
            </Link>
            <p className="mt-4 text-xs text-[#3B1B0E]/50 font-medium tracking-wide uppercase">
              {locale === "es"
                ? "No incluye pasajes aéreos, seguro médico ni transporte"
                : "Does not include flights, medical insurance or transportation"}
            </p>
          </motion.div>

          {/* Columna derecha — Foto grande */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/within/within-incluye.webp"
              alt="Retiro Within"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </section>

      {/* 5. SCHEDULE */}
      <section className="py-28 md:py-36 px-6 lg:px-12 bg-[#292E17]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">{locale === "es" ? "4 días" : "4 days"}</p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#E8DCC4]">{locale === "es" ? "Nuestro cronograma" : "Our schedule"}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schedule.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#E8DCC4]/5 border border-[#E8DCC4]/10 rounded-2xl p-6 flex flex-col gap-4">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#868859]">{item.day}</span>
                  <h3 className="text-xl font-bold font-serif text-[#E8DCC4] mt-1">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.items.map((activity, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#E8DCC4]/65">
                      <div className="w-1 h-1 rounded-full bg-[#868859] mt-2 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMIDAS */}
      <section className="py-28 md:py-36 px-6 lg:px-12 bg-[#F4EDE0]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Utensils size={28} className="text-[#7E2625]" />
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#292E17]">
                {locale === "es" ? "Alimentación" : "Meals"}
              </h2>
            </div>
            <p className="text-lg text-[#3B1B0E]/70 leading-relaxed">
              {locale === "es"
                ? "Alimentación vegetariana incluida. Preparaciones coloridas y equilibradas nutricionalmente, pensadas para acompañar tu proceso."
                : "Vegetarian food included. Colorful and nutritionally balanced preparations, designed to accompany your process."}
            </p>
            <div className="bg-white rounded-2xl border border-[#868859]/20 overflow-hidden">
              {mealSchedule.map((day, i) => (
                <div key={i} className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-5 ${i < mealSchedule.length - 1 ? "border-b border-[#868859]/15" : ""}`}>
                  <span className="font-bold text-[#292E17] min-w-[60px]">{day.day}</span>
                  <div className="flex-1">
                    <span className="text-[#3B1B0E]/80">{day.meals}</span>
                    {day.note && <p className="text-xs text-[#7E2625] mt-1">{day.note}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 bg-[#868859]/10 border border-[#868859]/20 p-4 rounded-xl text-sm">
              <Info className="text-[#868859] flex-shrink-0 mt-0.5" size={18} />
              <p className="text-[#3B1B0E]/70">
                {locale === "es"
                  ? "Avisanos si tenés alergias o restricciones alimenticias. El menú se adapta a necesidades relevantes."
                  : "Let us know if you have allergies or dietary restrictions. The menu adapts to relevant needs."}
              </p>
            </div>
          </motion.div>

          {/* Slider de fotos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <ComidaSlider />
          </motion.div>

        </div>
      </section>

      {/* 7. EL LUGAR */}
      <section className="py-28 md:py-36 px-6 lg:px-12 bg-[#E8DCC4]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Slider izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <LugarSlider />
          </motion.div>

          {/* Texto derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
                {locale === "es" ? "El espacio" : "The space"}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17]">
                El Abrazo de las Sierras
              </h2>
            </div>
            <div className="space-y-4 text-lg text-[#3B1B0E]/70 leading-relaxed">
              <p>
                {locale === "es"
                  ? "Un lugar a lo alto de las Sierras de Minas, rodeado de cañadas, montes, flora y fauna nativa y áreas de cuarzos blancos."
                  : "A place high in the Sierras de Minas, surrounded by streams, forests, native flora and fauna, and areas of white quartz."}
              </p>
              <p>
                {locale === "es"
                  ? "Ofrece un ambiente cálido, amable, familiar y descontracturado en un entorno de paz y calma."
                  : "It offers a warm, friendly, familiar and relaxed atmosphere in an environment of peace and calm."}
              </p>
              <p>
                {locale === "es"
                  ? "Construcción de materiales amables con el medio ambiente y energías renovables."
                  : "Built with environmentally friendly materials and renewable energy."}
              </p>
              <p>
                {locale === "es"
                  ? "El diseño y distribución de los espacios fueron pensados en base a estudios radiestésicos y de feng shui, procurando la mayor armonización para favorecer al máximo la energía positiva y lograr el mayor descanso y bienestar."
                  : "The design and distribution of spaces were conceived based on dowsing and feng shui studies, seeking maximum harmonization to favor positive energy and achieve the greatest rest and wellbeing."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://maps.app.goo.gl/ynnUbGhA1EsRA4gFA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#292E17] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all"
              >
                <MapPin size={16} />
                {locale === "es" ? "Ver en Google Maps" : "View on Google Maps"}
              </Link>
              <Link
                href="https://www.instagram.com/el_abrazo_de_las_sierras/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#292E17] text-[#292E17] rounded-full font-bold hover:bg-[#292E17]/5 transition-all"
              >
                @el_abrazo_de_las_sierras
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 8. FACILITADORES */}
      <section className="py-28 md:py-36 px-6 lg:px-12 bg-[#292E17]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
              {locale === "es" ? "El equipo" : "The team"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#E8DCC4]">
              {locale === "es" ? "Quiénes te acompañan" : "Who accompanies you"}
            </h2>
            <p className="mt-4 text-[#E8DCC4]/60 max-w-2xl mx-auto leading-relaxed">
              {locale === "es"
                ? "Sostenemos este espacio con presencia, experiencia y profundo respeto por cada proceso individual."
                : "We hold this space with presence, experience, and deep respect for each individual process."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              {
                name: "Fernanda Olivera",
                ig: "@corazonlibre.fer",
                image: "/images/red-viva/fer-facilitadora.webp",
                role: locale === "es"
                  ? "Facilitadora de Terapia Psicodélica · Somática · Respiración Terapéutica · Coaching Ontológico · PNL"
                  : "Psychedelic Therapy Facilitator · Somatic · Therapeutic Breathwork · Ontological Coaching · NLP",
                bio: locale === "es"
                  ? "Mi propósito es acompañar a quienes están en compromiso con vivir una vida desde la libertad del corazón. Comparto las medicinas que fueron un antes y un después en mi vida. Acompaño desde mi experiencia viva, desde la maestría y las vueltas al espiral que me invita mi servicio."
                  : "My purpose is to accompany those committed to living a life from the freedom of the heart. I share the medicines that were a before and after in my life. I accompany from my lived experience, from mastery and the spirals my service invites me into.",
              },
              {
                name: "Eliana Martínez",
                ig: "@eli.mar.lov",
                image: "/images/red-viva/eli-facilitadora.webp",
                role: locale === "es"
                  ? "Coach Ontológica · Terapias Asistidas con Psicodélicos · Facilitadora de Respiración y Crioterapia · Instructora de Yoga y Meditación"
                  : "Ontological Coach · Psychedelic Assisted Therapies · Breathwork and Cryotherapy Facilitator · Yoga and Meditation Instructor",
                bio: locale === "es"
                  ? "Mi servicio se basa en acompañar procesos y sostener espacios de transformación real y sostenible a través de la respiración, la regulación emocional y la integración somática del cuerpo y la mente."
                  : "My service is based on accompanying processes and holding spaces of real and sustainable transformation through breathwork, emotional regulation and somatic integration of body and mind.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-5"
              >
                {/* Foto */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292E17]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold font-serif text-[#E8DCC4]">{f.name}</h3>
                    <p className="text-xs text-[#868859] mt-1">{f.ig}</p>
                  </div>
                </div>

                {/* Rol */}
                <p className="text-xs font-bold tracking-wide text-[#868859] uppercase leading-relaxed">
                  {f.role}
                </p>

                {/* Bio */}
                <p className="text-sm text-[#E8DCC4]/60 leading-relaxed">
                  {f.bio}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Texto de cierre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto text-center space-y-4"
          >
            <div className="w-10 h-0.5 bg-[#868859]/40 mx-auto" />
            <p className="text-lg text-[#E8DCC4]/60 font-serif italic leading-relaxed">
              {locale === "es"
                ? "Cada retiro lo facilitamos junto a profesionales que admiramos y en quienes confiamos. Así, cada retiro es único, diverso y enriquecido por la colaboración y los saberes compartidos."
                : "We facilitate each retreat alongside professionals we admire and trust. Each retreat is unique, diverse and enriched by collaboration and shared knowledge."}
            </p>
          </motion.div>

        </div>
      </section>

      {/* 9. PRECIO */}
      <section className="py-28 md:py-36 px-6 lg:px-12 bg-[#E8DCC4]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
              {locale === "es" ? "Inversión" : "Investment"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17]">
              {locale === "es" ? "Precio" : "Price"}
            </h2>
            <p className="mt-4 text-lg text-[#7E2625] font-medium">
              {locale === "es"
                ? "Asegurá tu lugar aprovechando los beneficios de inscripción temprana."
                : "Secure your spot by taking advantage of early registration benefits."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Early Bird */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 border-2 border-[#7E2625] text-center flex flex-col justify-between relative overflow-hidden transform md:scale-105"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#7E2625]" />
              <div className="inline-flex items-center justify-center gap-2 bg-[#7E2625]/10 text-[#7E2625] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4 mx-auto">
                <span className="w-2 h-2 rounded-full bg-[#7E2625] animate-pulse" />
                {locale === "es" ? "Oferta por tiempo limitado" : "Limited time offer"}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl uppercase tracking-widest font-bold text-[#7E2625]">
                  {locale === "es" ? "Early Bird Abril / Mayo" : "April / May Early Bird"}
                </h3>
                <p className="text-6xl font-bold font-serif text-[#7E2625]">
                  $657 <span className="text-xl text-[#7E2625]/60 font-sans">USD</span>
                </p>
                <p className="text-sm text-[#3B1B0E]/50">
                  {locale === "es" ? "Ahorrás $152 USD" : "You save $152 USD"}
                </p>
              </div>
              <CountdownTimer locale={locale} />
              <Link
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-6 py-4 bg-[#7E2625] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all hover:-translate-y-1"
              >
                {locale === "es" ? "Aprovechar descuento" : "Claim discount"}
              </Link>
            </motion.div>

            {/* Precio Regular */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-10 border border-[#3B1B0E]/10 text-center flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#868859]/30" />
              <div className="space-y-2">
                <h3 className="text-xl uppercase tracking-widest font-bold text-[#292E17]/70">
                  {locale === "es" ? "Precio Regular" : "Regular Price"}
                </h3>
                <p className="text-6xl font-bold font-serif text-[#3B1B0E]">
                  $809 <span className="text-xl text-[#3B1B0E]/50 font-sans">USD</span>
                </p>
                <p className="text-sm text-[#3B1B0E]/30">
                  {locale === "es" ? "Precio final" : "Final price"}
                </p>
              </div>
              <ul className="mt-8 space-y-3 text-left">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#3B1B0E]/60">
                    <Check size={14} className="text-[#868859] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-10 py-4 bg-[#3B1B0E] text-[#E8DCC4] rounded-full font-bold hover:bg-[#292E17] transition-all hover:-translate-y-1"
              >
                {locale === "es" ? "Iniciar inscripción" : "Start registration"}
              </Link>
            </motion.div>

          </div>

          {/* Medios y condiciones de pago */}
          <div className="bg-[#868859]/10 rounded-3xl p-8 md:p-10 border border-[#868859]/30 space-y-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold flex items-center gap-2 text-[#292E17]">
                <CreditCard size={22} /> {locale === "es" ? "Medios de pago" : "Payment methods"}
              </h4>
              <ul className="space-y-2 text-[#3B1B0E]/80">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[#868859] mt-0.5 flex-shrink-0" />
                  {locale === "es" ? "Transferencia bancaria (comisión a tu cargo)" : "Bank transfer (commission at your expense)"}
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[#868859] mt-0.5 flex-shrink-0" />
                  {locale === "es" ? "Facilidades de pago y cuotas sin interés disponibles" : "Payment facilities and interest-free installments available"}
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-[#3B1B0E]/10 space-y-4">
              <h4 className="text-xl font-bold flex items-center gap-2 text-[#292E17]">
                <ShieldCheck size={22} /> {locale === "es" ? "Condiciones de pago" : "Payment conditions"}
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex gap-3 bg-white/60 p-5 rounded-2xl border border-white">
                  <HeartHandshake className="text-[#7E2625] flex-shrink-0 mt-0.5" size={22} />
                  <p className="text-sm text-[#3B1B0E]/70 leading-relaxed">
                    <strong className="text-[#292E17]">{locale === "es" ? "Reserva:" : "Reservation:"}</strong>{" "}
                    {locale === "es"
                      ? "Se efectiviza al completar el formulario, la entrevista y enviar el comprobante del pago completo o primera cuota. La totalidad debe abonarse antes del retiro."
                      : "It becomes effective upon completing the form, the interview, and sending proof of full payment or first installment. Full payment must be made before the retreat."}
                  </p>
                </div>
                <div className="flex gap-3 bg-white/60 p-5 rounded-2xl border border-white">
                  <Info className="text-[#7E2625] flex-shrink-0 mt-0.5" size={22} />
                  <p className="text-sm text-[#3B1B0E]/70 leading-relaxed">
                    <strong className="text-[#292E17]">{locale === "es" ? "Reembolsos:" : "Refunds:"}</strong>{" "}
                    {locale === "es"
                      ? "Una vez realizado el pago, no se realizan reembolsos. Agradecemos tu comprensión y compromiso."
                      : "Once payment is made, there are no refunds. We appreciate your understanding and commitment."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ¿Venís acompañado? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-[#292E17] text-[#E8DCC4] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#868859]"
          >
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-2xl font-bold font-serif">
                {locale === "es" ? "¿Venís acompañado o ya participaste?" : "Coming with someone or already participated?"}
              </h4>
              <p className="text-[#E8DCC4]/70">
                {locale === "es"
                  ? "Consultá por un valor especial si venís con alguien o ya participaste de alguno de nuestros espacios."
                  : "Ask about a special rate if you're coming with someone or have previously participated in any of our spaces."}
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8DCC4] text-[#292E17] rounded-full font-bold hover:bg-white transition-all whitespace-nowrap"
            >
              {locale === "es" ? "Consultar valor especial" : "Inquire about special rate"}
              <ArrowRight size={18} />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* 10. PROCESO */}
      <section className="py-28 md:py-36 px-6 lg:px-12 bg-[#F4EDE0]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">{locale === "es" ? "Paso a paso" : "Step by step"}</p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17]">{locale === "es" ? "¿Cómo inscribirte?" : "How to register?"}</h2>
            <p className="mt-6 text-lg text-[#3B1B0E]/60 max-w-xl mx-auto leading-relaxed">
              {locale === "es" ? "Cada etapa está diseñada para que llegues al retiro con claridad, apertura y confianza." : "Each stage is designed so you arrive at the retreat with clarity, openness and confidence."}
            </p>
          </motion.div>

          <div className="relative flex flex-col gap-0">
            {(locale === "es"
              ? [
                  { num: "01", title: "Formulario inicial", desc: "Para inscribirte te enviamos un formulario con preguntas específicas para conocerte mejor: tu historial, motivaciones e intenciones." },
                  { num: "02", title: "Entrevista previa", desc: "Coordinamos un encuentro online de 30 minutos para presentarnos, responder todas tus dudas y confirmar que el retiro es el espacio adecuado para vos." },
                  { num: "03", title: "Firma de consentimiento informado", desc: "Firma digital que confirma la comprensión y aceptación de la información, autorizando tu participación voluntaria en el retiro." },
                  { num: "04", title: "Pago primera cuota", desc: "Tu confirmación queda efectiva con el pago de la primera cuota. A partir de ahí sos parte del grupo." },
                  { num: "05", title: "Encuentro online grupal I", desc: "Una semana antes del retiro nos encontramos online con el grupo completo para conocerse, recibir herramientas de preparación y despejar cualquier consulta." },
                  { num: "06", title: "Encuentro online grupal II", desc: "Dos semanas después del retiro nos volvemos a encontrar online para optimizar la integración y capitalizar los aprendizajes obtenidos." },
                ]
              : [
                  { num: "01", title: "Initial form", desc: "To register, we send you a form with specific questions to get to know you better: your history, motivations and intentions." },
                  { num: "02", title: "Prior interview", desc: "We coordinate a 30-minute online meeting to introduce ourselves, answer all your questions and confirm the retreat is the right space for you." },
                  { num: "03", title: "Informed consent signature", desc: "Digital signature confirming the understanding and acceptance of the information, authorizing your voluntary participation in the retreat." },
                  { num: "04", title: "First installment payment", desc: "Your confirmation is effective with the payment of the first installment. From that point on, you are part of the group." },
                  { num: "05", title: "Group online meeting I", desc: "One week before the retreat we meet online with the full group to get to know each other, receive preparation tools, and address any questions." },
                  { num: "06", title: "Group online meeting II", desc: "Two weeks after the retreat we meet online again to optimize integration and capitalize on the learnings obtained." },
                ]
            ).map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative flex gap-8 pb-12 last:pb-0">
                {i < 5 && <div className="absolute left-6 top-14 bottom-0 w-px bg-[#868859]/20" />}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#292E17] text-[#E8DCC4] flex items-center justify-center font-bold font-serif text-lg z-10">{step.num}</div>
                <div className="pt-2 pb-4">
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-[#292E17] mb-3">{step.title}</h3>
                  <p className="text-[#3B1B0E]/65 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-[#292E17] rounded-2xl p-8 space-y-4">
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-6">{locale === "es" ? "Importante" : "Important"}</p>
            {(locale === "es"
              ? [
                  "Esta experiencia no es recreativa y no sustituye ni reemplaza la importancia de un proceso terapéutico individual y completo. Es un enfoque terapéutico asistido con psicodélicos para un profundo crecimiento interior — la responsabilidad sobre tu proceso personal es tuya.",
                  "No hace falta tener experiencia previa.",
                  "Los cupos son muy limitados para asegurar el cuidado y la intimidad de la energía del grupo.",
                ]
              : [
                  "This experience is not recreational and does not substitute or replace the importance of a complete individual therapeutic process. It is a psychedelic-assisted therapeutic approach for deep inner growth — responsibility for your personal process is yours.",
                  "No prior experience is necessary.",
                  "Spots are very limited to ensure the care and intimacy of the group energy.",
                ]
            ).map((note, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#868859] mt-2 flex-shrink-0" />
                <p className="text-sm text-[#E8DCC4]/70 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
            <Link href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#7E2625] text-[#E8DCC4] font-bold rounded-full hover:bg-[#7E2625]/90 transition-all hover:-translate-y-1 shadow-lg">
              {locale === "es" ? "Comenzar el proceso" : "Start the process"} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CARRUSEL INFINITO */}
      <section className="py-16 bg-[#E8DCC4] overflow-hidden">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee 40s linear infinite;
            display: flex;
            width: max-content;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="marquee-track">
          {[...carruselImages, ...carruselImages].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 md:w-[480px] aspect-[4/3] relative rounded-2xl overflow-hidden mx-2"
            >
              <Image
                src={img}
                alt={`Red Viva ${i + 1}`}
                fill
                className="object-cover"
                sizes="480px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 11. TESTIMONIOS */}
      <section className="py-24 px-6 bg-[#E8DCC4] border-t border-[#868859]/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">{locale === "es" ? "Voces reales" : "Real voices"}</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-16 text-[#292E17]">Testimonios</h2>
          <div className="relative flex flex-col items-center justify-start min-h-[350px]">
            <Quote className="text-[#868859]/40 mb-8" size={48} />
            <AnimatePresence mode="wait">
              <motion.div key={currentTestimonial} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="flex flex-col items-center w-full">
                <TestimonialText text={testimonios[currentTestimonial].text} />
                <div className="flex flex-col items-center gap-3 mt-8">
                  
                    <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-[#868859] flex-shrink-0">
                      {testimonios[currentTestimonial].image ? (
                        <Image
                          src={testimonios[currentTestimonial].image}
                          alt={testimonios[currentTestimonial].name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#292E17] flex items-center justify-center">
                          <span className="text-[#E8DCC4] font-bold font-serif text-xl">
                            {testimonios[currentTestimonial].name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  <div>
                    <h4 className="font-bold text-base text-[#292E17]">{testimonios[currentTestimonial].name}</h4>
                    <p className="text-sm text-[#7E2625]">{testimonios[currentTestimonial].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center gap-6 mt-12">
            <button onClick={() => setCurrentTestimonial((p) => (p - 1 + testimonios.length) % testimonios.length)} className="w-12 h-12 rounded-full border border-[#868859] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#E8DCC4] transition-all"><ChevronLeft size={24} /></button>
            <div className="flex gap-2">
              {testimonios.map((_, i) => (<button key={i} onClick={() => setCurrentTestimonial(i)} className={`h-2 rounded-full transition-all ${currentTestimonial === i ? "w-8 bg-[#868859]" : "w-2 bg-[#868859]/30"}`} />))}
            </div>
            <button onClick={() => setCurrentTestimonial((p) => (p + 1) % testimonios.length)} className="w-12 h-12 rounded-full border border-[#868859] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#E8DCC4] transition-all"><ChevronRight size={24} /></button>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-14 md:py-18 px-6 lg:px-12 bg-[#F4EDE0]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">{locale === "es" ? "Preguntas frecuentes" : "FAQ"}</p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17]">{locale === "es" ? "¿Tenés dudas?" : "Have questions?"}</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white rounded-2xl overflow-hidden border border-[#868859]/20">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-semibold text-[#292E17] pr-4">{faq.q}</span>
                  {openFaq === i ? <Minus size={18} className="text-[#868859] flex-shrink-0" /> : <Plus size={18} className="text-[#868859] flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <p className="px-6 pb-6 text-[#3B1B0E]/70 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CTA FINAL */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#292E17]">
        <div className="absolute inset-0">
          <Image src="/images/red-viva/pre-footer.webp" alt="Unión CTA" fill className="object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859]">{locale === "es" ? "Los cupos son limitados" : "Spots are limited"}</p>
            <h2 className="text-4xl md:text-6xl font-bold font-serif text-[#E8DCC4] leading-tight">
              {locale === "es"
                ? "Si sentís el llamado de la medicina, este viaje es para vos."
                : "If you feel the call of the medicine, this journey is for you."}
            </h2>
            <p className="text-lg text-[#E8DCC4]/70 max-w-xl mx-auto leading-relaxed">
              {locale === "es" ? "Los cupos son limitados para cuidar y garantizar una experiencia íntima y personalizada." : "Spots are limited to ensure an intimate and personalized experience."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#7E2625] text-[#E8DCC4] font-bold text-lg rounded-full hover:bg-[#7E2625]/90 transition-all hover:-translate-y-1 shadow-xl">
                {locale === "es" ? "Quiero reservar mi lugar" : "I want to reserve my spot"} <ArrowRight size={20} />
              </Link>
              <Link href="https://wa.me/50661912861" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-[#E8DCC4]/40 text-[#E8DCC4] font-bold text-lg rounded-full hover:bg-[#E8DCC4]/10 transition-all">
                {locale === "es" ? "Tengo una pregunta" : "I have a question"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}