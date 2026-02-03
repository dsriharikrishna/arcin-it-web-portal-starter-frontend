import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import HomeDigital from "@/components/home/HomeDigital";
import retailData from "@/data/services/retail-e-commerce";
import ServiceHeader from "@/components/services/ServiceHeader";
import RetailIndustries from "@/components/services/RetailIndustries";
import RetailProcess from "@/components/services/RetailProcess";
import RetailBenefits from "@/components/services/RetailBenefits";

export default function RetailEcommercePage() {
    const {
        hero,
        overview,
        services,
        industries,
        process,
        benefits,
        cta
    } = retailData;

    return (
        <div className="min-h-screen flex flex-col gap-8">
            {/* Hero Section */}
            <ServiceHero
                title={hero.title}
                subtitle={hero.subtitle}
            />

            <div className="flex flex-col gap-12">
                {/* Overview Header */}
                <ServiceHeader
                    title={overview.title}
                    description={overview.description}
                />

                {/* Service Details (The 6 Retail Services) */}
                <ServiceDetails
                    services={services}
                />

                {/* Industries We Serve (Grid of 6) */}
                <RetailIndustries
                    title={industries.title}
                    industries={industries.industries}
                />

                {/* Development Process (Grid of 5) */}
                <RetailProcess
                    title={process.title}
                    steps={process.steps}
                />

                {/* Benefits Section (Split Layout) */}
                <RetailBenefits
                    title={benefits.title}
                    points={benefits.points}
                    image={benefits.image}
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
