"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, MessageCircle } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { useLanguage } from "@/lib/language-context";
import { siteContent } from "@/lib/content";

export default function ContactoPage() {
  const { language } = useLanguage();
  const content = siteContent[language];
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hola@tramaviva.com",
      href: "mailto:hola@tramaviva.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+54 9 11 1234 5678",
      href: "https://wa.me/5491112345678",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@tramaviva",
      href: "https://instagram.com/tramaviva",
    },
    {
      icon: MapPin,
      label: language === "es" ? "Ubicación" : "Location",
      value: "Buenos Aires, Argentina",
      href: "#",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title={language === "es" ? "Contacto" : "Contact"}
          subtitle={
            language === "es"
              ? "Estamos aquí para acompañarte en tu camino"
              : "We are here to accompany you on your journey"
          }
          image="/images/contact-section.jpg"
        />

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  {language === "es" ? "Conectemos" : "Let's Connect"}
                </h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  {language === "es"
                    ? "¿Tienes preguntas sobre nuestros retiros, procesos de microdosis o ceremonias? Estamos aquí para responder todas tus inquietudes y ayudarte a encontrar el camino adecuado para ti."
                    : "Do you have questions about our retreats, microdosing processes, or ceremonies? We are here to answer all your questions and help you find the right path for you."}
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-primary/5 transition-colors group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/5491112345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {language === "es" ? "Escribir por WhatsApp" : "Message on WhatsApp"}
                  </a>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    {language === "es" ? "Envíanos un mensaje" : "Send us a message"}
                  </h3>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {language === "es" ? "¡Mensaje enviado!" : "Message sent!"}
                      </h4>
                      <p className="text-muted-foreground">
                        {language === "es"
                          ? "Te responderemos a la brevedad."
                          : "We will respond shortly."}
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-accent hover:text-accent/80 font-medium"
                      >
                        {language === "es" ? "Enviar otro mensaje" : "Send another message"}
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {language === "es" ? "Nombre" : "Name"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          placeholder={language === "es" ? "Tu nombre" : "Your name"}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          placeholder={language === "es" ? "tu@email.com" : "your@email.com"}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {language === "es" ? "Asunto" : "Subject"}
                        </label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        >
                          <option value="">
                            {language === "es" ? "Seleccionar..." : "Select..."}
                          </option>
                          <option value="retiros">
                            {language === "es" ? "Información sobre Retiros" : "Retreat Information"}
                          </option>
                          <option value="microdosis">
                            {language === "es" ? "Proceso de Microdosis" : "Microdosing Process"}
                          </option>
                          <option value="ceremonias">
                            {language === "es" ? "Ceremonias y Prácticas" : "Ceremonies & Practices"}
                          </option>
                          <option value="otro">
                            {language === "es" ? "Otra consulta" : "Other inquiry"}
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {language === "es" ? "Mensaje" : "Message"}
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                          placeholder={
                            language === "es"
                              ? "Cuéntanos cómo podemos ayudarte..."
                              : "Tell us how we can help you..."
                          }
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            {language === "es" ? "Enviando..." : "Sending..."}
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            {language === "es" ? "Enviar mensaje" : "Send message"}
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
