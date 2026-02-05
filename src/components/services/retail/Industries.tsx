"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ShoppingCart, Smartphone, Users, BarChart3, RefreshCcw } from "lucide-react";

interface RetailIndustriesProps {
  title: string;
  industries: string[];
}

const iconMap: Record<number, React.ElementType> = {
  0: ShoppingBag,
  1: ShoppingCart,
  2: Smartphone,
  3: Users,
  4: BarChart3,
  5: RefreshCcw,
};

export default function RetailIndustries({ title, industries }: RetailIndustriesProps) {
  return (
    <section className="bg-[#f8faff]/50 p-6">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold text-slate-900"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = iconMap[index % 6];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 rounded-2xl border border-blue-100/50 p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-lg leading-tight font-semibold text-slate-900">
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
