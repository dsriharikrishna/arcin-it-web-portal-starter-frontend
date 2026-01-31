"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Button from "@/components/ui/Button";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  icon?: React.ReactNode;
  index?: number;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href = "/services",
  icon,
  index = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={clsx(
        "flex flex-col rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden",
        "hover:shadow-lg hover:border-blue-200 transition-all duration-300 shrink-0",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full bg-slate-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 85vw, 380px"
        />
        {icon && (
          <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center text-blue-600 shadow-sm">
            {icon}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-slate-600 text-sm line-clamp-3 flex-1">{description}</p>
        <div className="mt-4">
          <Button variant="outline" size="md" rounded="lg" href={href}>
            Know More
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
