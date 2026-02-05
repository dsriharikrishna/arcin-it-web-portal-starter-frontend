"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Car, CheckCircle2 } from "lucide-react";

export default function DriveMechPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-[#F6F9FF] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4">
          {/* Back */}
          <Link
            href="/case-studies"
            className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-gray-500 px-3 py-1.5 text-slate-50 hover:text-blue-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>

          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
            {/* Left */}
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                <Car className="h-4 w-4" />
                Automotive
              </span>

              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                DriveMech Web Application
              </h1>

              <p className="max-w-xl text-slate-600">
                A full-scale automotive solutions platform connecting customers and service
                providers for vehicle servicing, spare parts, towing, insurance, and complete
                workshop operations.
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
                  className="rounded-xl bg-gradient-to-br from-[#E3ECFF] to-[#F3F6FF] p-4 text-center"
                >
                  <p className="text-lg font-bold text-blue-600">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4">
          <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
          <p className="max-w-4xl text-slate-600">
            DriveMech is a modern automotive platform designed to digitize the entire vehicle
            service ecosystem. It serves both customers and vendors, enabling seamless service
            booking, spare parts ordering, towing services, insurance management, and workshop
            operations through a unified web application.
          </p>
        </div>
      </section>

      {/* ================= CHALLENGES ================= */}
      <section className="bg-[#FFF3F3] py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative h-[320px] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80"
              alt="Automotive challenges"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-900">The Challenges</h2>

            <div className="flex flex-col gap-3">
              {[
                "Fragmented automotive service booking experience",
                "Manual workshop operations and scheduling",
                "Lack of real-time service tracking for customers",
                "Complex vendor inventory and transaction management",
                "Scalability issues across regions and services",
              ].map((item, i) => (
                <div key={i} className="rounded-lg bg-white px-4 py-3 text-sm text-slate-700">
                  <span className="mr-2 font-semibold">{i + 1}.</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-900">Our Approach</h2>

            <p className="text-slate-600">
              We built DriveMech using a modular, scalable architecture with strong separation of
              concerns. The platform was designed to support complex workflows for both customers
              and vendors while maintaining high performance and reliability.
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
                  className="flex items-start gap-3 rounded-lg bg-[#F3F6FF] px-4 py-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-2xl">
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
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4">
          <h2 className="text-xl font-bold text-slate-900">Technology Stack</h2>

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
                className="rounded-full bg-[#EEF3FF] px-3 py-1 text-xs font-medium text-blue-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-[#F3F6FF] p-6">
            <h2 className="mb-2 text-xl font-bold text-slate-900">The Results</h2>
            <p className="text-slate-600">
              DriveMech evolved into a highly scalable automotive platform with 127+ pages, 460+
              components, and 20+ Redux slices. The system now supports complex customer journeys,
              vendor operations, real-time tracking, and future-ready integrations across multiple
              regions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Want a Platform Like DriveMech?
          </h2>
          <p className="text-slate-600">
            Let’s build a scalable, enterprise-grade platform tailored to your business needs.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-sm font-medium text-white"
            >
              Start Your Project
            </Link>
            <Link
              href="/case-studies"
              className="rounded-lg border border-blue-400 px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
