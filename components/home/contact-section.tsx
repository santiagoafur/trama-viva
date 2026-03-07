"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { homePage } from "@/lib/content";
import { SectionWrapper } from "@/components/section-wrapper";

export function ContactSection() {
  const { locale } = useLanguage();
  const content = homePage[locale].contact;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <SectionWrapper id="contacto" variant="default">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm"
        >
          <Image
            src={content.image}
            alt="Contact"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-primary/20" />
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-foreground/60">{content.subtitle}</p>
          <p className="mt-2 text-foreground/50">{content.description}</p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">
                {content.form.name}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-300 rounded-sm text-foreground"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  {content.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-border focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-300 rounded-sm text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  {content.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-border focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-300 rounded-sm text-foreground"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">
                {content.form.interest}
              </label>
              <select
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-300 rounded-sm text-foreground"
              >
                <option value="">--</option>
                {content.form.interestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">
                {content.form.message}
              </label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-300 rounded-sm text-foreground resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-medium tracking-wide uppercase text-sm hover:bg-accent/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitted ? (
                <>
                  <Check size={18} />
                  {content.form.success}
                </>
              ) : (
                <>
                  {content.form.submit}
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
