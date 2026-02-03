"use client";

import {
  Landmark,
  ShieldCheck,
  Building2,
  ShoppingCart,
  Truck,
  Rocket,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

const SERVICES = [
  {
    label: "Banking & Financial Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    icon: Landmark,
    image: "/services/banking.png",
    slug: "banking-financial-services",
  },
  {
    label: "Insurance & Reinsurance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    icon: ShieldCheck,
    image: "/services/insurance.png",
    slug: "insurance-reinsurance",
  },
  {
    label: "Government Digital Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    icon: Building2,
    image: "/services/government.png",
    slug: "government-digital-services",
  },
  {
    label: "Retail & E-Commerce",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    icon: ShoppingCart,
    image: "/services/retail.png",
    slug: "retail-e-commerce",
  },
  {
    label: "Logistics & Transportation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    icon: Truck,
    image: "/services/logistics.png",
    slug: "logistics-transportation",
  },
  {
    label: "Start-ups & Tech Innovators",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    icon: Rocket,
    image: "/services/startup.png",
    slug: "startups-tech-innovators",
  },
  {
    label: "Healthcare & Education",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    icon: Stethoscope,
    image: "/services/healthcare.png",
    slug: "healthcare-education",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">

        {/* HEADER */}
        {/* ... (Header content skipped for brevity) ... */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="inline-block w-fit px-4 py-1.5 rounded-full text-sm font-medium bg-[#E6ECFF] text-blue-700">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              End-to-End <br /> Technology Solutions
            </h2>
          </div>

          <div className="text-slate-600 text-sm leading-relaxed max-w-xl flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <p>
              Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="
                  bg-[#F3F6FF]
                  rounded-2xl
                  p-4
                  flex flex-col
                  gap-4
                  border border-blue-100
                  hover:shadow-lg
                  transition
                "
              >
                {/* IMAGE */}
                <div className="relative rounded-xl overflow-hidden h-40">
                  <Image
                    src={s.image}
                    alt={s.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {s.label}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">
                    {s.desc}
                  </p>
                </div>

                {/* CTA */}
                <Button
                  href={`/services/${s.slug}`}
                  variant="outline"
                  size="sm"
                  className="mt-auto w-full border-blue-400 text-blue-600 hover:bg-blue-50"
                  rounded="lg"
                >
                  Know More
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
