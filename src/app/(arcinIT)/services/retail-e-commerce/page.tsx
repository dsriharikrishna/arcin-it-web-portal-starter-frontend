import { ServiceHero, ServiceDetails, ServiceHeader } from "@/components/services";
import { Retail } from "@/components/services";
import HomeDigital from "@/components/home/HomeDigital";
import retailData from "@/data/services/retail-e-commerce";

export default function RetailEcommercePage() {
  const { hero, overview, services, industries, process, benefits, cta } = retailData;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ServiceHero title={hero.title} subtitle={hero.subtitle} />

      <div className="flex flex-col gap-8 ">
        {/* Overview Header */}
        <ServiceHeader title={overview.title} description={overview.description} />

        {/* Service Details (The 6 Retail Services) */}
        <ServiceDetails services={services} />

        {/* Industries We Serve (Grid of 6) */}
        <Retail.Industries title={industries.title} industries={industries.industries} />

        {/* Development Process (Grid of 5) */}
        <Retail.Process title={process.title} steps={process.steps} />

        {/* Benefits Section (Split Layout) */}
        <Retail.Benefits title={benefits.title} points={benefits.points} image={benefits.image} />

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
