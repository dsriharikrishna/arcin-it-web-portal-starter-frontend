"use client";

import { SmoothLandingBox } from "@/components/animations/SmoothLandingBox";
import CustomButton from "@/components/ui/CustomButton";
import { homeHeroData } from "@/data/home/home-page";

export default function HomeHero() {
  const { title, subtitle, cta } = homeHeroData;

  const renderTitle = () => {
    return (
      <>
        {title.main} <span className="text-blue-400">{title.highlighted.join(" ")}</span>{" "}
        {title.suffix}
      </>
    );
  };

  return (
    <div className="bg-hero relative flex min-h-[90vh] items-center overflow-hidden py-20 sm:py-32 lg:py-48">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 sm:text-left lg:px-8">
        <SmoothLandingBox variant="fade" delay={0} duration={0.8}>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            {renderTitle()}
          </h1>
        </SmoothLandingBox>
        <SmoothLandingBox variant="slide-up" delay={0.2} distance={30}>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed font-light text-slate-200">
            {subtitle}
          </p>
        </SmoothLandingBox>
        <SmoothLandingBox variant="scale" delay={0.4}>
          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:justify-start">
            <CustomButton
              variant="gradient"
              size="lg"
              rounded="lg"
              href={cta.primary.href}
              className="px-8 py-4 text-lg"
            >
              {cta.primary.text}
            </CustomButton>
            <CustomButton
              variant="outline"
              size="lg"
              rounded="lg"
              href={cta.secondary.href}
              className="border-white/20 bg-white/10 px-8 py-4 text-lg text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              {cta.secondary.text}
            </CustomButton>
          </div>
        </SmoothLandingBox>
      </div>
    </div>
  );
}
