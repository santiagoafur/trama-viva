"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { footer } from "@/lib/content";

export function Footer() {
  const { locale } = useLanguage();
  const content = footer[locale];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="text-3xl font-bold tracking-tight">
                Trama Viva
              </Link>
              <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
                Despertar la inteligencia vincular
              </p>
            </motion.div>
          </div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              {content.links.title}
            </h4>
            <ul className="space-y-4">
              {content.links.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              {content.legal.title}
            </h4>
            <ul className="space-y-4">
              {content.legal.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              {content.contact.title}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm"
                >
                  <Mail size={18} />
                  {content.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${content.contact.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm"
                >
                  <Instagram size={18} />
                  {content.contact.instagram}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-primary-foreground/50 text-xs">
            {content.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://whitespacez.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary-foreground text-xs transition-colors"
            >
              {content.designBy}
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp
                size={16}
                className="text-primary-foreground/50 group-hover:text-primary-foreground transition-colors"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
