"use client";

import { SmoothLandingBox } from "@/components/animations/SmoothLandingBox";
import CustomButton from "@/components/ui/CustomButton";

interface HomeDigitalProps {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HomeDigital({
  heading,
  description,
  ctaText,
  ctaLink,
}: HomeDigitalProps) {
  return (
    <section className="py-8 sm:py-20 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">

        {/* HEADING */}
        <SmoothLandingBox variant="slide-up" distance={16}>
          <h2 className="text-3xl sm:text-4xl font-medium text-slate-900">
            {heading || "Ready to Transform"}
            <span className="font-bold">Your Digital Future?</span>
          </h2>
        </SmoothLandingBox>

        {/* DESCRIPTION */}
        <SmoothLandingBox variant="slide-up" delay={0.1} distance={16}>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            {description || "Let&apos;s discuss how ARCIN IT can help you achieve your business goals. Our experts are ready to guide you through every step of your digital journey."}
          </p>
        </SmoothLandingBox>

        {/* CTA CustomButtonS */}
        <SmoothLandingBox variant="scale" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">

            <CustomButton
              variant="solid"
              href={ctaLink || "/contact-us"}
            >
              {ctaText || "Schedule a Consultation"}
            </CustomButton>

            <CustomButton
              variant="outline"
              href={ctaLink || "/services"}
            >
              {ctaText || "Explore Our Services"}
            </CustomButton>

          </div>
        </SmoothLandingBox>

      </div>
    </section>
  );
}
