"use client";

import { PageHero } from "@/components/pages";
import ContactSection from "@/components/contact/ContactSection";

export default function ContactUsPage() {
  return (
    <section className="bg-[#F8FAFF] min-h-screen">
      <PageHero
        title="Contact Us"
        subtitle="Let's Build Something Amazing Together"
        description="Ready to transform your business? Our experts are here to help you navigate your digital journey."
        backgroundImage="/contact-hero.png"
      />
      <ContactSection />
    </section>
  );
}
