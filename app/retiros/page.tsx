"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  DollarSign,
  Check,
  ArrowRight,
  Bell,
  X,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { useLanguage } from "@/lib/language-context";
import { retirosPage } from "@/lib/content";

export default function RetirosPage() {
  const { locale } = useLanguage();
  const content = retirosPage[locale];
  const [selectedRetreat, setSelectedRetreat] = useState<string | null>(null);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedRetreatData = content.retreats.find(
    (r) => r.id === selectedRetreat
  );

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
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
          >
            {content.intro.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-foreground/70 leading-relaxed"
          >
            {content.intro.description}
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-3xl mx-auto"
          >
            {content.intro.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-foreground/70"
              >
                <Check className="flex-shrink-0 mt-0.5 text-secondary" size={18} />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </SectionWrapper>

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
                          Incluye:
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

              <div className="relative h-64">
                <Image
                  src={selectedRetreatData.image}
                  alt={selectedRetreatData.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
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
                    {/* <DollarSign size={14} /> */}
                    {selectedRetreatData.price}
                  </span>
                </div>

                <h2 className="mt-4 text-3xl font-bold text-foreground">
                  {selectedRetreatData.name}
                </h2>

                <p className="mt-6 text-foreground/70 leading-relaxed">
                  {selectedRetreatData.backDescription}
                </p>

                {selectedRetreatData.includes.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Incluye:
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