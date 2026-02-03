"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Hammer, TrendingUp } from "lucide-react";

const VALUES = [
    {
        title: "Excellence",
        description: "We pursue the highest standards in everything we do, continuously improving our skills and processes.",
        icon: Compass,
    },
    {
        title: "Partnership",
        description: "We build lasting relationships with our clients, working as an extension of their teams.",
        icon: PenTool,
    },
    {
        title: "Innovation",
        description: "We embrace new technologies and creative solutions to solve complex challenges.",
        icon: Hammer,
    },
    {
        title: "Impact",
        description: "We measure success by the tangible value we create for our clients and society.",
        icon: TrendingUp,
    },
];

export default function AboutValues() {
    return (
        <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
                        Our Values
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        What Drives Us
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {VALUES.map((value, i) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-[#EBF3FF] p-6 lg:p-8 rounded-2xl border border-blue-50 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start h-full"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm mb-6 shrink-0">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-blue-500 mb-3">{value.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
