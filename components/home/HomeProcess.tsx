"use client";

import { motion } from "framer-motion";
import {
    Compass,
    Hammer,
    HeartHandshake,
    PenTool,
    TrendingUp,
} from "lucide-react";

const HOW_WE_WORK = [
    {
        title: "Discover",
        description: "We analyze your business challenges, goals, and technical landscape to create a strategic roadmap",
        icon: Compass,
    },
    {
        title: "Design",
        description: "Our architects craft solutions with optimal user experience, scalability, and security in mind",
        icon: PenTool,
    },
    {
        title: "Build",
        description: "Agile development with continuous integration ensures rapid, quality delivery",
        icon: Hammer,
    },
    {
        title: "Scale",
        description: "We deploy and optimize your solutions for maximum performance and growth",
        icon: TrendingUp,
    },
    {
        title: "Support",
        description: "24/7 monitoring, maintenance, and continuous improvement keep you ahead",
        icon: HeartHandshake,
    },
];

export default function HomeProcess() {
    return (
        <section className="py-16 sm:py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        How We Work
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        A structured approach that ensures successful delivery and long-term partnership
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {HOW_WE_WORK.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.08,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-4 bg-gradient-to-b from-white to-slate-50/80"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-blue-600">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
