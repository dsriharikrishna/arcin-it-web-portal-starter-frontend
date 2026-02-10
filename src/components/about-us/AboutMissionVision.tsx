"use client";

import { motion } from "framer-motion";
import Image from "next/image";


interface MissionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

function MissionCard({
  title,
  description,
  icon,
  delay = 0,
  className = "",
}: MissionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className={`flex flex-col gap-2 ${className} rounded-2xl border border-slate-200 bg-mesh-gradient-color p-4`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-700 shadow-sm">
        <div className="flex h-5 w-5 items-center justify-center">
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
    </motion.div>
  );
}

export default function AboutMissionVision() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* FLEX CONTAINER */}
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:gap-12">
          {/* LEFT */}
          <div className="flex flex-1 flex-col gap-4">
            <MissionCard
              className="flex-1"
              title="Our Mission"
              description="To empower organizations with innovative technology solutions that drive sustainable growth, operational excellence, and competitive advantage in an increasingly digital world."
              icon={<Image src="/svgs/target.svg" alt="Target" width={20} height={20} />}
              delay={0.05}
            />

            <MissionCard
              className="flex-1"
              title="Our Vision"
              description="To be the most trusted technology partner for enterprises worldwide, recognized for delivering transformational outcomes and building long-lasting client relationships."
              icon={<Image src="/svgs/eye.svg" alt="Eye" width={20} height={20} />}
              delay={0.1}
            />
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/about-us/mission-show.png"
                alt="Team collaboration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
