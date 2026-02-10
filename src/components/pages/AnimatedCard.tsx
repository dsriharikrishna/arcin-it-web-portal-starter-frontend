"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

interface AnimatedCardProps {
  title: string;
  description?: string;
  href?: string;
  icon?: React.ReactNode;
  index?: number;
  className?: string;
  children?: React.ReactNode;
}

import React from "react";

function AnimatedCard({
  title,
  description,
  href,
  icon,
  index = 0,
  className,
  children,
}: AnimatedCardProps) {
  const content = (
    <>
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/90 text-white shadow-lg shadow-blue-500/20">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors uppercase text-[15px]">{title}</h3>
      {description && <p className="mt-2 text-sm font-bold leading-relaxed text-slate-800/80">{description}</p>}
      {children}
    </>
  );

  const cardClasses = clsx(
    "group block p-8 rounded-3xl bg-mesh-gradient-color border border-blue-100/50 shadow-sm",
    "hover:shadow-2xl hover:shadow-blue-500/10 hover:bg-white hover:-translate-y-2 transition-all duration-300",
    className
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {href ? (
        <Link href={href} className={cardClasses}>
          {content}
        </Link>
      ) : (
        <div className={cardClasses}>{content}</div>
      )}
    </motion.div>
  );
}

export default React.memo(AnimatedCard);
