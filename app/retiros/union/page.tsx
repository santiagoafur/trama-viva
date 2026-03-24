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
  
  const retreatName = "UNIÓN";
  const retreatLocation = locale === "es" ? "Córdoba, Traslasierra - Argentina" : "Cordoba, Traslasierra - Argentina";
  const retreatDate = locale === "es" ? "10 al 13 de Septiembre 2026" : "September 10th to 13th, 2026";

  // Estado para el Carrusel de Testimonios
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimoniosRetiro = [
    {
      name: "Martina Lazzaro",
      location: "Argentina",
      image: "/images/testimonios/martina.PNG",
      text: locale === "es"
        ? "Este retiro fue para mí un broche de oro en todo el proceso que venía haciendo, una confirmación de que el camino es hacia adentro y de la mano con otros. Lograr abrir el corazón, mostrar lo que más buscas esconder y que haya alguien listo para sostenerte con las manos y el corazón abiertos no tiene precio, hacerlo en grupo y además poder verte en el otro es profundamente sanador y transformador. Eli, Juli y Lu fueron la base y las guardianas para que esto suceda, se nota su amor en cada detalle y en cada elección. El corazón solo abre partes que tenía cerradas bajo llave cuando se siente seguro y contenido. Fue lo que sentí en todo el retiro. Gracias 🩷"
        : "This retreat was for me a finishing touch on the whole process I had been doing, a confirmation that the path is inward and hand in hand with others. Managing to open the heart, showing what you most try to hide, and having someone ready to hold you with open hands and heart is priceless; doing it in a group and also being able to see yourself in the other is deeply healing and transformative. Eli, Juli, and Lu were the foundation and guardians for this to happen; their love is noticeable in every detail and choice. The heart only opens parts it had locked away when it feels safe and held. That's what I felt throughout the retreat. Thank you 🩷"
    },
    {
      name: "Lucas Longoni",
      location: "Argentina",
      image: "/images/testimonios/lucas.jpg", // Recordá agregar la foto si la tenés
      text: locale === "es"
        ? "Super recomendable. Un espacio donde la contención de amor se siente a flor de piel. Donde las almas al servicio se nota desde la primera entrevista. Volvería a hacerlo de nuevo. Si si."
        : "Highly recommended. A space where the containment of love is felt deeply. Where souls in service are noticed from the first interview. I would do it again. Yes, yes."
    },
    {
      name: "Lucrecia Piovessano",
      location: "Argentina",
      image: "/images/testimonios/lucrecia.jpg",
      text: locale === "es"
        ? "Fue mi primer retiro y me marcó sin dudas. El ambiente físico hermoso y el humano mucho más. La asistencia puntualmente durante la ceremonia fue constante y amorosa, las explicaciones previas muy claras y las charlas en todo momento muy enriquecedoras. Un placer coincidir y regalarme esta experiencia."
        : "It was my first retreat and it undoubtedly left a mark on me. The physical environment was beautiful and the human one even more so. The assistance specifically during the ceremony was constant and loving, the prior explanations very clear, and the conversations at all times very enriching. A pleasure to cross paths and gift myself this experience."
    },
    {
      name: "Micaela Sarry",
      location: "Argentina",
      image: "/images/testimonios/micaela.jpg", // Recordá agregar la foto
      text: locale === "es"
        ? "Para mi fue una experiencia muy transdormadora, sensible y contenida. Sentí que era posible entregarme a un viaje al interior, porque construyeron un espacio seguro para sostenernos. Desde la primer reunión virtual hasta el último abrazo de despedida. Durante la ceremonia, había una energía especial, lo sentí como un útero gigante que nos contenía, la energía femenina muy presente, fuerte y sensible a la vez, cada una desde su lugar y con su forma nos sostuvo. Muchas gracias por lo que fué y por lo que será :)"
        : "For me, it was a very transformative, sensitive, and contained experience. I felt it was possible to surrender to an inward journey because they built a safe space to hold us. From the first virtual meeting to the last goodbye hug. During the ceremony, there was a special energy; it felt like a giant womb holding us, the feminine energy very present, strong and sensitive at the same time; each from her place and with her way held us. Thank you very much for what was and what will be :)"
    },
    {
      name: "Agustina Pendino",
      location: "Argentina",
      image: "/images/testimonios/agustina.jpg", // Recordá agregar la foto
      text: locale === "es"
        ? "UNION es para mi la gran integración de todas nuestras partes... y digo ES porque siempre me acompañará esta experiencia, el lugar es un sueño la energía de la montaña se siente... Eli, Clari y Anto que acompañaron fueron un eslabón perfecto para que todo se sienta como en casa... cada una aportando su sabiduría y amor hizo que tengamos muchísima confianza en todo momento, cada actividad estaba diseñada para ir entrando en esa nave que despego y luego aterrizó. La ceremonia fue de lo más maravilloso que viví! Recomiendo esta experiencia para aquellos valientes que se animen a conocer más su mundo interno!"
        : "UNION is for me the great integration of all our parts... and I say IS because this experience will always accompany me, the place is a dream, the energy of the mountain is felt... Eli, Clari, and Anto who accompanied were a perfect link so everything feels like home... each contributing their wisdom and love made us have a lot of trust at all times, each activity was designed to enter that ship that took off and then landed. The ceremony was the most wonderful thing I ever experienced! I recommend this experience for those brave ones who dare to know their inner world more!"
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
          src="/images/retiro-cordoba.jpg" 
          alt="Hero Retiro Union"
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
            {locale === "es" ? "Conexión Somática-Miceliar" : "Somatic-Mycelial Connection"}
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
              ? <><strong className="font-sans font-bold text-[#3B1B0E]">Unión</strong> es nuestra ofrenda para reencontrarnos con la simpleza. Te invitamos a compartir una experiencia para explorar tu mundo interno y fortalecer la apertura de tu corazón en un espacio seguro y en un entorno natural.</>
              : <><strong className="font-sans font-bold text-[#3B1B0E]">Unión</strong> is our offering to reconnect with simplicity. We invite you to share an experience to explore your inner world and strengthen the opening of your heart in a safe space and natural environment.</>}
          </p>
          <p>
            {locale === "es"
              ? "Nuestro servicio se basa en abrir y sostener espacios de escucha compasiva para tu autoconocimiento, restauración emocional y la reconexión con tu energía vital."
              : "Our service is based on opening and holding spaces of compassionate listening for your self-knowledge, emotional restoration, and reconnection with your vital energy."}
          </p>
          <p className="font-medium text-[#7E2625]">
            {locale === "es"
              ? "Una experiencia de conexión profunda con vos mismo y la naturaleza, en vínculo con el corazón de cada ser humano y con el antídoto más poderoso que surge de toda esta combinación: EL AMOR"
              : "An experience of deep connection with yourself and nature, in bond with the heart of every human being and with the most powerful antidote that arises from this combination: LOVE"}
          </p>
          <p className="italic opacity-90 mt-4">
            {locale === "es"
              ? "Si sentís el llamado de la medicina, este viaje es para vos. Nuevos caminos son posibles para todos."
              : "If you feel the call of the medicine, this journey is for you. New paths are possible for everyone."}
          </p>
        </motion.div>
      </section>

      {/* 1c. ¿QUÉ ES LA TERAPIA ASISTIDA? (NUEVO) */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Cambiar por la foto correspondiente que te enviaron para esta sección */}
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

      {/* 1d. ¿PARA QUIÉN ES? */}
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
                        <span className="text-xl font-bold">8 PAX</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-[#E8DCC4] p-4 rounded-xl flex-1 border border-[#868859]/30 shadow-inner">
                    <Users className="text-[#868859]" size={28}/>
                    <div>
                        <span className="block text-xs uppercase tracking-wider opacity-60">
                          {locale === "es" ? "Cupo Máximo" : "Max Quota"}
                        </span>
                        <span className="text-xl font-bold">12 PAX</span>
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
                ? "Bienvenidos a Casa Buda, una posada ecológica, simple y cálida en medio de la naturaleza."
                : "Welcome to Casa Buda, an ecological, simple and warm inn in the middle of nature."}
            </p>
            <p className="leading-relaxed text-lg opacity-90">
              {locale === "es"
                ? "Cuenta con un salón principal con vista panorámica a las sierras y una sala de estar dentro de la ecoposada además de hermosas y rústicas habitaciones con baño privado."
                : "It has a main hall with a panoramic view of the mountains and a living room inside the eco-inn, as well as beautiful and rustic rooms with private bathrooms."}
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="https://www.instagram.com/casabuda_traslasierra" target="_blank" className="flex items-center gap-2 px-6 py-3 border border-[#3B1B0E] text-[#3B1B0E] rounded-full hover:bg-[#3B1B0E]/5 transition-colors">
                <Instagram size={18} /> Instagram
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 hide-scrollbar">
                <div className="min-w-[85%] sm:min-w-[60%] aspect-[4/3] relative snap-center rounded-2xl overflow-hidden shadow-lg border border-[#868859]/30">
                  <Image src={`/images/retiro_union/casa-buda.jpg`} alt="Casa Buda 1" fill className="object-cover" />
                </div>
                <div className="min-w-[85%] sm:min-w-[60%] aspect-[4/3] relative snap-center rounded-2xl overflow-hidden shadow-lg border border-[#868859]/30">
                  <Image src={`/images/retiro_union/casa-buda-4.jpeg`} alt="Casa Buda 2" fill className="object-cover" />
                </div>
                <div className="min-w-[85%] sm:min-w-[60%] aspect-[4/3] relative snap-center rounded-2xl overflow-hidden shadow-lg border border-[#868859]/30">
                  <Image src={`/images/retiro_union/casa-buda-2.jpg`} alt="Casa Buda 3" fill className="object-cover" />
                </div>
                <div className="min-w-[85%] sm:min-w-[60%] aspect-[4/3] relative snap-center rounded-2xl overflow-hidden shadow-lg border border-[#868859]/30">
                  <Image src={`/images/retiro_union/casa-buda-5.jpeg`} alt="Casa Buda 4" fill className="object-cover" />
                </div>
            </div>
            <div className="mt-4 w-full h-48 rounded-2xl overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6778.901280375825!2d-64.9316978!3d-31.8399504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d2de9b1180ce5%3A0x34b1f4625e8aa44d!2sBuda%20Traslasierra!5e0!3m2!1sen!2sar!4v1772841999816!5m2!1sen!2sar" 
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

      {/* 5. FACILITADORES */}
      <section className="py-20 bg-[#F4EDE0] px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-center text-[#292E17]">
            {locale === "es" ? "Facilitadores" : "Facilitators"}
          </h2>
          
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <FlipCard 
                frontImage="/images/team-eli.jpg"
                front={<div className="text-center space-y-1">
                  <h3 className="text-xl font-bold font-serif">Eliana Martinez</h3>
                  <span className="text-xs opacity-80 border border-white/40 px-2 py-0.5 rounded-full">@eli.mar.lov</span>
                </div>}
                back={<p className="text-sm leading-relaxed">{locale === "es" ? "Coach Ontológica - Terapias Asistidas con Psicodélicos - Facilitadora de Respiración y Crioterapia - Instructora de Yoga y Meditación" : "Ontological Coach - Psychedelic Assisted Therapies - Breathwork and Cryotherapy Facilitator - Yoga and Meditation Instructor"}</p>}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 text-lg md:text-xl leading-relaxed opacity-90 font-serif pt-8"
          >
            <p>
              {locale === "es" 
                ? "Cada retiro lo facilito junto a distintos profesionales que admiro y en quienes confío."
                : "I facilitate each retreat alongside different professionals whom I admire and trust."}
            </p>
            <p>
              {locale === "es"
                ? "Así, cada retiro es único, diverso y enriquecido por la colaboración y los saberes compartidos siendo parte de una misma red."
                : "Thus, each retreat is unique, diverse, and enriched by collaboration and shared knowledge, being part of the same network."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. VALORES Y CONDICIONES */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#3B1B0E]">
            {locale === "es" ? "Inversión" : "Investment"}
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
              <p className="text-5xl font-bold font-serif text-[#3B1B0E]">$777 <span className="text-lg text-[#3B1B0E]/50 font-sans">USD</span></p>
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
              <p className="text-5xl font-bold font-serif text-[#868859]">$702 <span className="text-lg text-[#868859]/60 font-sans">USD</span></p>
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
              <p className="text-5xl font-bold font-serif text-[#7E2625]">$652 <span className="text-lg text-[#7E2625]/60 font-sans">USD</span></p>
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

        {/* 6b. IMPORTANTE (NUEVO) */}
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

        {/* 6c. ¿VENIS ACOMPAÑADO? */}
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