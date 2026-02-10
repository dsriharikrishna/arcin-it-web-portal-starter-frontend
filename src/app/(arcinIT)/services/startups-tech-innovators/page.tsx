import { ServiceHero, ServiceHeader } from "@/components/services";
import { Startups } from "@/components/services";
import startupsData from "@/data/services/startups-tech-innovators";

export default function StartupsTechInnovatorsPage() {
  const { overview, services, whyChoose, cta, hero, businessesTrust } = startupsData;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ServiceHero title={hero.title} subtitle={hero.subtitle} />

      <div className="flex flex-col gap-6 sm:gap-8 ">
        {/* Introduction Section */}
        <ServiceHeader title={overview.title} description={overview.description} />

        {/* Services Section with alternating images */}
        <Startups.ServiceSection title="Our Services" groups={services} />

        {/* Why Choose Section */}
        <Startups.WhyChoose
          title={whyChoose.title}
          description={whyChoose.description}
          points={whyChoose.points}
          image="/services/startups/why-choose.png"
        />

        {/* Why Businesses Trust Us */}
        <Startups.BusinessesTrustUs
          title={businessesTrust.title}
          description={businessesTrust.description}
        />

        {/* CTA Section */}
        {cta && (
          <Startups.CTA
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
