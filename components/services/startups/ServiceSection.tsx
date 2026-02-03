"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

interface ServiceItem {
    readonly title: string;
    readonly description: string;
}

interface ServiceGroup {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly imagePosition: "left" | "right";
    readonly items: readonly ServiceItem[];
    readonly benefits?: readonly string[];
}

interface StartupsServiceSectionProps {
    readonly title: string;
    readonly groups: readonly ServiceGroup[];
}

export default function StartupsServiceSection({
    title,
    groups,
}: StartupsServiceSectionProps) {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16"
                >
                    {title}
                </motion.h2>

                <div className="flex flex-col gap-20">
                    {groups.map((group, groupIndex) => (
                        <div
                            key={groupIndex}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start`}
                        >
                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`${group.imagePosition === "left"
                                        ? "lg:order-1"
                                        : "lg:order-2"
                                    } relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl`}
                            >
                                <Image
                                    src={group.image}
                                    alt={group.title}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: group.imagePosition === "left" ? 30 : -30,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`${group.imagePosition === "left"
                                        ? "lg:order-2"
                                        : "lg:order-1"
                                    } flex flex-col gap-6`}
                            >
                                {/* Title with number */}
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                                        {group.id}. {group.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm md:text-base">
                                        {group.description}
                                    </p>
                                </div>

                                {/* Bullet Points */}
                                <div className="flex flex-col gap-3">
                                    {group.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex gap-3">
                                            {/* Bullet Point */}
                                            <div className="mt-1.5 shrink-0">
                                                <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                                            </div>

                                            {/* Content */}
                                            <div>
                                                <span className="text-sm md:text-base">
                                                    <strong className="font-bold text-slate-900">
                                                        {item.title}
                                                    </strong>
                                                    {" "}
                                                    <span className="text-slate-600">
                                                        {item.description}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Client Benefits (if exists) */}
                                {group.benefits && group.benefits.length > 0 && (
                                    <div className="mt-2">
                                        <h4 className="text-base font-bold text-slate-900 mb-3">
                                            Client Benefits:
                                        </h4>
                                        <div className="flex flex-col gap-2">
                                            {group.benefits.map((benefit, benefitIndex) => (
                                                <div
                                                    key={benefitIndex}
                                                    className="flex items-start gap-2"
                                                >
                                                    <div className="mt-0.5 shrink-0">
                                                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                                                            <Check className="w-3 h-3 text-blue-600" />
                                                        </div>
                                                    </div>
                                                    <span className="text-sm text-slate-600">
                                                        {benefit}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
