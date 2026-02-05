"use client";

import { motion } from "framer-motion";

interface BusinessesTrustUsProps {
  readonly title: string;
  readonly description: string;
}

export default function BusinessesTrustUs({ title, description }: BusinessesTrustUsProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl rounded-lg bg-[#E8EAF6] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <h3 className="mb-4 text-xl font-bold text-slate-900 md:text-2xl">{title}</h3>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
