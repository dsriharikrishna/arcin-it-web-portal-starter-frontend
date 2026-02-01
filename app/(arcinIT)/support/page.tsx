

import SupportHero from "@/components/support/SupportHero";
import HelpTopics from "@/components/support/HelpTopics";
import SupportFAQ from "@/components/support/SupportFAQ";
import Button from "@/components/ui/Button";
import AboutSolutions from "@/components/about-us/AboutSolutions";
import HomeDigital from "@/components/home/HomeDigital";

export default function SupportPage() {
    return (
        <>
            <SupportHero />
            <HelpTopics />
            <AboutSolutions />
            <HomeDigital />
        </>
    );
}