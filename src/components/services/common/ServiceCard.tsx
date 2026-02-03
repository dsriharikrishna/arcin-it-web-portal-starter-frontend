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
      className="
        rounded-3xl
        bg-[#F3F6FF]
        border border-blue-100
        overflow-hidden
        hover:shadow-xl
        transition-all
      "
    >
      {/* IMAGE */}
      <div className="relative h-[190px] m-4 rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="360px"
        />

        {icon && (
          <div className="
            absolute top-4 left-4
            w-11 h-11
            rounded-full
            bg-white/80 backdrop-blur
            flex items-center justify-center
            text-blue-600
          ">
            {icon}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
          {description}
        </p>

        <CustomButton
          variant="outline"
          size="md"
          href={href}
          className="mt-5 w-full"
        >
          Know More
        </CustomButton>
      </div>
    </motion.div>
  );
}

export default React.memo(ServiceCard);
