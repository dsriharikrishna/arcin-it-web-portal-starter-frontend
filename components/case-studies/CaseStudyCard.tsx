"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  path: string;
  index: number;
}

export default function CaseStudyCard({
  title,
  description,
  imageSrc,
  tags,
  path,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="
        bg-[#F3F6FF]
        rounded-2xl
        p-4
        flex flex-col
        gap-4
        border border-blue-100
        hover:shadow-lg
        transition
      "
    >
      {/* IMAGE */}
      <div className="relative h-40 rounded-xl overflow-hidden bg-white">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-sm font-semibold text-slate-900">
          {title}
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                px-2 py-1
                rounded-full
                text-[10px]
                font-medium
                bg-white
                border border-blue-200
                text-blue-600
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link
        href={path}
        className="
          mt-auto
          w-full
          text-center
          text-sm
          py-2
          rounded-lg
          border border-blue-400
          text-blue-600
          hover:bg-blue-50
          transition
        "
      >
        View More
      </Link>
    </motion.div>
  );
}
