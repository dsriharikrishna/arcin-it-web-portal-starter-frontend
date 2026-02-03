"use client";

import { motion } from "framer-motion";
import {
    ShoppingBag,
    ShoppingCart,
    Smartphone,
    Users,
    BarChart3,
    RefreshCcw
} from "lucide-react";

interface RetailIndustriesProps {
    title: string;
    industries: string[];
}

const iconMap: Record<number, any> = {
    0: ShoppingBag,
    1: ShoppingCart,
    2: Smartphone,
    3: Users,
    4: BarChart3,
    5: RefreshCcw,
};

export default function RetailIndustries({ title, industries }: RetailIndustriesProps) {
    return (
        <section className="bg-[#f8faff]/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center text-slate-900 mb-16"
                >
                    {title}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => {
                        const Icon = iconMap[index % 6];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-blue-100/50 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-semibold text-slate-900 leading-tight">
                                    {industry}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
