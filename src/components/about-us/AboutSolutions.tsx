"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";
import { CustomButton } from "../ui";
import { supportFAQData } from "@/data/support/support-page";

export default function AboutSolutions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Use General category questions from supportFAQData
  const generalFaqs =
    supportFAQData.categories.find((c) => c.category === "General")?.questions || [];

  return (
    <section className="bg-white py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="rounded-full bg-[#EEF2FF] px-4 py-1.5 text-sm font-medium text-blue-600">
            FAQ’s
          </span>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Proven Solutions for Your Success
          </h2>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:gap-14">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[340px] flex-1 overflow-hidden rounded-3xl"
          >
            <Image
              src="/about-us/success-show.png"
              alt="Frequently asked questions"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* RIGHT FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-2 flex-col gap-3"
          >
            {generalFaqs.slice(0, 5).map((faq, index) => (
              <div
                key={faq.id}
                className={clsx(
                  "overflow-hidden rounded-xl border",
                  "bg-gradient-to-r from-[#D9E5FF] to-white",
                  openIndex === index ? "border-blue-400" : "border-blue-200"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={clsx(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                      openIndex === index ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
                    )}
                  >
                    {openIndex === index ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-2">
              <CustomButton
                variant="primary"
                size="sm"
                className="w-fit rounded-lg"
                href="/support"
              >
                View More
              </CustomButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
