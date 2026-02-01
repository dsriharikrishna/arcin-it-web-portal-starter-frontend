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
        subtitle="Your Trusted Technology Partner"
        description="We are a team of passionate developers and designers dedicated to building innovative and user-friendly web applications."
        backgroundImage="/about-us/about-us-hero.png"
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
