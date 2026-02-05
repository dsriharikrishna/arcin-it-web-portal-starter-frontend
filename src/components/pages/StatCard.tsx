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
        "rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm",
        "flex flex-col gap-4 md:flex-row",
        className
      )}
    >
      <div className="flex h-full w-full flex-1 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-blue-600">
        {icon}
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          {value}
          <span className="text-blue-600"> +</span>
        </p>
        <p className="font-medium text-slate-600">{label}</p>
      </div>
    </motion.div>
  );
}
