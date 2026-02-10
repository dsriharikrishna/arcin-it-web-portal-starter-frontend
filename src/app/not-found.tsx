"use client";

import { motion } from "framer-motion";
import CustomButton from "@/components/ui/CustomButton";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-white px-4 text-center">
      {/* 404 Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[8rem] leading-none font-bold text-slate-100 select-none sm:text-[10rem]"
      >
        404
      </motion.h1>

      <div className="relative z-10 -mt-12 flex flex-col items-center gap-6 sm:-mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto max-w-md text-lg text-slate-600"
        >
          Oops! The page you are looking for doesn&apos;t exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CustomButton href="/" variant="solid" className="w-full flex items-center gap-2">
            Back to Home
          </CustomButton>
        </motion.div>
      </div>
    </div>
  );
}
