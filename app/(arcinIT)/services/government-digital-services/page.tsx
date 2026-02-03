import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import HomeDigital from "@/components/home/HomeDigital";
import governmentData from "@/data/services/government-digital-services";
import ServiceHeader from "@/components/services/ServiceHeader";
import EGovernanceServices from "@/components/services/EGovernanceServices";
import GovernmentApproach from "@/components/services/GovernmentApproach";
import WhyChooseSectionGovernment from "@/components/services/WhyChooseSectionGovernment";

export default function GovernmentDigitalServicesPage() {
    const {
        overview,
        services,
        eGovernance,
        approach,
        whyChoose,
        cta
    } = governmentData;

    return (
        <div className="min-h-screen flex flex-col gap-6">
            {/* Hero Section */}
            <ServiceHero
                title={overview.title}
                subtitle={overview.subtitle}
            />

            <div className="flex flex-col gap-12">
                <ServiceHeader
                    title={overview.title}
                    description={overview.description}
                />

                {/* Service Details */}
                <ServiceDetails services={services} />

                {/* E-Governance Services */}
                <EGovernanceServices
                    title={eGovernance.title}
                    services={eGovernance.services}
                />

                {/* Approach Section */}
                <GovernmentApproach
                    title={approach.title}
                    steps={approach.steps}
                />

                {/* Why Choose Section */}
                <WhyChooseSectionGovernment
                    id={whyChoose.id}
                    title={whyChoose.title}
                    description={whyChoose.description}
                    points={whyChoose.points}
                    image={whyChoose.image}
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
