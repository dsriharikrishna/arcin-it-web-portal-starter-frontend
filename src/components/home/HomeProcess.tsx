"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HOW_WE_WORK = [
    {
        title: "Discover",
        description: "We analyze your business challenges, goals, and technical landscape to create a strategic roadmap",
        iconSrc: "/svgs/Discover.svg",
    },
    {
        title: "Design",
        description: "Our architects craft solutions with optimal user experience, scalability, and security in mind",
        iconSrc: "/svgs/Design.svg",
    },
    {
        title: "Build",
        description: "Agile development with continuous integration ensures rapid, quality delivery",
        iconSrc: "/svgs/Build.svg",
    },
    {
        title: "Scale",
        description: "We deploy and optimize your solutions for maximum performance and growth",
        iconSrc: "/svgs/Scale.svg",
    },
    {
        title: "Support",
        description: "24/7 monitoring, maintenance, and continuous improvement keep you ahead",
        iconSrc: "/svgs/Support.svg",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export default function HomeProcess() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center mb-12"
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-md font-bold text-slate-700 tracking-tight bg-gray-200 p-1 rounded-lg">
                            How We Work
                        </p>
                        <h2 className="text-4xl font-medium text-gray-600 tracking-tight">Our Proven <span className="text-gray-800 font-bold">Methodology</span></h2>
                        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                            A structured approach that ensures successful delivery and long-term partnership
                        </p>
                    </div>

                </motion.div>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                >
                    {HOW_WE_WORK.map((step) => {
                        return (
                            <motion.div
                                key={step.title}
                                variants={itemVariants}
                                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-4 bg-gradient-to-b from-white to-slate-50/80"
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                                    <Image
                                        src={step.iconSrc}
                                        alt={step.title}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-blue-600">{step.title}</h3>

                                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
