"use client";

import { Star } from "lucide-react";

interface TrustStat {
  id: string;
  value: string;
  label: string;
  showStar?: boolean;
  subLabel?: string;
}

interface WhyChooseTrustProps {
  badge?: string;
  title?: string;
  titleBold?: string;
  description?: string;
  stats?: TrustStat[];
}

export default function WhyChooseTrust({
  badge = "Trusted Worldwide",
  title = "Why Clients",
  titleBold = "Trust Us",
  description = "Delivering excellence and building lasting partnerships with global enterprises",
  stats = [],
}: WhyChooseTrustProps) {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="flex items-center justify-center">
          <p className="mb-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold tracking-wide text-slate-900 capitalize">
            {badge}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {title} <span className="font-extrabold">{titleBold}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-center text-slate-600">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100"
            >
              <div className="mb-2 flex items-center justify-start gap-2">
                <h3 className="text-4xl font-bold text-slate-900">{stat.value}</h3>
                {stat.showStar && <Star className="h-8 w-8 fill-yellow-500 text-yellow-500" />}
                {stat.label === "Rating" && (
                  <p className="text-2xl font-bold text-slate-700">{stat.label}</p>
                )}
              </div>

              {stat.label !== "Rating" && (
                <p className="text-sm font-semibold text-slate-700">{stat.label}</p>
              )}

              {stat.subLabel && <p className="mt-1 text-xs text-slate-500">{stat.subLabel}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
