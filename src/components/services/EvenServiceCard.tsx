"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  service: {
    id?: number;
    title: string;
    description: string;
    features?: string[];
    image?: string;
  };
}

export function EvenServiceCard({ service }: ServiceCardProps) {
  return (
    <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:gap-14 lg:grid-cols-12">
          {/* CONTENT */}
          <div className="order-1 flex flex-col gap-4 sm:gap-6 lg:col-span-7">
            <div className="flex items-start gap-3 sm:gap-4">
              {service.id && (
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-slate-900 text-xs font-semibold text-white sm:h-8 sm:w-8 sm:text-sm">
                  {service.id}
                </span>
              )}
              <h3 className="text-xl leading-tight font-semibold text-slate-900 sm:text-2xl md:text-3xl">
                {service.title}
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {service.description}
            </p>

            {service.features && (
              <div className="flex flex-col gap-2 sm:gap-3">
                {service.features.map((f, i) => (
                  <div key={i} className="flex gap-2 sm:gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 sm:mt-1 sm:h-5 sm:w-5" />
                    <span className="text-xs text-slate-700 sm:text-sm">{f}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* IMAGE */}
          <div className="order-2 lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl">
              {service.image && (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
