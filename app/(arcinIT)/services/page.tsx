"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/pages";
import ServiceCard from "@/components/services/ServiceCard";
import ServicesSection from "@/components/services/ServicesSection";
import AboutSolutions from "@/components/about-us/AboutSolutions";
import HomeDigital from "@/components/home/HomeDigital";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        subtitle="End-to-End Technology Solutions for the Digital Age"
        description="From strategy to implementation and beyond, we provide comprehensive services to accelerate your digital transformation journey."
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
      />
      <ServicesSection />
      <AboutSolutions />
      <HomeDigital />


    </>
  );
}
