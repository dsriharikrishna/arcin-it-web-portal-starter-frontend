import { ServiceHero, ServiceDetails, ServiceHeader } from "@/components/services";
import { Insurance } from "@/components/services";
import HomeDigital from "@/components/home/HomeDigital";
import insuranceData from "@/data/services/insurance-reinsurance";

export default function InsuranceReinsurancePage() {
    const {
        hero,
        overview,
        whyIntro,
        services,
        architecture,
        businessBenefits,
        whyArcinit,
        deliveryModel,
        cta
    } = insuranceData;

    return (
        <div className="min-h-screen flex flex-col gap-8">
            {/* Hero Section */}
            <ServiceHero
                title={hero.title}
                subtitle={hero.subtitle}
            />

            <div className="flex flex-col gap-10">
                <ServiceHeader
                    title={overview.title}
                    description={overview.description}
                />

                {/* Why Choose Insurance Intro (Image 1) */}
                <Insurance.WhyChoose
                    title={whyIntro.title}
                    description={whyIntro.description}
                    points={whyIntro.points}
                />

                {/* Service Details (The 6 Service Cards) */}
                <ServiceDetails services={services} />

                {/* Architecture & Business Benefits (Image 2) */}
                <Insurance.ArchitectureBenefits
                    architecture={architecture}
                    benefits={businessBenefits}
                />

                {/* Why Arcin IT & Delivery Model (Image 3) */}
                <Insurance.DeliveryModel
                    whyArcinit={whyArcinit}
                    deliveryModel={deliveryModel}
                />

                {/* CTA Section */}
                {cta && (
                    <HomeDigital
                        heading={cta.title}
                        description={cta.description}
                        ctaText={cta.primaryCustomButton?.text}
                        ctaLink={cta.primaryCustomButton?.href}
                    />
                )}
            </div>
        </div>
    );
}
