"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

interface RetailBenefitsProps {
    title: string;
    points: string[];
    image: string;
}

export default function RetailBenefits({ title, points, image }: RetailBenefitsProps) {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-10">
                            {title}
                        </h2>

                        <div className="flex flex-col gap-5">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 w-5 h-5 rounded-full border border-blue-500 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-blue-600" />
                                    </div>
                                    <p className="text-slate-600 text-lg">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image
                                src={image}
                                alt="Partnering with ArcinIT"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
