import dynamic from "next/dynamic";
import HomeHero from "@/components/home/HomeHero";
import HomeStats from "@/components/home/HomeStats";

// Lazy load below-the-fold components
const HomeAbout = dynamic(() => import("@/components/home/HomeAbout"));
const HomeServices = dynamic(() => import("@/components/home/HomeServices"));
const HomeProcess = dynamic(() => import("@/components/home/HomeProcess"));
const HomeProjects = dynamic(() => import("@/components/home/HomeProjects"));
// const HomeWhyChooseUs = dynamic(() => import("@/components/home/HomeWhyChooseUs"));
const HomeIndustries = dynamic(() => import("@/components/home/HomeIndustries"));
const HomeDigital = dynamic(() => import("@/components/home/HomeDigital"));

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeAbout />
      <HomeServices />
      <HomeProcess />
      <HomeProjects />
      {/* <HomeWhyChooseUs /> */}
      <HomeIndustries />
      <HomeDigital />
    </>
  );
}
