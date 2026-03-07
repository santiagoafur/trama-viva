"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { homePage } from "@/lib/content";
import { SectionWrapper } from "@/components/section-wrapper";

export function CaminosSection() {
  const { locale } = useLanguage();
  const content = homePage[locale].caminos;

  return (
    <SectionWrapper variant="alt">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          {content.title}
        </h2>
        <p className="mt-4 text-lg text-foreground/60">{content.subtitle}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Link href={card.href} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <span className="text-primary-foreground/70 text-xs uppercase tracking-widest">
                    {card.type}
                  </span>
                  <h3 className="mt-2 text-2xl lg:text-3xl font-bold text-primary-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-primary-foreground/80 text-sm leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-primary-foreground text-sm font-medium group-hover:gap-3 transition-all">
                    {card.cta}
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
