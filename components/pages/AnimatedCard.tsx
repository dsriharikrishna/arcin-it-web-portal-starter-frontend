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

export default function AnimatedCard({
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
        <div className="mb-4 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      {description && (
        <p className="mt-2 text-slate-600 line-clamp-2">{description}</p>
      )}
      {children}
    </>
  );

  const cardClasses = clsx(
    "block p-6 rounded-2xl bg-white border border-slate-200 shadow-sm",
    "hover:shadow-lg hover:border-blue-200 transition-shadow duration-300",
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
