"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface WhyChoosePoint {
    title: string;
    description: string;
}

interface WhyChooseProps {
    title: string;
    description?: string;
    points: WhyChoosePoint[];
}

export default function WhyChooseSection({
    title,
    description,
    points,
}: WhyChooseProps) {
    return (
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            {description}
                        </p>
                    )}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Check className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                        {point.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
