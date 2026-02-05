import dynamic from "next/dynamic";
import HomeStats from "@/components/home/HomeStats";
import HomeHeroNavbar from "@/components/home/HomeHeroNavbar";

// Lazy load below-the-fold components
const HomeAbout = dynamic(() => import("@/components/home/HomeAbout"));
const HomeServices = dynamic(() => import("@/components/home/HomeServices"));
const HomeProcess = dynamic(() => import("@/components/home/HomeProcess"));
const HomeProjects = dynamic(() => import("@/components/home/HomeProjects"));
const HomeIndustries = dynamic(() => import("@/components/home/HomeIndustries"));
const HomeDigital = dynamic(() => import("@/components/home/HomeDigital"));

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeHeroNavbar />
      <div className="py-10">
        <HomeStats isHome={true} />
      </div>
      <HomeAbout />
      <HomeServices />
      <HomeProcess />
      <HomeProjects />
      <HomeIndustries />
      <HomeDigital />
    </div>
  );
}
