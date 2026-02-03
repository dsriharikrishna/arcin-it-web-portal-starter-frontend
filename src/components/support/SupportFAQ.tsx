"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";
import CustomButton from "@/components/ui/CustomButton";

const FAQS = [
    {
        question: "How do I reset my password?",
        answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. Follow the instructions sent to your email to create a new password."
    },
    {
        question: "Can I upgrade my plan later?",
        answer: "Yes, you can upgrade your plan at any time from your account settings. The changes will take effect immediately, and you will be charged the difference."
    },
    {
        question: "Where can I find my invoices?",
        answer: "Invoices are available in the 'Billing' section of your account dashboard. You can view and download them as PDF files."
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial for all new users. No credit card is required to sign up and explore our features."
    },
    {
        question: "How do I contact support?",
        answer: "You can contact our support team via the 'Contact Us' page or by using the live chat feature available on our website during business hours."
    },
];

export default function SupportFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 sm:py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
                        >
                            <CustomButton
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-slate-900 text-lg pr-4">
                                    {faq.question}
                                </span>
                                <span
                                    className={clsx(
                                        "w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                        openIndex === index
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-100 text-slate-500"
                                    )}
                                >
                                    {openIndex === index ? (
                                        <Minus className="w-3 h-3" />
                                    ) : (
                                        <Plus className="w-3 h-3" />
                                    )}
                                </span>
                            </CustomButton>
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
