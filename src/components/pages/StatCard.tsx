"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  index?: number;
  className?: string;
}

export default function StatCard({ icon, value, label, index = 0, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={clsx(
        "group rounded-3xl border border-blue-100/50 bg-mesh-gradient-color p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 shadow-sm",
        "flex flex-col gap-6 md:flex-row items-center",
        className
      )}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div className="flex flex-1 flex-col gap-1 text-center md:text-left">
        <p className="text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
          {value}
          <span className="text-blue-600"> +</span>
        </p>
        <p className="text-sm font-bold tracking-tight text-slate-800/80 uppercase">{label}</p>
      </div>
    </motion.div>
  );
}
