"use client";

import { motion } from "framer-motion";
import {
    Truck,
    Warehouse,
    Eye,
    PackageCheck,
    MapPin,
    BarChart3,
    Navigation
} from "lucide-react";

interface LogisticsSolutionsProps {
    title: string;
    solutions: readonly string[];
}

const iconMap: Record<number, any> = {
    0: Truck,
    1: Warehouse,
    2: Eye,
    3: PackageCheck,
    4: MapPin,
    5: BarChart3,
    6: Navigation,
};

export default function LogisticsSolutions({
    title,
    solutions,
}: LogisticsSolutionsProps) {
    return (
        <section className="bg-[#F5F7FA] p-6">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10"
                >
                    {title}
                </motion.h2>

                {/* Simple 3-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {solutions.map((solution, index) => {
                        const Icon = iconMap[index % 7];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 p-4 rounded-xl bg-[#E8EAF6] border border-[#C5CAE9]/30"
                            >
                                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                                    <Icon className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium text-slate-900 leading-tight">
                                    {solution}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-slate-600 text-xs max-w-4xl mx-auto"
                >
                    Each solution is designed to meet specific operational goals, industry needs, and customer expectations.
                </motion.p>
            </div>
        </section>
    );
}
