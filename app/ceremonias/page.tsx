"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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

// --- Datos del Carrusel de Testimonios ---
const testimoniosData = [
  {
    name: "Sofía - Argentina", 
    age: "30 años",
    image: "/images/testimonios/sofia.PNG",
    text: `Me encanto, fue perfecto como fue. Amo al mundo, me siento super expandida, vi muchas cosas que no habia podiado ver antes. O q las entendia pero no las sentia de verdad. 
Fue muy cuidado, el lugar alucinante y la musica muy hermosa. Gracias!
`
  },
  {
    name: "Natalie - United States", 
    age: "32 años",
    image: "/images/testimonios/natalie.PNG",
    text: `Happy to! I told Eli after the experience - Im so grateful for the safe space you created here. 
    Ive joined other plant medicine ceremonies in the past and actually had negative experiences from them because it didnt feel like a safe, welcoming, supportive space. 
    You all did such a fantastic job of making it feel like a safe space from the very beginning, which allowed all of us to have the positive experiences we did and release control to the medicine. 
    The location was absolutely incredible - I loved hearing the sounds of the jungle around me, watching the most beautiful sunset (which felt like it went on for two hours and brought profound messages to me), and watching the stars. 
    You made me feel comfortable right away when I got there. The breathwork to bring us into it was great, and the music was incredible and added so much to guiding the experience with the medicine. 
    I trusted Eli a lot with her knowledge and respect for the medicine and really liked how she met with us one on one to decide our dosage and our additional microdose if we wanted it later - that felt very comfortable. 
    And the pipas and fruit at the end just felt like they were sent from an angel. All around, fantastic. Id recommend this so highly (and already have told so many people how much I loved it). Muchísimas gracias!`
  },
  {
    name: "Francisco - Ecuador", 
    age: "42 años",
    image: "/images/testimonios/francisco.jpg",
    text: `Ya en camino de regreso a la realidad!!! Lleno de gratitud, amor y sobretodo mayor perspectiva y claridad mental después de una experiencia realmente mágica!!!
Gracias por tu compañía y cariño!!!
Me sentí muy seguro, cuidado, guiado y querido!!! Gracias, gracias, gracias!!!
`
  },
  {
    name: "Emilie - Lisboa", 
    age: "33 años",
    image: "/images/testimonios/emilie.PNG",
    text: `Eli ensured that the Sacred Medicine Ceremony took place under the right conditions, in the perfect environment- 
    House of Shakti was ideal for it. She also made sure her own intentions and energy were aligned, creating a truly sacred space.`
  }
];

export default function CeremoniasPage() {
  // Estado para el Carrusel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/ceremonias/hero-ceremonia.jpg" 
          alt="Ceremonias Trama Viva"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#3B1B0E]/50" /> 
        
        <div className="relative z-10 text-center text-[#E8DCC4] px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 drop-shadow-lg">
            Ceremonia Macro de Medicina Sagrada
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            Un encuentro íntimo con tu parte esencial
          </p>
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
            Una experiencia psicodélica es algo único y profundamente sagrado, con un inmenso potencial para transformarnos.
          </p>
          <p>
            Puede revelarnos aspectos esenciales de nosotros mismos y de la realidad que habitamos en un breve lapso de tiempo, ayudándonos a reconectar con nuestro potencial de crecimiento y desarrollo como seres humanos.
          </p>
          <p>
            La intención de esta experiencia es ir al encuentro íntimo con nosotros mismos, acompañados por la medicina de los hongos, dentro de un contexto seguro y con un acompañamiento adecuado.
          </p>
          <p>
            El espacio donde realizaremos la ceremonia es cuidado, cómodo y seguro para que puedas vivir un momento significativo que aporte profundidad, claridad y valor a tu vida.
          </p>
        </motion.div>
      </section>

      {/* 3. ¿PARA QUIÉN ES? Y PROPÓSITO */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/ceremonias/hero-ceremonia-2.jpg" alt="Para quien es la ceremonia" fill className="object-cover" />
          </div>
          <div className="space-y-6 lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#292E17]">¿Para quién es esta experiencia?</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Esta experiencia está dirigida a personas que sienten la voluntad a profundizar en su autoconocimiento, sanar, despertar su sensibilidad y reconectar con su parte esencial.
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              También para quienes buscan abrirse a una nueva comprensión de la vida y de sus conductas repetitivas, expandir su conciencia y cultivar una relación más auténtica consigo mismos, con los demás y con la naturaleza.
            </p>
            <div className="bg-[#868859]/10 border-l-4 border-[#7E2625] p-6 rounded-r-2xl mt-6">
              <p className="text-lg font-medium text-[#7E2625]">
                No se trata de una experiencia recreativa, sino de un espacio de introspección, conexión y transformación personal, guiado con respeto, cuidado y amor.
              </p>
            </div>
          </div>
        </div>

        {/* Propósito Blockquote */}
        <div className="max-w-4xl mx-auto bg-[#292E17] text-[#E8DCC4] p-10 md:p-16 rounded-3xl text-center shadow-xl">
          <Heart className="mx-auto mb-6 text-[#7E2625]" size={40} />
          <h3 className="text-2xl md:text-3xl font-serif italic leading-relaxed">
            "Nuestro propósito es generar un entorno seguro y sostenido, donde cada participante pueda entregarse al proceso con confianza. Creemos que sentirse cuidado y acompañado es lo que permite que la transformación ocurra con profundidad y amor."
          </h3>
        </div>
      </section>

      {/* 4. QUÉ INCLUYE Y EL LUGAR */}
      <section className="py-20 bg-[#F4EDE0] px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Qué Incluye */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-center mb-16 text-[#3B1B0E]">La Estructura</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#868859]/20 text-center">
                <div className="w-16 h-16 bg-[#868859]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#292E17]"><Info size={32} /></div>
                <h3 className="text-2xl font-bold mb-4">Inscripción</h3>
                <p className="text-[#3B1B0E]/70">Formulario inicial y evaluación previa.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#7E2625]/20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#7E2625]" />
                <div className="w-16 h-16 bg-[#7E2625]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#7E2625]"><Clock size={32} /></div>
                <h3 className="text-2xl font-bold mb-4">Ceremonia</h3>
                <p className="text-[#3B1B0E]/70 mb-2">Medicina, acompañamiento y sostén.</p>
                <p className="text-sm font-medium text-[#7E2625]">3:00 PM a 9:00 PM (6 HS)</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#868859]/20 text-center">
                <div className="w-16 h-16 bg-[#868859]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#292E17]"><Users size={32} /></div>
                <h3 className="text-2xl font-bold mb-4">Integración</h3>
                <p className="text-[#3B1B0E]/70 mb-2">Encuentro presencial OPCIONAL al siguiente día.</p>
                <p className="text-sm font-medium text-[#292E17]">4:00 PM a 6:00 PM (2 HS)</p>
              </div>
            </div>
          </div>

          {/* El Lugar */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[#7E2625] font-bold tracking-widest uppercase text-sm">El Lugar</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#292E17]">Santuario House of Shakti</h2>
              <p className="text-lg opacity-90 leading-relaxed">
                Un refugio tranquilo y lujoso ubicado en el corazón de la naturaleza, diseñado para inspirar conexión, transformación y regeneración.
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                Escondido en la cima de una serena colina, este lugar íntimo ofrece total privacidad y vistas impresionantes de la jungla, a solo cinco minutos en auto de Playa Hermosa, Santa Teresa.
              </p>
              <p className="text-lg opacity-90 leading-relaxed font-medium bg-[#868859]/10 p-4 rounded-xl">
                La ceremonia se realiza en estudio privado con las comodidades necesarias para que puedas relajarte en un entorno natural y al mismo tiempo permitirte entrar en conexión.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-xl"><Image src="/images/ceremonias/HOS-ceremonia2.jpg" alt="House of Shakti 1" fill className="object-cover" /></div>
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-xl mt-12"><Image src="/images/ceremonias/HOS-ceremonia3.jpg" alt="House of Shakti 2" fill className="object-cover" /></div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PREPARACIÓN PREVIA (TIMELINE TRACKING) */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#3B1B0E]">Preparación Previa</h2>
          <p className="text-[#7E2625] font-medium tracking-wide">( De 1 semana a 3 días antes )</p>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            La preparación es una parte esencial del proceso. Nos permite llegar a la experiencia con claridad, apertura y mayor presencia.
          </p>
        </div>

        <div className="relative border-l-2 border-[#868859]/30 ml-4 md:ml-12 space-y-12 pb-8">
          {[
            { title: "Crear Espacio", text: "Si te surgen dudas/miedos/consultas dales lugar. Siéntete libre de compartirlo. Crear espacio a lo que surge es una forma de entrar en la experiencia." },
            { title: "Registro", text: "Permite observar con curiosidad sensaciones, pensamientos y situaciones de la cotidianidad." },
            { title: "Intención", text: "Tomate un tiempo para reflexionar sobre lo que deseas explorar. Podés escribirlo o simplemente sentirlo en tu corazón." },
            { title: "Alimentación", text: "Opta por comidas ligeras y nutritivas. Evitá carnes rojas, alcohol, alimentos procesados y exceso de cafeína. Mantén hidratación." },
            { title: "Cuerpo", text: "Incorpora prácticas suaves como yoga, caminatas conscientes o estiramientos. Descansa." },
            { title: "Mente", text: "Reducí el consumo de redes sociales o noticias. Permite momentos de silencio, escritura o meditación." },
            { title: "Medicamentos", text: "Si estás bajo tratamiento médico o psicológico, es importante conversar previamente con el equipo facilitador." },
          ].map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#E8DCC4] border-4 border-[#868859]" />
              <h3 className="text-2xl font-bold text-[#292E17] mb-2">{item.title}</h3>
              <p className="text-[#3B1B0E]/80 text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#292E17] text-[#E8DCC4] p-8 rounded-2xl text-center shadow-lg max-w-3xl mx-auto">
          <p className="text-xl italic font-serif">
            "La preparación previa no busca perfección, sino presencia. Llegar a la ceremonia con una mente más tranquila y un cuerpo más liviano facilita que la medicina actúe de forma más clara y amorosa."
          </p>
        </div>
      </section>

      {/* 6. FACILITADORES RECICLADOS */}
      <section className="py-20 bg-[#F4EDE0] px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-12 text-[#292E17]">Facilitadores</h2>
          {/* Centramos las cards limitando el ancho máximo ya que son solo dos */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            <FlipCard 
              frontImage="/images/eli.jpg"
              front={
                <>
                  <h3 className="text-2xl font-bold font-serif">Eliana Martinez</h3>
                  <p className="text-sm mt-1 opacity-80">@eli.mar.lov</p>
                </>
              }
              back={<p className="text-sm leading-relaxed">Coach Ontológica - PNL y Sistema Nervioso - Terapias Asistidas con Psicodélicos - Facilitadora de Respiración y Crioterapia - Instructora de Yoga y Meditación</p>}
            />
            <FlipCard 
              frontImage="/images/jony.jpg"
              front={
                <>
                  <h3 className="text-2xl font-bold font-serif">Jonathan Merla</h3>
                  <p className="text-sm mt-1 opacity-80">@jonamerla</p>
                </>
              }
              back={<p className="text-sm leading-relaxed">Facilitador de espacios de sanación y crecimiento personal. Facilitador de respiración e instructor de yoga.</p>}
            />
          </div>

          {/* Aclaración Importante (Reubicada abajo de los facilitadores) */}
          <div className="bg-[#E8DCC4] border border-[#7E2625]/30 p-8 md:p-10 rounded-3xl text-left max-w-4xl mx-auto shadow-md">
            <div className="flex items-center gap-4 mb-6 text-[#7E2625]">
              <AlertTriangle size={32} />
              <h3 className="text-2xl font-bold">Aclaración Importante</h3>
            </div>
            <div className="space-y-4 text-lg text-[#3B1B0E]/90 leading-relaxed">
              <p>Esta experiencia no es recreativa y no sustituye ni reemplaza la importancia de un proceso terapéutico individual y completo.</p>
              <p>Es un enfoque terapéutico asistido con psicodélicos para un profundo crecimiento interior y la responsabilidad sobre tu proceso personal es tuya.</p>
              <ul className="list-disc list-inside mt-4 space-y-2 font-medium">
                <li>No hace falta tener experiencia previa.</li>
                <li>Los cupos son muy limitados para asegurar el cuidado y la intimidad de la energía del grupo.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRECIOS */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#3B1B0E]">Precios</h2>
          <p className="mt-4 text-lg opacity-80">Los precios varían dependiendo la cantidad de personas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Grupal */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#868859]/20 text-center flex flex-col justify-between">
            <div>
              <Users className="mx-auto mb-4 text-[#868859]" size={32} />
              <h3 className="text-xl font-bold text-[#292E17] mb-2">Ceremonia Grupal</h3>
              <p className="text-sm text-[#3B1B0E]/60 mb-6">5 a 8 Personas</p>
            </div>
            <div>
              <p className="text-4xl font-bold font-serif text-[#7E2625] mb-6">$200 <span className="text-sm text-[#3B1B0E]/50 font-sans">USD</span></p>
              <button className="w-full py-3 bg-[#292E17] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all">Consultar</button>
            </div>
          </div>
          {/* Íntima */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#868859] text-center relative flex flex-col justify-between transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#868859] text-[#E8DCC4] px-4 py-1 rounded-b-xl text-xs font-bold tracking-wider">MÁS ELEGIDA</div>
            <div className="mt-4">
              <User className="mx-auto mb-4 text-[#868859]" size={32} />
              <h3 className="text-xl font-bold text-[#292E17] mb-2">Ceremonia Íntima</h3>
              <p className="text-sm text-[#3B1B0E]/60 mb-6">2 a 4 Personas</p>
            </div>
            <div>
              <p className="text-5xl font-bold font-serif text-[#7E2625] mb-6">$250 <span className="text-sm text-[#3B1B0E]/50 font-sans">USD</span></p>
              <button className="w-full py-4 bg-[#868859] text-[#E8DCC4] rounded-full font-bold hover:bg-[#292E17] transition-all">Consultar</button>
            </div>
          </div>
          {/* Individual */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#868859]/20 text-center flex flex-col justify-between">
            <div>
              <User className="mx-auto mb-4 text-[#868859]" size={32} />
              <h3 className="text-xl font-bold text-[#292E17] mb-2">Ceremonia Individual</h3>
              <p className="text-sm text-[#3B1B0E]/60 mb-6">1 Persona</p>
            </div>
            <div>
              <p className="text-4xl font-bold font-serif text-[#7E2625] mb-6">$50 <span className="text-sm text-[#3B1B0E]/50 font-sans">USD</span></p>
              <button className="w-full py-3 bg-[#292E17] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all">Consultar</button>
            </div>
          </div>
        </div>
        <p className="text-center font-medium text-[#7E2625] flex items-center justify-center gap-2">
          <CheckCircle2 size={18} /> Contamos con facilidades de pago.
        </p>
      </section>

      {/* 8. TESTIMONIOS (CARRUSEL) */}
      <section className="py-24 bg-[#292E17] text-[#E8DCC4] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4">Testimonios</h2>
          <p className="text-lg opacity-80 mb-16">Experiencias de transformación</p>

          <div className="relative min-h-[400px] md:min-h-[300px] flex flex-col items-center justify-center">
            <Quote className="text-[#868859]/30 mb-8" size={64} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <p className="text-xl md:text-3xl italic font-serif leading-relaxed mb-10 text-[#E8DCC4]/90">
                  "{testimoniosData[currentTestimonial].text}"
                </p>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-[#868859]">
                    <Image 
                      src={testimoniosData[currentTestimonial].image} 
                      alt={testimoniosData[currentTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimoniosData[currentTestimonial].name}</h4>
                    <p className="text-sm opacity-70">Participante • {testimoniosData[currentTestimonial].age}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles del Carrusel */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-[#868859]/50 flex items-center justify-center hover:bg-[#868859]/20 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {testimoniosData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${currentTestimonial === index ? 'w-8 bg-[#868859]' : 'w-2 bg-[#868859]/30'}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-[#868859]/50 flex items-center justify-center hover:bg-[#868859]/20 transition-all"
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