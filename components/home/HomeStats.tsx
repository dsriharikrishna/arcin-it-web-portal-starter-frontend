"use client";

import { motion } from "framer-motion";
import { Award, Headset, Puzzle, Users } from "lucide-react";
import Image from "next/image";

const STATS = [
  { value: "450+", label: "Happy Clients", Image: "/stats/HappyClients.png" },
  { value: "10+", label: "Team Members", Image: "/stats/TeamMembers.png" },
  { value: "10+", label: "Years in Business", Image: "/stats/Bussiness.png" },
  { value: "24/7+", label: "Customer Support", Image: "/stats/CustomerSupport.png" },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function HomeStats() {
  return (
    <section className="py-10 ">
      <div className="max-w-full mx-auto px-4 bg-[#E9EFFF]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            container mx-auto
            bg-[#E9EFFF]
            px-6 py-6
            flex flex-col
            sm:flex-row
            items-center
            justify-between
            gap-6
            w-7xl
          "
        >
          {STATS.map((stat) => {
            const Icon = stat.Image;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="
                  flex items-center gap-4
                  w-full sm:w-auto
                  justify-center p-2
                "
              >
                {/* Icon Box */}
                <div
                  className="
                    w-16 h-16
                    rounded-xl
                    bg-white
                    flex items-center justify-center
                    text-indigo-600
                    shadow-sm
                  "
                >
                  <Image src={Icon} alt={stat.label} width={40} height={40} />
                </div>

                {/* Text */}
                <div className="text-left">
                  <p className="text-2xl font-bold text-slate-900 leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-600 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
