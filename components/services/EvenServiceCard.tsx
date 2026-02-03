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
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* CONTENT */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              {service.id && <span className="w-8 h-8 flex items-center justify-center bg-slate-900 text-white rounded-md text-sm font-semibold">
                {service.id}
              </span>}
              <h3 className="text-2xl font-semibold text-slate-900">
                {service.title}
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed">
              {service.description}
            </p>

            {service.features && (
              <div className="flex flex-col gap-2">
                {service.features.map((f, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1" />
                    <span className="text-sm text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* IMAGE */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              {service.image && (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
