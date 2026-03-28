"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Calendar, Check, ChevronLeft, ChevronRight,
  Quote, ArrowRight, Plus, Minus, Users, CreditCard,
  ShieldCheck, HeartHandshake, Info, Utensils,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/language-context";

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
          className="text-xs font-semibold tracking-widest uppercase text-[#868859] hover:text-[#292E17] transition-colors border-b border-[#868859]/40 pb-0.5"
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
}

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSen9p_yBBDlvtSLLz3xoaA-vOZGgeE01Eq8_xsWqSUU4LQfLQ/viewform";

// Fecha límite Early Bird — 14 días desde hoy
const EARLY_BIRD_DEADLINE = new Date();
EARLY_BIRD_DEADLINE.setDate(EARLY_BIRD_DEADLINE.getDate() + 14);

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

export default function WithinPage() {
  const { locale } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const hosRef = useRef<HTMLDivElement>(null);

  const testimonios = [
    {
      name: "José",
      location: "Costa Rica",
      image: "/images/testimonios/jose-testimonio.webp",
      text: locale === "es"
        ? "Tuve un viaje realmente poderoso y transformador con esta medicina sagrada de plantas. La intención que establecí fue 'renacimiento' y recibí más de lo que nunca podría haber imaginado. Integrar esta experiencia fue muy enriquecedor para mi vida. ¡Muchas gracias Eli y Jona por crear este hermoso espacio!"
        : "I had a truly powerful and transformative journey with this sacred plant medicine. The intention I set was 'rebirth' and I received more than I could have ever imagined. Thank you so much Eli and Jona for creating this beautiful space!",
    },
    {
      name: "Facundo",
      location: "Argentina",
      image: "/images/testimonios/facundo-testimonio.webp",
      text: locale === "es"
        ? "La verdad que fue una experiencia muy enriquecedora. Fue mi segunda vez utilizando la medicina con fines terapéuticos y realmente pude notar como cambia cuando se hace en grupo y en forma de retiro. Por eso me gustó tanto, porque no es solo el día de la ceremonia sino el pre y el post que lo hace tan especial."
        : "It was a very enriching experience. It was my second time using the medicine for therapeutic purposes and I could really notice how it changes when done in a group and retreat format. It's not just the day of the ceremony but the pre and post that makes it so special.",
    },
    {
      name: "María Belén",
      location: "Argentina",
      image: "/images/testimonios/maria-belen-testimonio.webp",
      text: locale === "es"
        ? "Cuando pienso en los servicios de algunas personas con las que resueno, que puedo ver y sentir desde el amor real que lo brindan, pienso en llaves, en que en cada sesión esa persona, en este caso vos, te da una llave. Vos elegís qué hacer con esa llave: si la querés perder, si la ponés en tu llavero y la usás a diario, esa llave ya es tuya. Un poco así es la vida.\nGracias por ser tan vos siempre, porque no fue solamente en la sesión de ayer, sino también en el retiro y siempre. Sos una persona real y hermosa, humilde, dispuesta a escuchar y no juzgar, auténtica y vulnerable. Es muy valioso todo eso.\nGracias por verme y darme esa llave para abrir esa puerta a esa suavidad y contención que tanto estaba necesitando."
        : "When I think about the services of some people I resonate with, who I can see and feel from the real love they provide, I think of keys — in each session that person gives you a key. You choose what to do with it. A bit like life itself.\nThank you for always being so you. You are a real and beautiful person, humble, willing to listen and not judge, authentic and vulnerable. That is very valuable.\nThank you for seeing me and giving me that key to open the door to the softness and containment I so needed.",
    },
    {
      name: "Fiorella",
      location: "Perú",
      image: "/images/testimonios/fiorella-testimonio.webp",
      text: locale === "es"
        ? "Este retiro fue como un sueño. Cada detalle lo sentí con mucho amor. Desde el acompañamiento de Eli, la comida deliciosa, hasta el amor de los honguitos para mostrarme que la vida es más simple de lo que pienso.\nClaramente afloró el amor en todo mi ser, lo sentí por las personas que se me acercaron post retiro y por el amor y compasión de cómo me veo y veo a otras personas.\nAhora estoy más convencida de que esta medicina me recuerda lo maravillosos que somos, con todas nuestras experiencias de vida. Todos estamos conectados, así lo sentí todo el tiempo.\nRecomiendo mucho este espacio con la guía de este maravilloso equipo 🙏"
        : "This retreat was like a dream. I felt every detail with so much love. From Eli's accompaniment, the delicious food, to the love of the mushrooms showing me that life is simpler than I think.\nLove clearly blossomed in my whole being. I felt it for the people who approached me after the retreat and for the love and compassion in how I see myself and others.\nI am now more convinced that this medicine reminds us how wonderful we are, with all our life experiences. We are all connected — I felt that the whole time.\nI highly recommend this space with the guidance of this wonderful team 🙏",
    },
  ];

  const includes = locale === "es"
    ? ["3 noches de alojamiento", "Todas las comidas", "Yoga, actividades somáticas y psicoterapéuticas", "Ice bath y sauna", "1 ceremonia macro de Psilocibina", "Acompañamiento de preparación e integración", "2 encuentros online", "Protocolo de dosis personalizado"]
    : ["3 nights accommodation", "All meals", "Yoga, somatic and psychotherapeutic activities", "Ice bath and sauna", "1 macro Psilocybin ceremony", "Preparation and integration support", "2 online meetings", "Personalized dosage protocol"];

  const schedule = locale === "es"
    ? [
        { day: "Día 1", title: "Llegada y bienvenida", items: ["Recepción y acomodación", "Presentación del equipo y del grupo", "Círculo de apertura e intenciones", "Cena de bienvenida"] },
        { day: "Día 2", title: "Preparación", items: ["Práctica de yoga matutina", "Taller psicoterapéutico y somático", "Preparación para la ceremonia", "Ice bath y sauna"] },
        { day: "Día 3", title: "Ceremonia", items: ["Práctica de movimiento consciente", "Ceremonia macro de Psilocibina", "Acompañamiento y sostén durante toda la noche", "Descanso y cuidado post-ceremonia"] },
        { day: "Día 4", title: "Integración y cierre", items: ["Círculo de integración grupal", "Práctica restaurativa de yoga", "Almuerzo de cierre", "Partida"] },
      ]
    : [
        { day: "Day 1", title: "Arrival and welcome", items: ["Reception and accommodation", "Team and group introduction", "Opening circle and intentions", "Welcome dinner"] },
        { day: "Day 2", title: "Preparation", items: ["Morning yoga practice", "Psychotherapeutic and somatic workshop", "Ceremony preparation", "Ice bath and sauna"] },
        { day: "Day 3", title: "Ceremony", items: ["Conscious movement practice", "Macro Psilocybin ceremony", "Support and care throughout the night", "Rest and post-ceremony care"] },
        { day: "Day 4", title: "Integration and closing", items: ["Group integration circle", "Restorative yoga practice", "Closing lunch", "Departure"] },
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

  const faqs = locale === "es"
    ? [
        { q: "¿Necesito experiencia previa con psilocibina?", a: "No. El retiro está diseñado tanto para personas que nunca han tenido contacto con la medicina como para quienes ya tienen experiencia. Nos adaptamos a cada proceso individual." },
        { q: "¿Cómo es el proceso de inscripción?", a: "Completás el formulario de pre-selección, luego coordinamos una entrevista online de 30 minutos para conocernos, responder tus preguntas y confirmar que el retiro es adecuado para vos." },
        { q: "¿El retiro es seguro?", a: "Sí. Trabajamos con grupos pequeños e íntimos, con facilitadores certificados y experiencia comprobada. Cada persona pasa por una evaluación previa y contamos con protocolos de contención para toda la experiencia." },
        { q: "¿Qué pasa después del retiro?", a: "La integración es parte fundamental del proceso. Contás con un encuentro online post-retiro y acompañamiento para integrar la experiencia a tu vida cotidiana." },
        { q: "¿Qué debo llevar?", a: "Ropa cómoda, elementos de higiene personal, ropa de abrigo para la noche y una intención clara. Una vez confirmada tu inscripción te enviamos una guía detallada de preparación." },
        { q: "¿Puedo ir solo/a?", a: "Sí, la mayoría de los participantes llegan solos. El grupo se convierte en parte fundamental de la experiencia." },
      ]
    : [
        { q: "Do I need prior experience with psilocybin?", a: "No. The retreat is designed for both people who have never had contact with the medicine and those with experience. We adapt to each individual process." },
        { q: "What is the registration process?", a: "You complete the pre-selection form, then we coordinate a 30-minute online interview to meet, answer your questions, and confirm the retreat is right for you." },
        { q: "Is the retreat safe?", a: "Yes. We work with small intimate groups, certified facilitators and proven experience. Each person goes through a prior evaluation and we have containment protocols for the entire experience." },
        { q: "What happens after the retreat?", a: "Integration is a fundamental part of the process. You have a post-retreat online meeting and support to integrate the experience into your daily life." },
        { q: "What should I bring?", a: "Comfortable clothing, personal hygiene items, warm clothing for the night, and a clear intention. Once your registration is confirmed we send you a detailed preparation guide." },
        { q: "Can I go alone?", a: "Yes, most participants arrive alone. The group becomes a fundamental part of the experience." },
      ];

  const galleryImages = [
    "/images/retiro_union/casa-buda.jpg",
    "/images/retiro_union/casa-buda-2.jpg",
    "/images/retiro_union/casa-buda-3.jpg",
    "/images/retiro_union/casa-buda-4.jpeg",
    "/images/retiro_union/casa-buda-5.jpeg",
  ];

  return (
    <main className="bg-[#E8DCC4] text-[#3B1B0E] min-h-screen font-sans">
      <Navbar />

      {/* 1. HERO */}
      <section className="relative h-screen w-full flex items-end overflow-hidden">
        {/* Imagen desktop */}
        <Image
          src="/images/within/hero-within-desktop.webp"
          alt="Retiro Within - Santa Teresa Costa Rica"
          fill
          className="object-cover object-center hidden md:block"
          priority
        />
        {/* Imagen mobile */}
        <Image
          src="/images/within/hero-within-mobile.webp"
          alt="Retiro Within - Santa Teresa Costa Rica"
          fill
          className="object-cover object-center block md:hidden"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#292E17]/90 via-[#292E17]/30 to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-12 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center bg-[#E8DCC4]/15 backdrop-blur-sm border border-[#E8DCC4]/30 text-[#E8DCC4] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                {locale === "es" ? "Retiro de medicina sagrada" : "Sacred medicine retreat"}
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-serif text-[#E8DCC4] mb-6">WITHIN</h1>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 text-[#E8DCC4]/80 text-sm font-medium"><MapPin size={16} /> Santa Teresa, Costa Rica</span>
                <span className="flex items-center gap-2 text-[#E8DCC4]/80 text-sm font-medium"><Calendar size={16} /> {locale === "es" ? "25-28 Junio 2026" : "June 25-28, 2026"}</span>
                <span className="flex items-center gap-2 text-[#E8DCC4]/80 text-sm font-medium"><Users size={16} /> {locale === "es" ? "Cupos limitados" : "Limited spots"}</span>
              </div>
              <Link href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#7E2625] text-[#E8DCC4] font-bold rounded-full hover:bg-[#7E2625]/90 transition-all hover:-translate-y-1 shadow-lg">
                {locale === "es" ? "Quiero reservar mi lugar" : "I want to reserve my spot"} <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. HOOK EMOCIONAL */}
      <section className="py-28 md:py-36 px-6 lg:px-12 bg-[#E8DCC4]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#292E17] leading-relaxed">
              {locale === "es"
                ? "¿Sentís que necesitás un espacio solo para vos, lejos del ruido, para reconectar con quien realmente sos?"
                : "Do you feel like you need a space just for yourself, away from the noise, to reconnect with who you truly are?"}
            </p>
            <div className="w-12 h-0.5 bg-[#868859]/50 mx-auto" />
            <p className="text-lg md:text-xl text-[#3B1B0E]/70 leading-relaxed">
              {locale === "es"
                ? "WITHIN es ese espacio. Un retiro de 4 días en la selva tropical de Costa Rica, donde la medicina de los hongos, las prácticas somáticas y un equipo humano comprometido te acompañan en un viaje hacia tu interior."
                : "WITHIN is that space. A 4-day retreat in the tropical jungle of Costa Rica, where mushroom medicine, somatic practices and a committed human team accompany you on a journey inward."}
            </p>
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
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
              {locale === "es" ? "Este retiro es para vos si..." : "This retreat is for you if..."}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17] mb-10">
              {locale === "es" ? "¿Para quién es?" : "Who is it for?"}
            </h2>
            <ul className="space-y-5">
              {(locale === "es"
                ? [
                    "Sentís que necesitás un espacio de regulación emocional y reconexión con vos mismo.",
                    "Querés generar mayor presencia, claridad y conexión en tu vida cotidiana.",
                    "Buscás aumentar tu creatividad y salir de patrones que ya no te sirven.",
                    "Estás listo para encontrar un sentido más profundo a tu vida.",
                    "No hace falta experiencia previa con la medicina.",
                  ]
                : [
                    "You feel you need a space for emotional regulation and reconnection with yourself.",
                    "You want to generate greater presence, clarity and connection in your daily life.",
                    "You're looking to increase your creativity and break out of patterns that no longer serve you.",
                    "You're ready to find a deeper meaning in your life.",
                    "No prior experience with the medicine is necessary.",
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
              src="/images/within/para-quien.webp"
              alt="¿Para quién es Within?"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#292E17]/40 to-transparent" />
          </motion.div>

        </div>
      </section>

      {/* 3. VIDEO */}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            {/* Video desktop */}
            <video
              className="hidden md:block w-full"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/within-video-desktop.mp4" type="video/mp4" />
            </video>

            {/* Video mobile */}
            <video
              className="block md:hidden w-full"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/within-video-mobile.mp4" type="video/mp4" />
            </video>
          </motion.div>
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
              {locale === "es" ? "¿Qué vas a lograr?" : "What will you achieve?"}
            </h2>
            <p className="mt-6 text-[#E8DCC4]/60 max-w-xl mx-auto leading-relaxed">
              {locale === "es"
                ? "Cada persona vive una experiencia única. Estos son algunos de los cambios que nuestros participantes reportan."
                : "Each person lives a unique experience. These are some of the changes our participants report."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(locale === "es"
              ? [
                  { title: "Mayor claridad interna", desc: "Placeholder — Eli completará este texto con su voz auténtica." },
                  { title: "Regulación emocional", desc: "Placeholder — Eli completará este texto con su voz auténtica." },
                  { title: "Reconexión con tu cuerpo", desc: "Placeholder — Eli completará este texto con su voz auténtica." },
                  { title: "Nuevas perspectivas", desc: "Placeholder — Eli completará este texto con su voz auténtica." },
                  { title: "Vínculos más auténticos", desc: "Placeholder — Eli completará este texto con su voz auténtica." },
                  { title: "Amor propio", desc: "Placeholder — Eli completará este texto con su voz auténtica." },
                ]
              : [
                  { title: "Greater inner clarity", desc: "Placeholder — Eli will complete this text with her authentic voice." },
                  { title: "Emotional regulation", desc: "Placeholder — Eli will complete this text with her authentic voice." },
                  { title: "Reconnection with your body", desc: "Placeholder — Eli will complete this text with her authentic voice." },
                  { title: "New perspectives", desc: "Placeholder — Eli will complete this text with her authentic voice." },
                  { title: "More authentic bonds", desc: "Placeholder — Eli will complete this text with her authentic voice." },
                  { title: "Self-love", desc: "Placeholder — Eli will complete this text with her authentic voice." },
                ]
            ).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#E8DCC4]/5 border border-[#E8DCC4]/10 rounded-2xl p-8 flex flex-col gap-3 hover:bg-[#E8DCC4]/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#868859]/20 flex items-center justify-center flex-shrink-0">
                  <Check size={18} className="text-[#868859]" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#E8DCC4]">{item.title}</h3>
                <p className="text-sm text-[#E8DCC4]/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
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
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
              {locale === "es" ? "Todo incluido" : "All inclusive"}
            </p>
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

      {/* 5. SCHEDULE DEL RETIRO */}
      <section className="py-20 px-6 lg:px-12 bg-[#292E17]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">{locale === "es" ? "4 días" : "4 days"}</p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#E8DCC4]">{locale === "es" ? "El programa" : "The program"}</h2>
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
      <section className="py-20 px-6 lg:px-12 bg-[#F4EDE0]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="flex items-center gap-3">
              <Utensils size={28} className="text-[#7E2625]" />
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#292E17]">{locale === "es" ? "Alimentación" : "Meals"}</h2>
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
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <Image src="/images/comida-1.jpg" alt="Comida 1" fill className="object-cover" />
            </div>
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden mt-10">
              <Image src="/images/comida-2.jpg" alt="Comida 2" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. EL LUGAR */}
      <section className="py-28 md:py-36 px-6 lg:px-12 bg-[#E8DCC4]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
              {locale === "es" ? "El espacio" : "The space"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17]">
              House of Shakti
            </h2>
            <p className="mt-6 text-lg text-[#3B1B0E]/70 max-w-2xl mx-auto leading-relaxed">
              {locale === "es"
                ? "Un santuario íntimo y lujoso en la cima de una colina, rodeado de selva tropical, a 5 minutos de Playa Hermosa, Santa Teresa."
                : "An intimate and luxurious sanctuary atop a hill, surrounded by tropical jungle, 5 minutes from Playa Hermosa, Santa Teresa."}
            </p>
          </motion.div>

          {/* Carrusel */}
          <div className="relative">
            <div
              ref={hosRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {[1,2,3,4,5,6,7,8,9].map((n) => (
                <div
                  key={n}
                  className="min-w-[85vw] sm:min-w-[55vw] lg:min-w-[40vw] aspect-[4/3] relative snap-center rounded-2xl overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={`/images/within/hos-${n}.webp`}
                    alt={`House of Shakti ${n}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 55vw, 40vw"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => hosRef.current?.scrollBy({ left: -500, behavior: "smooth" })}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full border border-[#868859] bg-[#E8DCC4] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#E8DCC4] transition-all z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => hosRef.current?.scrollBy({ left: 500, behavior: "smooth" })}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full border border-[#868859] bg-[#E8DCC4] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#E8DCC4] transition-all z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://share.google/IjL0UFDQicYIIlA5v"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#292E17] text-[#292E17] rounded-full font-bold hover:bg-[#292E17]/5 transition-all"
            >
              <MapPin size={16} />
              {locale === "es" ? "Ver en Google Maps" : "View on Google Maps"}
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FACILITADORES */}
      <section className="py-20 px-6 lg:px-12 bg-[#292E17]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">{locale === "es" ? "El equipo" : "The team"}</p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#E8DCC4]">{locale === "es" ? "Quiénes te acompañan" : "Who accompanies you"}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Eliana Martínez", role: locale === "es" ? "Coach Ontológica · Terapias Asistidas · Yoga y Meditación" : "Ontological Coach · Assisted Therapies · Yoga & Meditation", image: "/images/within/eli-facilitador-1.webp", ig: "@eli.mar.lov" },
              { name: "Jonathan Merla", role: locale === "es" ? "Facilitador de sanación · Breathwork · Yoga" : "Healing facilitator · Breathwork · Yoga", image: "/images/within/jonatan-facilitador.webp", ig: "@jonamerla" },
              { name: "Nancy Goodfellow", role: locale === "es" ? "Tantra Vinyasa Yoga · Breathwork" : "Tantra Vinyasa Yoga · Breathwork", image: "/images/within/nancy-facilitador.webp", ig: "@wildheart.yogini" },
              { name: "Pedro Miguel", role: locale === "es" ? "Chef Holístico" : "Holistic Chef", image: "/images/within/pedro-facilitador.webp", ig: "@shivadrops" },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col gap-4">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                  <Image src={f.image} alt={f.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292E17]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold font-serif text-[#E8DCC4]">{f.name}</h3>
                    <p className="text-xs text-[#868859]">{f.ig}</p>
                  </div>
                </div>
                <p className="text-sm text-[#E8DCC4]/60 leading-relaxed px-1">{f.role}</p>
              </motion.div>
            ))}
          </div>
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

            {/* Regular */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 border border-[#3B1B0E]/10 text-center flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#868859]/30" />
              <div className="space-y-3">
                <h3 className="text-xl uppercase tracking-widest font-bold text-[#292E17]/70">
                  {locale === "es" ? "Precio Regular" : "Regular Price"}
                </h3>
                <p className="text-6xl font-bold font-serif text-[#3B1B0E]">
                  $1109 <span className="text-xl text-[#3B1B0E]/50 font-sans">USD</span>
                </p>
              </div>

              {/* Incluye resumido */}
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

            {/* Early Bird con countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-10 border-2 border-[#7E2625] text-center flex flex-col justify-between relative overflow-hidden transform md:scale-105"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#7E2625]" />

              {/* Badge */}
              <div className="inline-flex items-center justify-center gap-2 bg-[#7E2625]/10 text-[#7E2625] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4 mx-auto">
                <span className="w-2 h-2 rounded-full bg-[#7E2625] animate-pulse" />
                {locale === "es" ? "Oferta por tiempo limitado" : "Limited time offer"}
              </div>

              <div className="space-y-3">
                <h3 className="text-xl uppercase tracking-widest font-bold text-[#7E2625]">
                  {locale === "es" ? "Early Bird Abril" : "April Early Bird"}
                </h3>
                <p className="text-6xl font-bold font-serif text-[#7E2625]">
                  $985 <span className="text-xl text-[#7E2625]/60 font-sans">USD</span>
                </p>
                <p className="text-sm text-[#3B1B0E]/50">
                  {locale === "es" ? "Ahorrás $124 USD" : "You save $124 USD"}
                </p>
              </div>

              {/* Countdown */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
              {locale === "es" ? "Paso a paso" : "Step by step"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17]">
              {locale === "es" ? "¿Cómo inscribirte?" : "How to register?"}
            </h2>
            <p className="mt-6 text-lg text-[#3B1B0E]/60 max-w-xl mx-auto leading-relaxed">
              {locale === "es"
                ? "Cada etapa está diseñada para que llegues al retiro con claridad, apertura y confianza."
                : "Each stage is designed so you arrive at the retreat with clarity, openness and confidence."}
            </p>
          </motion.div>

          <div className="relative flex flex-col gap-0">
            {(locale === "es"
              ? [
                  {
                    num: "01",
                    title: "Formulario inicial",
                    desc: "Para inscribirte te enviamos un formulario con preguntas específicas para conocerte mejor: tu historial, motivaciones e intenciones.",
                  },
                  {
                    num: "02",
                    title: "Entrevista previa",
                    desc: "Coordinamos un encuentro online de 30 minutos para presentarnos, responder todas tus dudas y confirmar que el retiro es el espacio adecuado para vos.",
                  },
                  {
                    num: "03",
                    title: "Firma de consentimiento informado",
                    desc: "Firma digital que confirma la comprensión y aceptación de la información, autorizando tu participación voluntaria en el retiro.",
                  },
                  {
                    num: "04",
                    title: "Pago primera cuota",
                    desc: "Tu confirmación queda efectiva con el pago de la primera cuota. A partir de ahí sos parte del grupo.",
                  },
                  {
                    num: "05",
                    title: "Encuentro online grupal I",
                    desc: "Una semana antes del retiro nos encontramos online con el grupo completo para conocerse, recibir herramientas de preparación corporal y mental, y despejar cualquier consulta.",
                  },
                  {
                    num: "06",
                    title: "Encuentro online grupal II",
                    desc: "Dos semanas después del retiro nos volvemos a encontrar online para optimizar la integración y capitalizar los aprendizajes obtenidos durante la experiencia.",
                  },
                ]
              : [
                  {
                    num: "01",
                    title: "Initial form",
                    desc: "To register, we send you a form with specific questions to get to know you better: your history, motivations and intentions.",
                  },
                  {
                    num: "02",
                    title: "Prior interview",
                    desc: "We coordinate a 30-minute online meeting to introduce ourselves, answer all your questions and confirm the retreat is the right space for you.",
                  },
                  {
                    num: "03",
                    title: "Informed consent signature",
                    desc: "Digital signature confirming the understanding and acceptance of the information, authorizing your voluntary participation in the retreat.",
                  },
                  {
                    num: "04",
                    title: "First installment payment",
                    desc: "Your confirmation is effective with the payment of the first installment. From that point on, you are part of the group.",
                  },
                  {
                    num: "05",
                    title: "Group online meeting I",
                    desc: "One week before the retreat we meet online with the full group to get to know each other, receive body and mental preparation tools, and address any questions.",
                  },
                  {
                    num: "06",
                    title: "Group online meeting II",
                    desc: "Two weeks after the retreat we meet online again to optimize integration and capitalize on the learnings obtained during the experience.",
                  },
                ]
            ).map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-8 pb-12 last:pb-0"
              >
                {/* Línea vertical */}
                {i < 5 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-[#868859]/20" />
                )}

                {/* Número */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#292E17] text-[#E8DCC4] flex items-center justify-center font-bold font-serif text-lg z-10">
                  {step.num}
                </div>

                {/* Contenido */}
                <div className="pt-2 pb-4">
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-[#292E17] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#3B1B0E]/65 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Notas importantes */}
          <div className="mt-12 bg-[#292E17] rounded-2xl p-8 space-y-4">
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-6">
              {locale === "es" ? "Importante" : "Important"}
            </p>
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#7E2625] text-[#E8DCC4] font-bold rounded-full hover:bg-[#7E2625]/90 transition-all hover:-translate-y-1 shadow-lg"
            >
              {locale === "es" ? "Comenzar el proceso" : "Start the process"}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
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
                  <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-[#868859]">
                    <Image src={testimonios[currentTestimonial].image} alt={testimonios[currentTestimonial].name} fill className="object-cover" />
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
            <button onClick={() => setCurrentTestimonial((p) => (p - 1 + testimonios.length) % testimonios.length)} className="w-12 h-12 rounded-full border border-[#868859] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#E8DCC4] transition-all">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonios.map((_, i) => (
                <button key={i} onClick={() => setCurrentTestimonial(i)} className={`h-2 rounded-full transition-all ${currentTestimonial === i ? "w-8 bg-[#868859]" : "w-2 bg-[#868859]/30"}`} />
              ))}
            </div>
            <button onClick={() => setCurrentTestimonial((p) => (p + 1) % testimonios.length)} className="w-12 h-12 rounded-full border border-[#868859] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#E8DCC4] transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-20 px-6 lg:px-12 bg-[#F4EDE0]">
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
          <Image src="/images/within/hos-4.webp" alt="Within CTA" fill className="object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859]">{locale === "es" ? "Los cupos son limitados" : "Spots are limited"}</p>
            <h2 className="text-4xl md:text-6xl font-bold font-serif text-[#E8DCC4] leading-tight">
              {locale === "es" ? "Tu próximo capítulo empieza acá" : "Your next chapter starts here"}
            </h2>
            <p className="text-lg text-[#E8DCC4]/70 max-w-xl mx-auto leading-relaxed">
              {locale === "es"
                ? "Los cupos son limitados para cuidar y garantizar una experiencia íntima y personalizada."
                : "Spots are limited to ensure an intimate and personalized experience."}
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