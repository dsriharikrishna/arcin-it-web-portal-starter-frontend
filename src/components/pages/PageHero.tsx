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
  description?: string;
}

export default function PageHero({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  backgroundImage,
  description,
}: PageHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={clsx(
        "relative overflow-hidden py-20 sm:py-32 lg:py-40",
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
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={clsx(
            "text-lg font-bold tracking-tight sm:text-xl",
            backgroundImage ? "text-white" : "text-slate-900",
            titleClassName
          )}
        >
          {title}
        </motion.p>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={clsx(
              "mx-auto max-w-2xl text-lg sm:text-2xl",
              backgroundImage ? "text-slate-200" : "text-slate-600",
              subtitleClassName
            )}
          >
            {subtitle}
          </motion.p>
        )}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={clsx(
              "sm:text-md mx-auto max-w-2xl text-sm text-gray-300",
              backgroundImage ? "text-slate-200" : "text-slate-600",
              subtitleClassName
            )}
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}
