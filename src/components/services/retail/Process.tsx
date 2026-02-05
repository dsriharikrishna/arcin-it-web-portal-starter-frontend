"use client";

import { motion } from "framer-motion";

interface Step {
  id: string;
  title: string;
  description: string;
}

interface RetailProcessProps {
  title: string;
  steps: Step[];
}

export default function RetailProcess({ title, steps }: RetailProcessProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-4xl font-bold text-slate-900"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-5 rounded-[2rem] border border-blue-100/50 bg-[#f0f4ff]/50 p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
                {step.id}
              </div>
              <div>
                <h3 className="mb-3 text-xl leading-tight font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
