"use client";

import Image from "next/image";
import { PageHero } from "@/components/pages";
import { CheckCircle2 } from "lucide-react";

export default function ClaimsAutomationPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <PageHero
                title="Claims Automation Platform"
                subtitle="Leveraging AI and Computer Vision to streamline insurance claims processing from days to minutes."
                className="bg-black border-b border-white/10"
                titleClassName="text-white"
                subtitleClassName="text-slate-400"
            />

            <section className="py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Visuals */}
                        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 lg:order-2">
                            <div className="aspect-[4/5] relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                                    alt="Claims Automation Interface"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-12 lg:order-1">
                            {/* Challenge */}
                            <div>
                                <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-blue-500 rounded-full inline-block" />
                                    The Challenge
                                </h2>
                                <p className="text-slate-400 leading-relaxed text-lg">
                                    Traditional claims processing was bogged down by manual data entry, subjective damage assessments, and long wait times for approval. This resulted in high operational costs and frustrated customers during stressful times.
                                </p>
                            </div>

                            {/* Solution */}
                            <div>
                                <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-blue-500 rounded-full inline-block" />
                                    Our Solution
                                </h2>
                                <p className="text-slate-400 leading-relaxed text-lg mb-6">
                                    We built an AI-first platform that automates the entire claims lifecycle.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Computer Vision for Damage Assessment",
                                        "NLP for Document Processing & Verification",
                                        "Automated Fraud Detection Algorithms",
                                        "Instant Payout Integration"
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-slate-300">
                                            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Results */}
                            <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/10">
                                <h2 className="text-2xl font-bold text-white mb-6">Key Results</h2>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-4xl font-bold text-blue-500 mb-1">70%</p>
                                        <p className="text-slate-500 text-sm">Faster Processing</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-blue-500 mb-1">99%</p>
                                        <p className="text-slate-500 text-sm">Accuracy Rate</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-blue-500 mb-1">40%</p>
                                        <p className="text-slate-500 text-sm">Cost Reduction</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-blue-500 mb-1">2M+</p>
                                        <p className="text-slate-500 text-sm">Claims Processed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
