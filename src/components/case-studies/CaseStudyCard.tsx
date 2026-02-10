"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CustomButton } from "../ui";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  path: string;
  index: number;
}

export default function CaseStudyCard({ title, description, imageSrc, tags, path, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative flex cursor-default flex-col overflow-hidden rounded-3xl border border-blue-100/50 bg-mesh-gradient-color shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* IMAGE */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="relative flex flex-1 flex-col gap-3 p-8 pt-4">
        <h3 className="text-[20px] font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="line-clamp-3 text-[14px] font-bold leading-relaxed text-slate-800/80">
          {description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 py-4">
          {tags.map((tag, tagIndex) => {
            const tagColors = [
              "bg-blue-50 text-blue-700",
              "bg-indigo-50 text-indigo-700",
              "bg-slate-100 text-slate-700",
            ];

            const colorClass = tagColors[tagIndex % tagColors.length];

            return (
              <span
                key={tag}
                className={`rounded-lg px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider shadow-sm transition-colors border border-blue-100/50 ${colorClass}`}
              >
                {tag}
              </span>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4">
          <CustomButton
            href={path}
            variant="outline"
            className="w-full border-blue-600/20 bg-blue-50/50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl font-bold transition-all shadow-sm"
          >
            View Case Study
          </CustomButton>
        </div>
      </div>
    </motion.div>
  );
}
