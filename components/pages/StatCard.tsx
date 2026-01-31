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

export default function StatCard({
  icon,
  value,
  label,
  index = 0,
  className,
}: StatCardProps) {
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
        "p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm",
        "flex flex-col gap-4",
        className
      )}
    >
      <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-blue-600 shrink-0">
        {icon}
      </div>
      <p className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
        {value}
        <span className="text-blue-600"> +</span>
      </p>
      <p className="text-slate-600 font-medium">{label}</p>
    </motion.div>
  );
}
