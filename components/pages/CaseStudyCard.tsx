"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Button from "@/components/ui/Button";

interface CaseStudyCardProps {
    title: string;
    description: string;
    imageSrc: string;
    tags: string[];
    index?: number;
    className?: string;
    path?: string;
}

export default function CaseStudyCard({
    title,
    description,
    imageSrc,
    tags,
    index = 0,
    className,
    path,
}: CaseStudyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={clsx(
                "flex flex-col bg-[#EBF3FF] rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300",
                className
            )}
        >
            {/* Image Section */}
            <div className="relative aspect-[4/3] w-full bg-slate-100 p-8 flex items-center justify-center overflow-hidden">
                {/* Decorative background circle if needed, or just the image */}
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={clsx(
                                "px-3 py-1.5 text-xs font-medium rounded-lg",
                                "bg-[#DAFBE1] text-[#1E5B2D]" // Light green variation matched from image approx or similar nice contrast
                            )}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Button */}
                <Button
                    variant="outline"
                    href={path}
                    className="w-full justify-center border-blue-200 text-blue-600 hover:bg-blue-50 py-2.5"
                >
                    View More
                </Button>
            </div>
        </motion.div>
    );
}
