"use client";

import Image from "next/image";
import { PageHero } from "@/components/pages";
import { CheckCircle2 } from "lucide-react";

export default function DriveMechPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <PageHero
                title="DriveMech"
                subtitle="Empowering logistics with real-time fleet visibility, predictive maintenance, and driver performance tracking."
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
                                    src="https://images.unsplash.com/photo-1555421689-4917415114e3?w=800&q=80"
                                    alt="DriveMech Dashboard"
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
                                    A leading logistics provider faced rising fuel costs, frequent vehicle breakdowns, and lack of real-time visibility into their fleet's operations. Manual tracking via spreadsheets was error-prone and inefficient.
                                </p>
                            </div>

                            {/* Solution */}
                            <div>
                                <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-blue-500 rounded-full inline-block" />
                                    Our Solution
                                </h2>
                                <p className="text-slate-400 leading-relaxed text-lg mb-6">
                                    We developed DriveMech, a robust fleet management solution integrating IoT sensors and a mobile workforce app.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Real-time GPS Vehicle Tracking",
                                        "Predictive Maintenance Alerts via IoT",
                                        "Driver Behavior Analysis & Scoring",
                                        "Route Optimization Engine"
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
                                        <p className="text-4xl font-bold text-blue-500 mb-1">30%</p>
                                        <p className="text-slate-500 text-sm">fuel Savings</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-blue-500 mb-1">20%</p>
                                        <p className="text-slate-500 text-sm">Reduced Downtime</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-blue-500 mb-1">15%</p>
                                        <p className="text-slate-500 text-sm">Efficiency Gain</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-blue-500 mb-1">500+</p>
                                        <p className="text-slate-500 text-sm">Vehicles Connected</p>
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
