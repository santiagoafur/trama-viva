"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { EliSection } from "@/components/home/eli-section";
import { CaminosSection } from "@/components/home/caminos-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ContactoPage from "./contacto/page";

export default function Home() {
  const { locale } = useLanguage();

  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      {/* Quote Home */}
      <section className="relative w-full overflow-hidden bg-[#292E17]">
        <div className="grid lg:grid-cols-2 min-h-[500px]">

          {/* Imagen izquierda */}
          <div className="relative w-full min-h-[350px] lg:min-h-full">
            <Image
              src="/images/quote-home.webp"
              alt="Quote Trama Viva"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#292E17]/20" />
          </div>

          {/* Texto derecho */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center px-10 py-16 lg:px-16"
          >
            <Quote size={40} className="text-[#868859]/50 mb-8" />
            <p className="text-2xl md:text-3xl font-serif italic text-[#E8DCC4] leading-relaxed whitespace-pre-line">
              {locale === "es"
                ? "Los hongos nos recuerdan\nnuestro vínculo ancestral con la naturaleza.\nNos enseñan que somos lo mismo,\nque estamos interconectados por nuestras raíces,\ny que compartimos el mismo lenguaje."
                : "Mushrooms remind us of our ancestral bond with nature.\nThey teach us that we are the same,\nthat we are interconnected by our roots,\nand that we share the same language."}
            </p>
            <div className="mt-10 w-12 h-0.5 bg-[#868859]/50" />
          </motion.div>

        </div>
      </section>
      <EliSection />
      <CaminosSection />
      <TestimonialsSection />
      {/* Quote Contacto */}
      <section className="relative w-full overflow-hidden bg-[#292E17]">
        <div className="grid lg:grid-cols-2 min-h-[600px]">

          {/* Imagen izquierda */}
          <div className="relative w-full min-h-[400px] lg:min-h-full">
            <Image
              src="/images/contact-quote-home.webp"
              alt="La Tierra nos habla"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#292E17]/30" />
          </div>

          {/* Texto derecho */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center px-10 py-16 lg:px-16"
          >
            <Quote size={40} className="text-[#868859]/50 mb-8" />
            <p className="text-base md:text-lg font-serif italic text-[#E8DCC4] leading-relaxed whitespace-pre-line">
              {locale === "es"
                ? "La Tierra nos habla en múltiples lenguajes. Los hongos son uno de esos lenguajes.\nReservorios de sabiduría y medicina, guardianes invisibles que sostienen la vida desde las raíces. Nos recuerdan que no estamos separados, que nuestra existencia late en la misma trama que sostiene a plantas, animales y suelos.\nSu enseñanza es clara: la vida prospera cuando se comparte, cuando se nutre, cuando se coopera.\nEllos no buscan protagonismo, sino expansión en red. Nos muestran que el florecimiento individual es inseparable del florecimiento colectivo.\nComo el micelio bajo la tierra, las experiencias se entrelazan y generan una red de sabiduría compartida."
                : "The Earth speaks to us in multiple languages. Mushrooms are one of those languages.\nReservoirs of wisdom and medicine, invisible guardians that sustain life from the roots. They remind us that we are not separate, that our existence beats in the same web that sustains plants, animals and soils.\nTheir teaching is clear: life thrives when it is shared, when it is nourished, when it cooperates.\nThey do not seek prominence, but expansion in network. They show us that individual flourishing is inseparable from collective flourishing.\nLike the mycelium beneath the earth, experiences intertwine and generate a web of shared wisdom."}
            </p>
            <div className="mt-10 w-12 h-0.5 bg-[#868859]/50" />
          </motion.div>

        </div>
      </section>

      <ContactoPage />
    </main>
  );
}
