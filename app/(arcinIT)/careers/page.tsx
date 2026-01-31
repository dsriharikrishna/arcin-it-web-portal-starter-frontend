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
          className="bg-black border-b border-white/10"
          titleClassName="text-white"
          subtitleClassName="text-slate-400"
        />
        <CareersBenefits />
        <CareersPositions />
      </div>
    </>
  );
}
