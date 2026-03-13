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
  Sparkles,
  Sprout,
  Quote,
  ChevronLeft,
  ChevronRight
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
        style={{ transformStyle: "preserve-3d", WebkitTransformStyle: "preserve-3d" }}
      >
        {/* Frente */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden bg-[#E8DCC4] border border-[#3B1B0E]/10 flex flex-col justify-center p-6 text-center z-10" 
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {frontImage && (
            <Image src={frontImage} alt="Cover" fill className="object-cover opacity-60 mix-blend-multiply" />
          )}
          <div className="absolute inset-0 from-[#3B1B0E]/90 via-[#3B1B0E]/40 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-end h-full text-[#E8DCC4]">
            {front}
          </div>
        </div>
        {/* Dorso */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden bg-[#868859] text-[#E8DCC4] p-6 flex items-center justify-center text-center shadow-lg z-0"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};

// --- Datos de Testimonios ---
const testimoniosRetiro = [
  {
    name: "Participante - Retiro Anterior", 
    age: "Eli & Fer",
    image: "/images/testimonios/belen.png", // Cambiar por imagen real
    text: `Cuando pienso en los servicios de algunas personas con las que resueno, que puedo ver y sentir desde el amor real que lo brindan, pienso en llaves, en que en cada sesión esa persona te da una llave.
    
Gracias por verme y darme esa llave para abrir esa puerta a esa suavidad y contención que tanto estaba necesitando. Fue un viaje maravilloso y transformador.`
  },
  {
    name: "Participante - Retiro Anterior", 
    age: "Eli & Fer",
    image: "/images/testimonios/fiorella.jpg", // Cambiar por imagen real
    text: `Este retiro fue como un sueño. Cada detalle lo sentí con mucho amor. Claramente afloró el amor en todo mi ser, lo sentí por las personas que se me acercaron post retiro y por el amor y compasión de cómo me veo y veo a otras personas.
    
Recomiendo mucho este espacio con la guía de este maravilloso equipo.`
  }
];

export default function RetiroUruguayLanding() {
  const retreatName = "RED VIVA";
  const retreatLocation = "Minas, Uruguay";
  const retreatDate = "1 al 4 de Octubre 2026";

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
          src="/images/retiro-uruguay-hero.jpg" // Asegurate de subir una foto con este nombre o cambiar la ruta
          alt="Hero Retiro Red Viva Uruguay"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#3B1B0E]/50" /> 
        
        <div className="relative z-10 text-center text-[#E8DCC4] px-4 flex flex-col items-center">
          <span className="text-[#E8DCC4]/90 font-bold tracking-widest uppercase text-sm mb-4 border border-[#E8DCC4]/50 px-4 py-1 rounded-full backdrop-blur-sm">
            Conexión Somática-Miceliar
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 drop-shadow-lg">
            {retreatName}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-8 font-medium bg-[#3B1B0E]/60 backdrop-blur-md px-8 py-4 rounded-full">
            <span className="flex items-center gap-2"><MapPin size={20} /> {retreatLocation}</span>
            <span className="flex items-center gap-2"><Calendar size={20} /> {retreatDate}</span>
          </div>
        </div>
      </section>

      {/* 2. EL CONCEPTO (LA RED VIVA) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-serif text-[#292E17]">La Sabiduría del Micelio</h2>
            <p className="leading-relaxed text-lg opacity-90">
              La tierra nos habla en múltiples lenguajes. Los hongos son uno de ellos.
            </p>
            <p className="leading-relaxed text-lg opacity-90">
              Bajo la tierra, el micelio teje silenciosamente una red que conecta y nutre la vida. Su enseñanza es simple: la vida prospera cuando se comparte, cuando se nutre y cuando se coopera.
            </p>
            <p className="leading-relaxed text-lg opacity-90">
              Este retiro es una invitación a recordar esa sabiduría. A reunirnos como la <strong>Red Viva</strong> que ya somos, donde nuestras experiencias se entrelazan y nos permiten reconocernos parte de un mismo tejido, creando así caminos sostenibles desde lo real.
            </p>
            <div className="bg-[#868859]/10 p-4 rounded-xl border border-[#868859]/30 mt-6 inline-block">
              <p className="text-[#7E2625] font-serif italic text-lg">
                "Porque cuando los corazones se encuentran con presencia y autenticidad, la red se expande."
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 hide-scrollbar">
              {/* Fotos placeholder del lugar en Minas, Uruguay */}
              {[1, 2, 3].map((num) => (
                <div key={num} className="min-w-[85%] sm:min-w-[60%] aspect-[4/3] relative snap-center rounded-2xl overflow-hidden shadow-lg border border-[#868859]/30">
                  <Image src={`/images/uruguay-${num}.jpg`} alt={`Minas Uruguay ${num}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOJA DE RUTA (CRONOGRAMA CON TRACKING) */}
      <section className="py-24 bg-[#292E17] text-[#E8DCC4] px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-center mb-16">Modalidad de Inscripción</h2>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-[24px] left-[12%] right-[12%] h-0.5 bg-[#868859]/30 z-0" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8DCC4] border-4 border-[#868859] text-[#292E17] flex items-center justify-center font-bold font-serif text-xl mb-6 shadow-lg relative z-10">
                  01
                </div>
                <div className="w-full">
                  <FlipCard 
                    frontImage="/images/VERDE CLARO.png"
                    front={<><h3 className="text-xl font-bold font-serif">Formulario</h3><p className="text-sm mt-2 font-light opacity-80">Toca para leer</p></>}
                    back={<p className="text-sm leading-relaxed">Para inscribirte primero te enviamos un formulario inicial con preguntas específicas para conocerte mejor.</p>}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8DCC4] border-4 border-[#868859] text-[#292E17] flex items-center justify-center font-bold font-serif text-xl mb-6 shadow-lg relative z-10">
                  02
                </div>
                <div className="w-full">
                  <FlipCard 
                    frontImage="/images/VERDE CLARO.png"
                    front={<><h3 className="text-xl font-bold font-serif">Entrevista</h3><p className="text-sm mt-2 font-light opacity-80">Toca para leer</p></>}
                    back={<p className="text-sm leading-relaxed">Luego coordinamos una entrevista virtual para conocernos, despejar todas tus dudas y consultas sobre el proceso.</p>}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8DCC4] border-4 border-[#868859] text-[#292E17] flex items-center justify-center font-bold font-serif text-xl mb-6 shadow-lg relative z-10">
                  03
                </div>
                <div className="w-full">
                  <FlipCard 
                    frontImage="/images/VERDE CLARO.png"
                    front={<><h3 className="text-xl font-bold font-serif">Admisión</h3><p className="text-sm mt-2 font-light opacity-80">Acuerdo Mutuo</p></>}
                    back={<p className="text-sm leading-relaxed">Una vez hecha la admisión, se firma el acuerdo y el consentimiento informado por parte de ambas partes.</p>}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8DCC4] border-4 border-[#868859] text-[#292E17] flex items-center justify-center font-bold font-serif text-xl mb-6 shadow-lg relative z-10">
                  04
                </div>
                <div className="w-full">
                  <FlipCard 
                    frontImage="/images/VERDE CLARO.png"
                    front={<><h3 className="text-xl font-bold font-serif">Reserva</h3><p className="text-sm mt-2 font-light opacity-80">Tu lugar asegurado</p></>}
                    back={<p className="text-sm leading-relaxed">Con el pago de la primera cuota (o pago total) tu espacio en el retiro queda oficialmente reservado.</p>}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. ¿QUÉ ES LA TAP? Y ¿PARA QUIÉN ES? */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center gap-3 text-[#7E2625]">
              <Sparkles size={32} />
              <h2 className="text-3xl font-bold font-serif text-[#3B1B0E]">¿Qué es la TAP?</h2>
            </div>
            <p className="text-lg opacity-90 leading-relaxed">
              La Terapia Asistida por Psicodélicos se nutre de la sabiduría ancestral desarrollada por distintas culturas a lo largo de miles de años, y lo integra con la ciencia y los enfoques terapéuticos más efectivos para la humanidad de hoy.
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              Ofrece un encuadre de preparación, cuidado e integración, priorizando siempre criterios de seguridad. Los estados ampliados de conciencia, habitados en contextos seguros, son un puente hacia procesos profundos de autoconocimiento, regulación emocional y reconexión con la vida.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 bg-[#868859]/10 p-8 rounded-3xl border border-[#868859]/30 h-full">
            <div className="flex items-center gap-3 text-[#292E17] mb-6">
              <Sprout size={28} />
              <h3 className="text-2xl font-bold font-serif">¿Para quién es este retiro?</h3>
            </div>
            <ul className="space-y-4 font-medium text-lg opacity-90">
              <li className="flex items-start gap-3 border-b border-[#3B1B0E]/10 pb-4">
                <span className="text-[#7E2625] mt-1">•</span> 
                <span>Para quienes valoran la conexión con la naturaleza, el silencio y la simplicidad como vías de transformación.</span>
              </li>
              <li className="flex items-start gap-3 pt-2">
                <span className="text-[#7E2625] mt-1">•</span> 
                <span>Si buscás un espacio seguro donde profundizar tu vínculo con la vida, sumergirte en tu interior y sanar en red.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. FACILITADORES */}
      <section className="py-20 bg-[#F4EDE0] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-12 text-[#292E17]">Facilitadores</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FlipCard 
              frontImage="/images/eli.jpg"
              front={<h3 className="text-2xl font-bold font-serif">Eliana Martinez</h3>}
              back={<p className="text-sm leading-relaxed">Coach Ontológica especializada en regulación del Sistema Nervioso y abordaje del trauma. Facilitadora en respiración consciente, crioterapia y acompañamiento en procesos con terapias asistidas con psicodélicos.</p>}
            />
            <FlipCard 
              frontImage="/images/fer.jpg" // Asegurate de agregar la foto de Fer
              front={<h3 className="text-2xl font-bold font-serif">Fer</h3>}
              back={<p className="text-sm leading-relaxed">Facilitador de espacios de sanación y transformación. (Acá podés agregar la biografía completa de Fer cuando la tengas disponible).</p>}
            />
          </div>
        </div>
      </section>

      {/* 6. VALORES Y CONDICIONES */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#3B1B0E]">Valores de Intercambio</h2>
          <p className="mt-4 text-lg opacity-80">Asegurá tu lugar aprovechando los beneficios de inscripción temprana.</p>
        </div>

        {/* Grilla de 3 Precios */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          
          <div className="bg-[#868859]/10 rounded-3xl p-6 shadow-md border border-[#868859]/30 text-center flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#868859]" />
            <div>
              <span className="inline-block px-3 py-1 bg-[#868859] text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Mejor Precio</span>
              <h3 className="text-xl font-bold text-[#292E17] mb-1">Early Bird 1</h3>
              <p className="text-sm text-[#3B1B0E]/60 mb-4">Marzo y Abril</p>
              <p className="text-4xl font-bold font-serif text-[#7E2625] mb-6">$657 <span className="text-base text-[#3B1B0E]/50 font-sans">USD</span></p>
            </div>
            <a href="https://docs.google.com/forms/" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-[#292E17] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all hover:-translate-y-1">Inscribirme</a>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#7E2625]/20 text-center flex flex-col justify-between relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#7E2625]" />
            <div>
              <h3 className="text-xl font-bold text-[#292E17] mb-1 mt-4">Early Bird 2</h3>
              <p className="text-sm text-[#3B1B0E]/60 mb-4">Mayo y Junio</p>
              <p className="text-5xl font-bold font-serif text-[#7E2625] mb-6">$736 <span className="text-base text-[#3B1B0E]/50 font-sans">USD</span></p>
            </div>
            <a href="https://docs.google.com/forms/" target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-[#7E2625] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all shadow-lg hover:-translate-y-1">Inscribirme</a>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md border border-[#868859]/20 text-center flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#3B1B0E]" />
            <div>
              <h3 className="text-xl font-bold text-[#292E17] mb-1 mt-4">Precio Regular</h3>
              <p className="text-sm text-[#3B1B0E]/60 mb-4">A partir de Julio</p>
              <p className="text-4xl font-bold font-serif text-[#3B1B0E] mb-6">$809 <span className="text-base text-[#3B1B0E]/50 font-sans">USD</span></p>
            </div>
            <a href="https://docs.google.com/forms/" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-[#E8DCC4] text-[#3B1B0E] rounded-full font-bold hover:bg-[#868859]/30 transition-all hover:-translate-y-1">Inscribirme</a>
          </div>

        </div>

        {/* Banner de Contacto Especial */}
        <div className="bg-[#292E17] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12 shadow-xl">
          <div className="text-center md:text-left text-[#E8DCC4]">
            <h4 className="text-2xl font-serif font-bold mb-2">¿Venís acompañado o sos ex-alumno?</h4>
            <p className="opacity-80">Consultá por un valor especial si venís con alguien o si ya participaste de alguno de nuestros espacios.</p>
          </div>
          <Link href="/contacto" className="shrink-0 px-8 py-4 bg-[#E8DCC4] text-[#292E17] font-bold rounded-full hover:bg-white transition-all shadow-lg hover:-translate-y-1">
            Consultar Valor Especial
          </Link>
        </div>

        {/* Condiciones */}
        <div className="bg-[#868859]/10 rounded-3xl p-8 md:p-10 border border-[#868859]/30">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2"><ShieldCheck className="text-[#292E17]" /> Formas de Pago</h4>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <CreditCard className="text-[#7E2625] shrink-0" />
              <p className="text-sm leading-relaxed"><strong>Opciones disponibles:</strong> Transferencia bancaria o MercadoPago en cuotas. (Consultar por financiación directa).</p>
            </div>
            <div className="flex gap-4">
              <HeartHandshake className="text-[#7E2625] shrink-0" />
              <p className="text-sm leading-relaxed"><strong>Aprobación:</strong> La participación requiere completar el proceso de admisión completo, incluyendo la entrevista virtual previa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIOS (CARRUSEL) */}
      <section className="py-24 bg-[#E8DCC4] text-[#3B1B0E] px-4 border-t border-[#868859]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-[#292E17]">Testimonios</h2>
          <p className="text-lg opacity-80 mb-16 text-[#7E2625]">Experiencias de retiro y transformación</p>

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
                <p className="whitespace-pre-line text-xl md:text-3xl italic font-serif leading-relaxed mb-10 text-[#3B1B0E]/90">
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
                    <p className="text-sm text-[#7E2625]">{testimoniosRetiro[currentTestimonial].age}</p>
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

    </main>
  );
}