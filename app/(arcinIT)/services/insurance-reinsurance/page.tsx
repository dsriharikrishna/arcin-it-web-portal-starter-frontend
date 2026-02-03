import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import HomeDigital from "@/components/home/HomeDigital";
import insuranceData from "@/data/services/insurance-reinsurance";
import ServiceHeader from "@/components/services/ServiceHeader";
import InsuranceWhyChoose from "@/components/services/InsuranceWhyChoose";
import InsuranceArchitectureBenefits from "@/components/services/InsuranceArchitectureBenefits";
import InsuranceDeliveryModel from "@/components/services/InsuranceDeliveryModel";

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
                <InsuranceWhyChoose
                    title={whyIntro.title}
                    description={whyIntro.description}
                    points={whyIntro.points}
                />

                {/* Service Details (The 6 Service Cards) */}
                <ServiceDetails services={services} />

                {/* Architecture & Business Benefits (Image 2) */}
                <InsuranceArchitectureBenefits
                    architecture={architecture}
                    benefits={businessBenefits}
                />

                {/* Why Arcin IT & Delivery Model (Image 3) */}
                <InsuranceDeliveryModel
                    whyArcinit={whyArcinit}
                    deliveryModel={deliveryModel}
                />

                {/* CTA Section */}
                {cta && (
                    <HomeDigital
                        heading={cta.title}
                        description={cta.description}
                        ctaText={cta.primaryButton?.text}
                        ctaLink={cta.primaryButton?.href}
                    />
                )}
            </div>
        </div>
    );
}
