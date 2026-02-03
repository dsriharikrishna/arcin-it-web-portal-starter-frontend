"use client";

import { motion } from "framer-motion";

interface ServiceItem {
    id: string;
    title: string;
    description: string;
}

interface EGovernanceServicesProps {
    title: string;
    services: ServiceItem[];
}

export default function EGovernanceServices({
    title,
    services,
}: EGovernanceServicesProps) {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100/50 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                                {service.id}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
