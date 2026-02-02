"use client";

import HomeHeroNavbar from "@/components/home/HomeHeroNavbar";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { usePathname } from "next/navigation";

export default function ArcinITLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/home";

  return (
    <div className="min-h-screen w-full">
      {isHomePage ? <HomeHeroNavbar /> : <Navbar />}
      <main className="">
        {children}
      </main>
      <Footer />
    </div>
  );
}
