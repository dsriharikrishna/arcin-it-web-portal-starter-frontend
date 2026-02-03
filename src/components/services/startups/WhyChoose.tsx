"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface WhyChoosePoint {
    readonly title: string;
    readonly description: string;
}

interface StartupsTechWhyChooseProps {
    readonly title: string;
    readonly description?: string;
    readonly points: readonly WhyChoosePoint[];
    readonly image: string;
}

export default function StartupsTechWhyChoose({
    title,
    description,
    points,
    image,
}: StartupsTechWhyChooseProps) {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-6 leading-tight"
                >
                    {title}
                </motion.h2>

                {/* Description */}
                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-center text-slate-600 text-sm md:text-base max-w-4xl mx-auto mb-12"
                    >
                        {description}
                    </motion.p>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Bullet Points */}
                    <div className="flex flex-col gap-4">
                        {points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-3"
                            >
                                {/* Bullet Point */}
                                <div className="mt-1.5 shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-base font-bold text-slate-900 mb-1">
                                        {point.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Image with ? overlay */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src={image}
                                alt="Why Choose Arcinit"
                                fill
                                className="object-cover"
                            />
                            {/* Question Mark Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-gradient-to-b from-blue-900/20 to-blue-900/40">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="text-white/90 text-[10rem] md:text-[14rem] font-bold select-none leading-none drop-shadow-2xl"
                                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                                >
                                    ?
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

