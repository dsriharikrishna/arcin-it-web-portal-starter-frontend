"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Car, CheckCircle2 } from "lucide-react";

export default function DriveMechPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-[#F6F9FF] py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8">

          {/* Back */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">

            {/* Left */}
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium w-fit">
                <Car className="w-4 h-4" />
                Automotive
              </span>

              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                DriveMech Web Application
              </h1>

              <p className="text-slate-600 max-w-xl">
                A full-scale automotive solutions platform connecting customers and
                service providers for vehicle servicing, spare parts, towing,
                insurance, and complete workshop operations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "127+", label: "Pages Built" },
                { value: "460+", label: "Components" },
                { value: "20+", label: "Redux Slices" },
                { value: "2", label: "User Roles" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-gradient-to-br from-[#E3ECFF] to-[#F3F6FF] rounded-xl p-4 text-center"
                >
                  <p className="text-lg font-bold text-blue-600">{s.value}</p>
                  <p className="text-xs text-slate-600 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
          <p className="text-slate-600 max-w-4xl">
            DriveMech is a modern automotive platform designed to digitize the
            entire vehicle service ecosystem. It serves both customers and
            vendors, enabling seamless service booking, spare parts ordering,
            towing services, insurance management, and workshop operations
            through a unified web application.
          </p>
        </div>
      </section>

      {/* ================= CHALLENGES ================= */}
      <section className="py-16 bg-[#FFF3F3]">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <div className="relative rounded-2xl overflow-hidden h-[320px]">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80"
              alt="Automotive challenges"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-900">
              The Challenges
            </h2>

            <div className="flex flex-col gap-3">
              {[
                "Fragmented automotive service booking experience",
                "Manual workshop operations and scheduling",
                "Lack of real-time service tracking for customers",
                "Complex vendor inventory and transaction management",
                "Scalability issues across regions and services",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg px-4 py-3 text-sm text-slate-700"
                >
                  <span className="font-semibold mr-2">{i + 1}.</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Our Approach
            </h2>

            <p className="text-slate-600">
              We built DriveMech using a modular, scalable architecture with
              strong separation of concerns. The platform was designed to
              support complex workflows for both customers and vendors while
              maintaining high performance and reliability.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Dual authentication system for customers and vendors",
                "Redux-driven multi-step booking flows",
                "Role-based access control and protected routes",
                "Offline-friendly vendor operations using Redux Persist",
                "Highly reusable component architecture",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-[#F3F6FF] rounded-lg px-4 py-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=80"
              alt="DriveMech platform"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-slate-900">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-2">
            {[
              "Next.js 16",
              "React 19",
              "TypeScript",
              "Redux Toolkit",
              "Tailwind CSS",
              "Framer Motion",
              "Leaflet",
              "MapLibre",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-[#EEF3FF] text-blue-600 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#F3F6FF] rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              The Results
            </h2>
            <p className="text-slate-600">
              DriveMech evolved into a highly scalable automotive platform with
              127+ pages, 460+ components, and 20+ Redux slices. The system now
              supports complex customer journeys, vendor operations, real-time
              tracking, and future-ready integrations across multiple regions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Want a Platform Like DriveMech?
          </h2>
          <p className="text-slate-600">
            Let’s build a scalable, enterprise-grade platform tailored to your
            business needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium"
            >
              Start Your Project
            </Link>
            <Link
              href="/case-studies"
              className="px-6 py-3 rounded-lg border border-blue-400 text-blue-600 text-sm font-medium hover:bg-blue-50"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
