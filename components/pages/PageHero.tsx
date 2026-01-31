"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  backgroundImage,
}: PageHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={clsx(
        "relative py-20 sm:py-32 lg:py-40 overflow-hidden",
        !backgroundImage && "bg-gradient-to-br from-slate-50 to-slate-100",
        className
      )}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={clsx(
            "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
            backgroundImage ? "text-white" : "text-slate-900",
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
              "mt-6 text-lg sm:text-xl max-w-2xl mx-auto",
              backgroundImage ? "text-slate-200" : "text-slate-600",
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

