"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye } from "lucide-react";
import clsx from "clsx";

interface MissionCardProps {
    title: string;
    description: string;
    icon: React.ElementType<{ className?: string }>;
    delay?: number;
}

function MissionCard({ title, description, icon: Icon, delay = 0 }: MissionCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-[#EBF3FF] rounded-2xl p-8 border border-blue-50"
        >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm mb-6">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {description}
            </p>
        </motion.div>
    );
}

export default function AboutMissionVision() {
    return (
        <section className="py-16 sm:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Mission & Vision Cards */}
                    <div className="flex flex-col gap-6">
                        <MissionCard
                            title="Our Mission"
                            description="To empower organizations with innovative technology solutions that drive sustainable growth, operational excellence, and competitive advantage in an increasingly digital world."
                            icon={Target}
                            delay={0.1}
                        />
                        <MissionCard
                            title="Our Vision"
                            description="To be the most trusted technology partner for enterprises worldwide, recognized for delivering transformational outcomes and building long-lasting client relationships."
                            icon={Eye}
                            delay={0.2}
                        />
                    </div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Abstract Background Decoration */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent rounded-[2.5rem] -z-10 rotate-3" />

                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                alt="Team collaborating"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay Graph/Tech Graphic - Simulating the UI overlay in user image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent flex items-center justify-center">
                                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                    <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border border-white/40 flex items-center justify-center">
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
