"use client";

import { PageHero } from "@/components/pages";
import CaseStudiesSection from "@/components/case-studies/CaseStudiesSection";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Results That Speak for Themselves"
        description="Explore how we've helped enterprises across industries achieve transformational outcomes through technology."
        backgroundImage="/case-studies/case-study-hero.png"
      />
      <CaseStudiesSection />
    </>
  );
}
