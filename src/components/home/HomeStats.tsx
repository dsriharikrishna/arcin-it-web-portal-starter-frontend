"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { homeStatsData } from "@/data/home/home-page";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function HomeStats({ isHome }: { isHome: boolean }) {
  return (
    <section className={`bg-[#E9EFFF] py-6 ${isHome ? "mx-auto max-w-7xl rounded-xl px-4" : ""}`}>
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 bg-[#E9EFFF] sm:grid-cols-2 sm:gap-6 md:grid-cols-4"
        >
          {homeStatsData.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex flex-col items-center gap-3 rounded-xl bg-transparent p-4 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm sm:h-14 sm:w-14">
                <Image
                  src={stat.image}
                  alt={stat.label}
                  width={46}
                  height={46}
                  className="sm:h-12 sm:w-12"
                />
              </div>

              {/* Text */}
              <div>
                <p className="text-xl leading-tight font-bold text-slate-900 sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
