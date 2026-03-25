"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { navigation, commonUI } from "@/lib/content";

// =============================================================================
// CONSTANTS
// =============================================================================

const SCROLL_THRESHOLD = 20;

const COLORS = {
  cream: "#E8DCC4",
  brown: "#3B1B0E",
  red: "#7E2625",
  olive: "#292E17",
} as const;

const LOGO = {
  cream: "/images/logo_secundario_crema.webp",
  red: "/images/logo_secundario_rojo.webp",
} as const;

// =============================================================================
// ANIMATION VARIANTS
// =============================================================================

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delay * 0.1 },
  }),
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delay * 0.1 },
  }),
  exit: { opacity: 0, y: 20 },
};

// =============================================================================
// HOOKS
// =============================================================================

function useScrollState(threshold = SCROLL_THRESHOLD) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    
    // Check initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}

function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    document.body.style.overflow = isLocked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function getLogoSrc(isScrolled: boolean, isMenuOpen: boolean) {
  return isScrolled || isMenuOpen ? LOGO.red : LOGO.cream;
}

// =============================================================================
// SUB-COMPONENTS
// =============================================================================

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled: boolean;
  index: number;
}

const NavLink = memo(function NavLink({ href, label, isScrolled, index }: NavLinkProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={index + 1}
    >
      <Link
        href={href}
        className={cn(
          "relative text-sm tracking-wide uppercase font-bold",
          "transition-colors duration-300 group",
          isScrolled
            ? "text-[#3B1B0E]/80 hover:text-[#7E2625]"
            : "text-[#E8DCC4]/90 hover:text-[#E8DCC4]"
        )}
      >
        {label}
        <span
          className={cn(
            "absolute -bottom-1 left-0 w-0 h-px",
            "transition-all duration-300 group-hover:w-full",
            isScrolled ? "bg-[#7E2625]" : "bg-[#E8DCC4]"
          )}
        />
      </Link>
    </motion.div>
  );
});

interface LanguageToggleProps {
  label: string;
  onClick: () => void;
  isScrolled: boolean;
  variant?: "desktop" | "mobile";
}

const LanguageToggle = memo(function LanguageToggle({
  label,
  onClick,
  isScrolled,
  variant = "desktop",
}: LanguageToggleProps) {
  if (variant === "mobile") {
    return (
      <motion.button
        variants={mobileItemVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={6}
        onClick={onClick}
        className={cn(
          "mt-8 flex items-center gap-3 px-6 py-3",
          "border border-[#3B1B0E]/50 text-[#3B1B0E]",
          "font-bold rounded-full text-lg tracking-wider uppercase",
          "transition-all duration-300 hover:bg-[#3B1B0E]/10"
        )}
      >
        <Globe size={20} />
        <span>{label}</span>
      </motion.button>
    );
  }

  return (
    <motion.button
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={6}
      onClick={onClick}
      className={cn(
        "ml-2 flex items-center gap-2 px-3 py-1.5",
        "rounded-full text-sm tracking-wider uppercase font-bold",
        "transition-all duration-300",
        isScrolled
          ? "border border-[#3B1B0E]/30 text-[#3B1B0E] hover:bg-[#3B1B0E]/10"
          : "border border-[#E8DCC4]/50 text-[#E8DCC4] hover:bg-[#E8DCC4]/10"
      )}
    >
      <Globe size={14} className="opacity-80" />
      <span>{label}</span>
    </motion.button>
  );
});

interface MobileMenuProps {
  isOpen: boolean;
  items: Array<{ href: string; label: string }>;
  languageLabel: string;
  onClose: () => void;
  onToggleLocale: () => void;
}

const MobileMenu = memo(function MobileMenu({
  isOpen,
  items,
  languageLabel,
  onClose,
  onToggleLocale,
}: MobileMenuProps) {
  const handleLanguageToggle = useCallback(() => {
    onToggleLocale();
    onClose();
  }, [onToggleLocale, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          {/* Backdrop */}
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-[#E8DCC4]"
            onClick={onClose}
          />

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="relative h-full flex flex-col items-center justify-center gap-8"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={index + 1}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "text-[#292E17] text-3xl font-bold font-serif tracking-wide",
                    "hover:text-[#7E2625] transition-colors"
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <LanguageToggle
              label={languageLabel}
              onClick={handleLanguageToggle}
              isScrolled={true}
              variant="mobile"
            />
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

interface LogoProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
}

const Logo = memo(function Logo({ isScrolled, isMenuOpen }: LogoProps) {
  const logoSrc = getLogoSrc(isScrolled, isMenuOpen);

  return (
    <Link href="/" className="relative z-50 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center"
      >
        {/* Desktop Logo */}
        <Image
          src={logoSrc}
          alt="Trama Viva Logo"
          width={600}
          height={200}
          className={cn(
            "hidden md:block w-auto h-7 lg:h-8",
            "object-contain transition-all duration-300"
          )}
          priority
        />
        {/* Mobile Logo */}
        <Image
          src={logoSrc}
          alt="Trama Viva Logo"
          width={300}
          height={100}
          className={cn(
            "block md:hidden w-auto h-6",
            "object-contain transition-all duration-300"
          )}
          priority
        />
      </motion.div>
    </Link>
  );
});

interface MenuToggleButtonProps {
  isOpen: boolean;
  isScrolled: boolean;
  onClick: () => void;
}

const MenuToggleButton = memo(function MenuToggleButton({
  isOpen,
  isScrolled,
  onClick,
}: MenuToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "md:hidden relative z-50 p-2 transition-colors duration-300",
        isScrolled || isOpen ? "text-[#3B1B0E]" : "text-[#E8DCC4]"
      )}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={isOpen}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
});

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function Navbar() {
  const { locale, toggleLocale } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollState();

  // Lock body scroll when mobile menu is open
  useBodyScrollLock(isMenuOpen);

  // Content based on locale
  const content = navigation[locale];
  const ui = commonUI[locale];

  // Computed state
  const isScrolled = scrolled || isMenuOpen;

  // Handlers
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300 overflow-hidden",
          isScrolled
            ? "bg-[#E8DCC4] shadow-sm border-b border-[#3B1B0E]/10"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Logo isScrolled={isScrolled} isMenuOpen={isMenuOpen} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {content.items.map((item, index) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  isScrolled={isScrolled}
                  index={index}
                />
              ))}

              <LanguageToggle
                label={ui.languageToggle}
                onClick={toggleLocale}
                isScrolled={isScrolled}
              />
            </div>

            <MenuToggleButton
              isOpen={isMenuOpen}
              isScrolled={isScrolled}
              onClick={handleMenuToggle}
            />
          </div>
        </nav>
      </motion.header>

      <MobileMenu
        isOpen={isMenuOpen}
        items={content.items}
        languageLabel={ui.languageToggle}
        onClose={handleMenuClose}
        onToggleLocale={toggleLocale}
      />
    </>
  );
}

export default Navbar;
