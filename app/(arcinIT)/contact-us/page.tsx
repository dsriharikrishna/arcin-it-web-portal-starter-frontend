"use client";

import { PageHero } from "@/components/pages";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactUsPage() {
  return (
    <section className="bg-[#F8FAFF] min-h-screen">
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for service inquiries, support, or partnership opportunities."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
      />
      <div className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Form Section - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Info Section - Takes up 1 column */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 sm:p-8 rounded-3xl h-full border border-slate-100 shadow-sm">
              <ContactInfo />
            </div>
          </div>
        </div>

        {/* Map Section */}
        <ContactMap />

      </div>
    </section>
  );
}
