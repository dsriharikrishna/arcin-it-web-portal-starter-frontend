import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import WhyChooseSection from "@/components/services/WhyChooseSectionBanking";
import IndustriesSection from "@/components/services/IndustriesSection";
import HomeDigital from "@/components/home/HomeDigital";
import startupsData from "@/data/services/startups-tech-innovators";

export default function StartupsTechInnovatorsPage() {
    const { overview, services, whyChoose, industries, cta } = startupsData;

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <ServiceHero
                title={overview.title}
                description={overview.description}
            />

            {/* Service Details */}
            <ServiceDetails services={services} />

        

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
