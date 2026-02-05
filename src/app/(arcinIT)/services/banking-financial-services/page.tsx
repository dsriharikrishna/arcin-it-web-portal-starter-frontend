import { ServiceHero, ServiceDetails, ServiceHeader } from "@/components/services";
import { Banking } from "@/components/services";
import HomeDigital from "@/components/home/HomeDigital";
import bankingData from "@/data/services/banking-financial-services";

export default function BankingFinancialServicesPage() {
  const { overview, services, whyChoose, cta, hero } = bankingData;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ServiceHero title={hero?.title} subtitle={hero?.subtitle} />
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
        <ServiceHeader
          title={overview.title}
          description={overview.description}
          subtitle={overview?.subtitle}
        />

        {/* Service Details */}
        <ServiceDetails services={services} />

        {/* Why Choose Section */}
        <Banking.WhyChooseSection
          title={whyChoose.title}
          points={whyChoose.points}
          description={whyChoose.description}
        />

        {/* CTA Section */}
        {cta && (
          <HomeDigital
            heading={cta.title}
            description={cta.description}
            ctaText={cta.primaryCustomButton?.text}
            ctaLink={cta.primaryCustomButton?.href}
          />
        )}
      </div>
    </div>
  );
}
