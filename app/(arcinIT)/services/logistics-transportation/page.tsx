import ServiceHero from "@/components/services/ServiceHero";
import HomeDigital from "@/components/home/HomeDigital";
import logisticsData from "@/data/services/logistics-transportation";
import ServiceHeader from "@/components/services/ServiceHeader";
import RetailIndustries from "@/components/services/RetailIndustries";
import LogisticsServiceSection from "@/components/services/LogisticsServiceSection";
import LogisticsWhyChoose from "@/components/services/LogisticsWhyChoose";
import LogisticsSolutions from "@/components/services/LogisticsSolutions";

export default function LogisticsTransportationPage() {
    const {
        hero,
        overview,
        services,
        whyChoose,
        industries,
        solutions,
        cta
    } = logisticsData;

    return (
        <div className="min-h-screen flex flex-col gap-6">
            {/* Hero Section */}
            <ServiceHero
                title={hero.title}
                subtitle={hero.subtitle}
            />

            <div className="flex flex-col gap-6">
                {/* Introduction Section */}
                <ServiceHeader
                    title={overview.title}
                    description={overview.description}
                />

                {/* Logistics Software Development Services (Image 1) */}
                <LogisticsServiceSection
                    title="Logistics Software Development Services"
                    groups={services}
                />

                {/* Industries We Serve (Grid of 7) */}
                <RetailIndustries
                    title={industries.title}
                    industries={industries.industries}
                />

                {/* Why Choose Section (Image 2) */}
                <LogisticsWhyChoose
                    title={whyChoose.title}
                    points={whyChoose.points}
                    image="/services/logistics/why-choose.png"
                />

                {/* Logistics Software Solutions We Deliver (Image 3) */}
                <LogisticsSolutions
                    title={solutions.title}
                    solutions={solutions.solutions}
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
