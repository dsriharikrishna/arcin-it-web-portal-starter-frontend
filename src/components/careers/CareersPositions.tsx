"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Briefcase,
  MapPin,
  Clock,
  History,
  Cpu,
  Layout,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";
import CustomButton from "@/components/ui/CustomButton";
import { careersPositionsData } from "@/data/careers/careers-page";

const iconMap: Record<string, LucideIcon> = {
  Engineering: Code2,
  Infrastructure: Cpu,
  Design: Layout,
  "AI/ML": Cpu,
  "Quality Assurance": ShieldCheck,
};

export default function CareersPositions() {
  const { title, subtitle, description, positions } = careersPositionsData;

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

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {positions.map((role, i) => {
            const Icon = iconMap[role.department] || Briefcase;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex flex-col gap-4 rounded-2xl border border-blue-100 bg-[#EEF3FF] p-5 transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                {/* ICON */}
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Icon className="h-4 w-4" />
                </div>

                {/* TITLE */}
                <h3 className="text-sm leading-snug font-semibold text-slate-900">{role.title}</h3>

                {/* META */}
                <div className="flex flex-col gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-slate-400" />
                    {role.department}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    {role.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-400" />
                    {role.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <History className="h-4 w-4 text-slate-400" />
                    {role.experience}
                  </div>
                </div>

                {/* CTA */}
                <CustomButton
                  href={`/careers/${role.slug}`}
                  size="sm"
                  className="mt-auto text-blue-600 hover:text-blue-900"
                  variant="outline"
                >
                  Apply Now
                </CustomButton>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
