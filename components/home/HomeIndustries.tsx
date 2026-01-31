"use client";

import { motion } from "framer-motion";
import {
    Briefcase,
    Building,
    Calendar,
    Cloud,
    FileBarChart,
    Gamepad2,
    GraduationCap,
    HeartPulse,
    ShoppingBag,
    Store,
    Truck,
    UtensilsCrossed,
} from "lucide-react";

const INDUSTRIES = [
    { name: "Real estate", icon: Building },
    { name: "Tours & Travels", icon: Briefcase },
    { name: "Education", icon: GraduationCap },
    { name: "Transport", icon: Truck },
    { name: "Event", icon: Calendar },
    { name: "eCommerce", icon: ShoppingBag },
    { name: "Game", icon: Gamepad2 },
    { name: "Healthcare", icon: HeartPulse },
    { name: "Finance", icon: FileBarChart },
    { name: "Restaurant", icon: UtensilsCrossed },
    { name: "On-Demand", icon: Cloud },
    { name: "Grocery", icon: Store },
];

export default function HomeIndustries() {
    return (
        <section className="py-16 sm:py-24 bg-[#F8FAFF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-6 py-2 rounded-full text-sm font-medium bg-[#E0E7FF] text-[#1E1B4B]">
                        We Have Worked Across Multiple Industries
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
                        Industries <span className="font-extrabold">We Serve</span>
                    </h2>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {INDUSTRIES.map((industry, i) => {
                        const Icon = industry.icon;
                        return (
                            <motion.div
                                key={industry.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{
                                    duration: 0.4,
                                    delay: i * 0.04,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <span className="font-medium text-lg text-slate-800">{industry.name}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
