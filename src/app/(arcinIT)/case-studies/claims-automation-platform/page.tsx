"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ClaimsAutomationPage() {
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

          {/* Hero Content */}
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
            {/* Left */}
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                <ShieldCheck className="h-4 w-4" />
                Insurance
              </span>

              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Claims Automation Platform
              </h1>

              <p className="max-w-xl text-slate-600">
                Built an intelligent claims processing platform that uses AI to automatically
                extract, validate, and process claims documents, reducing processing time from weeks
                to hours.
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
            A global insurance provider was drowning in paper-based claims. With over 500,000 claims
            processed annually, the manual review process was slow, error-prone, and expensive.
            Customer satisfaction was declining as claim resolution times stretched to weeks.
          </p>
        </div>
      </section>

      {/* ================= CHALLENGES ================= */}
      <section className="bg-[#FFF3F3] py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[320px] overflow-hidden rounded-2xl">
            <Image
              src="/case-studies/clamins-challenges.png"
              alt="Challenges"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-900">The Challenges</h2>

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
                  className="rounded-lg border border-[#FFCDD2] bg-gradient-to-br from-[#FFF3F3] via-[#FFF] to-[#FFF3F3] px-4 py-3 text-sm text-slate-700"
                >
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
          {/* Left */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-900">Our Approach</h2>

            <p className="text-slate-600">
              We built an AI-first platform that combines computer vision, natural language
              processing, and machine learning to automate the entire claims journey—from document
              intake to payment processing.
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
                  className="flex items-start gap-3 rounded-lg bg-[#F3F6FF] px-4 py-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[360px] overflow-hidden rounded-2xl">
            <Image src="/case-studies/approach.png" alt="Approach" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4">
          <h2 className="text-xl font-bold text-slate-900">Technology Stack</h2>

          <div className="flex flex-wrap gap-2">
            {["Java", "Python", ".NET", "Node.js", "React", "Angular", "TypeScript", "Go"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#EEF3FF] px-3 py-1 text-xs font-medium text-blue-600"
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
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-[#F3F6FF] p-6">
            <h2 className="mb-2 text-xl font-bold text-slate-900">The Results</h2>
            <p className="text-slate-600">
              The platform now processes 80% of claims automatically within 24 hours, with a 95%
              accuracy rate. Customer satisfaction improved dramatically, and the company saved $50M
              in operational costs annually.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Want Similar Results?</h2>
          <p className="text-slate-600">
            Let’s discuss how we can help you achieve transformational outcomes for your business.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-sm font-medium text-white"
            >
              Start Your Success Story
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
