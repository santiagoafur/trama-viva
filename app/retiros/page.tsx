"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Check,
  ArrowRight,
  Bell,
  X,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { useLanguage } from "@/lib/language-context";
import { retirosPage } from "@/lib/content";

import { RetreatCarousel } from "@/components/retreat-carousel";

export default function RetirosPage() {
  const { locale } = useLanguage();
  const content = retirosPage[locale];
  
  const safeContent = content as any;

  // Estados para Modal
  const [selectedRetreat, setSelectedRetreat] = useState<string | null>(null);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  // Estado para el Carrusel de Testimonios
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleCard = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedRetreatData = content.retreats.find(
    (r) => r.id === selectedRetreat
  );

  const carouselImages = [
    "/images/retiros-hero.jpg", 
    "/images/ceremonias-hero.jpg",
    "/images/microdosis-hero.jpg",
    "/images/medicina-naturaleza.jpg"
  ];

  // Datos de los testimonios con condicional de idioma
  const testimoniosRetiro = [
    {
      name: "José Gonzalez",
      location: "Costa Rica",
      image: "/images/testimonios/jose.jpg", // Recordá subir esta foto o cambiar la ruta
      text: locale === "es" 
        ? "Tuve un viaje realmente poderoso y transformador con esta medicina sagrada de plantas. La intención que establecí fue 'renacimiento' y recibí más de lo que nunca podría haber imaginado. Integrar esta experiencia fue muy enriquecedor para mi vida. ¡Muchas gracias Eli y Jona por crear este hermoso espacio, sostenerlo y guiarnos en este mágico viaje! Me siento profundamente agradecido por haber podido vivir esta experiencia!"
        : "I had a truly powerful and transformative journey with this sacred plant medicine. The intention I set was 'rebirth' and I received more than I could have ever imagined. Integrating this experience was very enriching for my life. Thank you so much Eli and Jona for creating this beautiful space, holding it, and guiding us on this magical journey! I feel deeply grateful to have been able to live this experience!"
    },
    {
      name: "Facundo Saad",
      location: "Argentina",
      image: "/images/testimonios/facundo.jpg", // Recordá subir esta foto o cambiar la ruta
      text: locale === "es"
        ? "La verdad que fue una experiencia muy enriquecedora. Fue mi segunda vez utilizando la medicina con fines terapéuticos y realmente pude notar como cambia cuando se hace en grupo y en forma de retiro. Es un portal hacia adentro para seguir profundizando sobre el autoconocimiento y sin dudas que la integración posterior es igual de importante. Por eso me gusto tanto, porque no es solo el día de la ceremonia sino el pre y el post que lo hace tan especial. Lo volvería a hacer de nuevo sin dudarlo con plena confianza."
        : "The truth is it was a very enriching experience. It was my second time using the medicine for therapeutic purposes and I could really notice how it changes when done in a group and in a retreat format. It is an inward portal to continue deepening self-knowledge and without a doubt, the subsequent integration is just as important. That's why I liked it so much, because it's not just the day of the ceremony but the pre and post that makes it so special. I would do it again without hesitation and with full confidence."
    },
    {
      name: "Lucrecia Piovessano",
      location: "Argentina",
      image: "/images/testimonios/lucrecia.jpg", // Recordá subir esta foto o cambiar la ruta
      text: locale === "es"
        ? "Fue mi primer retiro y me marcó sin dudas. El ambiente físico hermoso y el humano mucho más. La asistencia puntualmente durante la ceremonia fue constante y amorosa, las explicaciones previas muy claras y las charlas en todo momento muy enriquecedoras. Un placer coincidir y regalarme esta experiencia."
        : "It was my first retreat and it undoubtedly left a mark on me. The physical environment was beautiful and the human one even more so. The assistance specifically during the ceremony was constant and loving, the prior explanations very clear, and the conversations at all times very enriching. A pleasure to cross paths and gift myself this experience."
    }
  ];

  // Funciones para mover el carrusel de testimonios
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimoniosRetiro.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimoniosRetiro.length) % testimoniosRetiro.length);
  };

  return (
    <main>
      <Navbar />
      <PageHero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        backgroundImage={content.hero.backgroundImage}
      />

      {/* Intro Section */}
      <SectionWrapper variant="default">
        <div className="max-w-6xl mx-auto text-center px-4 md:px-8">
          {content.intro.title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            >
              {content.intro.title}
            </motion.h2>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-foreground/80 leading-relaxed mx-auto max-w-5xl ${
              content.intro.title 
                ? "mt-6 text-lg" 
                : "font-serif text-lg md:text-xl whitespace-pre-line"
            }`}
          >
            {content.intro.description}
          </motion.p>
          
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-4xl mx-auto"
          >
            {content.intro.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-foreground/80"
              >
                <Check className="flex-shrink-0 mt-0.5 text-secondary" size={18} />
                <span className="text-sm font-medium">{feature}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Carrusel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto px-4 md:px-8 mt-20"
        >
          <RetreatCarousel images={carouselImages} />
        </motion.div>
      </SectionWrapper>

      {/* SLICE DE FRASE + IMAGEN DE FONDO */}
      {safeContent.quoteDivider && (
        <section className="w-full relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <Image
            src={safeContent.quoteDivider.image}
            alt="Naturaleza Trama Viva"
            fill
            className="object-cover z-0"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="max-w-4xl mx-auto px-8 py-16 text-center z-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="font-serif text-[#E8DCC4] text-3xl md:text-4xl lg:text-5xl font-medium leading-snug tracking-wide whitespace-pre-line">
                {safeContent.quoteDivider.quote}
              </p>
              {safeContent.quoteDivider.author && (
                <p className="mt-8 text-[#E8DCC4]/80 text-lg md:text-xl font-light tracking-wider">
                  {safeContent.quoteDivider.author}
                </p>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Retreats Grid */}
      <SectionWrapper variant="alt">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.retreats.map((retreat, index) => (
            <motion.div
              key={retreat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative w-full aspect-[3/4] cursor-pointer group"
              style={{ perspective: "1000px" }}
              onClick={() => toggleCard(retreat.id)}
              onKeyDown={(e) => e.key === "Enter" && toggleCard(retreat.id)}
              tabIndex={0}
              role="button"
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flippedCards[retreat.id] ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-sm overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src={retreat.image}
                    alt={retreat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  
                  {/* Status Badge */}
                  {retreat.status === "coming-soon" && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs uppercase tracking-wider rounded-full">
                      {retreat.date}
                    </div>
                  )}

                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    <span className="text-primary-foreground/70 text-xs uppercase tracking-widest flex items-center gap-2">
                      <MapPin size={14} />
                      {retreat.location}
                    </span>
                    <h3 className="mt-2 text-2xl lg:text-3xl font-bold text-primary-foreground">
                      {retreat.name}
                    </h3>
                    <p className="mt-3 text-primary-foreground/80 text-sm leading-relaxed">
                      {retreat.frontDescription}
                    </p>
                    
                    <div className="mt-6 flex items-center gap-6 text-primary-foreground/70 text-sm">
                      <span className="flex items-center gap-2">
                        <Calendar size={14} />
                        {retreat.date}
                      </span>
                      <span className="flex items-center gap-2">
                        {retreat.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-sm overflow-hidden bg-card border border-border"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="h-full p-6 lg:p-8 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground">
                      {retreat.name}
                    </h3>
                    <p className="mt-4 text-sm text-foreground/70 leading-relaxed flex-grow overflow-y-auto">
                      {retreat.backDescription}
                    </p>

                    {retreat.includes.length > 0 && (
                      <div className="mt-6">
                        <p className="text-xs uppercase tracking-wider text-foreground/50 mb-3">
                          {locale === "es" ? "Incluye:" : "Includes:"}
                        </p>
                        <ul className="space-y-2">
                          {retreat.includes.slice(0, 4).map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-foreground/70"
                            >
                              <Check size={14} className="flex-shrink-0 mt-0.5 text-secondary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-6 flex gap-3">
                      {retreat.status === "available" ? (
                        <>
                          <Link
                            href={`/retiros/${retreat.id}`}
                            onClick={(e) => e.stopPropagation()} 
                            onTouchStart={(e) => e.stopPropagation()} 
                            onTouchEnd={(e) => e.stopPropagation()} 
                            className="relative z-50 flex-1 px-4 py-3 border border-foreground/30 text-foreground text-sm font-medium hover:border-foreground hover:bg-foreground/5 transition-all text-center rounded-full"
                          >
                            {content.ctas.moreInfo}
                          </Link>
                          <Link
                            href="/contacto"
                            onClick={(e) => e.stopPropagation()}
                            onTouchStart={(e) => e.stopPropagation()} 
                            onTouchEnd={(e) => e.stopPropagation()} 
                            className="relative z-50 flex-1 px-4 py-3 bg-accent text-accent-foreground text-sm font-medium text-center hover:bg-accent/90 transition-all flex items-center justify-center gap-2 rounded-full"
                          >
                            {content.ctas.reserve}
                            <ArrowRight size={14} />
                          </Link>
                        </>
                      ) : (
                        <button
                          onClick={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()} 
                          onTouchEnd={(e) => e.stopPropagation()} 
                          className="relative z-50 w-full px-4 py-3 bg-secondary text-secondary-foreground text-sm font-medium flex items-center justify-center gap-2 rounded-full"
                        >
                          <Bell size={14} />
                          {content.ctas.notify}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute bottom-3 right-3 text-xs text-primary-foreground/40 pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity">
                Click para voltear
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* SLICE: MEDICINA DE LA NATURALEZA */}
      {safeContent.natureMedicine && (
        <SectionWrapper variant="default">
          <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-foreground uppercase"
            >
              {safeContent.natureMedicine.title}
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-10 space-y-8 text-foreground/80 leading-relaxed text-lg md:text-xl font-serif text-balance mx-auto"
            >
              {/* @ts-ignore */}
              {safeContent.natureMedicine.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>
          </div>
        </SectionWrapper>
      )}

      {/* SLICE: SET & SETTING */}
      <SectionWrapper variant="alt">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-foreground uppercase text-center"
          >
            SET & SETTING
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-foreground/80 leading-relaxed text-lg text-center max-w-3xl mx-auto font-serif"
          >
            {locale === "es"
              ? "El enfoque terapéutico en Terapias asistidas contempla la importancia del Set & Setting ya que influyen directamente en la calidad, seguridad y profundidad de la experiencia."
              : "The therapeutic approach in assisted therapies contemplates the importance of Set & Setting as they directly influence the quality, safety, and depth of the experience."}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background p-8 rounded-2xl border border-border/50 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4 tracking-wide border-b border-border pb-2 inline-block">SET</h3>
              <p className="text-foreground/80 leading-relaxed">
                {locale === "es"
                  ? "Es la mentalidad y estado interno de la persona: hace referencia al estado emocional, expectativas, intención y preparación de la persona. Un set adecuado reduce ansiedad y favorece la apertura, confianza y claridad."
                  : "It is the person's mindset and internal state: it refers to their emotional state, expectations, intention, and preparation. A proper set reduces anxiety and promotes openness, trust, and clarity."}
              </p>
              <p className="mt-4 text-foreground/60 italic text-sm">
                {locale === "es"
                  ? "Por eso enviamos un formulario previo, para conocer mejor a la persona y asegurarnos de reducir riesgos y daños."
                  : "That is why we send a preliminary form, to get to know the person better and ensure we reduce risks and harms."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-background p-8 rounded-2xl border border-border/50 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4 tracking-wide border-b border-border pb-2 inline-block">SETTING</h3>
              <p className="text-foreground/80 leading-relaxed">
                {locale === "es"
                  ? "Es el entorno externo donde se lleva a cabo la experiencia: el lugar, la atmósfera, la música, y la presencia de facilitadores de confianza. Un setting cuidado brinda seguridad, contención y apoyo."
                  : "It is the external environment where the experience takes place: the location, the atmosphere, the music, and the presence of trusted facilitators. A carefully curated setting provides safety, containment, and support."}
              </p>
              <p className="mt-4 text-foreground/60 italic text-sm">
                {locale === "es"
                  ? "Por eso elegimos espacios en la naturaleza, alejados de interferencias y ruidos."
                  : "That is why we choose spaces in nature, away from interference and noise."}
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-foreground/80 leading-relaxed text-lg text-center max-w-3xl mx-auto font-serif"
          >
            {locale === "es"
              ? "En conjunto, set y setting crean las condiciones óptimas para que la experiencia psicodélica sea terapéutica, minimizando riesgos y potenciando la integración de los aprendizajes."
              : "Together, set and setting create the optimal conditions for the psychedelic experience to be therapeutic, minimizing risks and enhancing the integration of insights."}
          </motion.p>
        </div>
      </SectionWrapper>

      {/* NUEVO SLICE: TESTIMONIOS (Estilo Carrusel Centralizado) */}
      <section className="py-24 bg-[#E8DCC4] text-[#3B1B0E] px-4 border-t border-[#868859]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-[#292E17]">
            {locale === "es" ? "Testimonios" : "Testimonials"}
          </h2>
          <p className="text-lg opacity-80 mb-16 text-[#7E2625]">
            {locale === "es" ? "Experiencias de Retiros" : "Retreat Experiences"}
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
                <p className="text-xl md:text-2xl lg:text-3xl italic font-serif leading-relaxed mb-10 text-[#3B1B0E]/90">
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

      {/* Modal for More Info */}
      <AnimatePresence>
        {selectedRetreat && selectedRetreatData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm"
            onClick={() => setSelectedRetreat(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-card rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedRetreat(null)}
                className="absolute top-4 right-4 p-2 hover:bg-foreground/5 transition-colors z-10 rounded-full"
              >
                <X size={24} className="text-foreground/70" />
              </button>

              <div className="relative">
                {/* @ts-ignore */}
                {selectedRetreatData.gallery && selectedRetreatData.gallery.length > 0 ? (
                  // @ts-ignore
                  <RetreatCarousel images={selectedRetreatData.gallery} />
                ) : (
                  <div className="relative h-64">
                    <Image
                      src={selectedRetreatData.image}
                      alt={selectedRetreatData.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-foreground/60 text-sm">
                  <span className="flex items-center gap-2">
                    <MapPin size={14} />
                    {selectedRetreatData.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {selectedRetreatData.date}
                  </span>
                  <span className="flex items-center gap-2">
                    {selectedRetreatData.price}
                  </span>
                </div>

                <h2 className="mt-4 text-3xl font-bold text-foreground">
                  {selectedRetreatData.name}
                </h2>

                <p className="mt-6 text-foreground/70 leading-relaxed whitespace-pre-line">
                  {selectedRetreatData.backDescription}
                </p>

                {selectedRetreatData.includes.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {locale === "es" ? "Incluye:" : "Includes:"}
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {selectedRetreatData.includes.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-foreground/70"
                        >
                          <Check size={16} className="flex-shrink-0 mt-0.5 text-secondary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 flex gap-4">
                  <Link
                    href={`/retiros/${selectedRetreatData.id}`}
                    className="flex-1 px-6 py-4 bg-accent text-accent-foreground font-medium text-center hover:bg-accent/90 transition-all flex items-center justify-center gap-2 rounded-full"
                  >
                    Ver más información
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}