"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Hammer, TrendingUp } from "lucide-react";

const VALUES = [
  {
    title: "Excellence",
    description:
      "We pursue the highest standards in everything we do, continuously improving our skills and processes.",
    icon: Compass,
  },
  {
    title: "Partnership",
    description:
      "We build lasting relationships with our clients, working as an extension of their teams.",
    icon: PenTool,
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and creative solutions to solve complex challenges.",
    icon: Hammer,
  },
  {
    title: "Impact",
    description: "We measure success by the tangible value we create for our clients and society.",
    icon: TrendingUp,
  },
];

export default function AboutValues() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-100/50 opacity-50 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-blue-100/50 opacity-50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
            Our Values
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Drives Us
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex h-full flex-col items-start rounded-2xl border border-blue-50 bg-[#EBF3FF] p-6 transition-shadow duration-300 hover:shadow-lg lg:p-8"
              >
                <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-blue-500">{value.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
