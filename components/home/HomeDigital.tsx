"use client";

import { SmoothLandingBox } from "@/components/animations/SmoothLandingBox";
import Button from "@/components/ui/Button";

export default function HomeDigital() {
  return (
    <section className="py-16 sm:py-20 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">

        {/* HEADING */}
        <SmoothLandingBox variant="slide-up" distance={16}>
          <h2 className="text-3xl sm:text-4xl font-medium text-slate-900">
            Ready to Transform{" "}
            <span className="font-bold">Your Digital Future?</span>
          </h2>
        </SmoothLandingBox>

        {/* DESCRIPTION */}
        <SmoothLandingBox variant="slide-up" delay={0.1} distance={16}>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Let&apos;s discuss how ARCIN IT can help you achieve your business goals.
            Our experts are ready to guide you through every step of your digital journey.
          </p>
        </SmoothLandingBox>

        {/* CTA BUTTONS */}
        <SmoothLandingBox variant="scale" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">

            <Button
              variant="primary-blue"
              size="md"
              rounded="lg"
              href="/contact-us"
              className="
                px-6
                bg-gradient-to-r from-blue-500 to-indigo-600
                hover:from-blue-600 hover:to-indigo-700
                text-white
                border-0
              "
            >
              Schedule a Consultation
            </Button>

            <Button
              variant="outline"
              size="md"
              rounded="lg"
              href="/services"
              className="
                px-6
                border border-blue-400
                text-blue-500
                hover:bg-blue-50
              "
            >
              Explore Our Services
            </Button>

          </div>
        </SmoothLandingBox>

      </div>
    </section>
  );
}
