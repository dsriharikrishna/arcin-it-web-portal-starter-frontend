"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";
import CustomButton from "@/components/ui/CustomButton";
import { supportFAQData } from "@/data/support/support-page";

export default function SupportFAQ() {
  const { title, categories } = supportFAQData;
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        </div>

        <div className="space-y-12">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <h3 className="text-xl font-bold text-blue-600">{cat.category}</h3>
              <div className="space-y-4">
                {cat.questions.map((faq) => {
                  const uniqueId = `${catIdx}-${faq.id}`;
                  const isOpen = openId === uniqueId;

                  return (
                    <div
                      key={uniqueId}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                    >
                      <CustomButton
                        onClick={() => toggleFAQ(uniqueId)}
                        className="flex w-full items-center justify-between p-6 text-left"
                      >
                        <span className="pr-4 text-lg font-semibold text-slate-900">
                          {faq.question}
                        </span>
                        <span
                          className={clsx(
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors",
                            isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                          )}
                        >
                          {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                        </span>
                      </CustomButton>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="border-t border-slate-100 px-6 pt-4 pb-6 leading-relaxed text-slate-600">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
