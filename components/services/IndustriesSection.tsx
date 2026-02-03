"use client";

import { motion } from "framer-motion";
import {
    Building2,
    ShoppingBag,
    Truck,
    Heart,
    Briefcase,
    Globe,
} from "lucide-react";

interface Industry {
    id: number;
    name: string;
    icon: string;
}

interface IndustriesProps {
    title: string;
    industries: Industry[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    hospital: Building2,
    diagnostic: Heart,
    specialty: Briefcase,
    enterprise: Globe,
    healthtech: Heart,
    logistics: Truck,
    freight: Truck,
    courier: ShoppingBag,
    ecommerce: ShoppingBag,
    manufacturing: Building2,
    retail: ShoppingBag,
    coldchain: Truck,
    fashion: ShoppingBag,
    grocery: ShoppingBag,
    electronics: Building2,
    hardware: Building2,
    marketplace: Globe,
    wholesale: Building2,
};

export default function IndustriesSection({
    title,
    industries,
}: IndustriesProps) {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        {title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => {
                        const IconComponent = iconMap[industry.icon] || Building2;

                        return (
                            <motion.div
                                key={industry.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-900">
                                        {industry.name}
                                    </h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
