"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface StartupsCTAProps {
    readonly heading: string;
    readonly description: string;
    readonly ctaText?: string;
    readonly ctaLink?: string;
}

export default function StartupsCTA({
    heading,
    description,
    ctaText = "Get Started",
    ctaLink = "/contact-us",
}: StartupsCTAProps) {
    return (
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 md:py-20">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6"
                >
                    {heading.split("Your Next Digital Product?").map((part, index) => (
                        <span key={index}>
                            {part}
                            {index === 0 && (
                                <span className="text-slate-900">Your Next Digital Product?</span>
                            )}
                        </span>
                    ))}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-600 text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed"
                >
                    {description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href={ctaLink}
                        className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
                    >
                        {ctaText}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
