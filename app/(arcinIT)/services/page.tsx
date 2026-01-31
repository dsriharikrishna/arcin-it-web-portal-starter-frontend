"use client";

import { PageHero, AnimatedCard } from "@/components/pages";
import {
  SmoothLandingContainer,
  SmoothLandingItem,
} from "@/components/animations/SmoothLandingBox";

const SERVICES = [
  { label: "Air Conditioning", desc: "AC repair, recharge, and maintenance" },
  { label: "Service / PV Inspection", desc: "Comprehensive vehicle inspections" },
  { label: "Auto Glass", desc: "Windshield and glass replacement" },
  { label: "Spark Plug", desc: "Ignition system service" },
  { label: "Battery", desc: "Battery testing and replacement" },
  { label: "Suspension & Steering", desc: "Alignment and suspension repairs" },
  { label: "Brakes", desc: "Brake pads, discs, and fluid service" },
  { label: "Timing Belt / Chain", desc: "Engine timing component replacement" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Full-range automotive care for every make and model. Quality service, every time."
      />
      <SmoothLandingContainer staggerDelay={0.08}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <SmoothLandingItem key={s.label} variant="slide-up" distance={24}>
                <AnimatedCard
                  title={s.label}
                  description={s.desc}
                  index={i}
                />
              </SmoothLandingItem>
            ))}
          </div>
        </div>
      </SmoothLandingContainer>
    </>
  );
}
