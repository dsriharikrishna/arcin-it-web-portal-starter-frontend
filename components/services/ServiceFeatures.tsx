import ServiceFeatureSection from "./ServiceFeatureSection";

interface FeatureProps {
    title: string;
    content: string;
    details?: string;
    bullets?: string[];
    bulletsTitle?: string;
    footerNote?: string;
    image: string;
    reverse?: boolean; // legacy support
    layout?: "image-left" | "image-right";
    dark?: boolean;
}

interface Props {
    features: FeatureProps[];
}

export default function ServiceFeatures({ features }: Props) {
    if (!features || features.length === 0) return null;

    return (
        <>
            {features.map((f, i) => (
                <ServiceFeatureSection key={i} {...f} />
            ))}
        </>
    );
}
