"use client";

import { PageHero } from "@/components/pages";
import AboutMissionVision from "@/components/about-us/AboutMissionVision";
import AboutValues from "@/components/about-us/AboutValues";
import AboutSolutions from "@/components/about-us/AboutSolutions";
import HomeAbout from "@/components/home/HomeAbout";
import HomeStats from "@/components/home/HomeStats";
import HomeDigital from "@/components/home/HomeDigital";

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Your Trusted Technology Partner"
        description="We are a team of passionate developers and designers dedicated to building innovative and user-friendly web applications."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
      />
      <HomeAbout />
      <HomeStats />
      <AboutMissionVision />
      <AboutValues />
      <AboutSolutions />
      <HomeDigital />
    </>
  );
}
