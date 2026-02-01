"use client";

import { PageHero } from "@/components/pages";
import CareersBenefits from "@/components/careers/CareersBenefits";
import CareersPositions from "@/components/careers/CareersPositions";

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Join Our Team"
        subtitle="Build the Future of Digital Innovation"
        description="Join a team of passionate technologists shaping digital transformation for enterprises and governments worldwide."
        backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&q=80"
      />
      <CareersBenefits />
      <CareersPositions />
    </>
  );
}
