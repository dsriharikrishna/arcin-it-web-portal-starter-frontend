"use client";

import { SmoothLandingBox } from "@/components/animations/SmoothLandingBox";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function HomeHero() {
    return (
        <section className="relative py-20 sm:py-32 lg:py-48 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Image */}
            <Image
                src="/home-hero.png"
                alt="Digital Innovation"
                fill
                className="object-cover"
                priority
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                <SmoothLandingBox variant="fade" delay={0} duration={0.8}>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6">
                        Transforming Business <br className="hidden sm:block" />
                        with <span className="text-blue-400">Intelligent Technology</span>
                    </h1>
                </SmoothLandingBox>
                <SmoothLandingBox variant="slide-up" delay={0.2} distance={30}>
                    <p className="mt-6 text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
                        We deliver end-to-end digital solutions that drive growth, efficiency, and innovation. From cloud infrastructure to AI-driven insights, we are your partner in the digital age.
                    </p>
                </SmoothLandingBox>
                <SmoothLandingBox variant="scale" delay={0.4}>
                    <div className="mt-10 flex flex-wrap gap-4 justify-center sm:justify-start">
                        <Button variant="gradient" size="lg" rounded="lg" href="/contact-us" className="px-8 py-4 text-lg">
                            Get Started
                        </Button>
                        <Button variant="outline" size="lg" rounded="lg" href="/services" className="px-8 py-4 text-lg bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
                            Our Solutions
                        </Button>
                    </div>
                </SmoothLandingBox>
            </div>
        </section>
    );
}
