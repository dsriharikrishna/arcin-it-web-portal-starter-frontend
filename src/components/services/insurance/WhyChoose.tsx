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
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl leading-snug font-semibold text-slate-900 md:text-4xl">
              {title}
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
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
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-blue-500">
                  <Check className="h-3.5 w-3.5 text-blue-500" />
                </div>

                <p className="text-base leading-relaxed text-slate-600">{point}</p>
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
          <p className="text-base text-slate-400 md:text-lg">
            We create systems ready for the future that support digital change across the entire
            insurance value chain.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
