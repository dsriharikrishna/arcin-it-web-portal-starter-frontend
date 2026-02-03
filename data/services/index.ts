export interface ServiceData {
    hero: {
        title: string;
        subtitle: string;
        backgroundImage?: string;
        description?: string;
    };
    intro: {
        heading: string;
        description: string;
        note?: string;
    };
    features: {
        id?: number;
        title: string;
        content: string; // mapped from user's 'description' props
        details?: string;
        bullets?: string[];
        bulletsTitle?: string;
        footerNote?: string;
        image: string;
        layout?: "image-left" | "image-right";
        reverse?: boolean; // legacy
        dark?: boolean;
        theme?: "dark" | "light"; // user's preference
    }[];
    whyChoose: {
        heading?: string;
        description?: string;
        points: string[];
    };
    cta?: {
        heading?: string;
        description?: string;
        primaryAction?: string;
        secondaryAction?: string;
    };
}

export const bankingService: ServiceData = {
    hero: {
        title: "Digital Banking & Financial Services Technology Solutions by Arcin IT",
        subtitle: "Smart, AI-Powered Solutions for Modern Banking",
        backgroundImage: "/services/banking.png",
        description: "Arcin IT makes digital banking transformation easier by breaking down complex financial processes into clear, manageable steps. Instead of offering disconnected solutions, Arcin IT focuses on simplifying digital banking systems, improving operational clarity, and enabling smarter financial operations.",
    },
    intro: {
        heading: "Simplifying Digital Banking with Arcin IT",
        description: `Arcin IT makes digital banking transformation easier by breaking down complex financial processes into clear, manageable steps. Instead of offering disconnected solutions, Arcin IT focuses on simplifying digital banking systems, improving operational clarity, and enabling smarter financial operations.
    
    This approach helps institutions modernize with confidence.`,
        note: "Below are the key areas where Arcin IT simplifies banking and financial services technology.",
    },
    features: [
        {
            id: 1,
            title: "Driving Digital Transformation in Banking & Financial Services",
            content: "The banking and financial services industry is changing rapidly. Customers want seamless digital experiences. Regulators require stronger compliance. Institutions face increasing operational complexity.",
            details: "Arcin IT helps banks and financial service providers upgrade their technology systems, improve customer engagement, and create secure, future-ready digital financial platforms that support sustainable growth.",
            image: "/services/banking/digital-transformation.png",
            layout: "image-left",
        },
        {
            id: 2,
            title: "Unified Digital Banking Platforms",
            content: "Arcin IT provides complete digital banking platforms that support retail banking, business banking, and corporate financial services. Our solutions offer consistent and user-friendly experiences across mobile, web, and branch channels.",
            bulletsTitle: "Key Capabilities",
            bullets: [
                "Mobile and online banking solutions",
                "Account and transaction management",
                "Digital payments and fund transfers",
                "Loan origination and servicing systems",
                "Integrated dashboards and reporting tools",
            ],
            footerNote: "Our platforms simplify system complexity while speeding up innovation and time to market.",
            image: "/services/banking/unified-platforms.png",
            layout: "image-right",
        },
        {
            id: 3,
            title: "Customer-Centric Financial Experiences",
            content: "Modern banking revolves around customer experience. Arcin IT uses data-driven insights and digital design principles to help financial institutions create personalized, relevant, and engaging customer journeys.",
            bulletsTitle: "Benefits",
            bullets: [
                "Personalized banking experiences",
                "Simplified digital onboarding",
                "Targeted customer communication",
                "Improved engagement and retention",
            ],
            footerNote: "With Arcin IT, institutions can stand out through meaningful digital interactions.",
            image: "/services/banking/customer-experience.png",
            layout: "image-left",
        },
        {
            id: 4,
            title: "Intelligent Financial Services Powered by Data & AI",
            content: "Arcin IT helps financial organizations unlock the value of their data through advanced analytics, AI, and intelligent automation. These tools improve decision-making, boost operational efficiency, and strengthen risk management.",
            bulletsTitle: "Use Cases",
            bullets: [
                "Fraud detection and risk analysis",
                "Predictive customer insights",
                "Automated financial workflows",
                "Real-time performance monitoring",
            ],
            footerNote: "AI-driven insights help institutions operate smarter and respond quickly to market needs.",
            image: "/services/banking/data-ai.png",
            layout: "image-right",
        },
        {
            id: 5,
            title: "Secure and Compliant Financial Platforms",
            content: "Every Arcin IT solution is designed with security and compliance in mind. Our financial platforms feature enterprise-grade security to protect sensitive data and meet regulatory requirements.",
            bulletsTitle: "Security Capabilities",
            bullets: [
                "Identity and access management",
                "Secure authentication methods",
                "Data encryption and fraud prevention",
                "Compliance-ready system design",
            ],
            footerNote: "Arcin IT helps financial institutions build trust with customers, partners, and regulators.",
            image: "/services/banking/security-compliance.png",
            layout: "image-left",
            dark: true,
        },
        {
            id: 6,
            title: "Modern Payment & Financial Platform Services",
            content: "Arcin IT offers flexible financial platform services that support secure digital payments and modern financial interactions across channels.",
            bulletsTitle: "Use Cases",
            bullets: [
                "Digital payment solutions and wallets",
                "Card issuance and lifecycle management",
                "Secure transaction processing",
                "Fintech and third-party integrations",
            ],
            footerNote: "These services enable faster innovation while ensuring reliability and security.",
            image: "/services/banking/payments.png",
            layout: "image-right",
        },
        {
            id: 7,
            title: "Cloud-Ready and Scalable Financial Solutions",
            content: "Arcin IT builds modern, cloud-enabled architectures that support scalability, resilience, and performance. Institutions can respond quickly to changing customer and regulatory needs.",
            bulletsTitle: "Key Advantages",
            bullets: [
                "Faster deployment and scalability",
                "Cost-effective infrastructure",
                "High availability and reliability",
                "Support for hybrid and cloud environments",
            ],
            image: "/services/banking/cloud-solutions.png",
            layout: "image-left",
        },
    ],
    whyChoose: {
        heading: "Why Choose Arcin IT for Banking & Financial Services",
        description: "Arcin IT combines deep industry knowledge with modern technology skills to help financial institutions succeed in a digital-first world.",
        points: [
            "Proven experience in banking and financial services",
            "Secure, compliance-focused solutions",
            "Customer-focused digital design",
            "Scalable, future-ready platforms",
        ],
    },
    cta: {
        heading: "Partner with Arcin IT for Digital Banking Transformation",
        description: "Whether you are a bank, credit union, fintech, or financial services provider, Arcin IT helps you create secure, scalable, and engaging digital financial solutions.",
        primaryAction: "Schedule a Consultation",
        secondaryAction: "Explore Our Services",
    },
};

export const insuranceService: ServiceData = {
    hero: {
        title: "Insurance & Reinsurance Technology",
        subtitle: "Accelerating Digital Transformation in The Insurance Sector",
    },
    intro: {
        heading: "Modernizing Insurance with Tech",
        description: "From claims processing to underwriting, we help insurers streamline operations and improve policyholder engagement through digital innovation.",
    },
    features: [
        {
            title: "Digital Claims Processing",
            content: "Automate and speed up claims management with AI-driven workflows, reducing manual errors and improving customer satisfaction.",
            image: "/services/insurance.png",
            bullets: ["Automated workflows", "Fraud detection", "Faster settlement"],
        },
        {
            title: "Policy Administration Systems",
            content: "Flexible and scalable systems to manage the entire lifecycle of insurance policies, from quotation to renewal.",
            image: "/services/policy-admin.png",
            reverse: true,
        }
    ],
    whyChoose: { points: ["Deep domain knowledge", "AI integration capabilities", "Rapid deployment", "Secure data handling"] },
};

export const governmentService: ServiceData = {
    hero: {
        title: "Government Digital Services",
        subtitle: "Empowering Public Sector with Secure, Scalable Tech",
    },
    intro: {
        heading: "Building Citizen-Centric Digital Services",
        description: "We help government agencies deliver efficient, transparent, and accessible digital services to citizens.",
    },
    features: [
        {
            title: "E-Governance Solutions",
            content: "Platforms that enable seamless interaction between government and citizens, improving accessibility and transparency.",
            image: "/services/government.png",
            bullets: ["Online portals", "Digital identity", "Secure document handling"],
        },
    ],
    whyChoose: { points: ["Security clearance ready", "Scalable public infrastructure", "Accessibility compliance", "Cost-effective solutions"] },
};

export const retailService: ServiceData = {
    hero: {
        title: "Retail & E-Commerce Solutions",
        subtitle: "Omnichannel Experiences that Drive Sales",
    },
    intro: {
        heading: "Retailing in the Digital Age",
        description: "Create engaging shopping experiences across web, mobile, and physical stores with our unified commerce platforms.",
    },
    features: [
        {
            title: "Unified Commerce Platforms",
            content: "Connect online and offline sales channels for real-time inventory visibility and a consistent customer journey.",
            image: "/services/retail.png",
            bullets: ["Inventory management", "Omnichannel POS", "Personalized recommendations"],
        },
    ],
    whyChoose: { points: ["High-performance platforms", "Data-driven insights", "Seamless integrations", "Mobile-first approach"] },
};

export const logisticsService: ServiceData = {
    hero: {
        title: "Logistics & Transportation",
        subtitle: "Optimizing Supply Chains with Smart Tech",
    },
    intro: {
        heading: "Efficiency in Motion",
        description: "Leverage IoT, AI, and data analytics to optimize fleet management, route planning, and supply chain visibility.",
    },
    features: [
        {
            title: "Smart Fleet Management",
            content: "Real-time tracking and predictive maintenance for your fleet to ensure timely deliveries and reduced operational costs.",
            image: "/services/logistics.png",
            bullets: ["GPS tracking", "Route optimization", "Fuel management"],
        },
    ],
    whyChoose: { points: ["Real-time visibility", "IoT expertise", "Operational efficiency", "Cost reduction"] },
};

export const startupService: ServiceData = {
    hero: {
        title: "Start-ups & Tech Innovators",
        subtitle: "Turning Visionary Ideas into Scalable Products",
    },
    intro: {
        heading: "Your Tech Partner for Growth",
        description: "We help startups build MVPs, scale products, and navigate the technical challenges of rapid growth.",
    },
    features: [
        {
            title: "MVP Development",
            content: "Rapidly build and launch your Minimum Viable Product to test market fit and attract investors.",
            image: "/services/startup.png",
            bullets: ["Rapid prototyping", "Agile development", "Scalable architecture"],
        },
    ],
    whyChoose: { points: ["Agile methodology", "Scalable architecture", "Cost-effective models", "Time-to-market focus"] },
};

export const healthcareService: ServiceData = {
    hero: {
        title: "Healthcare & Education Tech",
        subtitle: "Improving Lives through Digital Innovation",
    },
    intro: {
        heading: "Tech for Care and Learning",
        description: "Innovative solutions for healthcare providers and educational institutions to improve outcomes and accessibility.",
    },
    features: [
        {
            title: "Telemedicine Platforms",
            content: "Secure video consultation platforms connecting patients with doctors remotely.",
            image: "/services/healthcare.png",
            bullets: ["HIPAA compliance", "Video conferencing", "E-prescriptions"],
        },
    ],
    whyChoose: { points: ["Data privacy focus", "User-friendly design", "Interoperability", "Reliable support"] },
};

export const servicesMap: Record<string, ServiceData> = {
    "banking-financial-services": bankingService,
    "insurance-reinsurance": insuranceService,
    "government-digital-services": governmentService,
    "retail-e-commerce": retailService,
    "logistics-transportation": logisticsService,
    "startups-tech-innovators": startupService,
    "healthcare-education": healthcareService,
};
