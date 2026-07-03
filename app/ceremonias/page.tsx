"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import {
  Heart,
  Clock,
  Info,
  CheckCircle2,
  Users,
  User,
  AlertTriangle,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// --- Subcomponente Reutilizable para las Flip Cards ---
const FlipCard = ({ front, back, frontImage }: { front: React.ReactNode, back: React.ReactNode, frontImage?: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full aspect-square md:aspect-[4/5] cursor-pointer group"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Frente */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#E8DCC4] border border-[#3B1B0E]/10 flex flex-col justify-center p-6 text-center" style={{ backfaceVisibility: "hidden" }}>
          {frontImage && (
            <Image 
              src={frontImage} 
              alt="Cover" 
              fill 
              className="object-cover opacity-60 mix-blend-multiply" 
            />
          )}
          <div className="relative z-10 flex flex-col items-center justify-end h-full text-[#3B1B0E] pb-2">
            {front}
          </div>
        </div>
        {/* Dorso */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden bg-[#292E17] text-[#E8DCC4] p-6 flex items-center justify-center text-center shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};

const CHAR_LIMIT = 280;

function TestimonialText({ text, locale }: { text: { es: string; en: string }; locale: string }) {
  const [expanded, setExpanded] = useState(false);
  const content = text[locale as "es" | "en"];
  const isLong = content.length > CHAR_LIMIT;
  const displayed = expanded || !isLong ? content : content.slice(0, CHAR_LIMIT).trimEnd() + "…";

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
          {expanded
            ? locale === "es" ? "Ver menos" : "See less"
            : locale === "es" ? "Ver más" : "See more"}
        </button>
      )}
    </div>
  );
}

const testimoniosData = [
  {
    name: "Emilie",
    location: "Netherlands",
    image: "/images/testimonios/emilie-testimonio.webp",
    hasImage: true,
    initial: "E",
    text: {
      es: "Eli y Jona guían la ceremonia con mucho cuidado y amor. El lugar era hermoso y el espacio estuvo bien sostenido durante toda la ceremonia. El set y el setting fueron perfectos, que son los elementos más importantes para un buen viaje… Definitivamente recomiendo viajar con ellos si deseas hacerlo con medicina de plantas.",
      en: "Eli and Jona guide the ceremony with a lot of care and love. The place was beautiful and the space well held during the entire ceremony. Set and setting were perfect which are the most important elements for a good journey… I definitely recommend journeying with them if you desire to journey with plant medicine.",
    },
  },
  {
    name: "Josephine",
    location: "United Kingdom",
    image: "/images/testimonios/josephine-testimonio.webp",
    hasImage: true,
    initial: "J",
    text: {
      es: "Recomiendo ampliamente la ceremonia de hongos que Eli facilitó para mi esposo y para mí. Eli es extremadamente profesional y valora profundamente la importancia de crear un espacio seguro y sagrado. Nos ayudó a ambos a tener una experiencia profundamente conmovedora, iluminadora y sanadora, por la cual estamos inmensamente agradecidos y nunca olvidaremos. Muchas gracias, Eli, por tu sabiduría, intuición y amor.",
      en: "I highly recommend the mushroom ceremony that Eli facilitated for my husband and me. Eli is extremely professional and deeply values the importance of creating a safe and sacred space. She helped us both have a profoundly moving, enlightening, and healing experience, for which we are immensely grateful and will never forget. Thank you so much, Eli, for your wisdom, intuition, and love.",
    },
  },
  {
    name: "Ryan",
    location: "United Kingdom",
    image: "/images/testimonios/ryan-testimonio.webp",
    hasImage: true,
    initial: "R",
    text: {
      es: "Eli, gracias de nuevo por un viaje tan hermoso. Amamos todo el proceso con ustedes dos. El ambiente tranquilo y seguro que crearon, el espacio que se le dio a cada uno y la selección musical fue increíble. También fue hermoso poder compartir los momentos posteriores que sentimos relevantes. En definitiva, una experiencia realmente especial. Gracias.",
      en: "Eli, thank you guys again for such a beautiful journey. We loved the whole process with you both. The calm and safe environment you created, the space that everyone was given and the music selection was out of this world. It was also beautiful to be able to share any moments afterwards that felt relevant. All in all a really special experience. Thank you.",
    },
  },
  {
    name: "Estefanía",
    location: "Argentina",
    image: "/images/testimonios/estefania-testimonio.webp",
    hasImage: true,
    initial: "E",
    text: {
      es: "Gracias, Eli, por tu apoyo. La energía que transmites es realmente hermosa, y me sentí tan segura que pude sumergirme por completo en la experiencia. No hubo ni un solo segundo en el que supiera que todo estaría bien, pasara lo que pasara, y eso fue gracias a lo que me transmitiste. Nunca me había rendido tan rápido y tan fácilmente a una experiencia tan poderosa como esta. Simplemente, gracias.",
      en: "Thank you, Eli, for your support. The energy you transmit is truly beautiful, and I felt so safe that I was able to immerse myself completely in the experience. There was not a single second in which I knew everything would be fine, no matter what happened, and that was thanks to what you conveyed to me. I had never surrendered so quickly and easily to such a powerful experience as this. Simply, thank you.",
    },
  },
  {
    name: "Emilie",
    location: "Lisboa",
    image: "/images/testimonios/emilie-testimonio.webp",
    hasImage: true,
    initial: "E",
    text: {
      es: "Eli se aseguró de que la Ceremonia de Medicina Sagrada se llevara a cabo en las condiciones adecuadas, en el entorno perfecto. House of Shakti fue ideal para ello. También se aseguró de que sus propias intenciones y energía estuvieran alineadas, creando un espacio verdaderamente sagrado.",
      en: "Eli ensured that the Sacred Medicine Ceremony took place under the right conditions, in the perfect environment — House of Shakti was ideal for it. She also made sure her own intentions and energy were aligned, creating a truly sacred space.",
    },
  },
  {
    name: "Kerry",
    location: "United States",
    image: "/images/testimonios/kerry-testimonio.webp",
    hasImage: true,
    initial: "K",
    text: {
      es: "No puedo agradecerte lo suficiente por haber sido una facilitadora tan increíble. He tenido experiencias anteriores que no siempre se sintieron seguras, y ayer fue simplemente tan amoroso y hermoso, incluso en los momentos más difíciles. Me encontré en el viaje pensando en ti y si estabas bien, pero seguí recordándome que estaba segura y me sentí muy segura contigo.",
      en: "I can't thank you enough for what an amazing facilitator you were. I've done trips before that didn't always feel safe and yesterday was just so loving and beautiful even in the really hard moments. I found myself in the journey wondering about you and if you were okay, but I kept reminding myself that I was safe and felt very safe with you.",
    },
  },
];

export default function CeremoniasPage() {
  // Estado para el Carrusel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { locale } = useLanguage();
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimoniosData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimoniosData.length) % testimoniosData.length);
  };

  return (
    <main className="bg-[#E8DCC4] text-[#3B1B0E] min-h-screen font-sans">
      <Navbar />

      {/* 1. HERO */}
      <section className="relative h-screen w-full flex items-end overflow-hidden">
        <Image
          src="/images/ceremonias/ceremonias-hero.webp"
          alt="Ceremonias Trama Viva"
          fill
          className="object-cover object-center"
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
                Santa Teresa · Costa Rica
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-[#E8DCC4] mb-4 leading-tight">
                {locale === "es"
                  ? "Ceremonia de Macrodosis de Psilocibina"
                  : "Macrodose Psilocybin Ceremony"}
              </h1>
              <p className="text-lg md:text-xl text-[#E8DCC4]/80 max-w-2xl leading-relaxed mb-8">
                {locale === "es"
                  ? "La verdadera medicina es recordar quién sos."
                  : "The true medicine is remembering who you are."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="#ceremonia-info"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#7E2625] text-[#E8DCC4] font-bold rounded-full hover:bg-[#7E2625]/90 transition-all hover:-translate-y-1 shadow-lg"
                >
                  {locale === "es" ? "Quiero saber más" : "I want to know more"}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="#facilitadores"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-[#E8DCC4]/40 text-[#E8DCC4] font-bold rounded-full hover:bg-[#E8DCC4]/10 transition-all"
                >
                  {locale === "es" ? "Conocer el equipo" : "Meet the team"}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCCIÓN */}
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg md:text-xl text-[#3B1B0E]/80 leading-relaxed font-medium"
        >
          <p>
            {locale === "es"
              ? "Una experiencia psicodélica es algo único y profundamente sagrado, con un inmenso potencial para transformarnos."
              : "A psychedelic experience is something unique and profoundly sacred, with an immense potential to transform us."}
          </p>
          <p>
            {locale === "es"
              ? "Puede revelarnos aspectos esenciales de nosotros mismos y de la realidad que habitamos en un breve lapso de tiempo, ayudándonos a reconectar con nuestro potencial de crecimiento y desarrollo como seres humanos."
              : "It can reveal essential aspects of ourselves and the reality we inhabit in a brief period of time, helping us reconnect with our potential for growth and development as human beings."}
          </p>
          <p>
            {locale === "es"
              ? "La intención de esta experiencia es ir al encuentro íntimo con nosotros mismos, acompañados por la medicina de los hongos, dentro de un contexto seguro y con un acompañamiento adecuado."
              : "The intention of this experience is to go on an intimate encounter with ourselves, accompanied by mushroom medicine, within a safe context and with adequate support."}
          </p>
          <p>
            {locale === "es"
              ? "El espacio donde realizaremos la ceremonia es cuidado, cómodo y seguro para que puedas vivir un momento significativo que aporte profundidad, claridad y valor a tu vida."
              : "The space where we will hold the ceremony is caring, comfortable and safe so that you can live a meaningful moment that brings depth, clarity and value to your life."}
          </p>
        </motion.div>
      </section>

      {/* Quote */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/ceremonias/quote-bg.webp"
          alt="Fondo frase ceremonias"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#292E17]/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-8 py-24 text-center"
        >
          <Quote size={48} className="text-[#E8DCC4]/40 mx-auto mb-8" />
          <p className="text-2xl md:text-4xl font-serif italic text-[#E8DCC4] leading-relaxed">
            {locale === "es"
              ? "Los hongos nos recuerdan nuestro vínculo ancestral con la naturaleza. Nos enseñan que somos lo mismo, que estamos interconectados por nuestras raíces, y que compartimos el mismo lenguaje."
              : "Mushrooms remind us of our ancestral bond with nature. They teach us that we are the same, that we are interconnected by our roots, and that we share the same language."}
          </p>
        </motion.div>
      </section>

      {/* 3. ¿PARA QUIÉN ES? Y PROPÓSITO */}
      <section id="ceremonia-info" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/ceremonias/para-quien-ceremonias.webp" alt="Para quien es la ceremonia" fill className="object-cover" />
          </div>
          <div className="space-y-6 lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#292E17]">
              {locale === "es" ? "¿Para quién es esta experiencia?" : "Who is this experience for?"}
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              {locale === "es"
                ? "Esta experiencia está dirigida a personas que sienten la voluntad a profundizar en su autoconocimiento, sanar, despertar su sensibilidad y reconectar con su parte esencial."
                : "This experience is aimed at people who feel the willingness to deepen their self-knowledge, heal, awaken their sensitivity and reconnect with their essential self."}
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              {locale === "es"
                ? "También para quienes buscan abrirse a una nueva comprensión de la vida y de sus conductas repetitivas, expandir su conciencia y cultivar una relación más auténtica consigo mismos, con los demás y con la naturaleza."
                : "Also for those seeking to open themselves to a new understanding of life and their repetitive behaviors, expand their consciousness and cultivate a more authentic relationship with themselves, others and nature."}
            </p>
            <div className="bg-[#868859]/10 border-l-4 border-[#7E2625] p-6 rounded-r-2xl mt-6">
              <p className="text-lg font-medium text-[#7E2625]">
                {locale === "es"
                  ? "No se trata de una experiencia recreativa, sino de un espacio de introspección, conexión y transformación personal, guiado con respeto, cuidado y amor bajo el contexto de terapias asistidas."
                  : "This is not a recreational experience, but a space of introspection, connection and personal transformation, guided with respect, care and love within the context of assisted therapies."}
              </p>
            </div>
          </div>
        </div>

        {/* Propósito Blockquote */}
        <div className="max-w-4xl mx-auto bg-[#292E17] text-[#E8DCC4] p-10 md:p-16 rounded-3xl text-center shadow-xl">
          <Heart className="mx-auto mb-6 text-[#7E2625]" size={40} />
          <h3 className="text-2xl md:text-3xl font-serif italic leading-relaxed">
            {locale === "es"
              ? "\"Nuestro propósito es generar un entorno seguro y sostenido, donde cada participante pueda entregarse al proceso con confianza. Creemos que sentirse cuidado y acompañado es lo que permite que la transformación ocurra con profundidad y amor.\""
              : "\"Our purpose is to create a safe and held environment where each participant can surrender to the process with confidence. We believe that feeling cared for and accompanied is what allows transformation to occur with depth and love.\""}
          </h3>
        </div>
      </section>

      {/* 4. QUÉ INCLUYE Y EL LUGAR */}
      <section className="py-20 bg-[#F4EDE0] px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Qué Incluye */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-center mb-16 text-[#3B1B0E]">
              {locale === "es" ? "¿Qué incluye?" : "What's included?"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#868859]/20 text-center">
                <div className="w-16 h-16 bg-[#868859]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#292E17]"><Info size={32} /></div>
                <h3 className="text-2xl font-bold mb-4">
                  {locale === "es" ? "Inscripción" : "Registration"}
                </h3>
                <p className="text-[#3B1B0E]/70">
                  {locale === "es"
                    ? "Formulario inicial y evaluación previa."
                    : "Initial form and prior evaluation."}
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#7E2625]/20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#7E2625]" />
                <div className="w-16 h-16 bg-[#7E2625]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#7E2625]"><Clock size={32} /></div>
                <h3 className="text-2xl font-bold mb-4">
                  {locale === "es" ? "Ceremonia" : "Ceremony"}
                </h3>
                <p className="text-[#3B1B0E]/70 mb-2">
                  {locale === "es"
                    ? "Medicina, acompañamiento y sostén."
                    : "Medicine, accompaniment and support."}
                </p>
                <p className="text-sm font-medium text-[#7E2625]">
                  {locale === "es" ? "3:00 PM a 9:00 PM (6 HS)" : "3:00 PM to 9:00 PM (6 HRS)"}
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#868859]/20 text-center">
                <div className="w-16 h-16 bg-[#868859]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#292E17]"><Users size={32} /></div>
                <h3 className="text-2xl font-bold mb-4">
                  {locale === "es" ? "Integración" : "Integration"}
                </h3>
                <p className="text-[#3B1B0E]/70 mb-2">
                  {locale === "es"
                    ? "Encuentro presencial OPCIONAL al siguiente día."
                    : "OPTIONAL in-person meeting the following day."}
                </p>
                <p className="text-sm font-medium text-[#292E17]">
                  {locale === "es" ? "4:00 PM a 6:00 PM (2 HS)" : "4:00 PM to 6:00 PM (2 HRS)"}
                </p>
              </div>
            </div>
          </div>

          {/* El Lugar */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[#7E2625] font-bold tracking-widest uppercase text-sm">
                {locale === "es" ? "El Lugar" : "The Location"}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#292E17]">
                {locale === "es" ? "Santuario House of Shakti" : "House of Shakti Sanctuary"}
              </h2>
              <p className="text-lg opacity-90 leading-relaxed">
                {locale === "es"
                  ? "Un refugio tranquilo y lujoso ubicado en el corazón de la naturaleza, diseñado para inspirar conexión, transformación y regeneración."
                  : "A peaceful and luxurious retreat located in the heart of nature, designed to inspire connection, transformation and regeneration."}
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                {locale === "es"
                  ? "Escondido en la cima de una serena colina, este lugar íntimo ofrece total privacidad y vistas impresionantes de la jungla, a solo cinco minutos en auto de Playa Hermosa, Santa Teresa."
                  : "Tucked away on top of a serene hill, this intimate venue offers total privacy and breathtaking jungle views, just a five-minute drive from Playa Hermosa, Santa Teresa."}
              </p>
              <p className="text-lg opacity-90 leading-relaxed font-medium bg-[#868859]/10 p-4 rounded-xl">
                {locale === "es"
                  ? "La ceremonia se realiza en estudio privado con las comodidades necesarias para que puedas relajarte en un entorno natural y al mismo tiempo permitirte entrar en conexión."
                  : "The ceremony takes place in a private studio with all the necessary comforts so you can relax in a natural setting while allowing yourself to enter into connection."}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-xl">
                  <Image src="/images/ceremonias/hos-1.webp" alt="House of Shakti 1" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-xl">
                  <Image src="/images/ceremonias/hos-2.webp" alt="House of Shakti 2" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
              </div>
              <div className="aspect-[16/7] relative rounded-3xl overflow-hidden shadow-xl">
                <Image src="/images/ceremonias/hos-3.webp" alt="House of Shakti 3" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quote con foto — variación side by side */}
      <section className="relative w-full overflow-hidden bg-[#292E17]">
        <div className="grid lg:grid-cols-2 min-h-[500px]">

          {/* Imagen */}
          <div className="relative w-full min-h-[350px] lg:min-h-full">
            <Image
              src="/images/ceremonias/quote-2.webp"
              alt="Los hongos te tejen de nuevo a la realidad"
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
                ? "Los hongos te tejen de nuevo a la realidad."
                : "Mushrooms weave you back into reality."}
            </p>
            <p className="text-lg font-serif text-[#E8DCC4]/70 leading-relaxed">
              {locale === "es"
                ? "Como una red silenciosa, empieza a unir los hilos que alguna vez se cortaron: los del cuerpo, la mente, el sentir y el entorno."
                : "Like a silent network, it begins to reconnect the threads that were once severed: those of the body, the mind, feeling and the world around you."}
            </p>
            <div className="mt-10 w-12 h-0.5 bg-[#868859]/50" />
          </motion.div>

        </div>
      </section>

      {/* 6. FACILITADORES */}
      <section id="facilitadores" className="py-20 bg-[#F4EDE0] px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-12 text-[#292E17]">
            {locale === "es" ? "Facilitadores" : "Facilitators"}
          </h2>
          <div className="max-w-sm mx-auto mb-16">
            <FlipCard
              frontImage="/images/ceremonias/eli-ceremonias.webp"
              front={
                <>
                  <h3 className="text-2xl font-bold font-serif">Eliana Martinez</h3>
                  <p className="text-sm mt-1 opacity-80">@eli.mar.lov</p>
                </>
              }
              back={
                <p className="text-sm leading-relaxed">
                  {locale === "es"
                    ? "Coach Ontológica - PNL y Sistema Nervioso - Terapias Asistidas con Psicodélicos - Facilitadora de Respiración y Crioterapia - Instructora de Yoga y Meditación"
                    : "Ontological Coach - NLP and Nervous System - Psychedelic Assisted Therapies - Breathwork and Cryotherapy Facilitator - Yoga and Meditation Instructor"}
                </p>
              }
            />
          </div>

          {/* Aclaración Importante */}
          <div className="bg-[#E8DCC4] border border-[#7E2625]/30 p-8 md:p-10 rounded-3xl text-left max-w-4xl mx-auto shadow-md">
            <div className="flex items-center gap-4 mb-6 text-[#7E2625]">
              <AlertTriangle size={32} />
              <h3 className="text-2xl font-bold">
                {locale === "es" ? "Aclaración Importante" : "Important Disclaimer"}
              </h3>
            </div>
            <div className="space-y-4 text-lg text-[#3B1B0E]/90 leading-relaxed">
              <p>
                {locale === "es"
                  ? "Esta experiencia no es recreativa y no sustituye ni reemplaza la importancia de un proceso terapéutico individual y completo."
                  : "This experience is not recreational and does not substitute or replace the importance of a complete individual therapeutic process."}
              </p>
              <p>
                {locale === "es"
                  ? "Es un enfoque terapéutico asistido con psicodélicos para un profundo crecimiento interior y la responsabilidad sobre tu proceso personal es tuya."
                  : "It is a psychedelic-assisted therapeutic approach for deep inner growth and responsibility for your personal process is yours."}
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 font-medium">
                <li>
                  {locale === "es"
                    ? "No hace falta tener experiencia previa."
                    : "No prior experience is necessary."}
                </li>
                <li>
                  {locale === "es"
                    ? "Los cupos son muy limitados para asegurar el cuidado y la intimidad de la energía del grupo."
                    : "Spots are very limited to ensure the care and intimacy of the group energy."}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRECIOS */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#3B1B0E]">
            {locale === "es" ? "Precios" : "Pricing"}
          </h2>
          <p className="mt-4 text-lg opacity-80">
            {locale === "es"
              ? "Los precios varían dependiendo la cantidad de personas."
              : "Prices vary depending on the number of people."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Grupal */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#868859]/20 text-center flex flex-col justify-between">
            <div>
              <Users className="mx-auto mb-4 text-[#868859]" size={32} />
              <h3 className="text-xl font-bold text-[#292E17] mb-2">
                {locale === "es" ? "Ceremonia Grupal" : "Group Ceremony"}
              </h3>
              <p className="text-sm text-[#3B1B0E]/60 mb-6">
                {locale === "es" ? "5 a 8 Personas" : "5 to 8 People"}
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold font-serif text-[#7E2625] mb-6">$200 <span className="text-sm text-[#3B1B0E]/50 font-sans">USD</span></p>
              <a
                href="https://wa.me/5491153258855"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#292E17] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all text-center"
              >
                {locale === "es" ? "Consultar" : "Inquire"}
              </a>
            </div>
          </div>

          {/* Íntima */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#868859] text-center relative flex flex-col justify-between transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#868859] text-[#E8DCC4] px-4 py-1 rounded-b-xl text-xs font-bold tracking-wider">
              {locale === "es" ? "MÁS ELEGIDA" : "MOST POPULAR"}
            </div>
            <div className="mt-4">
              <User className="mx-auto mb-4 text-[#868859]" size={32} />
              <h3 className="text-xl font-bold text-[#292E17] mb-2">
                {locale === "es" ? "Ceremonia Íntima" : "Intimate Ceremony"}
              </h3>
              <p className="text-sm text-[#3B1B0E]/60 mb-6">
                {locale === "es" ? "2 a 4 Personas" : "2 to 4 People"}
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold font-serif text-[#7E2625] mb-6">$250 <span className="text-sm text-[#3B1B0E]/50 font-sans">USD</span></p>
              <a
                href="https://wa.me/5491153258855"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#868859] text-[#E8DCC4] rounded-full font-bold hover:bg-[#292E17] transition-all text-center"
              >
                {locale === "es" ? "Consultar" : "Inquire"}
              </a>
            </div>
          </div>

          {/* Individual */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#868859]/20 text-center flex flex-col justify-between">
            <div>
              <User className="mx-auto mb-4 text-[#868859]" size={32} />
              <h3 className="text-xl font-bold text-[#292E17] mb-2">
                {locale === "es" ? "Ceremonia Individual" : "Individual Ceremony"}
              </h3>
              <p className="text-sm text-[#3B1B0E]/60 mb-6">
                {locale === "es" ? "1 Persona" : "1 Person"}
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold font-serif text-[#7E2625] mb-6">$500 <span className="text-sm text-[#3B1B0E]/50 font-sans">USD</span></p>
              <a
                href="https://wa.me/5491153258855"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#292E17] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all text-center"
              >
                {locale === "es" ? "Consultar" : "Inquire"}
              </a>
            </div>
          </div>

        </div>

        <p className="text-center font-medium text-[#7E2625] flex items-center justify-center gap-2">
          <CheckCircle2 size={18} />
          {locale === "es" ? "Contamos con facilidades de pago." : "Payment facilities available."}
        </p>
      </section>

      {/* 5. PREPARACIÓN PREVIA */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#3B1B0E]">
            {locale === "es" ? "Preparación Previa" : "Prior Preparation"}
          </h2>
          <p className="text-[#7E2625] font-medium tracking-wide">
            {locale === "es" ? "( De 1 semana a 3 días antes )" : "( From 1 week to 3 days before )"}
          </p>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            {locale === "es"
              ? "La preparación es una parte esencial del proceso. Nos permite llegar a la experiencia con claridad, apertura y mayor presencia."
              : "Preparation is an essential part of the process. It allows us to arrive at the experience with clarity, openness and greater presence."}
          </p>
        </div>

        <div className="relative border-l-2 border-[#868859]/30 ml-4 md:ml-12 space-y-12 pb-8">
          {(locale === "es"
            ? [
                { title: "Crear Espacio", text: "Si te surgen dudas/miedos/consultas dales lugar. Siéntete libre de compartirlo. Crear espacio a lo que surge es una forma de entrar en la experiencia." },
                { title: "Registro", text: "Permite observar con curiosidad sensaciones, pensamientos y situaciones de la cotidianidad." },
                { title: "Intención", text: "Tomate un tiempo para reflexionar sobre lo que deseas explorar. Podés escribirlo o simplemente sentirlo en tu corazón." },
                { title: "Alimentación", text: "Opta por comidas ligeras y nutritivas. Evitá carnes rojas, alcohol, alimentos procesados y exceso de cafeína. Mantén hidratación." },
                { title: "Cuerpo", text: "Incorpora prácticas suaves como yoga, caminatas conscientes o estiramientos. Descansa." },
                { title: "Mente", text: "Reducí el consumo de redes sociales o noticias. Permite momentos de silencio, escritura o meditación." },
                { title: "Medicamentos", text: "Si estás bajo tratamiento médico o psicológico, es importante conversar previamente con el equipo facilitador." },
              ]
            : [
                { title: "Creating Space", text: "If doubts, fears or questions arise, give them room. Feel free to share them. Creating space for what arises is a way of entering the experience." },
                { title: "Journaling", text: "Allow yourself to observe with curiosity the sensations, thoughts and situations of daily life." },
                { title: "Intention", text: "Take some time to reflect on what you wish to explore. You can write it down or simply feel it in your heart." },
                { title: "Nutrition", text: "Opt for light and nutritious meals. Avoid red meat, alcohol, processed foods and excess caffeine. Stay hydrated." },
                { title: "Body", text: "Incorporate gentle practices such as yoga, conscious walks or stretching. Rest." },
                { title: "Mind", text: "Reduce consumption of social media or news. Allow moments of silence, writing or meditation." },
                { title: "Medication", text: "If you are under medical or psychological treatment, it is important to discuss this with the facilitating team beforehand." },
              ]
          ).map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#E8DCC4] border-4 border-[#868859]" />
              <h3 className="text-2xl font-bold text-[#292E17] mb-2">{item.title}</h3>
              <p className="text-[#3B1B0E]/80 text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#292E17] text-[#E8DCC4] p-8 rounded-2xl text-center shadow-lg max-w-3xl mx-auto">
          <p className="text-xl italic font-serif">
            {locale === "es"
              ? "\"La preparación previa no busca perfección, sino presencia. Llegar a la ceremonia con una mente más tranquila y un cuerpo más liviano facilita que la medicina actúe de forma más clara y amorosa.\""
              : "\"Prior preparation does not seek perfection, but presence. Arriving at the ceremony with a calmer mind and a lighter body allows the medicine to act in a clearer and more loving way.\""}
          </p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-[#E8DCC4] text-[#3B1B0E] px-4 border-t border-[#868859]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-[#292E17]">
            {locale === "es" ? "Testimonios" : "Testimonials"}
          </h2>
          <p className="text-base opacity-80 mb-16 text-[#7E2625]">
            {locale === "es"
              ? "Experiencias de Ceremonia de Medicina Sagrada"
              : "Sacred Medicine Ceremony Experiences"}
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
                <TestimonialText text={testimoniosData[currentTestimonial].text} locale={locale} />

                <div className="flex flex-col items-center gap-4 mt-8">
                  {testimoniosData[currentTestimonial].hasImage ? (
                    <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-[#868859]">
                      <Image
                        src={testimoniosData[currentTestimonial].image}
                        alt={testimoniosData[currentTestimonial].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-[#292E17] border-2 border-[#868859] flex items-center justify-center">
                      <span className="text-xl font-bold font-serif text-[#E8DCC4]">
                        {testimoniosData[currentTestimonial].initial}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-base text-[#292E17]">
                      {testimoniosData[currentTestimonial].name}
                    </h4>
                    <p className="text-sm text-[#7E2625]">
                      {testimoniosData[currentTestimonial].location}
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
              {testimoniosData.map((_, index) => (
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

      {/* CTA FINAL */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#292E17]">
        <div className="absolute inset-0">
          <Image
            src="/images/ceremonias/ceremonias-pre-footer.webp"
            alt="Ceremonias Trama Viva"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859]">
              {locale === "es" ? "Ceremonias · Trama Viva" : "Ceremonies · Trama Viva"}
            </p>
            <h2 className="text-4xl md:text-6xl font-bold font-serif text-[#E8DCC4] leading-tight">
              {locale === "es"
                ? "Cada experiencia es única y tiene el potencial de devolvernos a lo único que es sostenible, real y eterno: EL AMOR."
                : "Each experience is unique and has the potential to return us to the only thing that is sustainable, real and eternal: LOVE."}
            </h2>
            <p className="text-lg text-[#E8DCC4]/70 max-w-xl mx-auto leading-relaxed">
              {locale === "es"
                ? "Si lo sentís, es un placer para nosotros acompañarte en este viaje de regreso a tu naturaleza."
                : "If you feel it, it is our pleasure to accompany you on this journey back to your nature."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5491153258855"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#7E2625] text-[#E8DCC4] font-bold text-lg rounded-full hover:bg-[#7E2625]/90 transition-all hover:-translate-y-1 shadow-xl"
              >
                {locale === "es" ? "Quiero sumarme" : "I want to join"}
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}