export const healthcareHero = {
    title: "Healthcare Software Development Services",
    subtitle: "Next-Gen Healthcare Technology",
};

export const healthcareOverview = {
    title: "Modern Healthcare Platforms Designed for Security and Growth",
    description:
        "We develop secure, scalable, and user-friendly healthcare software solutions that help hospitals, diagnostic centers, and healthcare companies improve operations, care for patients, and comply with strict patient confidentiality. Our solutions are designed to meet the strict security, compliance, and regulatory needs of healthcare organizations worldwide.",
};

export const healthcareServicesData = [
    {
        id: 1,
        title: "Empowering Healthcare Organizations Through Technology",
        description:
            "The healthcare industry is evolving rapidly. The shift is driven by the demand for better patient experiences, efficient operations, and compliance with strict regulations. As a leading healthcare software development company, we understand these challenges and provide innovative solutions.",
        additionalText:
            "From hospital management systems to cloud-based healthcare platforms, our solutions fit your organization's goals, infrastructure, and regulatory needs.",
        image: "/services/healthcare/service-1.png",
        imagePosition: "right",
    },
    {
        id: 2,
        title: "Our Healthcare Software Development Services",
        description: "",
        image: "/services/healthcare/service-2.png",
        imagePosition: "left",
        services: [
            {
                title: "Custom Healthcare Software Development",
                description:
                    "We create tailored healthcare solutions that align with your workflow, business goals, and compliance requirements, ensuring long-lasting adaptability.",
                items: [],
            },
            {
                title: "Hospital and Clinic Management Systems",
                description:
                    "Comprehensive systems that centralize and manage hospital operations, including:",
                items: [
                    "Patient registration and appointment scheduling",
                    "Electronic Medical Records (EMR)",
                    "Billing and revenue cycle management",
                    "Pharmacy and inventory management",
                    "Laboratory and diagnostic integration",
                    "Coordination across multiple departments and locations",
                ],
            },
        ],
    },
    {
        id: 3,
        title: "",
        description: "",
        image: "/services/healthcare/service-3.png",
        imagePosition: "right",
        services: [
            {
                title: "Practice Management Solutions",
                description:
                    "Optimized platforms for clinics and specialty practices to manage patient data, appointments, referral documentation, billing, and reporting all from one system.",
                items: [],
            },
            {
                title: "Telemedicine and Remote Care Solutions",
                description:
                    "Secure digital platforms that enable virtual consultations, remote monitoring, and ongoing patient engagement. This improves accessibility and the continuity of care.",
                items: [],
            },
            {
                title: "Cloud-Based Healthcare Solutions",
                description:
                    "Cloud-enabled healthcare systems provide high availability, data security, scalability, and seamless integration with existing third-party platforms.",
                items: [],
            },
            {
                title: "Healthcare Mobile Applications",
                description:
                    "Patient-focused and physician-facing mobile apps that streamline appointment booking, access to health records, notifications, and real-time communication.",
                items: [],
            },
            {
                title: "Healthcare Data Analytics and Reporting",
                description:
                    "Analytics solutions that turn healthcare data into actionable insights for operational efficiency, compliance, and better patient outcomes.",
                items: [],
            },
        ],
    },
] as const;

export const healthcareIndustries = {
    title: "Industries and Healthcare Providers We Serve",
    industries: [
        "Hospitals and Multi-Specialty Clinics",
        "Diagnostics and Pathology Labs",
        "Specialty Care Centers",
        "Healthcare Enterprises and Networks",
        "Digital Health and HealthTech Startups",
    ],
};


export const healthcareWhyChoose = {
    title: "Arcin IT – Your Technology Partner in Digital Healthcare",
    description:
        "At Arcinit, we combine deep knowledge of the healthcare field with strong technical skills to deliver reliable, compliant, and high-performance healthcare software solutions. Our team collaborates closely with healthcare providers from discovery and design to development and ongoing support, ensuring measurable value.",
};

export const healthcareCTA = {
    title: "Start Your Healthcare Digital Transformation Today",
    description:
        "Are you looking to modernize your healthcare operations or build a scalable digital healthcare platform? Connect with Arcinit today to explore how our healthcare software development services can help you.",
    primaryButton: {
        text: "Schedule a Consultation",
        href: "/contact-us",
    },
    secondaryButton: {
        text: "Explore Our Services",
        href: "/services",
    },
};

const healthcareData = {
    hero: healthcareHero,
    overview: healthcareOverview,
    services: healthcareServicesData,
    industries: healthcareIndustries,
    whyChoose: healthcareWhyChoose,
    cta: healthcareCTA,
};

export default healthcareData;
