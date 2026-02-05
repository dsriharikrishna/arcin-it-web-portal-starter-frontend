"use client";

import { motion } from "framer-motion";

interface Step {
  id: string;
  title: string;
  description: string;
}

interface InsuranceDeliveryModelProps {
  whyArcinit: {
    title: string;
    description: string;
  };
  deliveryModel: {
    title: string;
    steps: Step[];
  };
}

export default function InsuranceDeliveryModel({
  whyArcinit,
  deliveryModel,
}: InsuranceDeliveryModelProps) {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Why Arcin IT? - Centered Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-28 max-w-4xl text-center"
        >
          <h2 className="mb-10 text-4xl font-bold text-slate-900">{whyArcinit.title}</h2>
          <p className="text-lg leading-relaxed text-slate-600">{whyArcinit.description}</p>
        </motion.div>

        {/* Delivery Model - Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl leading-tight font-bold text-slate-900 md:text-5xl">
            {deliveryModel.title}
          </h2>
        </motion.div>

        {/* Delivery Model - 3-Column Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {deliveryModel.steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-start gap-4 rounded-[2rem] border border-blue-100/50 bg-[#f8faff] p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-500/30">
                {step.id}
              </div>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
