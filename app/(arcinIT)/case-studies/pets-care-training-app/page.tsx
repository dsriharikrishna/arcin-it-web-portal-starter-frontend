"use client";

import Image from "next/image";
import { CheckCircle2, ChevronRight, PawPrint, HeartPulse, ShoppingCart } from "lucide-react";

export default function PetsCareAppPage() {
  return (
    <section className="bg-white">

      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
            PetTech
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 max-w-3xl">
          Pets Care & Training App
        </h1>

        <p className="mt-4 text-slate-600 max-w-3xl">
          A unified mobile-first platform designed to help pet owners manage
          training, healthcare, and shopping — all in one intuitive experience.
        </p>

        {/* Metrics */}
        <div className="grid sm:grid-cols-4 gap-4 mt-8">
          {[
            { label: "User Engagement", value: "72%" },
            { label: "Repeat Bookings", value: "2.4x" },
            { label: "Order Growth", value: "180%" },
            { label: "App Rating", value: "4.7/5" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 text-center"
            >
              <p className="text-xl font-bold text-blue-700">{m.value}</p>
              <p className="text-xs text-slate-600 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
            <p className="text-slate-600 leading-relaxed">
              Pet owners often juggle multiple apps for training, vet visits,
              grooming, and pet supplies. This platform consolidates everything
              into a single experience — improving engagement, trust, and
              convenience.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900&q=80"
              alt="Pet care app UI"
              width={900}
              height={600}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= CHALLENGES ================= */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="rounded-3xl bg-rose-50 p-6 flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
              alt="Pet challenges"
              width={500}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              The Challenges
            </h2>

            <ul className="space-y-4">
              {[
                "Fragmented pet care services across multiple platforms",
                "Low retention due to poor UX and complex flows",
                "No centralized training & health tracking",
                "Limited trust in online pet product marketplaces",
                "Lack of personalized recommendations",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-rose-100/60 rounded-xl p-4"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-rose-600 font-bold text-xs">
                    {i + 1}
                  </span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ================= APPROACH ================= */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Our Approach
            </h2>

            <p className="text-slate-600 mb-6">
              We designed a modular, scalable system that prioritizes ease of use,
              personalization, and long-term engagement.
            </p>

            <ul className="space-y-3">
              {[
                "Mobile-first UX with simplified flows",
                "AI-driven training & care recommendations",
                "Integrated e-commerce with trusted vendors",
                "Secure pet health record management",
                "Scalable backend for rapid feature expansion",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=900&q=80"
              alt="App usage"
              width={900}
              height={600}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">
            Key Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: PawPrint,
                title: "Training Programs",
                desc: "Step-by-step guided pet training with progress tracking",
              },
              {
                icon: HeartPulse,
                title: "Health Management",
                desc: "Vaccination reminders, vet visits, and digital records",
              },
              {
                icon: ShoppingCart,
                title: "Pet Marketplace",
                desc: "Curated products with fast checkout and subscriptions",
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-600">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= RESULTS ================= */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            The Results
          </h2>
          <p className="text-slate-700">
            The platform significantly improved user engagement, boosted
            marketplace revenue, and established a strong digital brand presence
            in the pet care ecosystem.
          </p>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Want a Product Like This?
        </h2>
        <p className="text-slate-600 mb-8">
          Let’s build an engaging, scalable app tailored to your business goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg"
          >
            Start Your Project
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="/case-studies"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-blue-300 text-blue-600 font-medium hover:bg-blue-50"
          >
            View More Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
