import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface Props {
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

export default function ServiceFeatureSection({
    title,
    content,
    details,
    bullets,
    bulletsTitle,
    footerNote,
    image,
    reverse,
    layout,
    dark,
}: Props) {
    // Determine direction: reverse is true if layout is image-right
    const isReverse = layout === "image-right" || reverse;

    return (
        <section className={`${dark ? "bg-slate-900 text-white" : "bg-slate-50"} py-16 sm:py-24`}>
            <div className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReverse ? "lg:flex-row-reverse" : ""}`}>

                {/* Text */}
                <div className={isReverse ? "lg:order-2" : ""}>
                    <h3 className={`text-2xl sm:text-3xl font-bold mb-6 ${dark ? "text-white" : "text-slate-900"}`}>{title}</h3>
                    <p className={`text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{content}</p>

                    {details && (
                        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-slate-400" : "text-slate-500"}`}>{details}</p>
                    )}

                    {bullets && bullets.length > 0 && (
                        <div className="mt-8">
                            {bulletsTitle && (
                                <h4 className={`text-sm font-bold uppercase tracking-wide mb-3 ${dark ? "text-blue-400" : "text-blue-600"}`}>
                                    {bulletsTitle}
                                </h4>
                            )}
                            <ul className="space-y-4">
                                {bullets.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className={`w-6 h-6 shrink-0 ${dark ? "text-blue-400" : "text-blue-600"}`} />
                                        <span className={dark ? "text-slate-200" : "text-slate-700"}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {footerNote && (
                        <div className={`mt-8 pt-6 border-t ${dark ? "border-slate-800" : "border-slate-200"}`}>
                            <p className={`text-sm italic ${dark ? "text-slate-400" : "text-slate-500"}`}>
                                {footerNote}
                            </p>
                        </div>
                    )}
                </div>

                {/* Image */}
                <div className={`relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl ${isReverse ? "lg:order-1" : ""}`}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 600px"
                    />
                </div>

            </div>
        </section>
    );
}
