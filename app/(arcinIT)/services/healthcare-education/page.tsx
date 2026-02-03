import ServiceHero from "@/components/services/ServiceHero";
import HomeDigital from "@/components/home/HomeDigital";
import healthcareData from "@/data/services/healthcare-education";
import ServiceHeader from "@/components/services/ServiceHeader";
import RetailIndustries from "@/components/services/RetailIndustries";
import HealthServices from "@/components/services/HealthServices";

export default function HealthcareEducationPage() {
    const { overview, services, industries, cta, hero, whyChoose } = healthcareData;

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

                <HealthServices services={services} />

                {/* Industries We Serve (Grid of 7) */}
                <RetailIndustries
                    title={industries.title}
                    industries={industries.industries}
                />

                {/* Why Choose Section */}
                {/* <section className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            {whyChoose.title}
                        </h2>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-4xl">
                            {whyChoose.description}
                        </p>
                    </div>
                </section> */}

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

