"use client";

import { motion } from "framer-motion";

interface BusinessesTrustUsProps {
    readonly title: string;
    readonly description: string;
}

export default function BusinessesTrustUs({
    title,
    description,
}: BusinessesTrustUsProps) {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 rounded-lg bg-[#E8EAF6]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                        {title}
                    </h3>
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
