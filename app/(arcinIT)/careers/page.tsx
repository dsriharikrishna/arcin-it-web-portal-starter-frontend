"use client";

import { PageHero } from "@/components/pages";
import CareersBenefits from "@/components/careers/CareersBenefits";
import CareersPositions from "@/components/careers/CareersPositions";

export default function CareersPage() {
  return (
    <>
      <div className="bg-black">
        <PageHero
          title="Careers"
          subtitle="Join our team and help shape the future of technology. We're always looking for talented individuals."
          backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&q=80"
        />
        <CareersBenefits />
        <CareersPositions />
      </div>
    </>
  );
}
