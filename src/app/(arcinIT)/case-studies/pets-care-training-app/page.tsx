"use client";

import Image from "next/image";
import {
  CheckCircle2,
  ChevronRight,
  PawPrint,
  HeartPulse,
  ShoppingCart,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function PetsCareAppPage() {
  return (
    <section className="bg-white">
      {/* ================= HERO ================= */}
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-12">
        {/* Back */}
        <Link
          href="/case-studies"
          className="mb-6 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-gray-500 px-3 py-1.5 text-slate-50 hover:text-blue-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </Link>

        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            PetTech
          </span>
        </div>

        <h1 className="max-w-3xl text-3xl font-bold text-slate-900 sm:text-4xl">
          Pets Care & Training App
        </h1>

        <p className="mt-4 max-w-3xl text-slate-600">
          A unified mobile-first platform designed to help pet owners manage training, healthcare,
          and shopping — all in one intuitive experience.
        </p>

        {/* Metrics */}
        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          {[
            { label: "User Engagement", value: "72%" },
            { label: "Repeat Bookings", value: "2.4x" },
            { label: "Order Growth", value: "180%" },
            { label: "App Rating", value: "4.7/5" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 text-center"
            >
              <p className="text-xl font-bold text-blue-700">{m.value}</p>
              <p className="mt-1 text-xs text-slate-600">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <div className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Overview</h2>
            <p className="leading-relaxed text-slate-600">
              Pet owners often juggle multiple apps for training, vet visits, grooming, and pet
              supplies. This platform consolidates everything into a single experience — improving
              engagement, trust, and convenience.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-lg">
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
      <div className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div className="flex items-center justify-center rounded-3xl bg-rose-50 p-6">
            <Image
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
              alt="Pet challenges"
              width={500}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900">The Challenges</h2>

            <ul className="space-y-4">
              {[
                "Fragmented pet care services across multiple platforms",
                "Low retention due to poor UX and complex flows",
                "No centralized training & health tracking",
                "Limited trust in online pet product marketplaces",
                "Lack of personalized recommendations",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl bg-rose-100/60 p-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-rose-600">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ================= APPROACH ================= */}
      <div className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Our Approach</h2>

            <p className="mb-6 text-slate-600">
              We designed a modular, scalable system that prioritizes ease of use, personalization,
              and long-term engagement.
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
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-lg">
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
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-2xl font-bold text-slate-900">Key Features</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <div key={f.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold text-slate-900">{f.title}</h3>
                  <p className="text-sm text-slate-600">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= RESULTS ================= */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">The Results</h2>
          <p className="text-slate-700">
            The platform significantly improved user engagement, boosted marketplace revenue, and
            established a strong digital brand presence in the pet care ecosystem.
          </p>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-white py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Want a Product Like This?</h2>
        <p className="mb-8 text-slate-600">
          Let’s build an engaging, scalable app tailored to your business goals.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 font-medium text-white shadow-lg"
          >
            Start Your Project
            <ChevronRight className="h-4 w-4" />
          </a>

          <a
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-xl border border-blue-300 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50"
          >
            View More Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
