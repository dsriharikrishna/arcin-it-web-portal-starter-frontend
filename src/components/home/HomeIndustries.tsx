"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { homeIndustriesData } from "@/data/home/home-page";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function HomeIndustries() {
  const { badge, title, industries } = homeIndustriesData;

  return (
    <section className="bg-[#F8FAFF] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-[#E0E7FF] px-6 py-2 text-sm font-medium text-[#1E1B4B]">
            {badge}
          </span>
          <h2 className="mt-4 text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl">
            {title.main} <span className="font-extrabold">{title.highlighted}</span>
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {industries.map((industry) => {
            return (
              <motion.div
                key={industry.name}
                variants={itemVariants}
                className="group flex items-center gap-4 rounded-2xl border border-blue-100/50 bg-mesh-gradient-color p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 sm:p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-transform group-hover:scale-110">
                  <Image
                    src={industry.iconSrc}
                    alt={industry.name}
                    width={40}
                    height={40}
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors capitalize text-[15px]">{industry.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
