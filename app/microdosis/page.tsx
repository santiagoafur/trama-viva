"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Stethoscope,
  HeartHandshake,
  Eye,
  Zap,
  RefreshCw,
  Heart,
  Check,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { useLanguage } from "@/lib/language-context";
import { microdosisPage } from "@/lib/content";

const considerationIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  "heart-handshake": HeartHandshake,
};

const benefitIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  eye: Eye,
  zap: Zap,
  "refresh-cw": RefreshCw,
  heart: Heart,
};

export default function MicrodosisPage() {
  const { locale } = useLanguage();
  const content = microdosisPage[locale];
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <main>
      <Navbar />
      <PageHero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        backgroundImage={content.hero.backgroundImage}
      />

      {/* Intro */}
      <SectionWrapper variant="default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            {content.intro.description}
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Considerations */}
      <SectionWrapper variant="alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center mb-16"
        >
          {content.considerations.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {content.considerations.items.map((item, index) => {
            const Icon = considerationIcons[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8 bg-background rounded-sm border border-border/50 text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Target Audience */}
      <SectionWrapper variant="default">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {content.targetAudience.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {content.targetAudience.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-card rounded-sm border-l-4 border-secondary hover:border-accent transition-colors"
              >
                <Check className="flex-shrink-0 mt-0.5 text-secondary" size={20} />
                <span className="text-foreground/80">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper variant="alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center mb-16"
        >
          {content.benefits.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.benefits.cards.map((card, index) => {
            const Icon = benefitIcons[card.frontIcon] || Eye;
            return (
              <motion.div
                key={card.frontTitle}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative w-full aspect-square cursor-pointer group"
                style={{ perspective: "1000px" }}
                onClick={() => toggleCard(index)}
                onKeyDown={(e) => e.key === "Enter" && toggleCard(index)}
                tabIndex={0}
                role="button"
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-sm overflow-hidden bg-primary flex flex-col items-center justify-center p-6"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={40} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-foreground text-center">
                      {card.frontTitle}
                    </h3>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-sm overflow-hidden bg-card border border-border p-6 flex items-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {card.backContent}
                    </p>
                  </div>
                </motion.div>

                <div className="absolute bottom-2 right-2 text-xs text-primary-foreground/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  Click
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper variant="dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {content.cta.title}
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/70">
            {content.cta.description}
          </p>
          <div className="mt-10">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-medium tracking-wide uppercase text-sm hover:bg-accent/90 transition-all duration-300 group"
            >
              <Calendar size={18} />
              {content.cta.button}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
