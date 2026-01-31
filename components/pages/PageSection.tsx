"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface PageSectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  contentClassName?: string;
  /** Animation variant */
  variant?: "fade" | "slide-up" | "slide-left";
  delay?: number;
}

export default function PageSection({
  children,
  title,
  subtitle,
  className,
  contentClassName,
  variant = "slide-up",
  delay = 0,
}: PageSectionProps) {
  const getInitial = () => {
    switch (variant) {
      case "fade":
        return { opacity: 0 };
      case "slide-left":
        return { opacity: 0, x: 40 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  const getAnimate = () => {
    switch (variant) {
      case "fade":
        return { opacity: 1 };
      case "slide-left":
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.section
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={clsx("py-16 sm:py-20", className)}
    >
      <div
        className={clsx(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          contentClassName
        )}
      >
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
