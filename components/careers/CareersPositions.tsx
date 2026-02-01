"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, MapPin, Clock, History } from "lucide-react";
import Button from "@/components/ui/Button";

const POSITIONS = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    type: "Remote / Hybrid",
    commitment: "Full-time",
    experience: "5+ years",
    icon: Code2,
  },
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    type: "Remote / Hybrid",
    commitment: "Full-time",
    experience: "5+ years",
    icon: Code2,
  },
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    type: "Remote / Hybrid",
    commitment: "Full-time",
    experience: "5+ years",
    icon: Code2,
  },
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    type: "Remote / Hybrid",
    commitment: "Full-time",
    experience: "5+ years",
    icon: Code2,
  },
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    type: "Remote / Hybrid",
    commitment: "Full-time",
    experience: "5+ years",
    icon: Code2,
  },
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    type: "Remote / Hybrid",
    commitment: "Full-time",
    experience: "5+ years",
    icon: Code2,
  },
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    type: "Remote / Hybrid",
    commitment: "Full-time",
    experience: "5+ years",
    icon: Code2,
  },
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    type: "Remote / Hybrid",
    commitment: "Full-time",
    experience: "5+ years",
    icon: Code2,
  },
];

export default function CareersPositions() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="px-4 py-1.5 rounded-full bg-[#EEF3FF] text-blue-600 text-sm font-medium">
            Open Positions
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Find Your Perfect Role
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            Explore opportunities across engineering, design, and delivery
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POSITIONS.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="
                  bg-[#EEF3FF]
                  rounded-2xl
                  p-5
                  flex flex-col
                  gap-4
                  border border-blue-100
                "
              >
                {/* ICON */}
                <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                  <Icon className="w-4 h-4" />
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                  {role.title}
                </h3>

                {/* META */}
                <div className="flex flex-col gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-slate-400" />
                    {role.department}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {role.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    {role.commitment}
                  </div>
                  <div className="flex items-center gap-2">
                    <History className="w-4 h-4 text-slate-400" />
                    {role.experience}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  size="sm"
                  className="text-blue-600 hover:text-blue-900"
                  variant="outline"
                >
                  Apply Now
                </Button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
