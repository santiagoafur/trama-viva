"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, ArrowRight, BookOpen, X, Mail } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { useLanguage } from "@/lib/language-context";
import { dataPage } from "@/lib/content";

export default function DataPage() {
  const { locale } = useLanguage();
  const content = dataPage[locale];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return content.articles;
    const query = searchQuery.toLowerCase();
    return content.articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
    );
  }, [searchQuery, content.articles]);

  const selectedArticleData = content.articles.find(
    (a) => a.id === selectedArticle
  );

  return (
    <main>
      <Navbar />
      <PageHero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        backgroundImage={content.hero.backgroundImage}
      />

      {/* Search & Quick Links */}
      <SectionWrapper variant="default">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40"
              size={20}
            />
            <input
              type="text"
              placeholder={content.search.placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300 rounded-sm text-foreground text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground"
              >
                <X size={20} />
              </button>
            )}
          </motion.div>

          {/* Quick Links (Categorías) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8"
          >
            <h3 className="text-sm uppercase tracking-wider text-foreground/50 mb-4">
              {content.quickLinks.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {content.quickLinks.items.map((link) => {
                const categoryName = link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => {
                      // Al hacer click en la categoría, actualiza la barra de búsqueda
                      setSearchQuery(categoryName);
                    }}
                    className="px-4 py-2 bg-card border border-border hover:border-secondary hover:bg-secondary/5 transition-all duration-300 text-sm text-foreground/70 hover:text-foreground rounded-sm"
                  >
                    {link.title}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Articles Grid */}
      <SectionWrapper variant="alt">
        {filteredArticles.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <BookOpen className="mx-auto text-foreground/20 mb-4" size={48} />
            <p className="text-foreground/50 text-lg">
              {content.search.noResults}
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedArticle(article.id)}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-foreground/50 text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-secondary transition-colors mb-3">
                  {article.title}
                </h3>

                <p className="text-foreground/60 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 text-secondary text-sm font-medium group-hover:gap-3 transition-all">
                  Leer más
                  <ArrowRight size={16} />
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </SectionWrapper>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && selectedArticleData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.article
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#E8DCC4] rounded-xl max-w-3xl w-full my-8 max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 bg-[#3B1B0E]/20 hover:bg-[#3B1B0E]/40 text-[#3B1B0E] transition-colors z-10 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedArticleData.image}
                  alt={selectedArticleData.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E8DCC4] via-transparent to-transparent" />
              </div>

              <div className="p-8 md:p-12 text-[#3B1B0E]">
                <div className="flex items-center gap-4 text-[#3B1B0E]/60 text-sm mb-4">
                  <span className="px-3 py-1 bg-[#868859] text-[#E8DCC4] rounded-full text-xs uppercase tracking-wider font-bold">
                    {selectedArticleData.category}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock size={14} />
                    {selectedArticleData.readTime}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-[#292E17]">
                  {selectedArticleData.title}
                </h1>

                <div className="prose prose-lg max-w-none">
                  {selectedArticleData.content.split("\n\n").map((paragraph, i) => {
                    // Si el párrafo parece un subtitulo en mayúsculas
                    if (paragraph === paragraph.toUpperCase() && paragraph.length < 50) {
                      return (
                        <h3 key={i} className="text-xl font-bold font-serif text-[#7E2625] mt-8 mb-4">
                          {paragraph}
                        </h3>
                      );
                    }
                    return (
                      <p
                        key={i}
                        className="text-[#3B1B0E]/80 leading-relaxed mb-4 whitespace-pre-line"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Newsletter Box inside Modal */}
                <div className="mt-12 pt-8 border-t border-[#868859]/30 bg-[#868859]/10 p-8 rounded-2xl text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#7E2625] text-[#E8DCC4] mb-4">
                    <Mail size={24} />
                  </div>
                  <h4 className="text-2xl font-bold font-serif text-[#292E17] mb-2">
                    {content.newsletter.title}
                  </h4>
                  <p className="text-[#3B1B0E]/70 mb-6 max-w-md mx-auto">
                    {content.newsletter.description}
                  </p>
                  <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder={content.newsletter.placeholder} 
                      required
                      className="flex-1 px-4 py-3 bg-white border border-[#868859]/30 rounded-full focus:outline-none focus:border-[#7E2625] focus:ring-1 focus:ring-[#7E2625] text-[#3B1B0E]"
                    />
                    <button type="submit" className="px-8 py-3 bg-[#7E2625] text-[#E8DCC4] font-bold rounded-full hover:bg-[#3B1B0E] transition-all shadow-lg hover:-translate-y-1">
                      {content.newsletter.button}
                    </button>
                  </form>
                </div>

              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}