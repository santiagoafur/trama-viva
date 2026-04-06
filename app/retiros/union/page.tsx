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
const GOOGLE_FORM_URL = "https://forms.gle/2bCtkwg6WRUzM4D4A";
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
  const total = 5;

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[3/3.5] rounded-2xl overflow-hidden"
        >
          <Image
            src={`/images/union/union-lugar-${current + 1}.webp`}
            alt={`Casa Buda ${current + 1}`}
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
  const total = 5;

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[3/3.5] rounded-2xl overflow-hidden"
        >
          <Image
            src={`/images/union/comidas-${current + 1}.webp`}
            alt={`Comida ${current + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Flechas */}
      <button
        onClick={() => setCurrent((p) => (p - 1 + total) % total)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#868859]/20 flex items-center justify-center text-[#292E17] hover:bg-white transition-all z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => setCurrent((p) => (p + 1) % total)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#868859]/20 flex items-center justify-center text-[#292E17] hover:bg-white transition-all z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
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
      "3 noches de alojamiento en Buda Traslasierra",
      "Todas las comidas (Desayuno, Almuerzo, Merienda y Cena)",
      "Yoga · Prácticas psicoterapéuticas y somáticas · Caminatas",
      "1 Ceremonia de Macrodosis de Psilocibina",
      "Acompañamiento de preparación e integración + 2 encuentros online",
      "Protocolo de dosis personalizado",
    ]
  : [
      "3 nights accommodation at Buda Traslasierra",
      "All meals (Breakfast, Lunch, Snack and Dinner)",
      "Yoga · Psychotherapeutic and somatic practices · Hikes",
      "1 Macrodose Psilocybin Ceremony",
      "Preparation and integration support + 2 online meetings",
      "Personalized dosage protocol",
    ];

  const schedule = locale === "es"
    ? [
        { day: "Día 1", title: "Bienvenida y preparación", items: ["Recepción y acomodación", "Círculo de bienvenida y acuerdos", "Merienda", "Charla de preparación", "Cena"] },
        { day: "Día 2", title: "Preparación y Ceremonia", items: ["Meditación y yoga", "Desayuno", "Actividad psicoterapéutica", "Brunch y tiempo libre", "Ceremonia", "Cena"] },
        { day: "Día 3", title: "Integración", items: ["Meditación y Yoga", "Desayuno", "Actividad de integración", "Almuerzo", "Tiempo libre", "Merienda", "Actividad de integración", "Cena"] },
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
      name: "Martina",
      location: "Argentina",
      image: "/images/testimonios/martina-testimonio.webp",
      text: locale === "es"
        ? "Este retiro fue para mí un broche de oro en todo el proceso que venía haciendo, una confirmación de que el camino es hacia adentro y de la mano con otros.\nLograr abrir el corazón, mostrar lo que más buscas esconder y que haya alguien listo para sostenerte con las manos y el corazón abiertos no tiene precio, hacerlo en grupo y además poder verte en el otro es profundamente sanador y transformador.\nEli, Juli y Lu fueron la base y las guardianas para que esto suceda, se nota su amor en cada detalle y en cada elección.\nEl corazón solo abre partes que tenía cerradas bajo llave cuando se siente seguro y contenido. Fue lo que sentí en todo el retiro."
        : "This retreat was for me a golden clasp in all the process I had been doing, a confirmation that the path is inward and hand in hand with others. Being able to open the heart, show what you most seek to hide and have someone ready to hold you with open hands and heart is priceless.",
    },
    {
      name: "Lucas",
      location: "Argentina",
      image: null,
      text: locale === "es"
        ? "Super recomendable. Un espacio donde la contención de amor se siente a flor de piel. Donde las almas al servicio se nota desde la primera entrevista. Volvería a hacerlo de nuevo. Si si."
        : "Highly recommended. A space where the loving containment is felt on the surface. Where souls in service are evident from the very first interview. I would do it again. Yes, yes.",
    },
    {
      name: "Lucrecia",
      location: "Argentina",
      image: "/images/testimonios/lucrecia-testimonio.webp",
      text: locale === "es"
        ? "Fue mi primer retiro y me marcó sin dudas. El ambiente físico hermoso y el humano mucho más. La asistencia puntualmente durante la ceremonia fue constante y amorosa, las explicaciones previas muy claras y las charlas en todo momento muy enriquecedoras. Un placer coincidir y regalarme esta experiencia."
        : "It was my first retreat and it undoubtedly left a mark on me. The physical environment was beautiful and the human one even more so. The assistance during the ceremony was constant and loving, the prior explanations very clear and the conversations at all times very enriching.",
    },
    {
      name: "Micaela",
      location: "Argentina",
      image: "/images/testimonios/micaela-testimonio.webp",
      text: locale === "es"
        ? "Para mi fue una experiencia muy transformadora, sensible y contenida. Sentí que era posible entregarme a un viaje al interior, porque construyeron un espacio seguro para sostenernos. Desde la primer reunión virtual hasta el último abrazo de despedida. Durante la ceremonia, había una energía especial, lo sentí como un útero gigante que nos contenía, la energía femenina muy presente, fuerte y sensible a la vez. Muchas gracias por lo que fué y por lo que será."
        : "For me it was a very transformative, sensitive and contained experience. I felt it was possible to surrender to an inner journey, because they built a safe space to hold us. From the first virtual meeting to the last farewell hug.",
    },
    {
      name: "Agustina",
      location: "Argentina",
      image: "/images/testimonios/agustina-testimonio.webp",
      text: locale === "es"
        ? "UNION es para mi la gran integración de todas nuestras partes... y digo ES porque siempre me acompañará esta experiencia. El lugar es un sueño, la energía de la montaña se siente. Eli, Clari y Anto que acompañaron fueron un eslabón perfecto para que todo se sienta como en casa. La ceremonia fue de lo más maravilloso que viví. Recomiendo esta experiencia para aquellos valientes que se animen a conocer más su mundo interno."
        : "UNION is for me the great integration of all our parts... and I say IS because this experience will always accompany me. The place is a dream, the energy of the mountain is felt. The ceremony was one of the most wonderful things I have ever lived. I recommend this experience for those brave souls who dare to know their inner world more.",
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
        { q: "¿Existen contraindicaciones médicas para realizar la ceremonia de Psilocibina?", a: `Sí, es importante evaluarlas con responsabilidad. Por eso enviamos un formulario previo para descartar cualquier posible riesgo.
              Algunas contraindicaciones incluyen ciertos estados de salud mental, así como el uso de medicación antidepresiva o antipsicótica. No recomendamos suspender ningún tratamiento sin supervisión médica.
              También es importante tener especial cuidado en casos de problemas cardíacos, condiciones neurológicas, embarazo o lactancia. Por supuesto que todo esto será evaluado en la entrevista previa.`}
      ]
    : [
        { q: "Do I need prior experience with psilocybin?", a: "No. The retreat is designed for both people who have never had contact with the medicine and those with experience. We adapt to each individual process." },
        { q: "What is the registration process?", a: "You complete the pre-selection form, then we coordinate a 30-minute online interview to meet, answer your questions, and confirm the retreat is right for you." },
        { q: "Is the retreat safe?", a: "Yes. We work with small intimate groups, certified facilitators and proven experience. Each person goes through a prior evaluation and we have containment protocols for the entire experience." },
        { q: "What happens after the retreat?", a: "Integration is a fundamental part of the process. You have a post-retreat online meeting and support to integrate the experience into your daily life." },
        { q: "What should I bring?", a: "Comfortable clothing, personal hygiene items, a personal journaling notebook and an open heart and mind. Once your registration is confirmed we send you a detailed preparation guide." },
        { q: "Can I go alone?", a: "Yes, most participants arrive alone. The group becomes a fundamental part of the experience." },
        { q: "Are there medical contraindications for the Psilocybin ceremony?", a: `Yes, it is important to evaluate them responsibly. That is why we send a prior form to rule out any possible risk. 
          Some contraindications include certain mental health conditions, as well as the use of antidepressant or antipsychotic medication. We do not recommend discontinuing any treatment without medical supervision.
          It is also important to take special care in cases of heart issues, neurological conditions, pregnancy, or breastfeeding. Naturally, all of these factors will be evaluated during the initial interview.` }
      ];

  const galleryImages = [
    "/images/union/experiencias-pasadas-1.webp",
    "/images/union/experiencias-pasadas-2.webp",
  ];

  const carruselImages = Array.from({ length: 12 }, (_, i) => `/images/union/carrusel-union-${i + 1}.webp`);

  return (
    <main className="bg-[#E8DCC4] text-[#3B1B0E] min-h-screen font-sans">
      <Navbar />

      {/* 1. HERO */}
      <section className="relative h-screen w-full flex items-end overflow-hidden">
        <Image src="/images/union/new_photos/DSC07113 1.webp" alt="Retiro Unión - Córdoba Argentina" fill className="object-cover object-center hidden md:block" priority />
        <Image src="/images/union/hero-union-mobile.webp" alt="Retiro Unión - Córdoba Argentina" fill className="object-cover object-center block md:hidden" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#292E17]/90 via-[#292E17]/30 to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-12 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center bg-[#E8DCC4]/15 backdrop-blur-sm border border-[#E8DCC4]/30 text-[#E8DCC4] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                {locale === "es" ? "Retiro de Conexión Somática Micelial" : "Micellal Somatic Connection Retreat"}
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-serif text-[#E8DCC4] mb-6">UNIÓN</h1>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 text-[#E8DCC4]/80 text-sm font-medium"><MapPin size={16} /> Córdoba, Traslasierra - Argentina</span>
                <span className="flex items-center gap-2 text-[#E8DCC4]/80 text-sm font-medium"><Calendar size={16} /> {locale === "es" ? "10-13 Septiembre 2026" : "September 10-13, 2026"}</span>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-10">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#292E17] leading-relaxed">
              {locale === "es"
                ? "¿Y si todo lo que estás buscando… ya vive dentro de ti, esperando ser recordado?"
                : "What if everything you're looking for… already lives within you, waiting to be remembered?"}
            </p>
            <div className="w-12 h-0.5 bg-[#868859]/50 mx-auto" />
            <div className="space-y-6 text-lg md:text-xl text-[#3B1B0E]/70 leading-relaxed">
              <p>
                {locale === "es"
                  ? "Unión es nuestra ofrenda para reencontrarnos con la simpleza. Te invitamos a compartir una experiencia para explorar tu mundo interno y fortalecer la apertura de tu corazón en un espacio seguro y en un entorno natural."
                  : "Unión is our offering to reconnect with simplicity. We invite you to share an experience to explore your inner world and strengthen the opening of your heart in a safe space and natural environment."}
              </p>
              <p>
                {locale === "es"
                  ? "Una experiencia de conexión profunda con vos mismo y la naturaleza, en vínculo con el corazón de cada ser humano y con el antídoto más poderoso que surge de toda esta combinación: EL AMOR"
                  : "An experience of deep connection with yourself and nature, in bond with the heart of every human being and with the most powerful antidote that emerges from this combination: LOVE"}
              </p>
              <p className="font-serif italic text-[#292E17] text-xl md:text-2xl">
                {locale === "es"
                  ? "Nuevos caminos son posibles para todos."
                  : "New paths are possible for everyone."}
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
              {locale === "es" ? "Este retiro es para vos si..." : "This retreat is for you if..."}
            </h2>
            <ul className="space-y-5">
              {(locale === "es"
                ? [
                    "Sentís que necesitás un espacio de regulación emocional y reconexión.",
                    "Querés cultivar un estado de mayor presencia, claridad y conexión con tu vida.",
                    "Buscás aumentar tu creatividad y transformar conductas que dejaron de ser funcionales.",
                    "Estás en la búsqueda de un sentido más profundo en tu vida y de mayor propósito personal.",
                    "Valorás la conexión con la naturaleza, el silencio y la simplicidad como caminos de transformación.",
                    "Querés tener un acercamiento con la medicina de los hongos desde la consciencia, el compromiso y el respeto por estas sustancias.",
                    "Buscás ampliar tu perspectiva y abrirte a nuevas miradas sobre la realidad.",
                    "Buscás un espacio donde permitirte abrir el corazón y dejarte sostener.",
                  ]
                : [
                    "You feel you need a space for emotional regulation and reconnection.",
                    "You want to cultivate a state of greater presence, clarity and connection with your life.",
                    "You're looking to increase your creativity and transform behaviors that are no longer functional.",
                    "You are in search of a deeper meaning in your life and greater personal purpose.",
                    "You value connection with nature, silence and simplicity as paths of transformation.",
                    "You want to have a encounter with mushroom medicine from a place of consciousness, commitment and respect for these substances.",
                    "You're seeking to broaden your perspective and open yourself to new ways of seeing reality.",
                    "You look for a space where you can allow yourself to open your heart and be held.",
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
              src="/images/union/new_photos/image00068 1.webp"
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">{locale === "es" ? "El retiro" : "The retreat"}</p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#E8DCC4]">{locale === "es" ? "Así se vive" : "What it looks like"}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden">
            {/* Video desktop */}
            <video className="hidden md:block w-full" autoPlay muted loop playsInline>
              <source src="/videos/union-video-desktop.mp4" type="video/mp4" />
            </video>
            {/* Video mobile */}
            <video className="block md:hidden w-full" autoPlay muted loop playsInline>
              <source src="/videos/union-video-mobile.mp4" type="video/mp4" />
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
              {locale === "es" ? "Posibilidad de cambio" : "Possibility for change"}
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
              src="/images/union/new_photos/IMG_3145_Original 1.webp"
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
            className="relative"
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
                Casa Buda Traslasierra
              </h2>
            </div>
            <p className="text-lg text-[#3B1B0E]/70 leading-relaxed">
              {locale === "es"
                ? "Una posada ecológica, simple y cálida en medio de la naturaleza. Cuenta con un salón principal con vista panorámica a las sierras y una sala de estar dentro de la ecoposada, además de hermosas y rústicas habitaciones con baño privado."
                : "An ecological inn, simple and warm in the middle of nature. It features a main hall with panoramic views of the mountains and a living room inside the eco-inn, as well as beautiful and rustic rooms with private bathrooms."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://maps.app.goo.gl/pDScsQBEh613WTN98"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#292E17] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all"
              >
                <MapPin size={16} />
                {locale === "es" ? "Ver en Google Maps" : "View on Google Maps"}
              </Link>
              <Link
                href="https://www.instagram.com/casabuda_traslasierra/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#292E17] text-[#292E17] rounded-full font-bold hover:bg-[#292E17]/5 transition-all"
              >
                @casabuda_traslasierra
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
              {locale === "es" ? "Facilitadores" : "Facilitators"}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

            {/* Foto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/within/eli-facilitador-1.webp"
                  alt="Eliana Martínez"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292E17]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold font-serif text-[#E8DCC4]">Eliana Martínez</h3>
                  <p className="text-xs text-[#868859]">@eli.mar.lov</p>
                </div>
              </div>
              <p className="text-sm text-[#E8DCC4]/60 leading-relaxed text-center">
                {locale === "es"
                  ? "Coach Ontológica · Terapias Asistidas con Psicodélicos · Facilitadora de Respiración y Crioterapia · Instructora de Yoga y Meditación"
                  : "Ontological Coach · Psychedelic Assisted Therapies · Breathwork and Cryotherapy Facilitator · Yoga and Meditation Instructor"}
              </p>
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8 items-center text-center lg:items-start lg:text-left"
            >
              <div className="space-y-6 text-[#E8DCC4]/70 text-lg leading-relaxed">
                <p>
                  {locale === "es"
                    ? "Cada retiro lo facilito junto a distintos profesionales que admiro y en quienes confío. Así, cada retiro es único, diverso y enriquecido por la colaboración y los saberes compartidos siendo parte de una misma red."
                    : "I facilitate each retreat alongside different professionals I admire and trust. This way, each retreat is unique, diverse and enriched by collaboration and shared knowledge, all part of the same network."}
                </p>
                <p>
                  {locale === "es"
                    ? "Nuestro servicio se basa en abrir y sostener espacios de escucha compasiva para tu autoconocimiento, restauración emocional y la reconexión con tu energía vital."
                    : "Our service is based on opening and holding spaces of compassionate listening for your self-knowledge, emotional restoration and reconnection with your vital energy."}
                </p>
              </div>

              <Link
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#7E2625] text-[#E8DCC4] font-bold rounded-full hover:bg-[#7E2625]/90 transition-all hover:-translate-y-1 shadow-lg"
              >
                {locale === "es" ? "Reservar mi lugar" : "Reserve my spot"}
                <ArrowRight size={18} />
              </Link>
            </motion.div>

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

          <div className="grid md:grid-cols-2 gap-6 mb-12">

            {/* Early Bird Abril/Mayo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-[#7E2625] text-center flex flex-col justify-between relative overflow-hidden transform md:scale-105"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#7E2625]" />
              <div className="inline-flex items-center justify-center gap-2 bg-[#7E2625]/10 text-[#7E2625] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4 mx-auto">
                <span className="w-2 h-2 rounded-full bg-[#7E2625] animate-pulse" />
                {locale === "es" ? "Oferta por tiempo limitado" : "Limited time offer"}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg uppercase tracking-widest font-bold text-[#7E2625]">
                  {locale === "es" ? "Early Bird Abril / Mayo" : "April / May Early Bird"}
                </h3>
                <p className="text-5xl font-bold font-serif text-[#7E2625]">
                  $652 <span className="text-lg text-[#7E2625]/60 font-sans">USD</span>
                </p>
                <p className="text-sm text-[#3B1B0E]/50">
                  {locale === "es" ? "Ahorrás $125 USD" : "You save $125 USD"}
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
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-[#3B1B0E]/10 text-center flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#868859]/20" />
              <div className="space-y-2">
                <h3 className="text-lg uppercase tracking-widest font-bold text-[#292E17]/50">
                  {locale === "es" ? "Precio Regular" : "Regular Price"}
                </h3>
                <p className="text-5xl font-bold font-serif text-[#3B1B0E]">
                  $777 <span className="text-lg text-[#3B1B0E]/50 font-sans">USD</span>
                </p>
                <p className="text-sm text-[#3B1B0E]/30">
                  {locale === "es" ? "Precio final" : "Final price"}
                </p>
                {/* Incluidos */}
                <ul className="mt-6 space-y-3 text-left">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#3B1B0E]/60">
                      <Check size={14} className="text-[#868859] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
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
                  { num: "06", title: "RETIRO", desc: "Tu experiencia en Unión" },
                  { num: "07", title: "Encuentro online grupal II", desc: "Dos semanas después del retiro nos volvemos a encontrar online para optimizar la integración y capitalizar los aprendizajes obtenidos." },
                ]
              : [
                  { num: "01", title: "Initial form", desc: "To register, we send you a form with specific questions to get to know you better: your history, motivations and intentions." },
                  { num: "02", title: "Prior interview", desc: "We coordinate a 30-minute online meeting to introduce ourselves, answer all your questions and confirm the retreat is the right space for you." },
                  { num: "03", title: "Informed consent signature", desc: "Digital signature confirming the understanding and acceptance of the information, authorizing your voluntary participation in the retreat." },
                  { num: "04", title: "First installment payment", desc: "Your confirmation is effective with the payment of the first installment. From that point on, you are part of the group." },
                  { num: "05", title: "Group online meeting I", desc: "One week before the retreat we meet online with the full group to get to know each other, receive preparation tools, and address any questions." },
                  { num: "06", title: "RETREAT", desc: "Your experience at Union" },
                  { num: "07", title: "Group online meeting II", desc: "Two weeks after the retreat we meet online again to optimize integration and capitalize on the learnings obtained." },
                ]
            ).map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative flex gap-8 pb-12 last:pb-0">
                {i < 6 && <div className="absolute left-6 top-14 bottom-0 w-px bg-[#868859]/20" />}
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
          {[...Array(15)].concat([...Array(15)]).map((_, i) => {
            const num = (i % 15) + 1;
            return (
              <div
                key={i}
                className="flex-shrink-0 w-72 md:w-96 aspect-[3/4] relative rounded-2xl overflow-hidden mx-2"
              >
                <Image
                  src={`/images/union/carrusel-union-${num}.webp`}
                  alt={`Within ${num}`}
                  fill
                  className="object-cover"
                  sizes="384px"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCIAS PASADAS */}
      <section className="py-28 md:py-36 px-6 lg:px-12 pb-14 md:pb-16 bg-[#F4EDE0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
              {locale === "es" ? "Camadas" : "Past editions"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#292E17]">
              {locale === "es" ? "Experiencias pasadas" : "Past experiences"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start max-w-6xl mx-auto">

            {/* Unión 2024 — horizontal, arriba */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/union/union-2024.webp"
                  alt="Unión 2024"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />
              </div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#868859]">
                Córdoba · Argentina
              </p>
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#292E17]">
                Unión 2024
              </h3>
            </motion.div>

            {/* Unión 2025 — vertical, con offset */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-3 md:mt-20"
            >
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/union/union-2025.webp"
                  alt="Unión 2025"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />
              </div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#868859]">
                Córdoba · Argentina
              </p>
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#292E17]">
                Unión 2025
              </h3>
            </motion.div>

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
          <Image src="/images/union/pre-footer.webp" alt="Unión CTA" fill className="object-cover opacity-20" />
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