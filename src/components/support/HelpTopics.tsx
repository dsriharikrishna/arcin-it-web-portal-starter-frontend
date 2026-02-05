"use client";

import { motion } from "framer-motion";
import { Rocket, CreditCard, Settings, Shield, Code2, Users, LucideIcon } from "lucide-react";
import Link from "next/link";
import { supportHelpTopicsData } from "@/data/support/support-page";

const iconMap: Record<string, LucideIcon> = {
  "Getting Started": Rocket,
  "Account & Billing": CreditCard,
  "Technical Support": Settings,
  "Security & Privacy": Shield,
  Integrations: Code2,
  "Best Practices": Users,
};

export default function HelpTopics() {
  const { title, topics } = supportHelpTopicsData;

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {topics.map((topic, i) => {
            const Icon = iconMap[topic.title] || Rocket;
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={`/support/topics/${topic.slug}`}
                  className="group block h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {topic.title}
                  </h3>
                  <p className="leading-relaxed text-slate-500">{topic.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
