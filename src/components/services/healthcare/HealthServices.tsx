"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceItem {
    readonly title: string;
    readonly description: string;
    readonly items: readonly string[];
}

interface HealthcareService {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly additionalText?: string;
    readonly image: string;
    readonly imagePosition: "left" | "right";
    readonly services?: readonly ServiceItem[];
}

interface HealthServicesProps {
    readonly services: readonly HealthcareService[];
}

export default function HealthServices({ services }: HealthServicesProps) {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col gap-12">
                    {services.map((service, serviceIndex) => (
                        <div key={serviceIndex}>
                            {/* First Service - Simple Text + Image */}
                            {service.id === 1 && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                                    {/* Content */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className={`${service.imagePosition === "left"
                                            ? "lg:order-2"
                                            : "lg:order-1"
                                            } flex flex-col justify-center h-full`}
                                    >
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                                            {service.description}
                                        </p>
                                        {service.additionalText && (
                                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                                {service.additionalText}
                                            </p>
                                        )}
                                    </motion.div>

                                    {/* Image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className={`${service.imagePosition === "left"
                                            ? "lg:order-1"
                                            : "lg:order-2"
                                            } relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-xl`}
                                    >
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </div>
                            )}

                            {/* Second Service - Title + Services List + Image */}
                            {service.id === 2 && (
                                <div>
                                    {/* Section Title */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8"
                                    >
                                        {service.title}
                                    </motion.h3>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                                        {/* Services List */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6 }}
                                            className={`${service.imagePosition === "left"
                                                ? "lg:order-2"
                                                : "lg:order-1"
                                                } flex flex-col gap-4 h-full`}
                                        >
                                            {service.services?.map((svc, svcIndex) => (
                                                <div key={svcIndex}>
                                                    <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">
                                                        {svc.title}
                                                    </h4>
                                                    <p className="text-slate-600 text-sm leading-relaxed mb-1">
                                                        {svc.description}
                                                    </p>
                                                    {svc.items && svc.items.length > 0 && (
                                                        <ul className="ml-4 space-y-1">
                                                            {svc.items.map((item, itemIndex) => (
                                                                <li
                                                                    key={itemIndex}
                                                                    className="flex gap-2 text-sm text-slate-600"
                                                                >
                                                                    <span className="mt-1.5 shrink-0">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                                                                    </span>
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </motion.div>

                                        {/* Image */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6 }}
                                            className={`${service.imagePosition === "left"
                                                ? "lg:order-1"
                                                : "lg:order-2"
                                                } relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl`}
                                        >
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            )}

                            {/* Third Service - Services List + Image (No Title) */}
                            {service.id === 3 && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                                    {/* Services List */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className={`${service.imagePosition === "left"
                                                ? "lg:order-2"
                                                : "lg:order-1"
                                            } flex flex-col gap-4 h-full`}
                                    >
                                        {service.services?.map((svc, svcIndex) => (
                                            <div key={svcIndex}>
                                                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">
                                                    {svc.title}
                                                </h4>
                                                <p className="text-slate-600 text-sm leading-relaxed mb-1">
                                                    {svc.description}
                                                </p>
                                                {svc.items && svc.items.length > 0 && (
                                                    <ul className="ml-4 space-y-1">
                                                        {svc.items.map((item, itemIndex) => (
                                                            <li
                                                                key={itemIndex}
                                                                className="flex gap-2 text-sm text-slate-600"
                                                            >
                                                                <span className="mt-1.5 shrink-0">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                                                                </span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </motion.div>

                                    {/* Image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className={`${service.imagePosition === "left"
                                                ? "lg:order-1"
                                                : "lg:order-2"
                                            } relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl`}
                                    >
                                        <Image
                                            src={service.image}
                                            alt={service.title || "Healthcare Services"}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
