import ServiceHero from "@/components/services/ServiceHero";
import startupsData from "@/data/services/startups-tech-innovators";
import ServiceHeader from "@/components/services/ServiceHeader";
import BusinessesTrustUs from "@/components/services/BusinessesTrustUs";
import StartupsServiceSection from "@/components/services/StartupsServiceSection";
import StartupsCTA from "@/components/services/StartupsCTA";
import StartupsTechWhyChoose from "@/components/services/StartupsTechWhyChoose";

export default function StartupsTechInnovatorsPage() {
    const { overview, services, whyChoose, cta, hero, businessesTrust } = startupsData;

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

                {/* Services Section with alternating images */}
                <StartupsServiceSection
                    title="Our Services"
                    groups={services}
                />

                {/* Why Choose Section */}
                <StartupsTechWhyChoose
                    title={whyChoose.title}
                    description={whyChoose.description}
                    points={whyChoose.points}
                    image="/services/startups/why-choose.png"
                />

                {/* Why Businesses Trust Us */}
                <BusinessesTrustUs
                    title={businessesTrust.title}
                    description={businessesTrust.description}
                />

                {/* CTA Section */}
                {cta && (
                    <StartupsCTA
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
