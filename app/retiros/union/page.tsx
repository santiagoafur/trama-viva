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
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Frente */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#E8DCC4] border border-[#3B1B0E]/10 flex flex-col justify-center p-6 text-center" style={{ backfaceVisibility: "hidden" }}>
          {frontImage && (
            <Image src={frontImage} alt="Cover" fill className="object-cover opacity-60 mix-blend-multiply" />
          )}
          {/* Corregido: se agregó bg-gradient-to-t */}
          <div className="absolute inset-0 from-[#3B1B0E]/90 via-[#3B1B0E]/40 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-end h-full text-[#E8DCC4]">
            {front}
          </div>
        </div>
        {/* Dorso */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden bg-[#868859] text-[#E8DCC4] p-6 flex items-center justify-center text-center shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};

// --- Datos Mockeados de Testimonios para Retiros ---
const testimoniosRetiro = [
  {
    name: "Martina Lazzaro", 
    age: "32 años",
    image: "/images/testimonio-1.jpg",
    text: "El retiro Within en Costa Rica fue un antes y un después en mi vida. El nivel de contención del equipo y la belleza de la selva me permitieron entregarme al proceso por completo. Volví renovada y con muchísima claridad."
  },
  {
    name: "Joaquín Fernández", 
    age: "41 años",
    image: "/images/testimonio-2.jpg",
    text: "Llegué con muchas dudas, pero la profesionalidad de Eli y Jony me dio la paz que necesitaba. Cada detalle, desde la comida hasta las ceremonias, está pensado para tu bienestar. Lo recomiendo a cualquiera que busque un reseteo profundo."
  },
  {
    name: "Valentina Ruiz", 
    age: "28 años",
    image: "/images/testimonio-3.jpg",
    text: "Una experiencia mágica. Nunca me había sentido tan segura para explorar mis emociones. El grupo que se armó fue hermoso y el Santuario House of Shakti es, literalmente, un paraíso. Gracias a todo el equipo."
  },
  {
    name: "Roberto Méndez", 
    age: "45 años",
    image: "/images/testimonio-4.jpg",
    text: "La estructura del retiro me encantó. Los encuentros previos online me ayudaron a prepararme, y el retiro en sí superó mis expectativas. La sanación que se vive ahí es real y muy profunda."
  }
];

export default function RetiroLanding() {
  const retreatName = "Unión";
  const retreatLocation = "Córdoba";
  const retreatDate = "Próximamente";

  // Estado para el Carrusel de Testimonios
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
          src="/images/retiro-cordoba.jpg" 
          alt="Hero Retiro Union"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#3B1B0E]/40" /> 
        
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

      {/* 2. EL LUGAR */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-serif text-[#292E17]">Sierras de Córdoba</h2>
            <p className="leading-relaxed text-lg opacity-90">
              Bienvenido a Casa Buda, una posada ecológica, simple y cálida en medio de la naturaleza.
            </p>
            <p className="leading-relaxed text-lg opacity-90">
              Cuenta con un salón principal con vista panorámica a las sierras y una sala de estar dentro de la ecoposada además de hermosas y rústicas habitaciones con baño privado.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="https://www.instagram.com/casabuda_traslasierra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="flex items-center gap-2 px-6 py-3 border border-[#3B1B0E] text-[#3B1B0E] rounded-full hover:bg-[#3B1B0E]/5 transition-colors">
                <Instagram size={18} /> Instagram
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 hide-scrollbar">
                <div className="min-w-[85%] sm:min-w-[60%] aspect-[4/3] relative snap-center rounded-2xl overflow-hidden shadow-lg border border-[#868859]/30">
                  <Image src={`/images/retiro_union/casa-buda.jpg`} alt="" fill className="object-cover" />
                </div>
                <div className="min-w-[85%] sm:min-w-[60%] aspect-[4/3] relative snap-center rounded-2xl overflow-hidden shadow-lg border border-[#868859]/30">
                  <Image src={`/images/retiro_union/casa-buda-4.jpeg`} alt="" fill className="object-cover" />
                </div>
                <div className="min-w-[85%] sm:min-w-[60%] aspect-[4/3] relative snap-center rounded-2xl overflow-hidden shadow-lg border border-[#868859]/30">
                  <Image src={`/images/retiro_union/casa-buda-2.jpg`} alt="" fill className="object-cover" />
                </div>
                <div className="min-w-[85%] sm:min-w-[60%] aspect-[4/3] relative snap-center rounded-2xl overflow-hidden shadow-lg border border-[#868859]/30">
                  <Image src={`/images/retiro_union/casa-buda-5.jpeg`} alt="" fill className="object-cover" />
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

      {/* 3. HOJA DE RUTA (CRONOGRAMA CON TRACKING) */}
      <section className="py-24 bg-[#292E17] text-[#E8DCC4] px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-center mb-16">Tu Camino Hacia el Retiro</h2>
          
          <div className="relative">
            {/* Línea conectora de tracking (Solo Desktop) */}
            <div className="hidden lg:block absolute top-[24px] left-[12%] right-[12%] h-0.5 bg-[#868859]/30 z-0" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
              
              {/* Paso 1 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8DCC4] border-4 border-[#868859] text-[#292E17] flex items-center justify-center font-bold font-serif text-xl mb-6 shadow-lg relative z-10">
                  01
                </div>
                <div className="w-full">
                  <FlipCard 
                    frontImage="/images/VERDE CLARO.png"
                    front={<><h3 className="text-xl font-bold font-serif">Formulario Inicial</h3><p className="text-sm mt-2 font-light opacity-80">Toca para leer</p></>}
                    back={<p className="text-sm leading-relaxed">Para inscribirte te enviamos un formulario con preguntas específicas para conocerte mejor.</p>}
                  />
                </div>
              </div>

              {/* Paso 2 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8DCC4] border-4 border-[#868859] text-[#292E17] flex items-center justify-center font-bold font-serif text-xl mb-6 shadow-lg relative z-10">
                  02
                </div>
                <div className="w-full">
                  <FlipCard 
                    frontImage="/images/VERDE CLARO.png"
                    front={<><h3 className="text-xl font-bold font-serif">Entrevista Previa</h3><p className="text-sm mt-2 font-light opacity-80">Toca para leer</p></>}
                    back={<p className="text-sm leading-relaxed">Coordinamos un encuentro online de 30 minutos para despejar cualquier duda o consulta.</p>}
                  />
                </div>
              </div>

              {/* Paso 3 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8DCC4] border-4 border-[#868859] text-[#292E17] flex items-center justify-center font-bold font-serif text-xl mb-6 shadow-lg relative z-10">
                  03
                </div>
                <div className="w-full">
                  <FlipCard 
                    frontImage="/images/VERDE CLARO.png"
                    front={<><h3 className="text-xl font-bold font-serif">Pre-Retiro</h3><p className="text-sm mt-2 font-light opacity-80">Encuentro Grupal 1</p></>}
                    back={<p className="text-sm leading-relaxed">Una semana antes tendremos un encuentro online grupal para conocernos, brindar herramientas, sugerencias para preparar el cuerpo y despejar dudas.</p>}
                  />
                </div>
              </div>

              {/* Paso 4 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8DCC4] border-4 border-[#868859] text-[#292E17] flex items-center justify-center font-bold font-serif text-xl mb-6 shadow-lg relative z-10">
                  04
                </div>
                <div className="w-full">
                  <FlipCard 
                    frontImage="/images/VERDE CLARO.png"
                    front={<><h3 className="text-xl font-bold font-serif">Post-Retiro</h3><p className="text-sm mt-2 font-light opacity-80">Encuentro Grupal 2</p></>}
                    back={<p className="text-sm leading-relaxed">Dos semanas después del retiro nos reencontramos online para optimizar la integración y capitalizar los aprendizajes obtenidos.</p>}
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
              <h2 className="text-3xl font-bold font-serif text-[#3B1B0E]">Comidas</h2>
            </div>
            <p className="text-lg opacity-90 leading-relaxed">
              Alimentación vegetariana incluida. Son preparaciones coloridas y equilibradas nutricionalmente, pensadas para acompañar tu proceso.
            </p>
            <div className="bg-[#868859]/10 p-6 rounded-2xl border border-[#868859]/30">
              <ul className="space-y-4 font-medium">
                <li className="flex justify-between border-b border-[#3B1B0E]/10 pb-2"><span>Día 1</span> <span>Almuerzo, Merienda, Cena</span></li>
                <li className="flex justify-between border-b border-[#3B1B0E]/10 pb-2"><span>Día 2</span> <span className="text-right">Desayuno, Cena <br/><span className="text-sm text-[#7E2625] font-normal">(Sin almuerzo para cuidar ayuno)</span></span></li>
                <li className="flex justify-between border-b border-[#3B1B0E]/10 pb-2"><span>Día 3</span> <span>Desayuno, Almuerzo, Merienda, Cena</span></li>
                <li className="flex justify-between"><span>Día 4</span> <span>Desayuno, Almuerzo</span></li>
              </ul>
            </div>
            <div className="flex items-start gap-3 bg-[#E8DCC4] border border-[#7E2625]/30 p-4 rounded-xl text-sm">
              <Info className="text-[#7E2625] shrink-0" size={20} />
              <p><strong>Nota importante:</strong> Dar aviso en caso de alergias o restricciones alimenticias. El menú se adecua a necesidades relevantes.</p>
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
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-12 text-[#292E17]">Facilitadores</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <FlipCard 
              frontImage="/images/eli.jpg"
              front={<h3 className="text-xl font-bold font-serif">Eliana Martines</h3>}
              back={<p className="text-sm">Coach Ontológica - Terapias asistidas con Psicodélicos - Facilitadora de respiración. Crioterapia e instructora de yoga.</p>}
            />
          </div>
        </div>
      </section>

      {/* 6. VALORES Y CONDICIONES */}
      {/* 6. VALORES Y CONDICIONES */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#3B1B0E]">Precios</h2>
          <p className="mt-4 text-lg opacity-80">Un proceso transparente, diseñado para acompañarte desde el primer paso.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Tarjeta 1: Inscripción al Form */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#868859]/20 text-center relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#868859]" />
            <div>
              <h3 className="text-2xl font-bold text-[#292E17] mb-1"></h3>
              <p className="text-5xl font-bold font-serif text-[#7E2625] mb-4">$600 <span className="text-lg text-[#3B1B0E]/50 font-sans">USD</span></p>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfcTIFxNn8oyNWtbM9rWhMKSQoNQ7R22PNbTEVN1HsHK2Y3rA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-[#292E17] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all hover:-translate-y-1 hover:shadow-lg mt-2"
            >
              Iniciar Inscripción
            </a>
          </div>

          {/* Tarjeta 2: Contacto */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#7E2625]/20 text-center relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#7E2625]" />
            <div>
              <p className="text-3xl md:text-4xl font-bold font-serif text-[#7E2625] mb-4 mt-2">Realiza tu consulta</p>
            </div>
            <Link 
              href="/contacto"
              className="block w-full py-3 bg-[#7E2625] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all hover:-translate-y-1 hover:shadow-lg mt-2"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="bg-[#868859]/10 rounded-3xl p-8 md:p-10 border border-[#868859]/30">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2"><ShieldCheck className="text-[#292E17]" /> Condiciones de Pago</h4>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <CreditCard className="text-[#7E2625] shrink-0" />
              <p className="text-sm leading-relaxed"><strong>Medios de pago:</strong> Transferencia bancaria (comisión a cargo del emisor). Contamos con facilidades de pago y cuotas sin interés.</p>
            </div>
            <div className="flex gap-4">
              <HeartHandshake className="text-[#7E2625] shrink-0" />
              <p className="text-sm leading-relaxed"><strong>Reserva:</strong> Se efectiviza al completar formulario, entrevista y enviar comprobante del pago completo o 1ra cuota.</p>
            </div>
            <div className="flex gap-4">
              <Info className="text-[#7E2625] shrink-0" />
              <p className="text-sm leading-relaxed"><strong>Reembolsos:</strong> Una vez realizado el pago, no se realizan reembolsos. La totalidad debe estar abonada al comenzar.</p>
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
                    <p className="text-sm text-[#7E2625]">Participante • {testimoniosRetiro[currentTestimonial].age}</p>
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