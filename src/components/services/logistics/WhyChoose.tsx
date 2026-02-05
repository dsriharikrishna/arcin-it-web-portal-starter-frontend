"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface WhyChoosePoint {
  title: string;
  description: string;
}

interface LogisticsWhyChooseProps {
  title: string;
  points: WhyChoosePoint[];
  image: string;
}

export default function LogisticsWhyChoose({ title, points, image }: LogisticsWhyChooseProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl leading-tight font-bold text-slate-900 md:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Cards */}
          <div className="flex h-full flex-col gap-4">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl border border-[#C5CAE9]/30 bg-[#E8EAF6] p-3"
              >
                <h3 className="mb-2 text-lg font-bold text-slate-900">{point.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700">{point.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Image with ? overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-full"
          >
            <div className="relative h-full overflow-hidden rounded-3xl shadow-xl">
              <Image src={image} alt="Why Choose Arcinit" fill className="object-cover" />
              {/* Question Mark Overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-900/20 to-blue-900/40">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-[10rem] leading-none font-bold text-white/90 drop-shadow-2xl select-none md:text-[14rem]"
                  style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                >
                  ?
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
