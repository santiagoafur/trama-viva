"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { homePage } from "@/lib/content";

const CHAR_LIMIT = 280;

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
          className="text-xs font-semibold tracking-widest uppercase text-[#868859] hover:text-[#292E17] transition-colors border-b border-[#868859]/40 hover:border-[#292E17] pb-0.5"
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
}

export function TestimonialsSection() {
  const { locale } = useLanguage();
  const content = homePage[locale].testimonios;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % content.items.length);
  const prev = () => setCurrent((prev) => (prev - 1 + content.items.length) % content.items.length);

  return (
    <section className="py-24 bg-[#E8DCC4] text-[#3B1B0E] px-4 border-t border-[#868859]/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-[#292E17]">
          {content.title}
        </h2>
        <p className="text-base opacity-80 mb-16 text-[#7E2625]">
          {content.subtitle}
        </p>

        <div className="relative flex flex-col items-center justify-start min-h-[380px]">
          <Quote className="text-[#868859]/40 mb-8" size={48} />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center w-full"
            >
              <TestimonialText text={content.items[current].quote} />

              <div className="flex flex-col items-center gap-4 mt-8">
                <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-[#868859]">
                  <Image
                    src={content.items[current].image}
                    alt={content.items[current].name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#292E17]">
                    {content.items[current].name}
                  </h4>
                  {content.items[current].role && (
                    <p className="text-sm text-[#7E2625]">
                      {content.items[current].role}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navegación */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-[#868859] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#E8DCC4] transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {content.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  current === index
                    ? "w-8 bg-[#868859]"
                    : "w-2 bg-[#868859]/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-[#868859] flex items-center justify-center text-[#868859] hover:bg-[#868859] hover:text-[#E8DCC4] transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}