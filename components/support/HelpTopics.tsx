"use client";

import { motion } from "framer-motion";
import {
    Rocket,
    CreditCard,
    Settings,
    Shield,
    Code2,
    Users,
} from "lucide-react";
import Link from "next/link";

const TOPICS = [
    {
        title: "Getting Started",
        desc: "Everything you need to know to get up and running.",
        icon: Rocket,
        href: "#",
    },
    {
        title: "Account & Billing",
        desc: "Manage your subscription, payments, and account details.",
        icon: CreditCard,
        href: "#",
    },
    {
        title: "Technical Support",
        desc: "Troubleshooting guides and technical documentation.",
        icon: Settings,
        href: "#",
    },
    {
        title: "Security & Privacy",
        desc: "Information about our security protocols and privacy policies.",
        icon: Shield,
        href: "#",
    },
    {
        title: "API & Integrations",
        desc: "Developer resources, API reference, and integration guides.",
        icon: Code2,
        href: "#",
    },
    {
        title: "Community",
        desc: "Connect with other users, share ideas, and find inspiration.",
        icon: Users,
        href: "#",
    },
];

export default function HelpTopics() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Browse by Topic</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {TOPICS.map((topic, i) => {
                        const Icon = topic.icon;
                        return (
                            <motion.div
                                key={topic.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <Link
                                    href={topic.href}
                                    className="block p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 h-full group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {topic.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        {topic.desc}
                                    </p>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
