"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { homePage } from "@/lib/content";
import { SectionWrapper } from "@/components/section-wrapper";

export function TestimonialsSection() {
  const { locale } = useLanguage();
  const content = homePage[locale].testimonios;
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % content.items.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + content.items.length) % content.items.length
    );
  };

  return (
    <SectionWrapper variant="dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {content.title}
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/60">
          {content.subtitle}
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Quote
              className="mx-auto text-secondary/40 mb-6"
              size={48}
            />
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-primary-foreground/90 italic">
              {content.items[current].quote}
            </blockquote>
            <div className="mt-10 flex flex-col items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-secondary/50">
                <Image
                  src={content.items[current].image}
                  alt={content.items[current].name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">
                  {content.items[current].name}
                </p>
                <p className="text-sm text-primary-foreground/60">
                  {content.items[current].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prev}
            className="p-3 border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-primary-foreground/70" />
          </button>

          <div className="flex gap-2">
            {content.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-secondary w-8"
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-primary-foreground/70" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
