import { ServiceHero, ServiceHeader } from "@/components/services";
import { Healthcare, Retail } from "@/components/services";
import HomeDigital from "@/components/home/HomeDigital";
import healthcareData from "@/data/services/healthcare-education";

export default function HealthcareEducationPage() {
  const { overview, services, industries, cta, hero } = healthcareData;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ServiceHero title={hero.title} subtitle={hero.subtitle} />

      <div className="flex flex-col gap-6 sm:gap-8 ">
        {/* Introduction Section */}
        <ServiceHeader title={overview.title} description={overview.description} />

        <Healthcare.HealthServices services={services} />

        {/* Industries We Serve (Grid of 7) */}
        <Retail.Industries title={industries.title} industries={industries.industries} />

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
