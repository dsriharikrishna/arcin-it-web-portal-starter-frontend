interface Props {
    title: string;
    subtitle: string;
}

export default function ServiceHero({ title, subtitle }: Props) {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-20 text-center text-white">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h1>
                <p className="mt-4 text-base sm:text-lg opacity-90 max-w-2xl mx-auto">{subtitle}</p>
            </div>
        </section>
    );
}
