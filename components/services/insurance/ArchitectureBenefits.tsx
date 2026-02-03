"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface InsuranceArchitectureBenefitsProps {
  architecture: {
    title: string;
    features: string[];
  };
  benefits: {
    title: string;
    benefits: string[];
  };
}

export default function InsuranceArchitectureBenefits({
  architecture,
  benefits,
}: InsuranceArchitectureBenefitsProps) {
  return (
    <section className="relative bg-slate-50 p-6 overflow-hidden">
      {/* Subtle background dots */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#6366f1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-10 bg-gradient-to-br from-blue-50 to-indigo-50 border border-slate-200"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
              {architecture.title}
            </h3>

            <p className="text-slate-600 text-base mb-8">
              All our platforms for insurance and reinsurance come with:
            </p>

            <div className="flex flex-col gap-5">
              {architecture.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-blue-500">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Business Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl p-10 bg-gradient-to-br from-indigo-50 to-blue-50 border border-slate-200"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-8">
              {benefits.title}
            </h3>

            <div className="flex flex-col gap-5">
              {benefits.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-blue-500">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
