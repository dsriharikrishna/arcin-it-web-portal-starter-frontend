"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

interface ServiceItem {
  readonly title: string;
  readonly description: string;
}

interface ServiceGroup {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imagePosition: "left" | "right";
  readonly items: readonly ServiceItem[];
  readonly benefits?: readonly string[];
}

interface StartupsServiceSectionProps {
  readonly title: string;
  readonly groups: readonly ServiceGroup[];
}

export default function StartupsServiceSection({ title, groups }: StartupsServiceSectionProps) {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-3xl font-bold text-slate-900 md:text-4xl"
        >
          {title}
        </motion.h2>

        <div className="flex flex-col gap-8">
          {groups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${
                  group.imagePosition === "left" ? "lg:order-1" : "lg:order-2"
                } relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl`}
              >
                <Image src={group.image} alt={group.title} fill className="object-cover" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: group.imagePosition === "left" ? 30 : -30,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${
                  group.imagePosition === "left" ? "lg:order-2" : "lg:order-1"
                } flex flex-col gap-6`}
              >
                {/* Title with number */}
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
                    {group.id}. {group.title}
                  </h3>
                  <p className="text-sm text-slate-600 md:text-base">{group.description}</p>
                </div>

                {/* Bullet Points */}
                <div className="flex flex-col gap-3">
                  {group.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-3">
                      {/* Bullet Point */}
                      <div className="mt-1.5 shrink-0">
                        <div className="h-2 w-2 rounded-full bg-slate-900"></div>
                      </div>

                      {/* Content */}
                      <div>
                        <span className="text-sm md:text-base">
                          <strong className="font-bold text-slate-900">{item.title}</strong>{" "}
                          <span className="text-slate-600">{item.description}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Client Benefits (if exists) */}
                {group.benefits && group.benefits.length > 0 && (
                  <div className="mt-2">
                    <h4 className="mb-3 text-base font-bold text-slate-900">Client Benefits:</h4>
                    <div className="flex flex-col gap-2">
                      {group.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-2">
                          <div className="mt-0.5 shrink-0">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                              <Check className="h-3 w-3 text-blue-600" />
                            </div>
                          </div>
                          <span className="text-sm text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
