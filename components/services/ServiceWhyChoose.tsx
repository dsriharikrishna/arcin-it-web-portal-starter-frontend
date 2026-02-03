import { ShieldCheck, Zap, Users, Trophy } from "lucide-react";

interface Props {
    points: string[];
    heading?: string;
    description?: string;
}

export default function ServiceWhyChoose({ points, heading, description }: Props) {
    // Map points to generic icons since these are just strings.
    // Ideally, points could be objects with specific icons, but following user interface.
    const icons = [ShieldCheck, Zap, Users, Trophy];

    return (
        <section className="py-20 bg-white text-center">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-slate-900">{heading || "Why Choose Arcin IT"}</h2>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto whitespace-pre-line">
                    {description || "We combine industry expertise with cutting-edge technology to deliver measurable results."}
                </p>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {points.map((p, i) => {
                        const Icon = icons[i % icons.length]; // Rotate through icons if more than 4
                        return (
                            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <p className="font-semibold text-slate-800">{p}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
