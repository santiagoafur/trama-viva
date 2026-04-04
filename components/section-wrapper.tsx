"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "alt" | "dark";
}

export function SectionWrapper({
  children,
  className,
  id,
  variant = "default",
}: SectionWrapperProps) {
  const variants = {
    default: "bg-background",
    alt: "bg-card",
    dark: "bg-primary text-primary-foreground",
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={cn(
        "py-20 lg:py-32",
        variants[variant],
        className
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">{children}</div>
    </motion.section>
  );
}
