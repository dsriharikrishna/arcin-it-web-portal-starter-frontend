export const insuranceReinsuranceServicesData = [
    {
        id: 1,
        title: "Policy Administration Software",
        subtitle: "Streamlined Insurance Operations",
        description: "We develop comprehensive policy administration systems that automate the entire policy lifecycle from quote to renewal, reducing manual work and improving accuracy.",
        features: [
            "Automated policy issuance",
            "Real-time quote generation",
            "Multi-product support",
            "Renewal management",
            "Document management",
            "Compliance tracking"
        ],
        benefits: "Our solutions streamline operations, reduce processing time, and improve customer satisfaction through faster service delivery.",
        image: "/services/insurance/policy-admin.png"
    },
    {
        id: 2,
        title: "Underwriting and Risk Assessment",
        subtitle: "AI-Powered Risk Evaluation",
        description: "We build intelligent underwriting platforms that leverage AI and machine learning to assess risk more accurately and efficiently, enabling faster decision-making.",
        features: [
            "Automated risk scoring",
            "Predictive analytics",
            "Real-time data integration",
            "Customizable risk models",
            "Fraud detection",
            "Regulatory compliance"
        ],
        benefits: "Improve underwriting accuracy, reduce processing time, and make data-driven decisions with our advanced risk assessment tools.",
        image: "/services/insurance/underwriting.png"
    },
    {
        id: 3,
        title: "Claims Management Software",
        subtitle: "Efficient Claims Processing",
        description: "Our claims management solutions automate the claims process from first notice of loss to settlement, improving efficiency and customer satisfaction.",
        features: [
            "Automated claims intake",
            "Workflow automation",
            "Document processing",
            "Fraud detection",
            "Payment processing",
            "Real-time status tracking",
            "Mobile claims submission"
        ],
        benefits: "Reduce claims processing time, minimize fraud, and provide transparent communication throughout the claims journey.",
        image: "/services/insurance/claims-management.png"
    },
    {
        id: 4,
        title: "Insurance Portal with AI Agents",
        subtitle: "Intelligent Customer Self-Service",
        description: "We create AI-powered customer portals that provide 24/7 self-service capabilities, from policy inquiries to claims filing, enhanced by intelligent chatbots and virtual assistants.",
        features: [
            "AI chatbot support",
            "Self-service policy management",
            "Instant quote generation",
            "Claims status tracking",
            "Document upload and retrieval",
            "Payment processing",
            "Personalized recommendations"
        ],
        benefits: "Empower customers with instant access to information and services while reducing call center volume and operational costs.",
        image: "/services/insurance/ai-portal.png"
    },
    {
        id: 5,
        title: "Reinsurance Risk Management Platforms",
        subtitle: "Advanced Reinsurance Solutions",
        description: "We develop sophisticated platforms for reinsurance companies to manage complex risk portfolios, treaty management, and catastrophe modeling.",
        features: [
            "Treaty management",
            "Risk aggregation",
            "Catastrophe modeling",
            "Portfolio analysis",
            "Automated reporting",
            "Regulatory compliance",
            "Real-time risk monitoring"
        ],
        benefits: "Gain comprehensive visibility into risk exposure, optimize reinsurance strategies, and ensure regulatory compliance.",
        image: "/services/insurance/reinsurance.png"
    },
    {
        id: 6,
        title: "Data Analytics and Business Intelligence",
        subtitle: "Data-Driven Insurance Insights",
        description: "We implement advanced analytics platforms that transform insurance data into actionable insights for better decision-making and competitive advantage.",
        features: [
            "Predictive modeling",
            "Customer segmentation",
            "Loss ratio analysis",
            "Market trend analysis",
            "Performance dashboards",
            "Custom reporting",
            "Real-time analytics"
        ],
        benefits: "Make informed decisions based on comprehensive data analysis, identify new opportunities, and optimize pricing strategies.",
        image: "/services/insurance/analytics.png"
    }
];

export const whyChooseInsuranceServices = {
    title: "Why Choose Arcin IT for Insurance Software Development?",
    description: "We combine deep insurance industry knowledge with cutting-edge technology to deliver solutions that drive growth and efficiency.",
    points: [
        {
            title: "Insurance Industry Expertise",
            description: "Our team has extensive experience in insurance and reinsurance, understanding the unique challenges, regulations, and workflows of the industry."
        },
        {
            title: "Regulatory Compliance",
            description: "We ensure all solutions meet industry standards and regulatory requirements, including data privacy, security, and reporting obligations."
        },
        {
            title: "Scalable Architecture",
            description: "Our platforms are built to scale with your business, handling increasing volumes of policies, claims, and customer interactions."
        },
        {
            title: "Integration Capabilities",
            description: "Seamlessly integrate with existing systems, third-party services, and legacy platforms to create a unified insurance ecosystem."
        },
        {
            title: "AI and Automation",
            description: "Leverage artificial intelligence and automation to reduce manual work, improve accuracy, and enhance customer experience."
        },
        {
            title: "Proven Track Record",
            description: "We have successfully delivered insurance solutions for leading carriers, MGAs, and reinsurance companies worldwide."
        }
    ]
};

export const insuranceBusinessBenefits = {
    title: "Business Benefits",
    benefits: [
        {
            title: "Operational Efficiency",
            description: "Automate manual processes and reduce operational costs",
            icon: "efficiency"
        },
        {
            title: "Enhanced Customer Experience",
            description: "Provide seamless digital experiences across all touchpoints",
            icon: "customer"
        },
        {
            title: "Risk Mitigation",
            description: "Improve underwriting accuracy and fraud detection",
            icon: "risk"
        },
        {
            title: "Faster Time-to-Market",
            description: "Launch new products and services quickly",
            icon: "speed"
        },
        {
            title: "Data-Driven Decisions",
            description: "Leverage analytics for strategic insights",
            icon: "analytics"
        },
        {
            title: "Regulatory Compliance",
            description: "Stay compliant with evolving regulations",
            icon: "compliance"
        }
    ]
};

export const insuranceCTA = {
    title: "Get Started with Arcin IT",
    description: "Ready to transform your insurance operations with innovative technology? Let's discuss how we can help you achieve your digital transformation goals.",
    primaryButton: {
        text: "Schedule a Consultation",
        href: "/contact-us"
    },
    secondaryButton: {
        text: "View Case Studies",
        href: "/case-studies"
    }
};

export const insuranceSolutionsOverview = {
    title: "Our Insurance Software Solutions",
    subtitle: "Scalable, Secure and Intelligent Digital Solutions for Insurance Enterprises",
    description: "We develop end-to-end insurance software solutions that streamline operations, enhance customer experience, and drive business growth. From policy administration to claims management, our platforms are built with the latest technologies to meet the evolving needs of modern insurance companies."
};

// Combined export for easy import
export default {
    overview: insuranceSolutionsOverview,
    services: insuranceReinsuranceServicesData,
    whyChoose: whyChooseInsuranceServices,
    businessBenefits: insuranceBusinessBenefits,
    cta: insuranceCTA
};
