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

export default function ServiceDetails({ services }: { services: Service[] }) {
  return (
    <>
      {services.map((service, index) =>
        index % 2 === 0 ? (
          <OddServiceCard key={service.id} service={service} />
        ) : (
          <EvenServiceCard key={service.id} service={service} />
        )
      )}
    </>
  );
}
