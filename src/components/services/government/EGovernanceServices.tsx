"use client";

import { motion } from "framer-motion";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

interface EGovernanceServicesProps {
  title: string;
  services: ServiceItem[];
}

export default function EGovernanceServices({ title, services }: EGovernanceServicesProps) {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-2xl font-bold text-slate-900 sm:mb-12 sm:text-3xl md:mb-16 md:text-4xl"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-3 rounded-2xl border border-blue-100/50 bg-blue-50/50 p-6 transition-shadow duration-300 hover:shadow-lg sm:gap-4 sm:rounded-3xl sm:p-8"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white sm:h-10 sm:w-10 sm:text-sm">
                {service.id}
              </div>
              <h3 className="text-lg leading-tight font-bold text-slate-900 sm:text-xl">
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
