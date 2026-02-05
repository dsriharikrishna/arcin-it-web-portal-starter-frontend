"use client";

import { EvenServiceCard } from "../EvenServiceCard";
import { OddServiceCard } from "../OddServiceCard";
import type { ServiceDetailsProps } from "@/types/services";

export default function ServiceDetails({ services, title }: ServiceDetailsProps) {
  return (
    <div className="flex flex-col gap-0">
      {title && (
        <div className="mx-auto mb-16 max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">{title}</h2>
        </div>
      )}
      {services.map((service, index) =>
        index % 2 === 0 ? (
          <OddServiceCard key={service.id} service={service} />
        ) : (
          <EvenServiceCard key={service.id} service={service} />
        )
      )}
    </div>
  );
}
