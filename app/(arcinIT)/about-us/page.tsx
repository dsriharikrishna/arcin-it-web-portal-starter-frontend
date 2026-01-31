"use client";

import { PageHero } from "@/components/pages";
import AboutMissionVision from "@/components/about-us/AboutMissionVision";
import AboutValues from "@/components/about-us/AboutValues";
import AboutSolutions from "@/components/about-us/AboutSolutions";

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Your trusted partner in technology and innovation. We're committed to delivering excellence on every project."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
      />
      <AboutMissionVision />
      <AboutValues />
      <AboutSolutions />
    </>
  );
}
