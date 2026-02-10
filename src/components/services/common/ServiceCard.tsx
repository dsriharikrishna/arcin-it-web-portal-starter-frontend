"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CustomButton from "@/components/ui/CustomButton";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  icon?: React.ReactNode;
  index?: number;
}

function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href = "/services",
  icon,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group overflow-hidden rounded-3xl border border-blue-100/50 bg-mesh-gradient-color transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* IMAGE */}
      <div className="relative m-4 h-[190px] overflow-hidden rounded-2xl">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="360px" />

        {icon && (
          <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/90 text-white shadow-lg shadow-blue-500/20 backdrop-blur-sm">
            {icon}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-6">
        <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h3>

        <p className="mt-2 line-clamp-3 text-sm font-bold leading-relaxed text-slate-800/80">{description}</p>

        <CustomButton variant="outline" size="md" href={href} className="mt-5 w-full border-blue-600/20 bg-blue-50/50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl font-bold transition-all shadow-sm">
          Know More
        </CustomButton>
      </div>
    </motion.div>
  );
}

export default React.memo(ServiceCard);
