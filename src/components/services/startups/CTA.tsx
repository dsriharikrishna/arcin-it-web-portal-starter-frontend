"use client";

import { CustomButton } from "@/components/ui";
import { motion } from "framer-motion";

interface StartupsCTAProps {
  readonly heading: string;
  readonly description: string;
  readonly ctaText?: string;
  readonly ctaLink?: string;
}

export default function StartupsCTA({
  heading,
  description,
  ctaText = "Get Started",
  ctaLink = "/contact-us",
}: StartupsCTAProps) {
  return (
    <section className="bg-mesh-gradient-color py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl"
        >
          {heading.split("Your Next Digital Product?").map((part, index) => (
            <span key={index}>
              {part}
              {index === 0 && <span className="text-slate-900">Your Next Digital Product?</span>}
            </span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-8 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <CustomButton
            href={ctaLink}
            variant="solid"
            size="lg"
            className="rounded-lg px-8 py-4 text-sm font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl md:text-base"
          >
            {ctaText}
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
}
