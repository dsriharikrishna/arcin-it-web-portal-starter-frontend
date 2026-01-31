"use client";

import { SmoothLandingBox } from "@/components/animations/SmoothLandingBox";
import Button from "@/components/ui/Button";

export default function HomeDigital() {
    return (
        <section className="py-20 sm:py-28 bg-white text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SmoothLandingBox variant="slide-up" distance={20}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                        Ready to Transform <span className="font-extrabold">Your Digital Future?</span>
                    </h2>
                </SmoothLandingBox>

                <SmoothLandingBox variant="slide-up" delay={0.1} distance={20}>
                    <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                        Let&apos;s discuss how ARCIN IT can help you achieve your business goals. Our experts are ready to guide you through every step of your digital journey.
                    </p>
                </SmoothLandingBox>

                <SmoothLandingBox variant="scale" delay={0.2}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            variant="primary-blue"
                            size="lg"
                            rounded="lg"
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg shadow-blue-500/30 border-0"
                            href="/contact-us"
                        >
                            Schedule a Consultation
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            rounded="lg"
                            className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300"
                            href="/services"
                        >
                            Explore Our Services
                        </Button>
                    </div>
                </SmoothLandingBox>
            </div>
        </section>
    );
}
