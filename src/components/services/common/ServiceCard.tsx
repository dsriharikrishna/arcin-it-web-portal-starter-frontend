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
      className="overflow-hidden rounded-3xl border border-blue-100 bg-[#F3F6FF] transition-all hover:shadow-xl"
    >
      {/* IMAGE */}
      <div className="relative m-4 h-[190px] overflow-hidden rounded-2xl">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="360px" />

        {icon && (
          <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-blue-600 backdrop-blur">
            {icon}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-6">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{description}</p>

        <CustomButton variant="outline" size="md" href={href} className="mt-5 w-full">
          Know More
        </CustomButton>
      </div>
    </motion.div>
  );
}

export default React.memo(ServiceCard);
