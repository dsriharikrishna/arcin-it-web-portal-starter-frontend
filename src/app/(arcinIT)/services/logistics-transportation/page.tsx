import { ServiceHero, ServiceHeader } from "@/components/services";
import { Logistics, Retail } from "@/components/services";
import HomeDigital from "@/components/home/HomeDigital";
import logisticsData from "@/data/services/logistics-transportation";

export default function LogisticsTransportationPage() {
  const { hero, overview, services, whyChoose, industries, solutions, cta } = logisticsData;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ServiceHero title={hero.title} subtitle={hero.subtitle} />

      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Introduction Section */}
        <ServiceHeader title={overview.title} description={overview.description} />

        {/* Logistics Software Development Services (Image 1) */}
        <Logistics.ServiceSection
          title="Logistics Software Development Services"
          groups={services}
        />

        {/* Industries We Serve (Grid of 7) */}
        <Retail.Industries title={industries.title} industries={industries.industries} />

        {/* Why Choose Section (Image 2) */}
        <Logistics.WhyChoose
          title={whyChoose.title}
          points={whyChoose.points}
          image="/services/logistics/why-choose.png"
        />

        {/* Logistics Software Solutions We Deliver (Image 3) */}
        <Logistics.Solutions title={solutions.title} solutions={solutions.solutions} />

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
