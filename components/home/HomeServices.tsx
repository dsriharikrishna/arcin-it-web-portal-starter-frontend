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
    ShieldCheck,
    Ship,
    ShoppingCart,
    Truck,
    Rocket,
    Stethoscope,
} from "lucide-react";
import clsx from "clsx";
import ServiceCard from "../services/ServiceCard";
import { Button } from "../ui";

const SERVICES = [
    {
        label: "Banking & Financial Services",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        icon: Landmark,
        image: "/services/banking.png",
    },
    {
        label: "Insurance & Reinsurance",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        icon: ShieldCheck,
        image: "/services/insurance.png",
    },
    {
        label: "Government Digital Services",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        icon: Building2,
        image: "/services/government.png",
    },
    {
        label: "Retail & E-Commerce",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        icon: ShoppingCart,
        image: "/services/retail.png",
    },
    {
        label: "Logistics & Transportation",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        icon: Truck,
        image: "/services/logistics.png",
    },
    {
        label: "Start-ups & Tech Innovators",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        icon: Rocket,
        image: "/services/startup.png",
    },
    {
        label: "Healthcare & Education",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        icon: Stethoscope,
        image: "/services/healthcare.png",
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
        <section className="py-16 bg-gradient-to-b from-[#F8FAFF] to-[#EEF3FF] w-full">
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
                        {SERVICES.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.label}
                                    className="flex-[0_0_88%] sm:flex-[0_0_360px]"
                                >
                                    <ServiceCard
                                        title={service.label}
                                        description={service.desc}
                                        imageSrc={service.image}
                                        imageAlt={service.label}
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
