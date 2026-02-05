"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function ServiceHero({ title, subtitle, description }: ServiceHeroProps) {
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        {/* Go Back */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-white sm:top-6 sm:left-6 sm:px-4 sm:text-sm"
        >
          <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">Go Back</span>
          <span className="sm:hidden">Back</span>
        </button>

        {/* Center Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center pt-8 text-center sm:pt-0"
        >
          <h1 className="max-w-4xl px-4 text-2xl leading-tight font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 px-4 text-sm text-white/90 sm:mt-4 sm:text-base">{subtitle}</p>
          )}

          <p className="mt-4 max-w-3xl px-4 text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
