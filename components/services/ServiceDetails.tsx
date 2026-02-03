"use client";

import { EvenServiceCard } from "./EvenServiceCard";
import { OddServiceCard } from "./OddServiceCard";

interface Service {
  id: number;
  title: string;
  description: string;
  features?: string[];
  image?: string;
  
}

export default function ServiceDetails({
  services,
  title
}: {
  services: Service[];
  title?: string;
}) {
  return (
    <div className="flex flex-col gap-0">
      {title && (
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            {title}
          </h2>
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
