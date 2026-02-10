"use client";

import { motion } from "framer-motion";

interface RetailIndustriesProps {
  title: string;
  industries: string[];
}

export default function RetailIndustries({ title, industries }: RetailIndustriesProps) {
  return (
    <section className="bg-mesh-gradient-color p-6">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold text-slate-900"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-mesh-gradient-color p-4 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md hover:border-blue-200"
              >
                <div className="flex shrink-0 items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
                    {"01"}
                  </div>
                </div>
                <span className="text-[15px] font-bold leading-tight text-slate-900">
                  {industry}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
