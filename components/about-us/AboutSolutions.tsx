"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";
import { Button } from "../ui";

const FAQS = [
  {
    question: "What type of services does your company offer?",
    answer:
      "We offer comprehensive IT management and consultancy services to organizations worldwide.",
  },
  {
    question: "What type of services does your company offer?",
    answer:
      "We offer comprehensive IT management and consultancy services to organizations worldwide.",
  },
  {
    question: "What type of services does your company offer?",
    answer:
      "We offer comprehensive IT management and consultancy services to organizations worldwide.",
  },
  {
    question: "What type of services does your company offer?",
    answer:
      "We offer comprehensive IT management and consultancy services to organizations worldwide.",
  },
  {
    question: "What type of services does your company offer?",
    answer:
      "We offer comprehensive IT management and consultancy services to organizations worldwide.",
  },
];

export default function AboutSolutions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* HEADER */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="px-4 py-1.5 rounded-full bg-[#EEF2FF] text-blue-600 text-sm font-medium">
            FAQ’s
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Proven Solutions for Your Success
          </h2>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 relative rounded-3xl overflow-hidden min-h-[340px]"
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
            className="flex-2 flex flex-col gap-3"
          >
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={clsx(
                  "rounded-xl overflow-hidden border",
                  "bg-gradient-to-r from-[#D9E5FF] to-white",
                  openIndex === index
                    ? "border-blue-400"
                    : "border-blue-200"
                )}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full cursor-pointer flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={clsx(
                      "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
                      openIndex === index
                        ? "bg-blue-600 text-white"
                        : "bg-blue-100 text-blue-600"
                    )}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
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
                      <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-2">
              <Button
                variant="primary-blue"
                size="sm"
                className="w-fit rounded-lg"
              >
                View More
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
