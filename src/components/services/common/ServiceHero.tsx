"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
}: ServiceHeroProps) {
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Go Back */}
        <CustomButton
          onClick={() => router.back()}
          className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </CustomButton>

        {/* Center Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-sm sm:text-base text-white/90">
              {subtitle}
            </p>
          )}

          <p className="mt-6 max-w-3xl text-sm sm:text-base text-white/80 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
