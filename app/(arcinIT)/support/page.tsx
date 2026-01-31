

import SupportHero from "@/components/support/SupportHero";
import HelpTopics from "@/components/support/HelpTopics";
import SupportFAQ from "@/components/support/SupportFAQ";
import Button from "@/components/ui/Button";

export default function SupportPage() {
    return (
        <>
            <SupportHero />
            <HelpTopics />
            <SupportFAQ />

            {/* Still Need Help CTA */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Can&apos;t find what you&apos;re looking for?
                    </h2>
                    <p className="text-slate-600 text-lg mb-8">
                        Our team is here to help. Get in touch with us and we&apos;ll get back to you shortly.
                    </p>
                    <Button href="/contact-us" variant="gradient" size="lg" >
                        Contact Support
                    </Button>
                </div>
            </section>
        </>
    );
}