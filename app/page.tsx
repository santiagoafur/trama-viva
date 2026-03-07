"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { EliSection } from "@/components/home/eli-section";
import { CaminosSection } from "@/components/home/caminos-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ContactSection } from "@/components/home/contact-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <EliSection />
      <CaminosSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
