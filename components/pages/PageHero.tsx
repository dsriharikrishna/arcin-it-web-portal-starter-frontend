"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function PageHero({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: PageHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={clsx(
        "py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={clsx(
            "text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight",
            titleClassName
          )}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={clsx(
              "mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto",
              subtitleClassName
            )}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}
