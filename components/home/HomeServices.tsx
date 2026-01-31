"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import {
    Building2,
    ChevronLeft,
    ChevronRight,
    Landmark,
    Shield,
    Ship,
    ShoppingCart,
} from "lucide-react";
import ServiceCard from "../services/ServiceCard";

const HOME_SERVICES = [
    {
        title: "Banking & Financial Services",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
        imageAlt: "Banking and finance",
        href: "/services",
        icon: Building2,
    },
    {
        title: "Insurance & Reinsurance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
        imageAlt: "Insurance",
        href: "/services",
        icon: Shield,
    },
    {
        title: "Government Digital Services",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
        imageAlt: "Government digital",
        href: "/services",
        icon: Landmark,
    },
    {
        title: "Retail & E-Commerce",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
        imageAlt: "Retail and e-commerce",
        href: "/services",
        icon: ShoppingCart,
    },
    {
        title: "Logistics",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
        imageAlt: "Logistics",
        href: "/services",
        icon: Ship,
    },
];

export default function HomeServices() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        containScroll: "trimSnaps",
        skipSnaps: false,
    });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const updateScrollButtons = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        updateScrollButtons();
        emblaApi.on("select", updateScrollButtons);
        emblaApi.on("reInit", updateScrollButtons);
        return () => {
            emblaApi.off("select", updateScrollButtons);
            emblaApi.off("reInit", updateScrollButtons);
        };
    }, [emblaApi, updateScrollButtons]);

    return (
        <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-blue-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
                    <div className="lg:max-w-xl">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-violet-100 text-violet-700 border border-violet-200/80">
                            Our Services
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                            End-to-End Technology Solutions
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 lg:gap-6 lg:min-w-[420px]">
                        <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <div className="flex gap-2 shrink-0">
                            <button
                                type="button"
                                onClick={scrollPrev}
                                disabled={!canScrollPrev}
                                aria-label="Previous services"
                                className="h-10 w-10 rounded-full border-2 border-blue-500 bg-white text-blue-600 hover:bg-blue-50 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                type="button"
                                onClick={scrollNext}
                                disabled={!canScrollNext}
                                aria-label="Next services"
                                className="h-10 w-10 rounded-full border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-6 -ml-2">
                        {HOME_SERVICES.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <div key={service.title} className="flex-[0_0_85%] sm:flex-[0_0_380px] min-w-0 pl-2">
                                    <ServiceCard
                                        title={service.title}
                                        description={service.description}
                                        imageSrc={service.imageSrc}
                                        imageAlt={service.imageAlt}
                                        href={service.href}
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
