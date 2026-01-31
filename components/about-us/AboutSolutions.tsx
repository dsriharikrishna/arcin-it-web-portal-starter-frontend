"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";

const FAQS = [
    {
        question: "What type of services does your company offer?",
        answer: "We offer comprehensive IT management and consultancy services to organizations worldwide. We specialize in software development, digital marketing, and cloud solutions tailored to your business needs."
    },
    {
        question: "How do you ensure service quality?",
        answer: "We follow strict quality assurance protocols and agile methodologies to ensure our deliverables meet the highest standards. Our team is certified and experienced in handling complex projects."
    },
    {
        question: "Do you provide support after project completion?",
        answer: "Yes, we offer dedicated post-launch support and maintenance packages to keep your software running smoothly and secure."
    },
    {
        question: "Can you handle enterprise-level projects?",
        answer: "Absolutely. We have extensive experience working with large enterprises, delivering scalable and robust solutions that handle high traffic and complex workflows."
    },
    {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including Healthcare, Finance, E-commerce, Education, and Manufacturing, providing industry-specific solutions."
    },
];

export default function AboutSolutions() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 sm:py-24 bg-slate-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800 text-blue-400 text-sm font-semibold mb-4 border border-slate-700">
                        FAQs
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Proven Solutions for Your Success
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-square sm:aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden bg-slate-900"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1553877616-152865621d90?w=800&q=80"
                            alt="Solutions for success"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                <p className="text-blue-300 font-medium mb-1">Expert Support</p>
                                <h3 className="text-xl font-bold text-white">24/7 Dedicated Assistance</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-4"
                    >
                        {FAQS.map((faq, index) => (
                            <div
                                key={index}
                                className={clsx(
                                    "rounded-2xl transition-colors duration-300 overflow-hidden",
                                    openIndex === index ? "bg-[#EBF3FF] text-slate-900" : "bg-[#EBF3FF] text-slate-900"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-bold text-lg pr-4">{faq.question}</span>
                                    <span className={clsx(
                                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                        openIndex === index ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
                                    )}>
                                        {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
