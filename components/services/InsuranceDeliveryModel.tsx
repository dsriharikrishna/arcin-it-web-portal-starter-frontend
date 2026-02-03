"use client";

import { motion } from "framer-motion";

interface Step {
    id: string;
    title: string;
    description: string;
}

interface InsuranceDeliveryModelProps {
    whyArcinit: {
        title: string;
        description: string;
    };
    deliveryModel: {
        title: string;
        steps: Step[];
    };
}

export default function InsuranceDeliveryModel({
    whyArcinit,
    deliveryModel,
}: InsuranceDeliveryModelProps) {
    return (
        <section className="bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Why Arcin IT? - Centered Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-28 max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-slate-900 mb-10">
                        {whyArcinit.title}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        {whyArcinit.description}
                    </p>
                </motion.div>

                {/* Delivery Model - Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                        {deliveryModel.title}
                    </h2>
                </motion.div>

                {/* Delivery Model - 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deliveryModel.steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-[2rem] bg-[#f8faff] border border-blue-100/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col items-start gap-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-blue-500/30">
                                {step.id}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mt-2">
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
