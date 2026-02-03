"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceItem {
    title: string;
    description: string;
}

interface ServiceGroup {
    readonly image: string;
    readonly imagePosition: "left" | "right";
    readonly items: readonly ServiceItem[];
}

interface LogisticsServiceSectionProps {
    readonly title: string;
    readonly groups: readonly ServiceGroup[];
}

export default function LogisticsServiceSection({
    title,
    groups,
}: LogisticsServiceSectionProps) {
    return (
        <section className="bg-[#f8faff]/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16"
                >
                    {title}
                </motion.h2>

                <div className="flex flex-col gap-24">
                    {groups.map((group, groupIndex) => (
                        <div
                            key={groupIndex}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${group.imagePosition === "left" ? "lg:direction-rtl" : ""
                                }`}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: group.imagePosition === "left" ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`${group.imagePosition === "left" ? "lg:order-2" : "lg:order-1"} flex flex-col gap-10`}
                            >
                                {group.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex flex-col gap-3">
                                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`${group.imagePosition === "left" ? "lg:order-1" : "lg:order-2"} relative aspect-[4/3] lg:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-2xl`}
                            >
                                <Image
                                    src={group.image}
                                    alt="Logistics Services"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
