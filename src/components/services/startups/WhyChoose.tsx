"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface WhyChoosePoint {
  readonly title: string;
  readonly description: string;
}

interface StartupsTechWhyChooseProps {
  readonly title: string;
  readonly description?: string;
  readonly points: readonly WhyChoosePoint[];
  readonly image: string;
}

export default function StartupsTechWhyChoose({
  title,
  description,
  points,
  image,
}: StartupsTechWhyChooseProps) {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center text-3xl leading-tight font-bold text-slate-900 md:text-4xl"
        >
          {title}
        </motion.h2>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-12 max-w-4xl text-center text-sm text-slate-600 md:text-base"
          >
            {description}
          </motion.p>
        )}

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Bullet Points */}
          <div className="flex flex-col gap-4">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-3"
              >
                {/* Bullet Point */}
                <div className="mt-1.5 shrink-0">
                  <div className="h-2 w-2 rounded-full bg-slate-900"></div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-1 text-base font-bold text-slate-900">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Image with ? overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
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
