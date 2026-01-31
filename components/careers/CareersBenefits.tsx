"use client";

import { motion } from "framer-motion";
import {
    CircleDollarSign,
    Heart,
    Monitor,
    GraduationCap,
    Plane,
    Users,
} from "lucide-react";

const BENEFITS = [
    {
        title: "Competitive Salary",
        description: "Industry-leading compensation packages with performance bonuses",
        icon: CircleDollarSign,
    },
    {
        title: "Health & Wellness",
        description: "Comprehensive health, dental, and vision coverage for you and family",
        icon: Heart,
    },
    {
        title: "Remote Flexibility",
        description: "Hybrid work model with flexible remote options",
        icon: Monitor,
    },
    {
        title: "Learning & Growth",
        description: "Annual learning budget and access to certifications",
        icon: GraduationCap,
    },
    {
        title: "Paid Time Off",
        description: "Generous vacation, sick leave, and parental leave policies",
        icon: Plane,
    },
    {
        title: "Team Culture",
        description: "Regular team events, offsites, and wellness programs",
        icon: Users,
    },
];

export default function CareersBenefits() {
    return (
        <section className="py-20 sm:py-28 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 sm:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-slate-800 text-blue-400 text-sm font-semibold mb-6 border border-slate-700">
                        Why Join Us
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
                        Benefits & Perks
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        We take care of our people so they can focus on building amazing things
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BENEFITS.map((benefit, i) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white p-6 sm:p-8 rounded-2xl flex items-start gap-5 text-slate-900"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
