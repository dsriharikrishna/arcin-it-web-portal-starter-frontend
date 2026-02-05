"use client";

import { EvenServiceCard } from "../EvenServiceCard";

interface WhyChooseProps {
  id?: string;
  title: string;
  points: string[];
  image: string;
  description: string;
}

export default function WhyChooseSectionGovernment({
  title,
  points,
  image,
  description,
}: WhyChooseProps) {
  return (
    <EvenServiceCard
      service={{
        title,
        description,
        features: points,
        image,
      }}
    />
  );
}
