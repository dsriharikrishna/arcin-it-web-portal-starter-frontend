"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Building2,
    ChevronLeft,
    ChevronRight,
    Landmark,
    Shield,
    Ship,
    ShoppingCart,
} from "lucide-react";
import clsx from "clsx";
import ServiceCard from "../services/ServiceCard";
import { Button } from "../ui";

const HOME_SERVICES = [
    {
        title: "Banking & Financial Services",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        imageSrc:
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
        imageAlt: "Banking and finance",
        href: "/services",
        icon: Building2,
    },
    {
        title: "Insurance & Reinsurance",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        imageSrc:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
        imageAlt: "Insurance",
        href: "/services",
        icon: Shield,
    },
    {
        title: "Government Digital Services",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        imageSrc:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
        imageAlt: "Government digital",
        href: "/services",
        icon: Landmark,
    },
    {
        title: "Retail & E-Commerce",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        imageSrc:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
        imageAlt: "Retail and e-commerce",
        href: "/services",
        icon: ShoppingCart,
    },
    {
        title: "Logistics",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        imageSrc:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
        imageAlt: "Logistics",
        href: "/services",
        icon: Ship,
    },
];

export default function HomeServices() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const updateButtons = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        updateButtons();
        emblaApi.on("select", updateButtons);
        emblaApi.on("reInit", updateButtons);
    }, [emblaApi, updateButtons]);

    return (
        <section className="py-16 bg-gradient-to-b from-[#F8FAFF] to-[#EEF3FF] container mx-auto">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
                    <div>
                        <span className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium bg-[#E4E9FF] text-blue-700">
                            Our Services
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900 leading-tight">
                            End-to-End <br /> Technology Solutions
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex-3 flex flex-col gap-2 text-slate-600 text-sm max-w-lg">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                nec odio. Praesent libero.
                            </p>
                            <p>
                                Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
                                lacinia arcu eget nulla.
                            </p>
                        </div>

                        <div className="flex-1 flex gap-3">
                            <Button
                                variant="custom"
                                size="md"
                                rounded="full"
                                onClick={scrollPrev}
                                disabled={!canScrollPrev}
                                startIcon={<ArrowLeft className={clsx("w-5 h-5", canScrollPrev ? "text-white" : "text-slate-400")} />}
                                className={clsx(
                                    "h-11 w-11 rounded-full flex items-center justify-center transition-all duration-200 border",
                                    canScrollPrev
                                        ? "bg-blue-600 border-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200"
                                        : "bg-white border-slate-200"
                                )}
                            >
                            </Button>
                            <Button
                                variant="custom"
                                size="md"
                                rounded="full"
                                onClick={scrollNext}
                                disabled={!canScrollNext}
                                startIcon={<ArrowRight className={clsx("w-5 h-5", canScrollNext ? "text-white" : "text-slate-400")} />}
                                className={clsx(
                                    "h-11 w-11 rounded-full flex items-center justify-center transition-all duration-200 border",
                                    canScrollNext
                                        ? "bg-blue-600 border-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200"
                                        : "bg-white border-slate-200"
                                )}
                            >
                            </Button>
                        </div>

                    </div>
                </div>

                {/* CAROUSEL */}
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex gap-8">
                        {HOME_SERVICES.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.title}
                                    className="flex-[0_0_88%] sm:flex-[0_0_360px]"
                                >
                                    <ServiceCard
                                        {...service}
                                        icon={<Icon className="w-5 h-5" />}
                                        index={i}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
