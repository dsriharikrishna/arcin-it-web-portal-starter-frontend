"use client";

import { PageHero } from "@/components/pages";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import CaseStudiesSection from "@/components/case-studies/CaseStudiesSection";


export default function CaseStudiesPage() {
  return (
    <>
        <PageHero
          title="Case Studies"
          subtitle="Explore how we've helped businesses transform and grow with our innovative solutions."
          backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
        />
        <CaseStudiesSection />
      
    </>
  );
}
