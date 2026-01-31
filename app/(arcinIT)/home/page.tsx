"use client";

import HomeAbout from "@/components/home/HomeAbout";
import HomeDigital from "@/components/home/HomeDigital";
import HomeHero from "@/components/home/HomeHero";
import HomeIndustries from "@/components/home/HomeIndustries";
import HomeProcess from "@/components/home/HomeProcess";
import HomeProjects from "@/components/home/HomeProjects";
import HomeServices from "@/components/home/HomeServices";
import HomeStats from "@/components/home/HomeStats";
import HomeWhyChooseUs from "@/components/home/HomeWhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeAbout />
      <HomeServices />
      <HomeProcess />
      <HomeProjects />
      <HomeWhyChooseUs />
      <HomeIndustries />
      <HomeDigital />
    </>
  );
}
