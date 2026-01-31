"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero, PageSection } from "@/components/pages";
import {
  SmoothLandingBox,
  SmoothLandingContainer,
  SmoothLandingItem,
} from "@/components/animations/SmoothLandingBox";
import Button from "@/components/ui/Button";

const BENEFITS = [
  "Competitive salary & incentives",
  "Health insurance",
  "Training & certifications",
  "Growth opportunities",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Join our team and help shape the future of automotive servicing. We're always looking for talented individuals."
      />
      <PageSection
        title="Why Work With Us"
        subtitle="We value our people and invest in their growth"
      >
        <SmoothLandingContainer staggerDelay={0.08}>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {BENEFITS.map((b, i) => (
              <SmoothLandingItem key={b} variant="slide-left" distance={20}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-slate-700">{b}</span>
                </div>
              </SmoothLandingItem>
            ))}
          </div>
        </SmoothLandingContainer>
      </PageSection>
      <PageSection className="bg-slate-50">
        <SmoothLandingBox variant="fade" delay={0.2}>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Send your resume to info@arcinit.com or reach out to learn about
              current openings.
            </p>
            <Button variant="gradient" rounded="lg" href="/contact-us">
              Get in Touch
            </Button>
          </div>
        </SmoothLandingBox>
      </PageSection>
    </>
  );
}
