interface Props {
    heading: string;
    description: string;
    note?: string;
}

export default function ServiceIntro({ heading, description, note }: Props) {
    return (
        <section className="py-16 bg-white text-center">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{heading}</h2>
                <p className="mt-4 text-slate-600 leading-relaxed text-lg whitespace-pre-line">{description}</p>

                {note && (
                    <div className="mt-8 p-4 bg-blue-50 text-blue-800 rounded-lg inline-block text-sm font-medium">
                        {note}
                    </div>
                )}
            </div>
        </section>
    );
}
