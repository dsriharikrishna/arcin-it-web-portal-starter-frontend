"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function ClaimsAutomationPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-[#F6F9FF] py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8">

          {/* Back */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-gray-500 text-slate-50 cursor-pointer hover:text-blue-300 w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">

            {/* Left */}
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium w-fit">
                <ShieldCheck className="w-4 h-4" />
                Insurance
              </span>

              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Claims Automation Platform
              </h1>

              <p className="text-slate-600 max-w-xl">
                Built an intelligent claims processing platform that uses AI to automatically
                extract, validate, and process claims documents, reducing processing time
                from weeks to hours.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "80%", label: "Faster Processing" },
                { value: "95%", label: "Accuracy Rate" },
                { value: "$50M", label: "Annual Savings" },
                { value: "4.8/5", label: "Customer Rating" },
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
            A global insurance provider was drowning in paper-based claims.
            With over 500,000 claims processed annually, the manual review
            process was slow, error-prone, and expensive. Customer satisfaction
            was declining as claim resolution times stretched to weeks.
          </p>
        </div>
      </section>

      {/* ================= CHALLENGES ================= */}
      <section className="py-16 bg-[#FFF3F3]">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-[320px]">
            <Image
              src="https://images.unsplash.com/photo-1581091870627-3f9c1c9f4f66?w=900&q=80"
              alt="Challenges"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-900">
              The Challenges
            </h2>

            <div className="flex flex-col gap-3">
              {[
                "Average claim processing time of 3+ weeks",
                "25% error rate in manual data entry",
                "High customer complaint volume",
                "Inability to scale during peak claim periods",
                "Rising operational costs year-over-year",
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

          {/* Left */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Our Approach
            </h2>

            <p className="text-slate-600">
              We built an AI-first platform that combines computer vision,
              natural language processing, and machine learning to automate
              the entire claims journey—from document intake to payment processing.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Developed intelligent document extraction using computer vision",
                "Built fraud detection models using machine learning",
                "Created mobile app for easy claim submission",
                "Implemented automated decision engine for routine claims",
                "Designed human-in-the-loop workflow for complex cases",
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

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden h-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80"
              alt="Approach"
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
            {["Java", "Python", ".NET", "Node.js", "React", "Angular", "TypeScript", "Go"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[#EEF3FF] text-blue-600 text-xs font-medium"
                >
                  {tech}
                </span>
              )
            )}
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
              The platform now processes 80% of claims automatically within
              24 hours, with a 95% accuracy rate. Customer satisfaction
              improved dramatically, and the company saved $50M in operational
              costs annually.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Want Similar Results?
          </h2>
          <p className="text-slate-600">
            Let’s discuss how we can help you achieve transformational outcomes
            for your business.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium"
            >
              Start Your Success Story
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
