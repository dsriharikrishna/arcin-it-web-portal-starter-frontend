"use client";

import { PageHero } from "@/components/pages";
import ContactSection from "@/components/contact/ContactSection";
import ContactWhyChooseUs from "@/components/contact/ContactWhyChooseUs";
import WhyChooseTrust from "@/components/contact/WhyChooseTrust";
import contactData from "@/data/contact/contact-page";

export default function ContactUsPage() {
  const { hero, advantages, trustStats, whyChooseUs, trustSection } = contactData;

  return (
    <section className="min-h-screen bg-[#F8FAFF]">
      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        backgroundImage={hero.backgroundImage}
      />
      <ContactSection />
      <ContactWhyChooseUs
        badge={whyChooseUs.badge}
        title={whyChooseUs.title}
        titleBold={whyChooseUs.titleBold}
        description={whyChooseUs.description}
        advantages={advantages}
      />
      <WhyChooseTrust
        badge={trustSection.badge}
        title={trustSection.title}
        titleBold={trustSection.titleBold}
        description={trustSection.description}
        stats={trustStats}
      />
    </section>
  );
}
