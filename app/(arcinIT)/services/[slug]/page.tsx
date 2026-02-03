import { notFound } from "next/navigation";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import IndustriesSection from "@/components/services/IndustriesSection";
import HomeDigital from "@/components/home/HomeDigital";

// Import all service data
import bankingData from "@/data/services/banking-financial-services";
import insuranceData from "@/data/services/insurance-reinsurance";
import governmentData from "@/data/services/government-digital-services";
import retailData from "@/data/services/retail-e-commerce";
import logisticsData from "@/data/services/logistics-transportation";
import startupsData from "@/data/services/startups-tech-innovators";
import healthcareData from "@/data/services/healthcare-education";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Map slugs to their data
const serviceDataMap: Record<string, any> = {
    "banking-financial-services": bankingData,
    "insurance-reinsurance": insuranceData,
    "government-digital-services": governmentData,
    "retail-e-commerce": retailData,
    "logistics-transportation": logisticsData,
    "startups-tech-innovators": startupsData,
    "healthcare-education": healthcareData,
};

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const serviceData = serviceDataMap[slug];

    // If service not found, show 404
    if (!serviceData) {
        notFound();
    }

    const { overview, services, whyChoose, industries, cta } = serviceData;

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
