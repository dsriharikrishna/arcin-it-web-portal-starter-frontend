"use client";

import { motion } from "framer-motion";
import { PageHero, PageSection, AnimatedCard } from "@/components/pages";
import {
  SmoothLandingContainer,
  SmoothLandingItem,
} from "@/components/animations/SmoothLandingBox";

const VALUES = [
  { title: "Integrity", desc: "Transparent pricing and honest recommendations" },
  { title: "Excellence", desc: "Top-tier service standards on every job" },
  { title: "Innovation", desc: "Modern techniques and equipment" },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Your trusted partner in automotive care since day one. We're committed to delivering excellence on every visit."
      />
      <PageSection
        title="Our Story"
        subtitle="Building trust one vehicle at a time"
      >
        <SmoothLandingContainer staggerDelay={0.08}>
          <SmoothLandingItem variant="fade">
            <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center leading-relaxed">
              ArcinIT was founded with a simple mission: to make vehicle
              servicing stress-free, transparent, and reliable. Our team of
              certified technicians brings decades of combined experience,
              ensuring your car receives the care it deserves.
            </p>
          </SmoothLandingItem>
          <SmoothLandingItem variant="slide-up" distance={20}>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto text-center leading-relaxed">
              From routine maintenance to complex repairs, we use state-of-the-art
              equipment and genuine parts to keep your vehicle running smoothly.
              Every customer receives the same level of attention and expertise.
            </p>
          </SmoothLandingItem>
        </SmoothLandingContainer>
      </PageSection>
      <PageSection title="Our Values" className="bg-slate-50">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUES.map((v, i) => (
            <AnimatedCard key={v.title} title={v.title} description={v.desc} index={i} />
          ))}
        </div>
      </PageSection>
    </>
  );
}
