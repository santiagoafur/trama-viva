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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12">
          {/* Contenedor más alto para darle espacio al logo gigante */}
          <div className="flex items-center justify-between h-24 lg:h-32">
            
            {/* Logo Desktop & Mobile */}
            <Link
              href="/"
              className="relative z-50 flex items-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center"
              >
                {/* Logo Desktop (logo_secundario_rojo.png) 
                    Le damos muchisimo más alto (h-20 a lg:h-28)
                */}
                <Image 
                  src="/images/logo_secundario_rojo.png"
                  alt="Trama Viva Logo"
                  width={600} 
                  height={200} 
                  className="hidden md:block w-auto h-20 lg:h-28 object-contain"
                  priority
                />
                
                {/* Logo Mobile (ROJO.png) 
                    También lo agrandamos a h-16
                */}
                <Image 
                  src="/images/ROJO.png"
                  alt="Trama Viva Logo"
                  width={300} 
                  height={100} 
                  className="block md:hidden w-auto h-16 object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {content.items.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <Link
                    href={item.href}
                    className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm tracking-wide uppercase font-medium group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}

              {/* Language Toggle */}
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={toggleLocale}
                className="ml-4 flex items-center gap-2 px-3 py-1.5 border border-[#3B1B0E]/30 text-[#3B1B0E] hover:bg-[#3B1B0E]/5 hover:border-[#3B1B0E] text-sm tracking-wider uppercase font-medium transition-all duration-300"
              >
                <Globe size={16} className="opacity-80" />
                <span>{ui.languageToggle}</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 text-foreground"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
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
                    className="text-primary-foreground text-3xl font-medium tracking-wide hover:opacity-70 transition-opacity"
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
                onClick={() => {
                  toggleLocale();
                  setIsOpen(false);
                }}
                className="mt-8 flex items-center gap-3 px-6 py-3 border border-primary-foreground/50 text-primary-foreground text-lg tracking-wider uppercase transition-all duration-300 hover:bg-primary-foreground/10"
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