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
  AlertTriangle,
  BrainCircuit,
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
        
        {/* Dorso (con overflow-y-auto para textos largos) */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden bg-[#868859] text-[#E8DCC4] p-6 flex flex-col shadow-lg"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden", 
            transform: "rotateY(180deg) translateZ(1px)"
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center overflow-y-auto hide-scrollbar" style={{ transform: "translateZ(0)" }}>
            {back}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function RetiroLanding() {
  const { locale } = useLanguage();
  
  const retreatName = "RED VIVA";
  const retreatLocation = "Minas - Uruguay";
  const retreatDate = locale === "es" ? "1 al 4 de Octubre 2026" : "October 1st to 4th, 2026";

  // Estado para el Carrusel de Testimonios
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimoniosRetiro = [
    {
      name: "Sofia Mattone",
      location: "Argentina",
      image: "/images/testimonios/sofia.jpg", 
      text: locale === "es" 
        ? "Me encanto, fue perfecto como fue. Amo al mundo, me siento super expandida, vi muchas cosas que no había podido ver antes. O que las entendía pero no las sentía de verdad. Fue muy cuidado, el lugar alucinante y la música muy hermosa. Gracias!"
        : "I loved it, it was perfect as it was. I love the world, I feel super expanded, I saw many things I hadn't been able to see before. Or that I understood but didn't truly feel. It was very cared for, the place was amazing and the music very beautiful. Thank you!"
    },
    {
      name: "Carolina Battistesa",
      location: "Argentina",
      image: "/images/testimonios/carolina.jpg", 
      text: locale === "es"
        ? "Nunca había tratado con hongos desde el punto de vista medicinal. La propuesta de estar solo con con uno mismo me pareció increíble. El ambiente que lograron crear fue fabuloso, desde el espacio, la música y sus palabras. Gracias ❤️"
        : "I had never dealt with mushrooms from a medicinal point of view. The proposal of being alone with oneself seemed incredible to me. The atmosphere they managed to create was fabulous, from the space, the music, and their words. Thank you ❤️"
    },
    {
      name: "Francisco Dalmau",
      location: "Ecuador",
      image: "/images/testimonios/francisco.jpg", 
      text: locale === "es"
        ? "Lleno de gratitud, amor y sobretodo mayor perspectiva y claridad mental después de una experiencia realmente mágica!!! Gracias por tu compañía y cariño!!! Me sentí muy seguro, cuidado, guiado y querido!!! Gracias, gracias, gracias!!!"
        : "Filled with gratitude, love, and above all, greater perspective and mental clarity after a truly magical experience!!! Thank you for your companionship and affection!!! I felt very safe, cared for, guided, and loved!!! Thank you, thank you, thank you!!!"
    },
    {
      name: "Agustin Perelman",
      location: "Argentina",
      image: "/images/testimonios/agustin.jpg", 
      text: locale === "es"
        ? "Cómo fue mi primera vez, el miedo a lo desconocido estaba presente pero con tu guía pude sentirme seguro para entregarme a la experiencia y el viaje para mi interior. Los sonidos, el lugar, tu energía y claridad en el proceso fueron claves para que haya tenido esa experiencia tan profunda que después pudimos charlar. El post, la sesión de decodificación, me ayudó a entender lo vivido para poder integrar lo recibido. No tengo mas que gratitud y agradecimiento para con vos por guiarme en esta experiencia tan profunda, linda y sanadora. Gracias gracias gracias 🫶"
        : "Since it was my first time, the fear of the unknown was present, but with your guidance, I was able to feel safe to surrender to the experience and the journey inward. The sounds, the place, your energy, and clarity in the process were key for me to have that deep experience that we were later able to discuss. The post-retreat, the decoding session, helped me understand what I lived to be able to integrate what I received. I have nothing but gratitude and thanks to you for guiding me in this deep, beautiful, and healing experience. Thank you thank you thank you 🫶"
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
          src="/images/retiro-uruguay.jpg" 
          alt="Hero Retiro Red Viva"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#3B1B0E]/40" /> 
        
        <div className="relative z-10 text-center text-[#E8DCC4] px-4 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 drop-shadow-lg uppercase tracking-wider">
            {retreatName}
          </h1>
          <span className="text-[#E8DCC4]/90 font-bold tracking-widest uppercase text-sm md:text-base mb-4 border border-[#E8DCC4]/50 px-6 py-2 rounded-full backdrop-blur-sm">
            {locale === "es" ? "Conexión Somática - Micelial" : "Somatic - Mycelial Connection"}
          </span>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-medium bg-[#3B1B0E]/60 backdrop-blur-md px-6 md:px-8 py-4 rounded-full mt-4 text-sm md:text-base">
            <span className="flex items-center gap-2"><MapPin size={20} /> {retreatLocation}</span>
            <span className="flex items-center gap-2"><Calendar size={20} /> {retreatDate}</span>
          </div>
        </div>
      </section>

      {/* 1b. INTRODUCCIÓN */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg md:text-xl font-serif leading-relaxed text-[#292E17]"
        >
          <p>
            {locale === "es" 
              ? "La tierra nos habla en múltiples lenguajes. Los hongos son uno de ellos."
              : "The earth speaks to us in multiple languages. Fungi are one of them."}
          </p>
          <p>
            {locale === "es"
              ? "Bajo la tierra, el micelio teje silenciosamente una red que conecta y nutre la vida. Su enseñanza es simple: la vida prospera cuando se comparte, cuando se nutre y cuando se coopera."
              : "Beneath the earth, the mycelium silently weaves a network that connects and nourishes life. Its teaching is simple: life thrives when it is shared, when it is nurtured, and when it cooperates."}
          </p>
          <p>
            {locale === "es"
              ? "Este retiro es una invitación a recordar esa sabiduría. A reunirnos como la Red Viva que ya somos, donde nuestras experiencias se entrelazan y nos permiten reconocernos parte de un mismo tejido, creando así caminos sostenibles desde lo real."
              : "This retreat is an invitation to remember that wisdom. To gather as the Living Network we already are, where our experiences intertwine and allow us to recognize ourselves as part of the same fabric, thus creating sustainable paths from what is real."}
          </p>
          <p className="font-medium text-[#7E2625] italic mt-4">
            {locale === "es"
              ? "Porque cuando los corazones se encuentran con presencia y autenticidad, la red se expande."
              : "Because when hearts meet with presence and authenticity, the network expands."}
          </p>
        </motion.div>
      </section>

      {/* 1c. ¿QUÉ ES LA TERAPIA ASISTIDA? */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image src="/images/medicina-naturaleza.jpg" alt="Terapia Asistida" fill className="object-cover" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-[#868859]">
              <BrainCircuit size={36} />
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#3B1B0E]">
                {locale === "es" ? "¿Qué es la Terapia Asistida con Psicodélicos?" : "What is Psychedelic-Assisted Therapy?"}
              </h2>
            </div>
            
            <div className="space-y-5 text-lg leading-relaxed opacity-90">
              <p>
                {locale === "es"
                  ? "La terapia asistida por psicodélicos se nutre de la sabiduría ancestral desarrollada por distintas culturas a lo largo de miles de años, y lo integra con la ciencia y los enfoques terapéuticos más efectivos para la humanidad del mundo de hoy. Ofrece un encuadre de preparación, cuidado e integración, priorizando siempre criterios de seguridad."
                  : "Psychedelic-assisted therapy draws on the ancestral wisdom developed by different cultures over thousands of years, and integrates it with science and the most effective therapeutic approaches for humanity in today's world. It offers a framework of preparation, care, and integration, always prioritizing safety criteria."}
              </p>
              <p>
                {locale === "es"
                  ? "Los estados ampliados de conciencia, habitados en contextos seguros, son un puente hacia procesos profundos de autoconocimiento, regulación emocional y reconexión con la vida."
                  : "Expanded states of consciousness, inhabited in safe contexts, are a bridge to profound processes of self-knowledge, emotional regulation, and reconnection with life."}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1d. ¿PARA QUIÉN ES ESTE RETIRO? */}
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
            
            <ul className="space-y-4 text-lg leading-relaxed opacity-90 font-serif italic list-disc list-inside">
              <li>{locale === "es" ? "Para quienes valoran la conexión con la naturaleza, el silencio y la simplicidad como caminos de transformación." : "For those who value connection with nature, silence, and simplicity as paths of transformation."}</li>
              <li>{locale === "es" ? "Para quienes buscan un espacio seguro donde profundizar el vínculo con la vida y sumergirse en su interior sin perder el enraizamiento." : "For those seeking a safe space to deepen their bond with life and dive inward without losing their grounding."}</li>
              <li>{locale === "es" ? "Para quienes sienten el llamado a un espacio de regulación emocional y valoran la conciencia, el compromiso y el respeto en la relación con las medicinas psicodélicas." : "For those who feel the call to a space of emotional regulation and value awareness, commitment, and respect in their relationship with psychedelic medicines."}</li>
              <li>{locale === "es" ? "Para quienes reconocen el poder de lo colectivo: compartir, dejarnos sostener y caminar junto a otros seres humanos en el proceso." : "For those who recognize the power of the collective: sharing, letting ourselves be held, and walking alongside other human beings in the process."}</li>
              <li>{locale === "es" ? "Para quienes están disponibles a abrir el corazón y permitir que lo que necesite emerger, emerja." : "For those who are available to open their hearts and allow whatever needs to emerge, to emerge."}</li>
              <li>{locale === "es" ? "Para quienes desean cultivar mayor presencia, conexión y desarrollar nuevas perspectivas que amplíen su mirada sobre la realidad." : "For those who wish to cultivate greater presence, connection, and develop new perspectives that broaden their view of reality."}</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image src="/images/within-para-quien.jpg" alt="Público Retiro" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* 2. EL LUGAR */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#292E17]">
              {locale === "es" ? "EL LUGAR" : "THE LOCATION"}
            </h2>
            <p className="leading-relaxed text-lg opacity-90">
              {locale === "es"
                ? "El Abrazo de las Sierras es un lugar a lo alto de las Sierras de Minas, rodeado de cañadas, montes, flora y fauna nativa y áreas de cuarzos blancos."
                : "El Abrazo de las Sierras is a place high in the Sierras de Minas, surrounded by streams, forests, native flora and fauna, and areas of white quartz."}
            </p>
            <p className="leading-relaxed text-lg opacity-90">
              {locale === "es"
                ? "Ofrece un ambiente cálido, amable, familiar y descontracturado en un entorno de paz y calma. Construcción de materiales amables con el medio ambiente y energías renovables."
                : "It offers a warm, friendly, familiar, and relaxed atmosphere in an environment of peace and calm. Built with environmentally friendly materials and renewable energy."}
            </p>
            <p className="leading-relaxed text-lg opacity-90">
              {locale === "es"
                ? "El diseño y distribución de los espacios fueron pensados en base a estudios radiestésicos y de feng shui, procurando la mayor armonización, de manera de favorecer al máximo la energía positiva y lograr el mayor descanso y bienestar."
                : "The design and distribution of the spaces were thought out based on dowsing and feng shui studies, seeking the greatest harmonization, in order to maximize positive energy and achieve the greatest rest and well-being."}
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="https://www.instagram.com/el_abrazo_de_las_sierras/" target="_blank" className="flex items-center gap-2 px-6 py-3 border border-[#3B1B0E] text-[#3B1B0E] rounded-full hover:bg-[#3B1B0E]/5 transition-colors">
                <Instagram size={18} /> Instagram
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 hide-scrollbar">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="min-w-[85%] sm:min-w-[60%] aspect-[4/3] relative snap-center rounded-2xl overflow-hidden shadow-lg border border-[#868859]/30 flex-shrink-0">
                    <Image src={`/images/retiro_uruguay/abrazo-${num}.jpg`} alt={`El Abrazo ${num}`} fill className="object-cover" />
                  </div>
                ))}
            </div>
            <div className="mt-4 w-full h-48 rounded-2xl overflow-hidden shadow-md">
              <iframe 
                src="https://maps.app.goo.gl/ynnUbGhA1EsRA4gFA" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOJA DE RUTA */}
      <section className="py-24 bg-[#292E17] text-[#E8DCC4] px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-center mb-16">
            {locale === "es" ? "Tu Camino Hacia el Retiro" : "Your Path to the Retreat"}
          </h2>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-[24px] left-[12%] right-[12%] h-0.5 bg-[#868859]/30 z-0" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
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
              <Image src="/images/retiro_union/comida-union.jpg" alt="Comida 1" fill className="object-cover" />
            </div>
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-xl mt-12 lg:mt-24">
              <Image src="/images/retiro_union/comida-union-2.jpeg" alt="Comida 2" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FACILITADORAS */}
      <section className="py-20 bg-[#F4EDE0] px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-center text-[#292E17] mb-12">
            {locale === "es" ? "Facilitadoras" : "Facilitators"}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
            {/* FERNANDA */}
            <FlipCard 
              frontImage="/images/team-fer.jpg" // CAMBIAR FOTO
              front={<div className="text-center space-y-1">
                <h3 className="text-2xl font-bold font-serif">Fernanda Olivera</h3>
              </div>}
              back={<div className="text-xs md:text-sm leading-relaxed space-y-3 pb-4">
                <p>{locale === "es" ? "Mi propósito es acompañar a quienes están en compromiso con vivir una vida desde la libertad del corazón. Comparto las medicinas que fueron un antes y un después en mi vida." : "My purpose is to accompany those committed to living a life from the freedom of the heart. I share the medicines that were a turning point in my life."}</p>
                <p>{locale === "es" ? "Acompaño desde mi experiencia viva, desde la maestría y las vueltas al espiral que me invita mi servicio. Me formé y sigo en aprendizaje continuo en el campo de la Terapia psicodélica desde diferentes abordajes que van desde lo científico hasta lo espiritual." : "I accompany from my living experience, from the mastery and the spiral turns my service invites me to. I trained and continue learning in the field of psychedelic therapy from scientific to spiritual approaches."}</p>
                <p>{locale === "es" ? "He recorrido varias Escuelas que incluyen marcos de Somática, Respiración terapéutica, Coaching Ontológico y PNL. Me apasiona el arte de combinar diferentes miradas y mapas al servicio de cada espacio que abro." : "I have explored several schools including Somatics, Therapeutic Breathwork, Ontological Coaching, and NLP. I am passionate about combining different views to serve each space I open."}</p>
                <p className="font-bold">{locale === "es" ? "¡Será un placer compartir y nutrirnos en este espacio de tribu!" : "It will be a pleasure to share and nourish ourselves in this tribe space!"}</p>
              </div>}
            />

            {/* ELIANA */}
            <FlipCard 
              frontImage="/images/team-eli.jpg"
              front={<div className="text-center space-y-1">
                <h3 className="text-2xl font-bold font-serif">Eliana Martinez</h3>
                <span className="text-xs opacity-80 border border-white/40 px-2 py-0.5 rounded-full inline-block mt-2">@eli.mar.lov</span>
              </div>}
              back={<div className="text-xs md:text-sm leading-relaxed space-y-3 pb-4">
                <p>{locale === "es" ? "Mi servicio se basa en acompañar procesos y sostener espacios de transformación real y sostenible a través de la respiración, la regulación emocional y la integración somática del cuerpo y la mente." : "My service is based on accompanying processes and holding spaces for real transformation through breathwork, emotional regulation, and somatic integration."}</p>
                <p>{locale === "es" ? "Coach Ontológica especializada en regulación del Sistema Nervioso y abordaje compasivo del trauma. Facilitadora en respiración consciente, crioterapia y acompañamiento en procesos con terapias asistidas con psicodélicos." : "Ontological Coach specialized in Nervous System regulation and compassionate trauma approach. Facilitator in conscious breathing, cryotherapy, and psychedelic-assisted therapies."}</p>
                <p className="opacity-80 italic">{locale === "es" ? "Formada en Método Heart Breath, Coaching Sistémico y Transgeneracional, Terapias asistidas con psicodélicos, PNL, Crioterapia, TTC 200 hs de Yoga, Access Bars y Reiki Usui Nivel I." : "Trained in Heart Breath Method, Systemic Coaching, Psychedelic-assisted therapies, NLP, Cryotherapy, Yoga TTC 200 hrs, Access Bars, and Reiki Usui I."}</p>
              </div>}
            />

          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-6 text-lg md:text-xl leading-relaxed opacity-90 font-serif border-t border-[#3B1B0E]/10 pt-12"
          >
            <p className="font-bold text-[#292E17]">
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

      {/* 6. VALORES DE INTERCAMBIO */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#3B1B0E]">
            {locale === "es" ? "Valores de intercambio" : "Exchange Values"}
          </h2>
          <p className="mt-5 text-xl text-[#7E2625] font-medium">
            {locale === "es" 
              ? "Asegurá tu lugar aprovechando los beneficios de inscripción temprana."
              : "Secure your spot by taking advantage of early registration benefits."}
          </p>
        </div>

        {/* GRILLA DE 3 PRECIOS */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Tarjeta 1: Regular */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#3B1B0E]/10 text-center relative overflow-hidden flex flex-col justify-between group hover:border-[#868859]/40 transition-all">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#3B1B0E]/20" />
            <div className="space-y-2 mt-4">
              <h3 className="text-lg uppercase tracking-widest font-bold text-[#292E17] opacity-70">
                {locale === "es" ? "Precio Regular" : "Regular Price"}
              </h3>
              <p className="text-5xl font-bold font-serif text-[#3B1B0E]">$809 <span className="text-lg text-[#3B1B0E]/50 font-sans">USD</span></p>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfcTIFxNn8oyNWtbM9rWhMKSQoNQ7R22PNbTEVN1HsHK2Y3rA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-8 py-3 bg-[#3B1B0E] text-[#E8DCC4] rounded-full font-bold hover:bg-[#292E17] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {locale === "es" ? "Inscribirse" : "Register"}
            </a>
          </div>

          {/* Tarjeta 2: Early Bird Junio/Julio */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#868859] text-center relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#868859]" />
            <div className="space-y-2 mt-4">
              <h3 className="text-lg uppercase tracking-widest font-bold text-[#868859]">
                {locale === "es" ? "Early Bird Junio/Julio" : "June/July Early Bird"}
              </h3>
              <p className="text-5xl font-bold font-serif text-[#868859]">$736 <span className="text-lg text-[#868859]/60 font-sans">USD</span></p>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfcTIFxNn8oyNWtbM9rWhMKSQoNQ7R22PNbTEVN1HsHK2Y3rA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-8 py-3 bg-[#868859] text-[#E8DCC4] rounded-full font-bold hover:bg-[#292E17] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {locale === "es" ? "Aprovechar Descuento" : "Claim Discount"}
            </a>
          </div>

          {/* Tarjeta 3: Early Bird Abril/Mayo (Más Destacada) */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#7E2625] text-center relative overflow-hidden flex flex-col justify-between transform scale-105 md:scale-110 shadow-[#7E2625]/10 z-10">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#7E2625]" />
            <div className="absolute -right-12 top-6 bg-[#7E2625] text-[#E8DCC4] text-[10px] uppercase tracking-widest font-bold py-1 px-12 rotate-45">
              {locale === "es" ? "Destacado" : "Featured"}
            </div>
            <div className="space-y-2 mt-4">
              <h3 className="text-lg uppercase tracking-widest font-bold text-[#7E2625]">
                {locale === "es" ? "Early Bird Abril/Mayo" : "April/May Early Bird"}
              </h3>
              <p className="text-5xl font-bold font-serif text-[#7E2625]">$657 <span className="text-lg text-[#7E2625]/60 font-sans">USD</span></p>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfcTIFxNn8oyNWtbM9rWhMKSQoNQ7R22PNbTEVN1HsHK2Y3rA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-8 py-3 bg-[#7E2625] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {locale === "es" ? "Mejor Opción" : "Best Option"}
            </a>
          </div>

        </div>

        {/* Condiciones de Pago */}
        <div className="bg-[#868859]/10 rounded-3xl p-8 md:p-10 border border-[#868859]/30 space-y-10">
          <div className="space-y-6">
            <h4 className="text-xl font-bold flex items-center gap-2 text-[#292E17]"><CreditCard size={24}/> {locale === "es" ? "Medios de pago:" : "Payment Methods:"}</h4>
            <ul className="list-disc list-inside space-y-2 text-lg pl-2 opacity-90">
                <li>{locale === "es" ? "Transferencia bancaria o MercadoPago en cuotas. (Consultar por financiación directa)." : "Bank transfer or MercadoPago in installments. (Inquire about direct financing)."}</li>
                <li>{locale === "es" ? "Contamos con facilidades de pago y cuotas sin interés." : "We offer payment facilities and interest-free installments."}</li>
            </ul>
          </div>

          <div className="pt-8 border-t border-[#3B1B0E]/10 space-y-6">
            <h4 className="text-xl font-bold flex items-center gap-2 text-[#292E17]"><ShieldCheck size={24}/> {locale === "es" ? "Condiciones de Pago" : "Payment Conditions"}</h4>
            <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4 bg-white/50 p-5 rounded-xl border border-white">
                <HeartHandshake className="text-[#7E2625] shrink-0" size={28} />
                <p className="text-sm leading-relaxed"><strong>{locale === "es" ? "Reserva:" : "Reservation:"}</strong> {locale === "es" ? "Se efectiviza al completar formulario, entrevista y enviar comprobante del pago completo o 1ra cuota." : "It becomes effective upon completing the form, interview, and sending proof of full payment or 1st installment."} <strong className="text-[#7E2625] block mt-1">{locale === "es" ? "La totalidad del pago debe estar abonada antes de comenzar el retiro." : "The full payment must be made before the retreat begins."}</strong></p>
                </div>
                <div className="flex gap-4 bg-white/50 p-5 rounded-xl border border-white">
                <Info className="text-[#7E2625] shrink-0" size={28} />
                <p className="text-sm leading-relaxed"><strong>{locale === "es" ? "Reembolsos:" : "Refunds:"}</strong> {locale === "es" ? "Una vez realizado el pago, no se realizan reembolsos. Agradecemos tu comprensión y compromiso." : "Once payment is made, there are no refunds. We appreciate your understanding and commitment."}</p>
                </div>
            </div>
          </div>
        </div>

        {/* IMPORTANTE */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-[#7E2625]/10 border border-[#7E2625]/30 rounded-3xl p-8 space-y-4"
        >
            <h4 className="text-xl font-bold font-serif text-[#7E2625] flex items-center gap-2">
              <AlertTriangle size={24} /> 
              {locale === "es" ? "IMPORTANTE:" : "IMPORTANT:"}
            </h4>
            <ul className="space-y-3 text-sm md:text-base leading-relaxed opacity-90 text-[#3B1B0E]">
              <li className="flex items-start gap-2">
                <span className="text-[#7E2625] mt-1">*</span>
                <p>{locale === "es" ? "Esta experiencia no es recreativa y no sustituye ni reemplaza la importancia de un proceso terapéutico individual y completo. Es un enfoque terapéutico asistido con psicodélicos para un profundo crecimiento interior y la responsabilidad sobre tu proceso personal es tuya." : "This experience is not recreational and does not substitute or replace the importance of an individual and complete therapeutic process. It is a psychedelic-assisted therapeutic approach for deep inner growth, and the responsibility for your personal process is yours."}</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7E2625] mt-1">*</span>
                <p>{locale === "es" ? "No hace falta tener experiencia previa." : "No previous experience is necessary."}</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7E2625] mt-1">*</span>
                <p>{locale === "es" ? "Los cupos son muy limitados para asegurar el cuidado y la intimidad de la energía del grupo." : "Spots are very limited to ensure the care and intimacy of the group's energy."}</p>
              </li>
            </ul>
        </motion.div>

        {/* ¿VENIS ACOMPAÑADO? */}
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

      {/* 7. TESTIMONIOS (CARRUSEL) */}
      <section className="py-24 bg-[#E8DCC4] text-[#3B1B0E] px-4 border-t border-[#868859]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-[#292E17]">
            {locale === "es" ? "Testimonios" : "Testimonials"}
          </h2>
          <p className="text-lg opacity-80 mb-16 text-[#7E2625]">
            {locale === "es" ? "Experiencias de retiro y transformación" : "Retreat and transformation experiences"}
          </p>

          <div className="relative min-h-[450px] md:min-h-[350px] flex flex-col items-center justify-center">
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
                <p className="text-xl md:text-2xl lg:text-3xl italic font-serif leading-relaxed mb-10 text-[#3B1B0E]/90 px-4 md:px-0">
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