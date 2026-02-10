"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Landmark,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Rocket,
  Stethoscope,
  LucideIcon,
} from "lucide-react";
import clsx from "clsx";
import { CustomButton } from "../ui";
import { homeServicesData } from "@/data/home/home-page";

// Icon mapper to convert string names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Landmark,
  ShieldCheck,
  Building2,
  ShoppingCart,
  Truck,
  Rocket,
  Stethoscope,
};

export default function HomeServices() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const updateCustomButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Initial update happens as part of event subscription, not synchronously
    emblaApi.on("select", updateCustomButtons);
    emblaApi.on("reInit", updateCustomButtons);

    // Trigger initial update via reInit event instead of direct call
    emblaApi.reInit();

    return () => {
      emblaApi.off("select", updateCustomButtons);
      emblaApi.off("reInit", updateCustomButtons);
    };
  }, [emblaApi, updateCustomButtons]);

  /* ✅ MOUSE WHEEL → HORIZONTAL SCROLL */
  const onWheel = useCallback(
    (e: WheelEvent) => {
      if (!emblaApi) return;

      // Ignore horizontal trackpad scroll
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

      if (e.deltaY > 0 && emblaApi.canScrollNext()) {
        e.preventDefault();
        emblaApi.scrollNext();
      }

      if (e.deltaY < 0 && emblaApi.canScrollPrev()) {
        e.preventDefault();
        emblaApi.scrollPrev();
      }
    },
    [emblaApi]
  );

  return (
    <section className="w-full bg-mesh-gradient-color p-6">
      <div className="mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="mb-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-[#E4E9FF] px-4 py-1.5 text-sm font-medium text-blue-700">
              {homeServicesData.badge}
            </span>

            <h2 className="mt-4 text-4xl leading-tight font-bold text-slate-900">
              {homeServicesData.title}
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div className="flex max-w-lg flex-col gap-2 text-sm text-slate-600">
              {homeServicesData.description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="flex gap-3">
              <CustomButton
                variant="outline"
                rounded="full"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                startIcon={
                  <ArrowLeft
                    className={clsx("h-5 w-5", !canScrollPrev ? "text-white hover:text-white" : "text-slate-800")}
                  />
                }
                className={clsx(
                  "flex h-11 w-11 items-center justify-center border transition-all hover:bg-blue-600 hover:text-white",
                  !canScrollPrev
                    ? "border-blue-600 bg-blue-600 shadow-md shadow-blue-200 hover:bg-blue-700"
                    : "border-slate-200 bg-white"
                )}
              />

              <CustomButton
                variant="custom"
                rounded="full"
                onClick={scrollNext}
                disabled={!canScrollNext}
                startIcon={
                  <ArrowRight
                    className={clsx("h-5 w-5", canScrollNext ? "text-white" : "text-slate-400")}
                  />
                }
                className={clsx(
                  "flex h-11 w-11 items-center justify-center border transition-all",
                  canScrollNext
                    ? "border-blue-600 bg-blue-600 shadow-md shadow-blue-200 hover:bg-blue-700"
                    : "border-slate-200 bg-white"
                )}
              />
            </div>
          </div>
        </div>

        {/* CAROUSEL */}
        <div
          ref={emblaRef}
          className="cursor-grab overflow-hidden active:cursor-grabbing"
          onWheel={(e) => onWheel(e.nativeEvent)}
        >
          <div className="flex gap-8">
            {homeServicesData.services.map((service, i) => {
              const Icon = iconMap[service.icon] || Landmark;
              return (
                <div key={service.label} className="flex-[0_0_88%] sm:flex-[0_0_380px] py-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group relative flex cursor-pointer flex-col gap-5 overflow-hidden rounded-[1rem] border border-blue-100/50 bg-white p-4 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* SMOOTH GRADIENT OVERLAY expanding from center */}
                    <div className="absolute inset-0 z-0 origin-center scale-x-0 bg-gradient-to-r from-[#5BCAFB] to-[#320DE0] opacity-0 transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-100" />

                    {/* IMAGE */}
                    <div className="relative z-10 h-48 overflow-hidden rounded-[1.5rem] shadow-md">
                      <Image
                        src={service.image}
                        alt={service.label}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        sizes="380px"
                      />
                      <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/30 backdrop-blur-md">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-1 flex-col gap-3 px-1">
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-white">
                        {service.label}
                      </h3>
                      <p className="flex-1 text-sm font-medium leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/90">
                        {service.desc}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="relative z-10 px-1">
                      <CustomButton
                        href={`/services/${service.slug}`}
                        variant="outline"
                        size="lg"
                        className="w-full border-blue-600/20 bg-blue-50/50 font-bold text-blue-600 transition-all duration-300 group-hover:border-transparent group-hover:bg-white group-hover:text-[#320DE0]"
                        rounded="lg"
                      >
                        Know More
                      </CustomButton>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
