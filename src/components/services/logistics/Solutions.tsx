"use client";

import { motion } from "framer-motion";
import { Truck, Warehouse, Eye, PackageCheck, MapPin, BarChart3, Navigation } from "lucide-react";

interface LogisticsSolutionsProps {
  title: string;
  solutions: readonly string[];
}

const iconMap: Record<number, React.ElementType> = {
  0: Truck,
  1: Warehouse,
  2: Eye,
  3: PackageCheck,
  4: MapPin,
  5: BarChart3,
  6: Navigation,
};

export default function LogisticsSolutions({ title, solutions }: LogisticsSolutionsProps) {
  return (
    <section className="bg-[#F5F7FA] p-6">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-3xl font-bold text-slate-900 md:text-4xl"
        >
          {title}
        </motion.h2>

        {/* Simple 3-column grid */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => {
            const Icon = iconMap[index % 7];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 rounded-xl border border-[#C5CAE9]/30 bg-[#E8EAF6] p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm leading-tight font-medium text-slate-900">{solution}</span>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto max-w-4xl text-center text-xs text-slate-600"
        >
          Each solution is designed to meet specific operational goals, industry needs, and customer
          expectations.
        </motion.p>
      </div>
    </section>
  );
}
