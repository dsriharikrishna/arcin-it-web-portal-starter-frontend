// Service-related type definitions

export interface Service {
    id: number;
    title: string;
    description: string;
    features?: string[];
    image?: string;
}

export interface ServiceCardProps {
    service: {
        id?: number;
        title: string;
        description: string;
        features?: string[];
        image?: string;
    };
}

export interface ServiceHeroProps {
    title: string;
    subtitle: string;
}

export interface ServiceHeaderProps {
    title: string;
    description: string;
    subtitle?: string;
}

export interface ServiceDetailsProps {
    services: Service[];
    title?: string;
}

// Industry types
export interface Industry {
    id: string;
    title: string;
    description: string;
    icon?: string;
}

export interface IndustriesSectionProps {
    title: string;
    industries: Industry[];
}

// Process/Steps types
export interface Step {
    id: string;
    title: string;
    description: string;
}

export interface ProcessSectionProps {
    title: string;
    steps: Step[];
}

// Benefits types
export interface BenefitsPoint {
    title?: string;
    description: string;
}

export interface BenefitsSectionProps {
    title: string;
    points: string[] | BenefitsPoint[];
    image?: string;
}

// Why Choose types
export interface WhyChooseProps {
    id?: string;
    title: string;
    description: string;
    points: string[];
    image?: string;
}

// CTA types
export interface CTAProps {
    heading: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
}

// Service Group types (for complex service sections)
export interface ServiceGroup {
    title: string;
    services: Array<{
        title: string;
        description: string;
    }>;
}

export interface ServiceGroupSectionProps {
    title: string;
    groups: ServiceGroup[];
}
