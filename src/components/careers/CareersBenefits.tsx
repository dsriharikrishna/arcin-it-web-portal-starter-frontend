"use client";

import { motion } from "framer-motion";
import {
  CircleDollarSign,
  Heart,
  Monitor,
  GraduationCap,
  Plane,
  Users,
  Lightbulb,
  Wrench,
  LucideIcon,
} from "lucide-react";
import { careersBenefitsData } from "@/data/careers/careers-page";

const iconMap: Record<string, LucideIcon> = {
  "Competitive Compensation": CircleDollarSign,
  "Health & Wellness": Heart,
  "Flexible Work": Monitor,
  "Learning & Development": GraduationCap,
  "Career Growth": GraduationCap,
  "Innovation Time": Lightbulb,
  "Team Events": Users,
  "Modern Tools": Wrench,
};

export default function CareersBenefits() {
  const { title, subtitle, description, benefits } = careersBenefitsData;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-[#EEF3FF] px-4 py-1.5 text-sm font-medium text-blue-600">
            {subtitle}
          </span>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>

          <p className="max-w-2xl text-sm text-slate-600 sm:text-base">{description}</p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.title] || Heart;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex items-start gap-4 rounded-xl border border-blue-100 bg-[#EEF3FF] p-4"
              >
                {/* ICON */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>

                {/* TEXT */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
