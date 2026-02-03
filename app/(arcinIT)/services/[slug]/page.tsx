import { notFound } from "next/navigation";
import ServiceLayout from "@/components/services/ServiceLayout";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceWhyChoose from "@/components/services/ServiceWhyChoose";
import { servicesMap } from "@/data/services/index";
import { PageHero } from "@/components/pages";
import HomeDigital from "@/components/home/HomeDigital";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate metadata dynamically
export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const data = servicesMap[slug];

    if (!data) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${data.hero.title} | Arcin IT Services`,
        description: data.intro.description,
    };
}

// Pre-render common static paths if needed, or rely on ISR/SSR
export async function generateStaticParams() {
    return Object.keys(servicesMap).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const data = servicesMap[slug];

    if (!data) {
        notFound();
    }

    return (
        <ServiceLayout>
            <PageHero
                title={data.hero.title}
                subtitle={data.hero.subtitle}
                description={data.hero.description}
                backgroundImage={data.hero.backgroundImage}
            />
            <ServiceIntro {...data.intro} />

            <ServiceFeatures features={data.features} />

            <ServiceWhyChoose {...data.whyChoose} />
            <HomeDigital />
        </ServiceLayout>
    );
}
