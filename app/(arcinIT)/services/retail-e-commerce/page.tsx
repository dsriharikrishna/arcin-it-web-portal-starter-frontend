import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import WhyChooseSection from "@/components/services/WhyChooseSectionBanking";
import IndustriesSection from "@/components/services/IndustriesSection";
import HomeDigital from "@/components/home/HomeDigital";
import retailData from "@/data/services/retail-e-commerce";

export default function RetailEcommercePage() {
    const { overview, services, whyChoose, industries, cta } = retailData;

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <ServiceHero
                title={overview.title}
                description={overview.description}
                subtitle={overview.subtitle}
                image="/services/hero-placeholder.png"
            />

            {/* Service Details */}
            <ServiceDetails services={services} />

            {/* Industries We Serve */}
            {industries && (
                <IndustriesSection
                    title={industries.title}
                    industries={
                        industries.industries || industries.providers || []
                    }
                />
            )}

            {/* Why Choose Section */}
            <WhyChooseSection
                title={whyChoose.title}
                description={whyChoose.description}
                points={whyChoose.points}
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
    );
}
