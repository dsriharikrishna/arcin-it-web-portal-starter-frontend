"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { homeProcessData } from "@/data/home/home-page";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function HomeProcess() {
  const { badge, title, subtitle, steps } = homeProcessData;

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 text-center"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-md rounded-lg bg-gray-200 p-1 font-bold tracking-tight text-slate-700">
              {badge}
            </p>
            <h2 className="text-4xl font-medium tracking-tight text-gray-600">
              {title.main} <span className="font-bold text-gray-800">{title.highlighted}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">{subtitle}</p>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          {steps.map((step) => {
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white bg-gradient-to-b from-white to-slate-50/80 p-4 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <Image
                    src={step.iconSrc}
                    alt={step.title}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-blue-600">{step.title}</h3>

                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
