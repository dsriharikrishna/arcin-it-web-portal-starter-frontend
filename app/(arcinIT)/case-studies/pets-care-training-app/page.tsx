"use client";

import Image from "next/image";
import { PageHero } from "@/components/pages";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function PetsCareAppPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <PageHero
                title="Pets Care & Training App"
                subtitle="Revolutionizing pet ownership with an all-in-one mobile platform for training, booking, and health tracking."
                className="bg-black border-b border-white/10"
                titleClassName="text-white"
                subtitleClassName="text-slate-400"
            />

            <section className="py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Visuals */}
                        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800">
                            <div className="aspect-[4/5] relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1541569863344-9c59530462aa?w=800&q=80"
                                    alt="Pets Care App Interface"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-12">
                            {/* Challenge */}
                            <div>
                                <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-blue-500 rounded-full inline-block" />
                                    The Challenge
                                </h2>
                                <p className="text-slate-400 leading-relaxed text-lg">
                                    Pet owners struggled with fragmented services—booking vets, finding trainers, and buying supplies required navigating multiple disconnected platforms. This led to a disjointed user experience and difficulty in managing pet health records efficiently.
                                </p>
                            </div>

                            {/* Solution */}
                            <div>
                                <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-blue-500 rounded-full inline-block" />
                                    Our Solution
                                </h2>
                                <p className="text-slate-400 leading-relaxed text-lg mb-6">
                                    We designed and developed a comprehensive mobile application that serves as a single ecosystem for all pet care needs.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Unified Booking System for Vets & Groomers",
                                        "Video-based Training Modules",
                                        "In-app E-commerce Store for Supplies",
                                        "Digital Health Records & Reminders"
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
                                        <p className="text-4xl font-bold text-blue-500 mb-1">50k+</p>
                                        <p className="text-slate-500 text-sm">Active Users</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-blue-500 mb-1">4.8</p>
                                        <p className="text-slate-500 text-sm">App Store Rating</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-blue-500 mb-1">30%</p>
                                        <p className="text-slate-500 text-sm">Increase in Engagement</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-blue-500 mb-1">24/7</p>
                                        <p className="text-slate-500 text-sm">Support Availability</p>
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
