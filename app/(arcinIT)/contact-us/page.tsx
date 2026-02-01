"use client";

import dynamic from "next/dynamic";
import { PageHero } from "@/components/pages";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactSection from "@/components/contact/ContactSection";

// Lazy load the map, disable SSR as maps often need window/document
const ContactMap = dynamic(() => import("@/components/contact/ContactMap"), {
  ssr: false,
  loading: () => <div className="h-[300px] sm:h-[400px] lg:h-[500px] bg-blue-50 rounded-3xl animate-pulse" />
});

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
