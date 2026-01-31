"use client";

import { motion } from "framer-motion";
import { PageHero, PageSection, AnimatedCard } from "@/components/pages";
import {
  SmoothLandingContainer,
  SmoothLandingItem,
} from "@/components/animations/SmoothLandingBox";

const CASE_STUDIES = [
  { title: "Premium Fleet Maintenance", desc: "How we streamlined servicing for a 50+ vehicle corporate fleet." },
  { title: "Luxury Brand Specialization", desc: "Our approach to maintaining high-end European vehicles." },
  { title: "Rapid Brake System Overhaul", desc: "Emergency brake repair completed within 24 hours." },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Real stories of how we've helped customers and businesses achieve better vehicle reliability."
      />
      <PageSection title="Success Stories">
        <SmoothLandingContainer staggerDelay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((c, i) => (
              <SmoothLandingItem key={c.title} variant="slide-up" distance={24}>
                <AnimatedCard
                  title={c.title}
                  description={c.desc}
                  index={i}
                />
              </SmoothLandingItem>
            ))}
          </div>
        </SmoothLandingContainer>
      </PageSection>
    </>
  );
}
