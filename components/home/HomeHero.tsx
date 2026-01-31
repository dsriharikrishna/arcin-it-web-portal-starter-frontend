"use client";

import { SmoothLandingBox } from "@/components/animations/SmoothLandingBox";
import Button from "@/components/ui/Button";

export default function HomeHero() {
    return (
        <section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SmoothLandingBox variant="fade" delay={0} duration={0.8}>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
                        Your trusted partner for{" "}
                        <span className="text-blue-600">vehicle servicing</span>
                    </h1>
                </SmoothLandingBox>
                <SmoothLandingBox variant="slide-up" delay={0.2} distance={30}>
                    <p className="mt-6 text-xl text-slate-600 max-w-2xl">
                        Fast, reliable, and transparent automotive care. From routine
                        maintenance to complex repairs—we&apos;ve got you covered.
                    </p>
                </SmoothLandingBox>
                <SmoothLandingBox variant="scale" delay={0.4}>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Button variant="gradient" size="lg" rounded="lg" href="/contact-us">
                            Get Started
                        </Button>
                        <Button variant="outline" size="lg" rounded="lg" href="/services">
                            View Services
                        </Button>
                    </div>
                </SmoothLandingBox>
            </div>
        </section>
    );
}
