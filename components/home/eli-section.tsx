"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { homePage } from "@/lib/content";
import { SectionWrapper } from "@/components/section-wrapper";

export function EliSection() {
  const { locale } = useLanguage();
  const content = homePage[locale].eli;

  return (
    <SectionWrapper variant="default">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] lg:aspect-square overflow-hidden order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-secondary/20 rounded-sm" />
          <Image
            src={content.image}
            alt={content.name}
            fill
            className="object-cover rounded-sm"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-secondary/30 rounded-sm -z-10" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <span className="text-secondary text-sm uppercase tracking-widest font-medium">
            {content.title}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {content.name}
          </h2>

          {/* Bio */}
          <p className="mt-8 text-foreground/60 leading-relaxed">
            {content.bio}
          </p>

          {/* Credentials List (Acá se inyecta la lista) */}
          {content.credentials && (
            <ul className="mt-6 space-y-3">
              {content.credentials.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-foreground/80">
                  <span className="text-secondary mt-1 font-bold">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}