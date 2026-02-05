"use client";

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
import { ServiceCard } from "@/components/services";
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
    <section className="w-full bg-gradient-to-b from-[#F8FAFF] to-[#EEF3FF] py-16">
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
                variant="custom"
                rounded="full"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                startIcon={
                  <ArrowLeft
                    className={clsx("h-5 w-5", canScrollPrev ? "text-white" : "text-slate-400")}
                  />
                }
                className={clsx(
                  "flex h-11 w-11 items-center justify-center border transition-all",
                  canScrollPrev
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
              const Icon = iconMap[service.icon];
              return (
                <div key={service.label} className="flex-[0_0_88%] sm:flex-[0_0_360px]">
                  <ServiceCard
                    title={service.label}
                    description={service.desc}
                    imageSrc={service.image}
                    imageAlt={service.label}
                    icon={Icon ? <Icon className="h-5 w-5" /> : null}
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
