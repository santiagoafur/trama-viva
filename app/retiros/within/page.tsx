"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  Info,
  CreditCard,
  ShieldCheck,
  HeartHandshake,
  ExternalLink,
  Instagram,
  Utensils,
  Quote,
  ChevronLeft,
  ChevronRight,
  Target,
  Users,
  ArrowRight
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/language-context";

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
        style={{ transformStyle: "preserve-3d", WebkitTransformStyle: "preserve-3d" }}
      >
        {/* Frente */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden bg-[#E8DCC4] border border-[#3B1B0E]/10 flex flex-col justify-center p-6 text-center" 
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg) translateZ(1px)"
          }}
        >
          {frontImage && (
            <Image src={frontImage} alt="Cover" fill className="object-cover opacity-60 mix-blend-multiply" />
          )}
          <div className="absolute" />
          <div className="relative z-10 flex flex-col items-center justify-end h-full text-[#E8DCC4]">
            {front}
          </div>
        </div>
        
        {/* Dorso */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden bg-[#868859] text-[#E8DCC4] p-6 flex items-center justify-center text-center shadow-lg"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden", 
            transform: "rotateY(180deg) translateZ(1px)"
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center" style={{ transform: "translateZ(0)" }}>
            {back}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function RetiroLanding() {
  const { locale } = useLanguage();
  
  const retreatName = "WITHIN";
  const retreatLocation = "Santa Teresa, Costa Rica";
  const retreatDate = locale === "es" ? "Del 25 al 28 de Junio de 2026" : "June 25th to 28th, 2026";

  // Estado para el Carrusel de Testimonios
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimoniosRetiro = [
    {
      name: "José Gonzalez",
      location: "Costa Rica",
      image: "/images/testimonios/jose.jpg", 
      text: locale === "es" 
        ? "Tuve un viaje realmente poderoso y transformador con esta medicina sagrada de plantas. La intención que establecí fue 'renacimiento' y recibí más de lo que nunca podría haber imaginado. Integrar esta experiencia fue muy enriquecedor para mi vida. ¡Muchas gracias Eli y Jona por crear este hermoso espacio, sostenerlo y guiarnos en este mágico viaje! Me siento profundamente agradecido por haber podido vivir esta experiencia!"
        : "I had a truly powerful and transformative journey with this sacred plant medicine. The intention I set was 'rebirth' and I received more than I could have ever imagined. Integrating this experience was very enriching for my life. Thank you so much Eli and Jona for creating this beautiful space, holding it, and guiding us on this magical journey! I feel deeply grateful to have been able to live this experience!"
    },
    {
      name: "Facundo Saad",
      location: "Argentina",
      image: "/images/testimonios/facundo.jpg", 
      text: locale === "es"
        ? "La verdad que fue una experiencia muy enriquecedora. Fue mi segunda vez utilizando la medicina con fines terapéuticos y realmente pude notar como cambia cuando se hace en grupo y en forma de retiro. Es un portal hacia adentro para seguir profundizando sobre el autoconocimiento y sin dudas que la integración posterior es igual de importante. Por eso me gusto tanto, porque no es solo el día de la ceremonia sino el pre y el post que lo hace tan especial. Lo volvería a hacer de nuevo sin dudarlo con plena confianza."
        : "The truth is it was a very enriching experience. It was my second time using the medicine for therapeutic purposes and I could really notice how it changes when done in a group and in a retreat format. It is an inward portal to continue deepening self-knowledge and without a doubt, the subsequent integration is just as important. That's why I liked it so much, because it's not just the day of the ceremony but the pre and post that makes it so special. I would do it again without hesitation and with full confidence."
    },
    {
      name: "Lucrecia Piovessano",
      location: "Argentina",
      image: "/images/testimonios/lucrecia.jpg", 
      text: locale === "es"
        ? "Fue mi primer retiro y me marcó sin dudas. El ambiente físico hermoso y el humano mucho más. La asistencia puntualmente durante la ceremonia fue constante y amorosa, las explicaciones previas muy claras y las charlas en todo momento muy enriquecedoras. Un placer coincidir y regalarme esta experiencia."
        : "It was my first retreat and it undoubtedly left a mark on me. The physical environment was beautiful and the human one even more so. The assistance specifically during the ceremony was constant and loving, the prior explanations very clear, and the conversations at all times very enriching. A pleasure to cross paths and gift myself this experience."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimoniosRetiro.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimoniosRetiro.length) % testimoniosRetiro.length);
  };

  return (
    <main className="bg-[#E8DCC4] text-[#3B1B0E] min-h-screen font-sans">
      <Navbar />

      {/* 1. HERO INMERSIVO */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/retiro-costarica.jpg" 
          alt="Hero Retiro Within"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#3B1B0E]/40" /> 
        
        <div className="relative z-10 text-center text-[#E8DCC4] px-4 flex flex-col items-center">
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 drop-shadow-lg">
            {retreatName}
          </h1>
          <span className="text-[#E8DCC4]/90 font-bold tracking-widest uppercase text-sm mb-4 border border-[#E8DCC4]/50 px-4 py-1 rounded-full backdrop-blur-sm">
            {locale === "es" ? "Conexión Somática-Miceliar" : "Somatic-Mycelial Connection"}
          </span>
          
          <div className="flex flex-wrap justify-center gap-8 font-medium bg-[#3B1B0E]/60 backdrop-blur-md px-8 py-4 rounded-full">
            <span className="flex items-center gap-2"><MapPin size={20} /> {retreatLocation}</span>
            <span className="flex items-center gap-2"><Calendar size={20} /> {retreatDate}</span>
          </div>
        </div>
      </section>

      {/* 1b. INTRODUCCIÓN Y CARRUSEL DE FOTOS */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-serif leading-relaxed text-[#292E17]">
            <strong className="font-sans font-bold text-[#3B1B0E]">WITHIN</strong> 
            {locale === "es" 
              ? " es ir al encuentro de nuestra naturaleza humana acompañados de la medicina de los hongos y de prácticas que nos ayuden a reconectarnos."
              : " is meeting our human nature accompanied by mushroom medicine and practices that help us reconnect."}
          </p>
          <p className="leading-relaxed text-lg opacity-90">
            {locale === "es"
              ? "El enfoque que brindamos es terapéutico y medicinal lo cual implica que vas a contar con un contexto y un acompañamiento adecuado para que vivas una experiencia significativa que aporte valor y calidad a tu vida."
              : "The approach we provide is therapeutic and medicinal, which implies that you will have an appropriate context and support to live a meaningful experience that adds value and quality to your life."}
          </p>
        </motion.div>

        {/* Carrusel de fotos tipo carrete */}
        <div className="w-full overflow-hidden">
          <div className="flex overflow-x-auto gap-5 snap-x snap-mandatory pb-6 hide-scrollbar -mb-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="min-w-[80%] sm:min-w-[50%] lg:min-w-[33%] aspect-[4/3] relative snap-center rounded-2xl overflow-hidden shadow-lg border border-[#868859]/20 flex-shrink-0">
                <Image src={`/images/within-gallery-${num}.jpg`} alt={`Within Experiencia ${num}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1c. ¿PARA QUIÉN ES? */}
      <section className="py-20 bg-[#F4EDE0] px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 text-[#7E2625]">
              <Target size={36} />
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#3B1B0E]">
                {locale === "es" ? "¿Para quién es este retiro?" : "Who is this retreat for?"}
              </h2>
            </div>
            
            <div className="space-y-5 text-lg leading-relaxed opacity-90 font-serif italic">
              <p>
                {locale === "es"
                  ? "Para quienes quieran un espacio de regulación emocional y entrar en contacto intimo consigo mismo en un entorno despejado de interferencias."
                  : "For those who want a space for emotional regulation and to come into intimate contact with themselves in an environment clear of interference."}
              </p>
              <p>
                {locale === "es"
                  ? "Generar mayor presencia y conexión, aumentar la creatividad, desarrollar un estado de ánimo que posibilite dejar hábitos nocivos para la salud, regular la ansiedad y el estrés y para quienes estén dispuestos a encontrar un sentido mas profundo a sus vidas."
                  : "To generate greater presence and connection, increase creativity, develop a mood that makes it possible to leave unhealthy habits, regulate anxiety and stress, and for those willing to find a deeper meaning in their lives."}
              </p>
            </div>

            <div className="flex gap-6 pt-4 border-t border-[#3B1B0E]/10">
                <div className="flex items-center gap-3 bg-[#E8DCC4] p-4 rounded-xl flex-1 border border-[#868859]/30 shadow-inner">
                    <Users className="text-[#868859]" size={28}/>
                    <div>
                        <span className="block text-xs uppercase tracking-wider opacity-60">
                          {locale === "es" ? "Cupo Mínimo" : "Min Quota"}
                        </span>
                        <span className="text-xl font-bold">6 PAX</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-[#E8DCC4] p-4 rounded-xl flex-1 border border-[#868859]/30 shadow-inner">
                    <Users className="text-[#868859]" size={28}/>
                    <div>
                        <span className="block text-xs uppercase tracking-wider opacity-60">
                          {locale === "es" ? "Cupo Máximo" : "Max Quota"}
                        </span>
                        <span className="text-xl font-bold">10 PAX</span>
                    </div>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image src="/images/within-para-quien.jpg" alt="Público Retiro Within" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* 2. EL LUGAR */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-serif text-[#292E17]">
              {locale === "es" ? "EL LUGAR" : "THE LOCATION"}
            </h2>
            <p className="leading-relaxed text-lg opacity-90">
              {locale === "es"
                ? "Bienvenido al santuario de House of Shakti, un refugio tranquilo y lujoso ubicado en el corazón de la naturaleza, diseñado para inspirar conexión, transformación y rejuvenecimiento."
                : "Welcome to the House of Shakti sanctuary, a peaceful and luxurious retreat nestled in the heart of nature, designed to inspire connection, transformation, and rejuvenation."}
            </p>
            <p className="leading-relaxed text-lg opacity-90">
              {locale === "es"
                ? "Escondido en la cima de una serena colina, este lugar íntimo ofrece total privacidad y vistas impresionantes de la jungla, todo a solo cinco minutos en auto de Playa Hermosa, Santa Teresa, conocida como uno de los mejores lugares para surfear y la playa más hermosa."
                : "Tucked away on top of a serene hill, this intimate venue offers total privacy and breathtaking jungle views, all just a five-minute drive from Playa Hermosa, Santa Teresa, known as one of the best surfing spots and most beautiful beaches."}
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="https://www.houseofshaktiyoga.com/" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-[#3B1B0E] text-[#E8DCC4] rounded-full hover:bg-[#7E2625] transition-colors">
                <ExternalLink size={18} /> {locale === "es" ? "Ver Web" : "Website"}
              </Link>
              <Link href="https://www.instagram.com/house.of.shakti" target="_blank" className="flex items-center gap-2 px-6 py-3 border border-[#3B1B0E] text-[#3B1B0E] rounded-full hover:bg-[#3B1B0E]/5 transition-colors">
                <Instagram size={18} /> Instagram
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 hide-scrollbar">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="min-w-[85%] sm:min-w-[60%] aspect-[4/3] relative snap-center rounded-2xl overflow-hidden shadow-lg border border-[#868859]/30 flex-shrink-0">
                  <Image src={`/images/house-${num}.jpg`} alt={`House of Shakti ${num}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="mt-4 w-full h-48 rounded-2xl overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15731.879793165337!2d-85.1611036!3d9.6830744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9f6b986b6a2b0b%3A0x6a6a147e4f165e31!2sHouse%20of%20Shakti!5e0!3m2!1sen!2scr!4v1716382181717!5m2!1sen!2scr" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      

      {/* 4. LAS COMIDAS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-5/12 space-y-6">
            <div className="flex items-center gap-3 text-[#7E2625]">
              <Utensils size={32} />
              <h2 className="text-3xl font-bold font-serif text-[#3B1B0E]">
                {locale === "es" ? "Comidas" : "Meals"}
              </h2>
            </div>
            <p className="text-lg opacity-90 leading-relaxed">
              {locale === "es" 
                ? "Alimentación vegetariana incluida. Son preparaciones coloridas y equilibradas nutricionalmente, pensadas para acompañar tu proceso."
                : "Vegetarian food included. They are colorful and nutritionally balanced preparations, designed to accompany your process."}
            </p>
            <div className="bg-[#868859]/10 p-6 rounded-2xl border border-[#868859]/30">
              <ul className="space-y-4 font-medium">
                <li className="flex justify-between border-b border-[#3B1B0E]/10 pb-2"><span>{locale === "es" ? "Día 1" : "Day 1"}</span> <span>{locale === "es" ? "Almuerzo, Merienda, Cena" : "Lunch, Snack, Dinner"}</span></li>
                <li className="flex justify-between border-b border-[#3B1B0E]/10 pb-2"><span>{locale === "es" ? "Día 2" : "Day 2"}</span> <span className="text-right">{locale === "es" ? "Desayuno, Cena" : "Breakfast, Dinner"} <br/><span className="text-sm text-[#7E2625] font-normal">{locale === "es" ? "(Sin almuerzo para cuidar ayuno)" : "(No lunch to respect fasting)"}</span></span></li>
                <li className="flex justify-between border-b border-[#3B1B0E]/10 pb-2"><span>{locale === "es" ? "Día 3" : "Day 3"}</span> <span>{locale === "es" ? "Desayuno, Almuerzo, Merienda, Cena" : "Breakfast, Lunch, Snack, Dinner"}</span></li>
                <li className="flex justify-between"><span>{locale === "es" ? "Día 4" : "Day 4"}</span> <span>{locale === "es" ? "Desayuno, Almuerzo" : "Breakfast, Lunch"}</span></li>
              </ul>
            </div>
            <div className="flex items-start gap-3 bg-[#E8DCC4] border border-[#7E2625]/30 p-4 rounded-xl text-sm">
              <Info className="text-[#7E2625] shrink-0" size={20} />
              <p><strong>{locale === "es" ? "Nota importante:" : "Important note:"}</strong> {locale === "es" ? "Dar aviso en caso de alergias o restricciones alimenticias. El menú se adecua a necesidades relevantes." : "Please notify us in case of allergies or dietary restrictions. The menu is adapted to relevant needs."}</p>
            </div>
          </div>
          <div className="w-full lg:w-7/12 grid grid-cols-2 gap-6">
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/comida-1.jpg" alt="Comida 1" fill className="object-cover" />
            </div>
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-xl mt-12 lg:mt-24">
              <Image src="/images/comida-2.jpg" alt="Comida 2" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FACILITADORES */}
      <section className="py-20 bg-[#F4EDE0] px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-center text-[#292E17]">
            {locale === "es" ? "Facilitadores" : "Facilitators"}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <FlipCard 
              frontImage="/images/team-eli.jpg"
              front={<div className="text-center space-y-1">
                <h3 className="text-xl font-bold font-serif">Eliana Martinez</h3>
                <span className="text-xs opacity-80 border border-white/40 px-2 py-0.5 rounded-full">@eli.mar.lov</span>
              </div>}
              back={<p className="text-sm leading-relaxed">{locale === "es" ? "Coach Ontológica - Terapias Asistidas con Psicodélicos - Facilitadora de Respiración y Crioterapia - Instructora de Yoga y Meditación" : "Ontological Coach - Psychedelic Assisted Therapies - Breathwork and Cryotherapy Facilitator - Yoga and Meditation Instructor"}</p>}
            />
            <FlipCard 
              frontImage="/images/team-jona.jpg"
              front={<div className="text-center space-y-1">
                <h3 className="text-xl font-bold font-serif">Jonathan Merla</h3>
                <span className="text-xs opacity-80 border border-white/40 px-2 py-0.5 rounded-full">@jonamerla</span>
              </div>}
              back={<p className="text-sm leading-relaxed">{locale === "es" ? "Facilitador de espacios de sanación y crecimiento personal - Facilitador de respiración e Instructor de Yoga" : "Facilitator of healing and personal growth spaces - Breathwork facilitator and Yoga Instructor"}</p>}
            />
            <FlipCard 
              frontImage="/images/team-nancy.jpg"
              front={<div className="text-center space-y-1">
                <h3 className="text-xl font-bold font-serif">Nancy Goodfellow</h3>
                <span className="text-xs opacity-80 border border-white/40 px-2 py-0.5 rounded-full">@wildheart.yogini</span>
              </div>}
              back={<p className="text-sm leading-relaxed">{locale === "es" ? "Instructor de Tantra Vinyasa Yoga y Facilitadora de Respiración" : "Tantra Vinyasa Yoga Instructor and Breathwork Facilitator"}</p>}
            />
            <FlipCard 
              frontImage="/images/team-pedro.jpg"
              front={<div className="text-center space-y-1">
                <h3 className="text-xl font-bold font-serif">Pedro Miguel</h3>
                <span className="text-xs opacity-80 border border-white/40 px-2 py-0.5 rounded-full">@shivadrops</span>
              </div>}
              back={<p className="text-sm leading-relaxed">{locale === "es" ? "Chef Holístico" : "Holistic Chef"}</p>}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-6 text-lg leading-relaxed opacity-90 border-t border-[#3B1B0E]/10 pt-12"
          >
            <p className="font-semibold text-[#292E17]">
              {locale === "es" 
                ? "Sostenemos este espacio con presencia, experiencia y profundo respeto por cada proceso individual."
                : "We hold this space with presence, experience, and deep respect for each individual process."}
            </p>
            <p>
              {locale === "es"
                ? "Acompañamos desde la escucha, el cuidado y la responsabilidad, creando un entorno seguro donde cada persona puede explorar su interior a su propio ritmo, en conexión con la naturaleza, el silencio y la sabiduría colectiva."
                : "We accompany through listening, care, and responsibility, creating a safe environment where each person can explore their inner self at their own pace, in connection with nature, silence, and collective wisdom."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. VALORES Y CONDICIONES */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#3B1B0E]">
            {locale === "es" ? "Precio" : "Price"}
          </h2>
          <p className="mt-5 text-xl text-[#7E2625] font-medium">
            {locale === "es" 
              ? "Asegurá tu lugar aprovechando los beneficios de inscripción temprana."
              : "Secure your spot by taking advantage of early registration benefits."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#3B1B0E]/10 text-center relative overflow-hidden flex flex-col justify-between group hover:border-[#868859]/40 transition-all hover:shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#3B1B0E]/20 group-hover:bg-[#868859] transition-colors" />
            <div className="space-y-3">
              <h3 className="text-xl uppercase tracking-widest font-bold text-[#292E17] opacity-70">
                {locale === "es" ? "Precio Regular" : "Regular Price"}
              </h3>
              <p className="text-6xl font-bold font-serif text-[#3B1B0E]">$1109 <span className="text-xl text-[#3B1B0E]/50 font-sans">USD</span></p>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSen9p_yBBDlvtSLLz3xoaA-vOZGgeE01Eq8_xsWqSUU4LQfLQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-10 py-4 bg-[#3B1B0E] text-[#E8DCC4] rounded-full font-bold hover:bg-[#292E17] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {locale === "es" ? "Iniciar Inscripción" : "Start Registration"}
            </a>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-[#7E2625] text-center relative overflow-hidden flex flex-col justify-between transform scale-105 shadow-[#7E2625]/10">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#7E2625]" />
            <div className="absolute -right-12 top-7 bg-[#7E2625] text-[#E8DCC4] text-xs uppercase tracking-widest font-bold py-1.5 px-12 rotate-45">
              {locale === "es" ? "Destacado" : "Featured"}
            </div>
            <div className="space-y-3">
              <h3 className="text-xl uppercase tracking-widest font-bold text-[#7E2625]">
                {locale === "es" ? "Early Bird Abril" : "April Early Bird"}
              </h3>
              <p className="text-6xl font-bold font-serif text-[#7E2625]">$985 <span className="text-xl text-[#7E2625]/60 font-sans">USD</span></p>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSen9p_yBBDlvtSLLz3xoaA-vOZGgeE01Eq8_xsWqSUU4LQfLQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-10 py-4 bg-[#7E2625] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {locale === "es" ? "Aprovechar Descuento" : "Claim Discount"}
            </a>
          </div>
        </div>

        <div className="bg-[#868859]/10 rounded-3xl p-8 md:p-10 border border-[#868859]/30 space-y-10">
          <div className="space-y-6">
            <h4 className="text-xl font-bold flex items-center gap-2 text-[#292E17]"><CreditCard size={24}/> {locale === "es" ? "Medios de pago:" : "Payment Methods:"}</h4>
            <ul className="list-disc list-inside space-y-2 text-lg pl-2 opacity-90">
                <li>{locale === "es" ? "Transferencia Bancaria (con comisión a tu cargo)" : "Bank Transfer (commission at your expense)"}</li>
                <li>{locale === "es" ? "Contamos con facilidades de pago y cuotas sin interés." : "We offer payment facilities and interest-free installments."}</li>
            </ul>
          </div>

          <div className="pt-8 border-t border-[#3B1B0E]/10 space-y-6">
            <h4 className="text-xl font-bold flex items-center gap-2 text-[#292E17]"><ShieldCheck size={24}/> {locale === "es" ? "Condiciones de Pago" : "Payment Conditions"}</h4>
            <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4 bg-white/50 p-5 rounded-xl border border-white">
                <HeartHandshake className="text-[#7E2625] shrink-0" size={28} />
                <p className="text-sm leading-relaxed"><strong>{locale === "es" ? "Reserva:" : "Reservation:"}</strong> {locale === "es" ? "Se efectiviza al completar formulario, entrevista y enviar comprobante del pago completo o 1ra cuota." : "It becomes effective upon completing the form, interview, and sending proof of full payment or 1st installment."} <strong className="text-[#7E2625]">{locale === "es" ? "La totalidad del pago debe estar abonada antes de comenzar el retiro." : "The full payment must be made before the retreat begins."}</strong></p>
                </div>
                <div className="flex gap-4 bg-white/50 p-5 rounded-xl border border-white">
                <Info className="text-[#7E2625] shrink-0" size={28} />
                <p className="text-sm leading-relaxed"><strong>{locale === "es" ? "Reembolsos:" : "Refunds:"}</strong> {locale === "es" ? "Una vez realizado el pago, no se realizan reembolsos. Agradecemos tu comprensión y compromiso." : "Once payment is made, there are no refunds. We appreciate your understanding and commitment."}</p>
                </div>
            </div>
          </div>
        </div>

        {/* 6b. ¿VENIS ACOMPAÑADO? */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#292E17] text-[#E8DCC4] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-[#868859]"
        >
            <div className="space-y-2 text-center md:text-left">
                <h4 className="text-2xl font-bold font-serif">
                  {locale === "es" ? "¿Venís acompañado o ya participaste anteriormente?" : "Are you coming with someone or have you participated before?"}
                </h4>
                <p className="text-[#E8DCC4]/80 text-lg">
                  {locale === "es" 
                    ? "Consultá por un valor especial si venís con alguien o si ya participaste de alguno de nuestros espacios."
                    : "Ask for a special rate if you are coming with someone or have previously participated in any of our spaces."}
                </p>
            </div>
            <Link 
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8DCC4] text-[#292E17] rounded-full font-bold hover:bg-white transition-all whitespace-nowrap group"
            >
              {locale === "es" ? "Consultar valor especial" : "Inquire about special rate"}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
        </motion.div>
      </section>

      {/* 3. HOJA DE RUTA */}
      <section className="py-24 bg-[#292E17] text-[#E8DCC4] px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-center mb-16">
            {locale === "es" ? "Como inscribirte" : "How to subscribe"}
          </h2>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-[24px] left-[12%] right-[12%] h-0.5 bg-[#868859]/30 z-0" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
              {/* Paso 1 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8DCC4] border-4 border-[#868859] text-[#292E17] flex items-center justify-center font-bold font-serif text-xl mb-6 shadow-lg relative z-10">01</div>
                <div className="w-full">
                  <FlipCard 
                    frontImage="/images/VERDE CLARO.png"
                    front={<><h3 className="text-xl font-bold font-serif">{locale === "es" ? "Inscripción" : "Registration"}</h3></>}
                    back={<p className="text-sm leading-relaxed">{locale === "es" ? "Para inscribirte te enviamos un formulario con preguntas específicas para conocerte mejor." : "To register, we send you a form with specific questions to get to know you better."}</p>}
                  />
                </div>
              </div>

              {/* Paso 2 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8DCC4] border-4 border-[#868859] text-[#292E17] flex items-center justify-center font-bold font-serif text-xl mb-6 shadow-lg relative z-10">02</div>
                <div className="w-full">
                  <FlipCard 
                    frontImage="/images/VERDE CLARO.png"
                    front={<><h3 className="text-xl font-bold font-serif">{locale === "es" ? "Entrevista" : "Interview"}</h3></>}
                    back={<p className="text-sm leading-relaxed">{locale === "es" ? "Coordinamos un encuentro online de 30 minutos para despejar cualquier duda o consulta." : "We coordinate a 30-minute online meeting to clear up any doubts or questions."}</p>}
                  />
                </div>
              </div>

              {/* Paso 3 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8DCC4] border-4 border-[#868859] text-[#292E17] flex items-center justify-center font-bold font-serif text-xl mb-6 shadow-lg relative z-10">03</div>
                <div className="w-full">
                  <FlipCard 
                    frontImage="/images/VERDE CLARO.png"
                    front={<><h3 className="text-xl font-bold font-serif">{locale === "es" ? "Preparación" : "Preparation"}</h3></>}
                    back={<p className="text-sm leading-relaxed">{locale === "es" ? "Una semana antes tendremos un encuentro online grupal para conocernos, brindar herramientas, sugerencias para preparar el cuerpo y despejar dudas." : "A week before we will have an online group meeting to get to know each other, provide tools, suggestions to prepare the body and answer questions."}</p>}
                  />
                </div>
              </div>

              {/* Paso 4 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8DCC4] border-4 border-[#868859] text-[#292E17] flex items-center justify-center font-bold font-serif text-xl mb-6 shadow-lg relative z-10">04</div>
                <div className="w-full">
                  <FlipCard 
                    frontImage="/images/VERDE CLARO.png"
                    front={<><h3 className="text-xl font-bold font-serif">{locale === "es" ? "Integración" : "Integration"}</h3></>}
                    back={<p className="text-sm leading-relaxed">{locale === "es" ? "Dos semanas después del retiro nos reencontramos online para optimizar la integración y capitalizar los aprendizajes obtenidos." : "Two weeks after the retreat we meet online again to optimize integration and capitalize on the learning obtained."}</p>}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIOS (CARRUSEL) */}
      <section className="py-24 bg-[#E8DCC4] text-[#3B1B0E] px-4 border-t border-[#868859]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-[#292E17]">
            {locale === "es" ? "Testimonios" : "Testimonials"}
          </h2>
          <p className="text-lg opacity-80 mb-16 text-[#7E2625]">
            {locale === "es" ? "Experiencias de retiro y transformación" : "Retreat and transformation experiences"}
          </p>

          <div className="relative min-h-[400px] md:min-h-[300px] flex flex-col items-center justify-center">
            <Quote className="text-[#868859]/40 mb-8" size={64} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <p className="text-xl md:text-3xl italic font-serif leading-relaxed mb-10 text-[#3B1B0E]/90">
                  "{testimoniosRetiro[currentTestimonial].text}"
                </p>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-[#868859]">
                    <Image 
                      src={testimoniosRetiro[currentTestimonial].image} 
                      alt={testimoniosRetiro[currentTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#292E17]">{testimoniosRetiro[currentTestimonial].name}</h4>
                    <p className="text-sm text-[#7E2625] uppercase tracking-wider mt-1">{testimoniosRetiro[currentTestimonial].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

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
                  className={`h-2 rounded-full transition-all ${currentTestimonial === index ? 'w-8 bg-[#868859]' : 'w-2 bg-[#868859]/30'}`}
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