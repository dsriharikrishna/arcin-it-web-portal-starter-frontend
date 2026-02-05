"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ApproachStep {
  title: string;
  description: string;
}

interface GovernmentApproachProps {
  title: string;
  steps: ApproachStep[];
}

export default function GovernmentApproach({ title, steps }: GovernmentApproachProps) {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-2xl font-bold text-slate-900 sm:mb-12 sm:text-3xl md:mb-16 md:text-4xl"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-3 rounded-xl border border-indigo-100/50 bg-indigo-50/50 p-5 sm:gap-4 sm:rounded-2xl sm:p-6"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 sm:h-8 sm:w-8">
                <CheckCircle2 className="h-4 w-4 text-white sm:h-5 sm:w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 sm:text-lg">{step.title}</h3>
              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
