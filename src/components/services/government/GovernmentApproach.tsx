"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ApproachStep {
    title: string;
    description: string;
}

interface GovernmentApproachProps {
    title: string;
    steps: ApproachStep[];
}

export default function GovernmentApproach({
    title,
    steps,
}: GovernmentApproachProps) {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-16"
                >
                    {title}
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100/50 flex flex-col gap-4"
                        >
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
