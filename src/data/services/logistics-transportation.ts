export const logisticsHero = {
    title: "Logistics & Transportation Software Development Company",
    subtitle: "Custom Logistics Software Solutions",
};
export const logisticsOverview = {
    title: "Logistics Software Development Services",
    description:
        "At Arcinit, we focus on custom logistics software development that aligns with your workflows and business goals. Whether enhancing existing systems or deploying new platforms, our software ensures greater efficiency, visibility, and operational control across the logistics lifecycle. Our offerings include TMS, fleet management, warehouse management (WMS), and end-to-end supply chain solutions, all built to support seamless operations, compliance, and business growth.",
};

export const logisticsIndustries = {
    title: "Industries We Serve",
    industries: [
        "Logistics & 3PL Companies",
        "Freight & Transportation Providers",
        "Courier & Delivery Services",
        "Retail & eCommerce Supply Chains",
        "Manufacturing & Distribution Businesses",
        "Cold Chain & Perishable Goods Logistics",
        "FMCG, Pharmaceutical & Consumer Goods",
    ],
};


export const whyChooseLogistics = {
    title: "Why Choose Arcinit IT as Your Logistics Software Partner",
    points: [
        {
            title: "Deep Logistics & Supply Chain Expertise",
            description:
                "We combine industry knowledge with strong engineering skills to solve real-world logistics and transportation challenges.",
        },
        {
            title: "Scalable & Future-Ready Architecture",
            description:
                "Our cloud-based, modular platforms scale with transaction volumes, locations, and business growth.",
        },
        {
            title: "Data-Driven & Intelligent Solutions",
            description:
                "Advanced analytics and automation enable smarter routing, predictive planning, and real-time decision-making.",
        },
        {
            title: "Secure & Compliance-Ready Systems",
            description:
                "Security-first architecture with role-based access, data encryption, audit trails, and compliance readiness.",
        },
        {
            title: "End-to-End Development & Support",
            description:
                "From discovery and UX design to deployment and ongoing support, we cover the full delivery lifecycle.",
        },
    ],
};


export const logisticsSolutions = {
    title: "Logistics Software Solutions We Deliver",
    solutions: [
        "Transportation & Freight Management Systems",
        "Warehouse & Inventory Management Solutions",
        "Supply Chain Visibility Platforms",
        "Last-Mile Delivery Software",
        "Courier & Dispatch Management Systems",
        "Logistics Analytics & Reporting Dashboards",
        "Fleet & Vehicle Tracking Software",
    ],
};


export const logisticsCTA = {
    title: "Start Your Logistics Digital Transformation with Arcinit IT",
    description:
        "If you need a dependable logistics software development partner to modernize operations, improve visibility, and enhance customer satisfaction, Arcinit IT is here to help you move forward confidently.",
    primaryCustomButton: {
        text: "Schedule a Consultation",
        href: "/contact-us",
    },
    secondaryCustomButton: {
        text: "Explore Our Services",
        href: "/services",
    },
};

export const logisticsServices = [
    {
        image: "/services/logistics/service-group-1.png",
        imagePosition: "right",
        items: [
            {
                title: "Custom Logistics Software Development",
                description:
                    "We create custom logistics software tailored to your workflows, operational needs, and growth goals. Arcinit develops reliable and scalable platforms for new product development, system updates, and legacy software transformation.",
            },
            {
                title: "Transportation Management System (TMS)",
                description:
                    "Centralized solutions for transportation management that support route planning, carrier management, shipment tracking, freight billing, and delivery optimization. Our system aims to boost on-time deliveries while cutting transportation costs.",
            },
            {
                title: "Fleet Management Software",
                description:
                    "Get complete fleet visibility with real-time GPS tracking, driver behavior monitoring, fuel efficiency analysis, predictive maintenance, and compliance reporting to enhance safety and operational efficiency.",
            },
        ],
    },
    {
        image: "/services/logistics/service-group-2.png",
        imagePosition: "left",
        items: [
            {
                title: "Supply Chain Management (SCM) Software",
                description:
                    "We offer end-to-end supply chain solutions that provide visibility from procurement to last-mile delivery. Our SCM platforms assist with demand forecasting, supplier coordination, logistics planning, and operational transparency.",
            },
            {
                title: "Logistics Mobile App Development",
                description:
                    "We develop mobile applications for drivers, warehouse teams, and operations managers, enabling real-time updates, digital documentation, task assignments, proof of delivery, and smooth communication.",
            },
            {
                title: "API & Third-Party Integrations",
                description:
                    "We ensure secure integration with ERP, CRM, accounting systems, payment gateways, carrier networks, GPS platforms, and IoT devices to support smooth data flow across logistics ecosystems.",
            },
        ],
    },
] as const;


const logisticsData = {
    hero: logisticsHero,
    overview: logisticsOverview,
    services: logisticsServices,
    industries: logisticsIndustries,
    whyChoose: whyChooseLogistics,
    solutions: logisticsSolutions,
    cta: logisticsCTA,
};

export default logisticsData;
