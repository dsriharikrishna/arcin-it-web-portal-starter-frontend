"use client";

import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Chatbot from "@/components/ui/Chatbot";
import { usePathname } from "next/navigation";

export default function ArcinITLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/home";

  return (
    <div className="min-h-screen w-full">
      {!isHomePage && <Navbar />}
      <main className={`${!isHomePage ? "pt-14" : "pt-0"}`}>{children}</main>
      <Footer />
      <Chatbot />
    </div>
  );
}
