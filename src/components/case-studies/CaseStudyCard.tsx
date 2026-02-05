"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useCallback } from "react";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  path: string;
  index: number;
}

export default function CaseStudyCard({ title, description, imageSrc, tags, path, index }: Props) {
  // Motion values for ripple position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the ripple movement
  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const { currentTarget, clientX, clientY } = event;
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.03, y: -5 }}
      className="group relative flex cursor-default flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl"
    >
      {/* RIPPLE EFFECT LAYER */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(59, 130, 246, 0.06), transparent 40%)`,
        }}
      />

      {/* IMAGE */}
      <div className="relative z-10 h-48 overflow-hidden rounded-xl bg-slate-100 shadow-inner">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-1 flex-col gap-3">
        <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">{description}</p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue-100/50 bg-blue-50/50 px-3 py-1 text-[11px] font-semibold text-blue-600 shadow-sm backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link
        href={path}
        className="relative z-10 mt-6 w-full rounded-xl bg-slate-900 py-3 text-center text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-blue-600 hover:shadow-blue-500/30 active:scale-95"
      >
        Explore Project
      </Link>
    </motion.div>
  );
}
