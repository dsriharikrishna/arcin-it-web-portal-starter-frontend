"use client";

import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactUsPage() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
