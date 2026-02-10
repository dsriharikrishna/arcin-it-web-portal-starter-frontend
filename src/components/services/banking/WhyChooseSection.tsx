"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import CustomButton from "../../ui/CustomButton";

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
    <section className="bg-[#f8faff] py-12">
      <div className="mx-auto px-4 text-center sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-100/80 px-3 py-1.5 text-xs font-semibold text-blue-800 sm:mb-6 sm:px-4"
        >
          {badge}
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="px-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
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
            className="mx-auto mt-4 max-w-4xl px-4 text-sm leading-relaxed text-slate-600 sm:mt-6 sm:text-base"
          >
            {description}
          </motion.p>
        )}

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:mt-16 lg:grid-cols-4">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-start rounded-xl border border-white bg-indigo-100/50 p-5 text-left shadow-sm sm:rounded-2xl sm:p-6"
            >
              <div className="mb-3 flex h-6 w-6 items-center justify-center rounded-lg bg-[#3b82f6] sm:mb-4">
                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
              </div>

              <h3 className="text-sm leading-snug font-medium text-slate-700 sm:text-[14px]">
                {point.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Footer text */}
        <p className="mt-8 px-4 text-xs font-medium text-slate-500 sm:mt-10 sm:text-sm">
          We aim to deliver measurable results and long-term benefits.
        </p>

        {/* CTA */}
        <CustomButton
          onClick={onCtaClick}
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#4f8eff] to-[#1e3af2] px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-95 sm:mt-8 sm:px-10 sm:py-4"
        >
          {ctaText}
        </CustomButton>
      </div>
    </section>
  );
}
