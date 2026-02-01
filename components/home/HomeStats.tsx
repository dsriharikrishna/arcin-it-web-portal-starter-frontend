"use client";

import { motion } from "framer-motion";
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
    <section className="py-6 bg-[#E9EFFF]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-4
            gap-4
            sm:gap-6
            bg-[#E9EFFF]
          "
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="
                flex flex-col sm:flex-row
                items-center
                sm:items-start
                gap-3
                sm:gap-4
                bg-transparent
                p-3
                rounded-xl
                text-center sm:text-left
              "
            >
              {/* Icon */}
              <div
                className="
                  w-12 h-12
                  sm:w-14 sm:h-14
                  rounded-xl
                  bg-white
                  flex items-center justify-center
                  shadow-sm
                "
              >
                <Image
                  src={stat.Image}
                  alt={stat.label}
                  width={32}
                  height={32}
                  className="sm:w-9 sm:h-9"
                />
              </div>

              {/* Text */}
              <div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
