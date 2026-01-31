"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function HomeProjects() {
    return (
        <section className="py-16 sm:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-slate-200 text-slate-700">
                        Our Project
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        Showcase of Our Recognized Work
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden"
                >
                    <div className="grid lg:grid-cols-2 gap-0">
                        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">01 Project 01</h3>
                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </p>
                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className="mt-6">
                                <Button variant="gradient" size="lg" rounded="lg" href="/case-studies">
                                    Know More
                                </Button>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200/80">
                                    Mobile App
                                </span>
                                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200/80">
                                    E-Commerce
                                </span>
                                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/80">
                                    SaaS Platform
                                </span>
                            </div>
                        </div>
                        <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[400px] bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center p-8">
                            <div className="relative w-48 h-72 sm:w-56 sm:h-80 rounded-2xl bg-slate-800 shadow-2xl overflow-hidden border-4 border-slate-700">
                                <Image
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
                                    alt="Project showcase"
                                    fill
                                    className="object-cover"
                                    sizes="224px"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center"
                >
                    <Button variant="gradient" size="lg" rounded="lg" href="/case-studies">
                        View All Projects
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
