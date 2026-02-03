"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

interface Service {
    id: number;
    title: string;
    subtitle?: string;
    description: string;
    features?: (string | { title: string; description: string })[];
    services?: Array<{ name: string; description: string }>;
    technologies?: string[];
    clientBenefits?: string[];
    benefits?: string;
    image?: string;
}

interface ServiceDetailsProps {
    services: Service[];
}

export default function ServiceDetails({ services }: ServiceDetailsProps) {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } gap-8 lg:gap-12 items-center`}
                        >
                            {/* Image */}
                            {service.image && (
                                <div className="flex-1 w-full">
                                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Content */}
                            <div className="flex-1 flex flex-col gap-4">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                                        {service.title}
                                    </h3>
                                    {service.subtitle && (
                                        <p className="text-lg text-blue-600 font-medium mb-3">
                                            {service.subtitle}
                                        </p>
                                    )}
                                    <p className="text-slate-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Features List - handles both strings and objects */}
                                {service.features && service.features.length > 0 && (
                                    <div className="flex flex-col gap-2 mt-2">
                                        {service.features.map((feature, idx) => {
                                            if (typeof feature === 'string') {
                                                return (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                        <span className="text-slate-700">{feature}</span>
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div key={idx} className="flex flex-col gap-1">
                                                        <div className="flex items-start gap-2">
                                                            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                            <span className="font-semibold text-slate-800">
                                                                {feature.title}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-slate-600 ml-7">
                                                            {feature.description}
                                                        </p>
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                )}

                                {/* Services List */}
                                {service.services && service.services.length > 0 && (
                                    <div className="flex flex-col gap-3 mt-2">
                                        {service.services.map((item, idx) => (
                                            <div key={idx} className="flex flex-col gap-1">
                                                <div className="flex items-start gap-2">
                                                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <span className="font-semibold text-slate-800">
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-slate-600 ml-7">
                                                    {item.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Technologies List */}
                                {service.technologies && service.technologies.length > 0 && (
                                    <div className="flex flex-col gap-2 mt-2">
                                        {service.technologies.map((tech, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700">{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Client Benefits */}
                                {service.clientBenefits && service.clientBenefits.length > 0 && (
                                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                                        <p className="font-semibold text-green-900 mb-2">Client Benefits:</p>
                                        <div className="flex flex-col gap-1">
                                            {service.clientBenefits.map((benefit, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm text-slate-700">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Benefits */}
                                {service.benefits && (
                                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="text-slate-700 leading-relaxed">
                                            <span className="font-semibold text-blue-900">
                                                Benefits:{" "}
                                            </span>
                                            {service.benefits}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
