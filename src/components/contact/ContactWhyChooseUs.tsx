"use client";

import Image from "next/image";

interface Advantage {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface ContactWhyChooseUsProps {
  badge?: string;
  title?: string;
  titleBold?: string;
  description?: string;
  advantages?: Advantage[];
}

export default function ContactWhyChooseUs({
  badge = "Why Choose Us",
  title = "The ARCIN IT",
  titleBold = "Advantage",
  description = "Partner with a team that understands enterprise challenges and delivers measurable results",
  advantages = [],
}: ContactWhyChooseUsProps) {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-center">
          <p className="mb-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold tracking-wide text-slate-900 capitalize">
            {badge}
          </p>
        </div>

        <div className="mb-6 flex flex-col items-center gap-6">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            {title} <span className="font-extrabold">{titleBold}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-center text-slate-600">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100"
            >
              {/* SVG Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 bg-white">
                <Image
                  src={advantage.icon}
                  alt={advantage.title}
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </div>

              <h3 className="mb-2 text-lg font-bold text-slate-900">{advantage.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
