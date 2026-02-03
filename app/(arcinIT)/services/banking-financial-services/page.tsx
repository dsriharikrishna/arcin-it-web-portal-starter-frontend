import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import HomeDigital from "@/components/home/HomeDigital";
import bankingData from "@/data/services/banking-financial-services";
import ServiceHeader from "@/components/services/ServiceHeader";
import WhyChooseSectionBanking from "@/components/services/WhyChooseSectionBanking";

export default function BankingFinancialServicesPage() {
    const { overview, services, whyChoose, cta, hero } = bankingData;

    return (
        <div className="min-h-screen flex flex-col gap-6">

            {/* Hero Section */}
            <ServiceHero
                title={hero?.title}
                subtitle={hero?.subtitle}
            />
            <div className="flex flex-col gap-12">
                <ServiceHeader
                    title={overview.title}
                    description={overview.description}
                    subtitle={overview?.subtitle}
                />

                {/* Service Details */}
                <ServiceDetails services={services} />

                {/* Why Choose Section */}
                <WhyChooseSectionBanking
                    title={whyChoose.title}
                    points={whyChoose.points}
                    description={whyChoose.description}
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
