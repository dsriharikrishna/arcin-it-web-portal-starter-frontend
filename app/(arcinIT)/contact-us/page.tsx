"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero, PageSection } from "@/components/pages";
import { SmoothLandingBox } from "@/components/animations/SmoothLandingBox";
import Button from "@/components/ui/Button";

export default function ContactUsPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for service inquiries, support, or partnership opportunities."
      />
      <PageSection title="Send a Message">
        <div className="grid lg:grid-cols-2 gap-12">
          <SmoothLandingBox variant="slide-right" distance={30}>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900">Phone</h3>
                <p className="text-slate-600">+91 98786 43216</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Email</h3>
                <p className="text-slate-600">info@arcinit.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Hours</h3>
                <p className="text-slate-600">Mon–Sat: 8:00 AM – 8:00 PM</p>
              </div>
            </div>
          </SmoothLandingBox>
          <SmoothLandingBox variant="slide-left" distance={30}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center"
              >
                <p className="text-green-800 font-semibold">Message sent!</p>
                <p className="text-green-700 mt-2">We&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <Button type="submit" variant="gradient" fullWidth>
                  Send Message
                </Button>
              </form>
            )}
          </SmoothLandingBox>
        </div>
      </PageSection>
    </>
  );
}
