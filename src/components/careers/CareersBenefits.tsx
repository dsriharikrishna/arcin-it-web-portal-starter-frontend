"use client";

import { motion } from "framer-motion";
import {
  CircleDollarSign,
  Heart,
  Monitor,
  GraduationCap,
  Plane,
  Users,
} from "lucide-react";

const BENEFITS = [
  {
    title: "Competitive Salary",
    description:
      "Industry-leading compensation packages with performance bonuses",
    icon: CircleDollarSign,
  },
  {
    title: "Health & Wellness",
    description:
      "Comprehensive health, dental, and vision coverage for you and family",
    icon: Heart,
  },
  {
    title: "Remote Flexibility",
    description: "Hybrid work model with flexible remote options",
    icon: Monitor,
  },
  {
    title: "Learning & Growth",
    description:
      "Annual learning budget and access to certifications",
    icon: GraduationCap,
  },
  {
    title: "Paid Time Off",
    description:
      "Generous vacation, sick leave, and parental leave policies",
    icon: Plane,
  },
  {
    title: "Team Culture",
    description:
      "Regular team events, offsites, and wellness programs",
    icon: Users,
  },
];

export default function CareersBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="px-4 py-1.5 rounded-full bg-[#EEF3FF] text-blue-600 text-sm font-medium">
            Why Join Us
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Benefits & Perks
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            We take care of our people so they can focus on building amazing things
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="
                  flex items-start gap-4
                  p-4
                  rounded-xl
                  bg-[#EEF3FF]
                  border border-blue-100
                "
              >
                {/* ICON */}
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-blue-600 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                {/* TEXT */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
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
