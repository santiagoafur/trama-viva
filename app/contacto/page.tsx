"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { useLanguage } from "@/lib/language-context";

export default function ContactoPage() {
  // CORRECCIÓN: Usamos 'locale' en lugar de 'language'
  const { locale } = useLanguage();
  
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
      label: locale === "es" ? "Ubicación" : "Location",
      value: "Costa Rica & Argentina",
      href: "#",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#E8DCC4] text-[#3B1B0E] min-h-screen font-sans">
        <PageHero
          title={locale === "es" ? "Contacto" : "Contact"}
          subtitle={
            locale === "es"
              ? "Estamos aquí para acompañarte en tu camino"
              : "We are here to accompany you on your journey"
          }
          backgroundImage="/images/contact-section.jpg" // Asegurate de que esta prop coincida con tu componente PageHero (puede ser 'image' o 'backgroundImage')
        />

        <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#292E17] mb-6">
                  {locale === "es" ? "Conectemos" : "Let's Connect"}
                </h2>
                <p className="text-lg text-[#3B1B0E]/80 leading-relaxed max-w-md">
                  {locale === "es"
                    ? "¿Tienes preguntas sobre nuestros retiros, procesos de microdosis o ceremonias? Estamos aquí para responder todas tus inquietudes y ayudarte a encontrar el camino adecuado para ti."
                    : "Do you have questions about our retreats, microdosing processes, or ceremonies? We are here to answer all your questions and help you find the right path for you."}
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-6 p-6 rounded-3xl bg-[#868859]/10 border border-[#868859]/20 hover:bg-[#868859]/20 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#E8DCC4] shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-[#7E2625]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold tracking-wider uppercase text-[#868859] mb-1">{item.label}</p>
                      <p className="text-[#292E17] font-medium text-lg">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="pt-6">
                <a
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#292E17] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  {locale === "es" ? "Escribir por WhatsApp" : "Message on WhatsApp"}
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
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#868859]/20 relative overflow-hidden">
                {/* Detalle visual de fondo en el formulario */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#868859]/10 rounded-bl-full pointer-events-none" />

                <h3 className="text-3xl font-bold font-serif text-[#292E17] mb-8 relative z-10">
                  {locale === "es" ? "Envíanos un mensaje" : "Send us a message"}
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#868859]/20 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10 text-[#292E17]" />
                    </div>
                    <h4 className="text-2xl font-bold font-serif text-[#292E17] mb-4">
                      {locale === "es" ? "¡Mensaje enviado!" : "Message sent!"}
                    </h4>
                    <p className="text-[#3B1B0E]/70 text-lg mb-8">
                      {locale === "es"
                        ? "Te responderemos a la brevedad."
                        : "We will respond shortly."}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 bg-[#E8DCC4] text-[#3B1B0E] font-bold rounded-full hover:bg-[#868859]/30 transition-colors"
                    >
                      {locale === "es" ? "Enviar otro mensaje" : "Send another message"}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                      <label className="block text-sm font-bold text-[#3B1B0E] mb-2 ml-1">
                        {locale === "es" ? "Nombre" : "Name"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-[#F4EDE0] border-2 border-transparent focus:border-[#7E2625] outline-none transition-colors text-[#3B1B0E] placeholder-[#3B1B0E]/40"
                        placeholder={locale === "es" ? "Tu nombre" : "Your name"}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#3B1B0E] mb-2 ml-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-[#F4EDE0] border-2 border-transparent focus:border-[#7E2625] outline-none transition-colors text-[#3B1B0E] placeholder-[#3B1B0E]/40"
                        placeholder={locale === "es" ? "tu@email.com" : "your@email.com"}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#3B1B0E] mb-2 ml-1">
                        {locale === "es" ? "Asunto" : "Subject"}
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-[#F4EDE0] border-2 border-transparent focus:border-[#7E2625] outline-none transition-colors text-[#3B1B0E] appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          {locale === "es" ? "Selecciona un tema..." : "Select a topic..."}
                        </option>
                        <option value="retiros">
                          {locale === "es" ? "Información sobre Retiros" : "Retreat Information"}
                        </option>
                        <option value="microdosis">
                          {locale === "es" ? "Proceso de Microdosis" : "Microdosing Process"}
                        </option>
                        <option value="ceremonias">
                          {locale === "es" ? "Ceremonias y Prácticas" : "Ceremonies & Practices"}
                        </option>
                        <option value="otro">
                          {locale === "es" ? "Otra consulta" : "Other inquiry"}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#3B1B0E] mb-2 ml-1">
                        {locale === "es" ? "Mensaje" : "Message"}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-[#F4EDE0] border-2 border-transparent focus:border-[#7E2625] outline-none transition-colors text-[#3B1B0E] placeholder-[#3B1B0E]/40 resize-none"
                        placeholder={
                          locale === "es"
                            ? "Cuéntanos cómo podemos ayudarte..."
                            : "Tell us how we can help you..."
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 mt-4 bg-[#7E2625] text-[#E8DCC4] rounded-full font-bold hover:bg-[#3B1B0E] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-[#E8DCC4]/30 border-t-[#E8DCC4] rounded-full animate-spin" />
                          {locale === "es" ? "Enviando..." : "Sending..."}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {locale === "es" ? "Enviar mensaje" : "Send message"}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}