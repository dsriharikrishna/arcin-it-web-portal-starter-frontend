"use client";

import {
  Landmark,
  ShieldCheck,
  Building2,
  ShoppingCart,
  Truck,
  Rocket,
  Stethoscope,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";
import { homeServicesData } from "@/data/home/home-page";

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  ShieldCheck,
  Building2,
  ShoppingCart,
  Truck,
  Rocket,
  Stethoscope,
};

export default function ServicesSection() {
  const { badge, title, description, services } = homeServicesData;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4">
        {/* HEADER */}
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-16">
          <div className="flex max-w-xl flex-col gap-3">
            <span className="inline-block w-fit rounded-full bg-[#E6ECFF] px-4 py-1.5 text-sm font-medium text-blue-700">
              {badge}
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
          </div>

          <div className="flex max-w-xl flex-col gap-4 text-sm leading-relaxed text-slate-600">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Landmark;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative flex cursor-pointer flex-col gap-4 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-[#F0F5FF] to-[#EBF1FF] p-4 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* SMOOTH GRADIENT OVERLAY expanding from center */}
                <div className="absolute inset-0 z-0 origin-center scale-x-0 bg-gradient-to-r from-[#5BCAFB] to-[#320DE0] opacity-0 transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-100" />

                {/* IMAGE */}
                <div className="relative z-10 h-44 overflow-hidden rounded-3xl shadow-md">
                  <Image
                    src={s.image}
                    alt={s.label}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/30 backdrop-blur-md">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex flex-1 flex-col gap-3">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-white">
                    {s.label}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/90">
                    {s.desc}
                  </p>
                </div>

                {/* CTA */}
                <div className="relative z-10">
                  <CustomButton
                    href={`/services/${s.slug}`}
                    variant="outline"
                    size="lg"
                    className="mt-auto w-full border-blue-300 bg-[#EBF1FF] font-bold text-blue-600 transition-all duration-300 group-hover:border-transparent group-hover:bg-white group-hover:text-[#320DE0]"
                    rounded="lg"
                  >
                    Know More
                  </CustomButton>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
