"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function HomeProjects() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* HEADER */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-slate-200 text-slate-700">
            Our Project
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Showcase of Our <span className="text-blue-600">Recognized Work</span>
          </h2>
        </motion.div>

        {/* PROJECT CARD */}
        <motion.div
          variants={itemVariants}
          className="rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* CONTENT */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col gap-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                01 · Project 01
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>

              <div>
                <Button
                  variant="primary-blue-gradient"
                  size="lg"
                  rounded="lg"
                  href="/case-studies"
                >
                  Know More
                </Button>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200/80">
                  Mobile App
                </span>
                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200/80">
                  E-Commerce
                </span>
                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/80">
                  SaaS Platform
                </span>
              </div>
            </div>

            {/* IMAGE (FIXED) */}
            <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src="/Project-Section.png"
                alt="Project showcase"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* FOOTER CTA */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Button
            variant="primary-blue-gradient"
            size="lg"
            rounded="lg"
            href="/case-studies"
          >
            View All Projects
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
