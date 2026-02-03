"use client";

import { motion } from "framer-motion";

interface Step {
    id: string;
    title: string;
    description: string;
}

interface RetailProcessProps {
    title: string;
    steps: Step[];
}

export default function RetailProcess({ title, steps }: RetailProcessProps) {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center text-slate-900 mb-20"
                >
                    {title}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-[2rem] bg-[#f0f4ff]/50 border border-blue-100/50 flex flex-col gap-5 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
                                {step.id}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
