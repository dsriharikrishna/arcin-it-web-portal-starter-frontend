"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

interface RetailBenefitsProps {
  title: string;
  points: string[];
  image: string;
}

export default function RetailBenefits({ title, points, image }: RetailBenefitsProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-10 text-4xl leading-tight font-bold text-slate-900">{title}</h2>

            <div className="flex flex-col gap-5">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-blue-500">
                    <Check className="h-3 w-3 text-blue-600" />
                  </div>
                  <p className="text-lg text-slate-600">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image src={image} alt="Partnering with ArcinIT" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
