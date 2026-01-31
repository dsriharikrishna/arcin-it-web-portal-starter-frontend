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
      />
      <AboutMissionVision />
      <AboutValues />
      <AboutSolutions />
    </>
  );
}
