"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface WhyChoosePoint {
  title: string;
}

interface WhyChooseProps {
  badge?: string;
  title: string;
  description?: string;
  points: WhyChoosePoint[];
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function WhyChooseSectionBanking({
  badge = "Why Choose Us",
  title,
  description,
  points,
  ctaText = "Discuss Your Project",
  onCtaClick,
}: WhyChooseProps) {
  return (
    <section className="bg-[#f8faff]">
      <div className="mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center mb-6 rounded-full bg-blue-100/80 px-4 py-1.5 text-xs font-semibold text-blue-800"
        >
          {badge}
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
        >
          {title}
        </motion.h2>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-4xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl bg-indigo-100/50 p-6 flex flex-col items-start text-left shadow-sm border border-white"
            >
              <div className="mb-4 flex h-6 w-6 items-center justify-center rounded-lg bg-[#3b82f6]">
                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
              </div>

              <h3 className="text-[14px] font-medium text-slate-700 leading-snug">
                {point.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Footer text */}
        <p className="mt-10 text-sm font-medium text-slate-500">
          We aim to deliver measurable results and long-term benefits.
        </p>

        {/* CTA */}
        <CustomButton
          onClick={onCtaClick}
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#4f8eff] to-[#1e3af2] px-10 py-4 text-sm font-semibold text-white shadow-lg hover:brightness-110 transition active:scale-95"
        >
          {ctaText}
        </CustomButton>
      </div>
    </section>
  );
}
