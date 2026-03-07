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
          <p className="mt-2 text-foreground/60 text-lg">{content.subtitle}</p>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 relative"
          >
            <Quote
              className="absolute -top-4 -left-2 text-secondary/30"
              size={48}
            />
            <blockquote className="pl-8 border-l-2 border-secondary/40">
              <p className="text-lg md:text-xl text-foreground/80 italic leading-relaxed">
                {content.quote}
              </p>
            </blockquote>
          </motion.div>

          <p className="mt-8 text-foreground/60 leading-relaxed">
            {content.bio}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
