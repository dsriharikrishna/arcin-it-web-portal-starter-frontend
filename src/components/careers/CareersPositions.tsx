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
    <section className="bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 sm:px-8">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="rounded-full bg-slate-100 px-5 py-1.5 text-[13px] font-bold text-slate-900 shadow-sm">
            {title}
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight text-black md:text-5xl">
            {subtitle}
          </h2>

          <p className="max-w-2xl text-[15px] font-bold leading-relaxed text-slate-900">
            {description}
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {positions.map((role, i) => {
            const Icon = iconMap[role.department] || Briefcase;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col gap-3 rounded-xl border border-blue-100/50 bg-[#F1F4FF] p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* ICON */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/90 text-white shadow-lg shadow-blue-500/20">
                  <Icon className="h-5 w-5" />
                </div>

                {/* TITLE */}
                <h3 className="text-[17px] font-bold tracking-tight text-black group-hover:text-blue-600 transition-colors">
                  {role.title}
                </h3>

                {/* META */}
                <div className="flex flex-col gap-2 py-1">
                  <div className="flex items-center gap-3 text-[13px] font-bold text-slate-900">
                    <Briefcase className="h-4 w-4 text-slate-900" />
                    {role.department}
                  </div>
                  <div className="flex items-center gap-3 text-[13px] font-bold text-slate-900">
                    <MapPin className="h-4 w-4 text-slate-900" />
                    {role.location}
                  </div>
                  <div className="flex items-center gap-3 text-[13px] font-bold text-slate-900">
                    <Clock className="h-4 w-4 text-slate-900" />
                    {role.type}
                  </div>
                  <div className="flex items-center gap-3 text-[13px] font-bold text-slate-900">
                    <History className="h-4 w-4 text-slate-900" />
                    {role.experience}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-4">
                  <CustomButton
                    href={`/careers/${role.slug}`}
                    variant="outline"
                    className="w-full border-blue-600/20 bg-blue-50/50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl font-bold py-2.5 transition-all text-sm shadow-sm"
                  >
                    Apply Now
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
