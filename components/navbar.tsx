"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X, ChevronDown, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { navigation, commonUI } from "@/lib/content";

const retreatLinks = [
  {
    id: "within",
    name: "Within",
    location: "Santa Teresa, Costa Rica",
    date: { es: "25-28 Jun 2026", en: "Jun 25-28, 2026" },
    href: "/retiros/within",
  },
  {
    id: "union",
    name: "Unión",
    location: "Córdoba, Argentina",
    date: { es: "10-13 Sep 2026", en: "Sep 10-13, 2026" },
    href: "/retiros/union",
  },
  {
    id: "red_viva",
    name: "Red Viva",
    location: "Minas, Uruguay",
    date: { es: "1-4 Oct 2026", en: "Oct 1-4, 2026" },
    href: "/retiros/red_viva",
  },
];

export function Navbar() {
  const { locale, toggleLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileRetirosOpen, setMobileRetirosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const content = navigation[locale];
  const ui = commonUI[locale];
  const isScrolled = scrolled || isOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        style={{ width: "100%", maxWidth: "100vw" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible ${
          isScrolled
            ? "bg-[#E8DCC4] shadow-sm border-b border-[#3B1B0E]/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo */}
            <Link href="/" className="relative z-50 flex items-center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <Image
                  src={isScrolled ? "/images/logo_secundario_rojo.webp" : "/images/logo_secundario_crema.webp"}
                  alt="Trama Viva Logo"
                  width={600}
                  height={200}
                  className="hidden md:block w-auto h-7 lg:h-8 object-contain transition-all duration-300"
                  priority
                />
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
              {content.items.map((item, index) => {
                const isRetiros = item.href === "/retiros";

                if (isRetiros) {
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                      className="relative"
                      ref={dropdownRef}
                    >
                      <button
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`flex items-center gap-1 text-sm tracking-wide uppercase font-bold transition-colors duration-300 ${
                          isScrolled
                            ? "text-[#3B1B0E]/80 hover:text-[#7E2625]"
                            : "text-[#E8DCC4]/90 hover:text-[#E8DCC4]"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Dropdown */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.15 }}
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#E8DCC4] rounded-2xl shadow-xl border border-[#868859]/20 overflow-hidden"
                          >
                            {/* Link general a retiros */}
                            <Link
                              href="/retiros"
                              className="flex items-center px-5 py-3 text-xs font-bold tracking-widest uppercase text-[#868859] hover:bg-[#868859]/10 transition-colors border-b border-[#868859]/15"
                            >
                              {locale === "es" ? "Ver todos los retiros" : "View all retreats"}
                            </Link>

                            {/* Links individuales */}
                            {retreatLinks.map((retreat) => (
                              <Link
                                key={retreat.id}
                                href={retreat.href}
                                onClick={() => setDropdownOpen(false)}
                                className="flex flex-col px-5 py-4 hover:bg-[#868859]/10 transition-colors border-b border-[#868859]/10 last:border-0 group"
                              >
                                <span className="font-bold text-[#292E17] group-hover:text-[#7E2625] transition-colors">
                                  {retreat.name}
                                </span>
                                <div className="flex items-center gap-3 mt-1">
                                  <span className="flex items-center gap-1 text-xs text-[#3B1B0E]/50">
                                    <MapPin size={10} />
                                    {retreat.location}
                                  </span>
                                  <span className="flex items-center gap-1 text-xs text-[#3B1B0E]/50">
                                    <Calendar size={10} />
                                    {retreat.date[locale as "es" | "en"]}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
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
                );
              })}

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
              className="relative h-full flex flex-col items-center justify-center gap-6"
            >
              {content.items.map((item, index) => {
                const isRetiros = item.href === "/retiros";

                if (isRetiros) {
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                      className="flex flex-col items-center gap-3"
                    >
                      <button
                        onClick={() => setMobileRetirosOpen(!mobileRetirosOpen)}
                        className="flex items-center gap-2 text-[#292E17] text-3xl font-bold font-serif tracking-wide hover:text-[#7E2625] transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 mt-1 ${mobileRetirosOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileRetirosOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex flex-col items-center gap-2 overflow-hidden"
                          >
                            {retreatLinks.map((retreat) => (
                              <Link
                                key={retreat.id}
                                href={retreat.href}
                                onClick={() => { setIsOpen(false); setMobileRetirosOpen(false); }}
                                className="flex flex-col items-center text-center px-4 py-2 rounded-xl hover:bg-[#868859]/10 transition-colors"
                              >
                                <span className="text-lg font-bold text-[#292E17] hover:text-[#7E2625]">
                                  {retreat.name}
                                </span>
                                <span className="text-xs text-[#3B1B0E]/50 flex items-center gap-1 mt-0.5">
                                  <MapPin size={10} />
                                  {retreat.location}
                                </span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
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
                );
              })}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
                onClick={() => { toggleLocale(); setIsOpen(false); }}
                className="mt-4 flex items-center gap-3 px-6 py-3 border border-[#3B1B0E]/50 text-[#3B1B0E] font-bold rounded-full text-lg tracking-wider uppercase transition-all duration-300 hover:bg-[#3B1B0E]/10"
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