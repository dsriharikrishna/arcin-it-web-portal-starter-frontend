"use client";

import { SmoothLandingBox } from "@/components/animations/SmoothLandingBox";
import CustomButton from "@/components/ui/CustomButton";
import { homeDigitalData } from "@/data/home/home-page";

interface HomeDigitalProps {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HomeDigital({
  heading = homeDigitalData.heading,
  description = homeDigitalData.description,
  ctaText = homeDigitalData.ctaText,
  ctaLink = homeDigitalData.ctaLink,
}: HomeDigitalProps) {
  return (
    <section className="bg-white py-12 text-center sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 sm:gap-6 sm:px-6 lg:px-8">
        {/* HEADING */}
        <SmoothLandingBox variant="slide-up" distance={16}>
          <h2 className="text-2xl font-medium text-slate-900 sm:text-3xl md:text-4xl">{heading}</h2>
        </SmoothLandingBox>

        {/* DESCRIPTION */}
        <SmoothLandingBox variant="slide-up" delay={0.1} distance={16}>
          <p className="mx-auto max-w-3xl px-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            {description}
          </p>
        </SmoothLandingBox>

        {/* CTA Buttons */}
        <SmoothLandingBox variant="scale" delay={0.2}>
          <div className="flex flex-col items-stretch justify-center gap-3 px-4 pt-2 sm:flex-row sm:items-center sm:gap-4 sm:px-0">
            <CustomButton variant="solid" href={ctaLink} className="w-full sm:w-auto">
              {ctaText}
            </CustomButton>

            <CustomButton variant="outline" href="/services" className="w-full sm:w-auto">
              Explore Our Services
            </CustomButton>
          </div>
        </SmoothLandingBox>
      </div>
    </section>
  );
}
