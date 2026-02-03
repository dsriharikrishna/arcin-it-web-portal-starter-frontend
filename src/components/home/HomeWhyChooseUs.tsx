"use client";

import { AnimatedCard, PageSection } from "@/components/pages";

const FEATURES = [
    { title: "Expert Technicians", desc: "Certified professionals for all vehicle makes" },
    { title: "Transparent Pricing", desc: "No hidden costs, upfront quotes" },
    { title: "Fast Turnaround", desc: "Quick service without compromising quality" },
];

export default function HomeWhyChooseUs() {
    return (
        <PageSection
            title="Why Choose Us"
            subtitle="Quality and trust at every step"
            className="bg-slate-50"
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {FEATURES.map((f, i) => (
                    <AnimatedCard
                        key={f.title}
                        title={f.title}
                        description={f.desc}
                        index={i}
                    />
                ))}
            </div>
        </PageSection>
    );
}
