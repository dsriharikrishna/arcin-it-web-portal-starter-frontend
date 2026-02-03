"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface InsuranceWhyChooseProps {
  title: string;
  description: string;
  points: string[];
}

export default function InsuranceWhyChoose({
  title,
  description,
  points,
}: InsuranceWhyChooseProps) {
  return (
    <section className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-snug mb-6">
              {title}
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
              {description}
            </p>
          </motion.div>

          {/* RIGHT BULLETS */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-blue-500 flex-shrink-0">
                  <Check className="h-3.5 w-3.5 text-blue-500" />
                </div>

                <p className="text-slate-600 text-base leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 max-w-4xl"
        >
          <p className="text-slate-400 text-base md:text-lg">
            We create systems ready for the future that support digital change
            across the entire insurance value chain.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
