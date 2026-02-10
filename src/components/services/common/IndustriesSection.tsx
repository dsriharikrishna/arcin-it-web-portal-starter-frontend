"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingBag, Truck, Heart, Briefcase, Globe } from "lucide-react";

interface Industry {
  id: number;
  name: string;
  icon: string;
}

interface IndustriesProps {
  title: string;
  industries: Industry[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  hospital: Building2,
  diagnostic: Heart,
  specialty: Briefcase,
  enterprise: Globe,
  healthtech: Heart,
  logistics: Truck,
  freight: Truck,
  courier: ShoppingBag,
  ecommerce: ShoppingBag,
  manufacturing: Building2,
  retail: ShoppingBag,
  coldchain: Truck,
  fashion: ShoppingBag,
  grocery: ShoppingBag,
  electronics: Building2,
  hardware: Building2,
  marketplace: Globe,
  wholesale: Building2,
};

export default function IndustriesSection({ title, industries }: IndustriesProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon] || Building2;

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex items-center gap-4 rounded-3xl border border-blue-100/50 bg-mesh-gradient-color p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-transform group-hover:scale-110">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-[15px] font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
                  {industry.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
