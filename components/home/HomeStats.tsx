"use client";

import { motion } from "framer-motion";
import { Award, Headset, Puzzle, Users } from "lucide-react";

const STATS = [
    { value: "450 +", label: "Happy Clients", icon: Users },
    { value: "10 +", label: "Team Members", icon: Puzzle },
    { value: "10 +", label: "Years in Business", icon: Award },
    { value: "24/7 +", label: "Customer Support", icon: Headset },
];

export default function HomeStats() {
    return (
        <section className="py-12 sm:py-16 bg-[#F8FAFF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="bg-[#E0E7FF] rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-8 lg:gap-12"
                >
                    {STATS.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.2 + i * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-9 h-9 rounded-xl bg-white p-2 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                                        {stat.value}
                                    </p>
                                    <p className="text-slate-600 font-medium mt-1">{stat.label}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
