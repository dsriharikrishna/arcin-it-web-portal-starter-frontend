import Button from "@/components/ui/Button";

interface Props {
    heading?: string;
    description?: string;
    primaryAction?: string;
    secondaryAction?: string;
}

export default function ServiceCTA({ heading, description, primaryAction, secondaryAction }: Props) {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-center text-white">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl font-bold">{heading || "Partner with Arcin IT"}</h2>
                <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto whitespace-pre-line">
                    {description || "Ready to transform your business? Let's discuss how our technology solutions can drive your success."}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button
                        variant="custom"
                        href="/contact-us"
                        size="lg"
                        rounded="full"
                        className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 shadow-lg"
                    >
                        {primaryAction || "Discuss Your Project"}
                    </Button>

                    {secondaryAction && (
                        <Button
                            variant="outline"
                            href="/services"
                            size="lg"
                            rounded="full"
                            className="border-blue-200 text-white hover:bg-white/10 font-semibold px-8"
                        >
                            {secondaryAction}
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
}
