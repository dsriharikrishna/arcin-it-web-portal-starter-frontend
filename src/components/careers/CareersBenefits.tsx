"use client";

import { motion } from "framer-motion";
import { careersBenefitsData } from "@/data/careers/careers-page";
import Image from "next/image";

export default function CareersBenefits() {
  const { title, subtitle, description, benefits } = careersBenefitsData;

  return (
    <section className="bg-white py-12 pb-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 sm:px-8">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-[#F1F4FF] px-5 py-1.5 text-[13px] font-bold text-slate-900 shadow-sm">
            {subtitle}
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight text-black md:text-4xl">
            {title}
          </h2>

          <p className="max-w-2xl text-[15px] font-bold leading-relaxed text-slate-900/70">
            {description}
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4 rounded-xl border border-blue-100/50 bg-[#F1F4FF] p-4 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5"
              >
                {/* ICON CONTAINER */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>

                {/* TEXT */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[17px] font-bold tracking-tight text-black">
                    {benefit.title}
                  </h3>
                  <p className="text-[13px] font-bold leading-relaxed text-slate-800/80">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
