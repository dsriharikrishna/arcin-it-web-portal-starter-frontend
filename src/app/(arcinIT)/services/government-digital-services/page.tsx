import { ServiceHero, ServiceDetails, ServiceHeader } from "@/components/services";
import { Government } from "@/components/services";
import HomeDigital from "@/components/home/HomeDigital";
import governmentData from "@/data/services/government-digital-services";

export default function GovernmentDigitalServicesPage() {
  const { overview, services, eGovernance, approach, whyChoose, cta } = governmentData;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ServiceHero title={overview.title} subtitle={overview.subtitle} />

      <div className="flex flex-col gap-8">
        <ServiceHeader title={overview.title} description={overview.description} />

        {/* Service Details */}
        <ServiceDetails services={services} />

        {/* E-Governance Services */}
        <Government.EGovernanceServices title={eGovernance.title} services={eGovernance.services} />

        {/* Approach Section */}
        <Government.GovernmentApproach title={approach.title} steps={approach.steps} />

        {/* Why Choose Section */}
        <Government.WhyChooseSection
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
            ctaText={cta.primaryCustomButton?.text}
            ctaLink={cta.primaryCustomButton?.href}
          />
        )}
      </div>
    </div>
  );
}
