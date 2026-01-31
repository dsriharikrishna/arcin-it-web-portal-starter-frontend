"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, MapPin, Clock, History } from "lucide-react";
import Button from "@/components/ui/Button";

const POSITIONS = [
    {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        type: "Remote / Hybrid",
        commitment: "Full-time",
        experience: "5+ years",
        icon: Code2,
    },
    {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        type: "Remote / Hybrid",
        commitment: "Full-time",
        experience: "5+ years",
        icon: Code2,
    },
    {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        type: "Remote / Hybrid",
        commitment: "Full-time",
        experience: "5+ years",
        icon: Code2,
    },
    {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        type: "Remote / Hybrid",
        commitment: "Full-time",
        experience: "5+ years",
        icon: Code2,
    },
    {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        type: "Remote / Hybrid",
        commitment: "Full-time",
        experience: "5+ years",
        icon: Code2,
    },
    {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        type: "Remote / Hybrid",
        commitment: "Full-time",
        experience: "5+ years",
        icon: Code2,
    },
    {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        type: "Remote / Hybrid",
        commitment: "Full-time",
        experience: "5+ years",
        icon: Code2,
    },
    {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        type: "Remote / Hybrid",
        commitment: "Full-time",
        experience: "5+ years",
        icon: Code2,
    },
];

export default function CareersPositions() {
    return (
        <section className="py-20 sm:py-28 bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 sm:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-slate-800 text-blue-400 text-sm font-semibold mb-6 border border-slate-700">
                        Open Positions
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
                        Find Your Perfect Role
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Explore opportunities across engineering, design, and delivery
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {POSITIONS.map((role, i) => {
                        const Icon = role.icon;
                        return (
                            <motion.div
                                key={i} // Using index as key since titles are identical in mockup
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="bg-[#EBF3FF] p-6 rounded-2xl flex flex-col items-start gap-5 text-slate-900 hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0 mb-1 shadow-lg shadow-blue-500/30">
                                    <Icon className="w-5 h-5" />
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 leading-tight pr-4">
                                    {role.title}
                                </h3>

                                <div className="space-y-3 w-full border-t border-slate-200 pt-5 mt-auto">
                                    <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                        <Briefcase className="w-4 h-4 text-slate-400" />
                                        {role.department}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                        <MapPin className="w-4 h-4 text-slate-400" />
                                        {role.type}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                        <Clock className="w-4 h-4 text-slate-400" />
                                        {role.commitment}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                        <History className="w-4 h-4 text-slate-400" />
                                        {role.experience}
                                    </div>
                                </div>

                                <Button size="md" className="w-full mt-2 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0">
                                    Apply Now
                                </Button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
