"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { navigation, commonUI } from "@/lib/content";

export function Navbar() {
  const { locale, toggleLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const content = navigation[locale];
  const ui = commonUI[locale];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const isScrolled = scrolled || isOpen;

  const mobileLogoSrc = isOpen
    ? "/images/logo_secundario_rojo.webp"
    : isScrolled
    ? "/images/logo_secundario_rojo.webp"
    : "/images/logo_secundario_crema.webp";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#E8DCC4] shadow-sm border-b border-[#3B1B0E]/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo */}
            <Link href="/" className="relative z-50 flex items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center"
              >
                {/* Logo Desktop */}
                <Image
                  src={isScrolled ? "/images/logo_secundario_rojo.webp" : "/images/logo_secundario_crema.webp"}
                  alt="Trama Viva Logo"
                  width={600}
                  height={200}
                  className="hidden md:block w-auto h-7 lg:h-8 object-contain transition-all duration-300"
                  priority
                />
                {/* Logo Mobile */}
                <Image
                  src={mobileLogoSrc}
                  alt="Trama Viva Logo"
                  width={300}
                  height={100}
                  className="block md:hidden w-auto h-6 object-contain transition-all duration-300"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {content.items.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <Link
                    href={item.href}
                    className={`relative text-sm tracking-wide uppercase font-bold transition-colors duration-300 group ${
                      isScrolled
                        ? "text-[#3B1B0E]/80 hover:text-[#7E2625]"
                        : "text-[#E8DCC4]/90 hover:text-[#E8DCC4]"
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-[#7E2625]" : "bg-[#E8DCC4]"
                    }`} />
                  </Link>
                </motion.div>
              ))}

              {/* Language Toggle */}
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={toggleLocale}
                className={`ml-2 flex items-center gap-2 px-3 py-1.5 rounded-full text-sm tracking-wider uppercase font-bold transition-all duration-300 ${
                  isScrolled
                    ? "border border-[#3B1B0E]/30 text-[#3B1B0E] hover:bg-[#3B1B0E]/10"
                    : "border border-[#E8DCC4]/50 text-[#E8DCC4] hover:bg-[#E8DCC4]/10"
                }`}
              >
                <Globe size={14} className="opacity-80" />
                <span>{ui.languageToggle}</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden relative z-50 p-2 transition-colors duration-300 ${
                isScrolled || isOpen ? "text-[#3B1B0E]" : "text-[#E8DCC4]"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#E8DCC4]"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="relative h-full flex flex-col items-center justify-center gap-8"
            >
              {content.items.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[#292E17] text-3xl font-bold font-serif tracking-wide hover:text-[#7E2625] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
                onClick={() => { toggleLocale(); setIsOpen(false); }}
                className="mt-8 flex items-center gap-3 px-6 py-3 border border-[#3B1B0E]/50 text-[#3B1B0E] font-bold rounded-full text-lg tracking-wider uppercase transition-all duration-300 hover:bg-[#3B1B0E]/10"
              >
                <Globe size={20} />
                <span>{ui.languageToggle}</span>
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}