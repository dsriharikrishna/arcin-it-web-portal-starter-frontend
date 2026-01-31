"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/pages";
import ServiceCard from "@/components/services/ServiceCard";
import {
  Landmark,
  ShieldCheck,
  Building2,
  ShoppingCart,
  Truck,
  Rocket,
  Stethoscope,
} from "lucide-react";

const SERVICES = [
  {
    label: "Banking & Financial Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1565514020176-dbf2277f2416?auto=format&fit=crop&q=80&w=800",
  },
  {
    label: "Insurance & Reinsurance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
  },
  {
    label: "Government Digital Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
  },
  {
    label: "Retail & E-Commerce",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
  },
  {
    label: "Logistics & Transportation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    label: "Start-ups & Tech Innovators",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1559136555-930d72f1d37c?auto=format&fit=crop&q=80&w=800",
  },
  {
    label: "Healthcare & Education",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <PageHero
          title="End-to-End Technology Solutions"
          subtitle="Comprehensive IT management and consultancy services tailored to your business needs. We help you navigate the digital landscape with confidence."
          backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
          className="mb-16 sm:mb-20 rounded-3xl"
        />

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <ServiceCard
                key={s.label}
                title={s.label}
                description={s.desc}
                imageSrc={s.image}
                imageAlt={s.label}
                icon={<Icon className="w-5 h-5" />}
                index={i}
                className="bg-white"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
