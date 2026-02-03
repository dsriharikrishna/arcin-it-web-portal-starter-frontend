export const governmentDigitalServicesData = [
    {
        id: 1,
        title: "E-Government Portals and Platforms",
        subtitle: "Unified Digital Government Services",
        description: "We develop comprehensive e-government portals that provide citizens with easy access to government services, information, and resources through a single digital platform.",
        features: [
            "Citizen self-service portals",
            "Online application processing",
            "Document management systems",
            "Payment gateway integration",
            "Multi-language support",
            "Accessibility compliance",
            "Mobile-responsive design"
        ],
        benefits: "Improve citizen satisfaction, reduce administrative burden, and increase transparency through digital service delivery.",
        image: "/services/government/e-government.png"
    },
    {
        id: 2,
        title: "Citizen-Centric Digital Public Services",
        subtitle: "User-Friendly Government Solutions",
        description: "We create intuitive digital services designed around citizen needs, making it easier for people to interact with government agencies and access essential services.",
        features: [
            "User-centered design",
            "Simplified application processes",
            "Real-time status tracking",
            "Digital identity verification",
            "Secure document storage",
            "Automated notifications",
            "24/7 service availability"
        ],
        benefits: "Enhance citizen engagement, reduce wait times, and improve service delivery efficiency.",
        image: "/services/government/citizen-centric.png"
    },
    {
        id: 3,
        title: "Technologies Powering Our Digital Government Solutions",
        subtitle: "Modern Technology Stack",
        description: "We leverage cutting-edge technologies to build scalable, secure, and efficient digital government platforms.",
        technologies: [
            "Cloud infrastructure (AWS, Azure, GCP)",
            "AI and machine learning",
            "Blockchain for secure records",
            "IoT for smart city initiatives",
            "Big data analytics",
            "Mobile-first development",
            "API-driven architecture"
        ],
        benefits: "Future-proof solutions that can scale with growing citizen demands and evolving technology landscape.",
        image: "/services/government/technologies.png"
    },
    {
        id: 4,
        title: "Secure & Compliant Government IT Solutions",
        subtitle: "Security and Compliance First",
        description: "We build government IT systems with the highest security standards and full compliance with regulatory requirements to protect sensitive citizen data.",
        features: [
            "End-to-end encryption",
            "Multi-factor authentication",
            "Role-based access control",
            "Audit trails and logging",
            "GDPR and data privacy compliance",
            "Disaster recovery planning",
            "Regular security assessments"
        ],
        benefits: "Ensure data security, maintain citizen trust, and meet all regulatory compliance requirements.",
        image: "/services/government/security.png"
    }
];

export const digitalGovernmentServices = {
    title: "Our Digital Government & e-Governance Services",
    services: [
        {
            id: 1,
            title: "Digital Identity Management",
            description: "We develop secure digital identity systems that enable citizens to access government services with a single verified identity, reducing fraud and improving convenience.",
            icon: "identity"
        },
        {
            id: 2,
            title: "Smart City Solutions",
            description: "We create integrated smart city platforms that connect IoT devices, data analytics, and citizen services to improve urban living and resource management.",
            icon: "smart-city"
        },
        {
            id: 3,
            title: "Open Data Platforms",
            description: "We build open data portals that make government data accessible to citizens, researchers, and businesses, promoting transparency and innovation.",
            icon: "open-data"
        },
        {
            id: 4,
            title: "Government ERP Solutions",
            description: "We implement comprehensive ERP systems that streamline government operations, from finance and HR to procurement and asset management.",
            icon: "erp"
        },
        {
            id: 5,
            title: "Grievance and Feedback Systems",
            description: "We develop platforms that enable citizens to submit complaints, track resolution status, and provide feedback on government services.",
            icon: "feedback"
        },
        {
            id: 6,
            title: "License, Permit and Tax Services",
            description: "We create digital systems for license issuance, permit applications, and tax collection, making these processes faster and more transparent.",
            icon: "license"
        }
    ]
};

export const governmentApproach = {
    title: "Our Approach to Government Digital Transformation",
    steps: [
        {
            id: 1,
            title: "Discovery & Planning",
            description: "We analyze current processes, identify pain points, and develop a comprehensive digital transformation roadmap.",
            icon: "discovery"
        },
        {
            id: 2,
            title: "Design & Development",
            description: "We create user-centric designs and build scalable solutions using agile methodologies for faster delivery.",
            icon: "design"
        },
        {
            id: 3,
            title: "Security & Integration",
            description: "We implement robust security measures and integrate with existing government systems seamlessly.",
            icon: "security"
        },
        {
            id: 4,
            title: "Training & Support",
            description: "We provide comprehensive training for staff and ongoing support to ensure successful adoption.",
            icon: "training"
        }
    ]
};

export const whyChooseGovernmentServices = {
    title: "Why Choose Arcin IT as Your Digital Government Technology Partner",
    description: "We combine deep understanding of government operations with cutting-edge technology expertise to deliver transformative digital solutions.",
    points: [
        {
            title: "Government Sector Expertise",
            description: "Our team has extensive experience working with government agencies, understanding their unique challenges, workflows, and regulatory requirements."
        },
        {
            title: "Security & Compliance Focus",
            description: "We prioritize security and compliance in every solution, ensuring protection of sensitive citizen data and adherence to government standards."
        },
        {
            title: "Citizen-Centric Approach",
            description: "We design solutions with citizens in mind, creating intuitive interfaces and seamless experiences that improve public service delivery."
        },
        {
            title: "Scalable Architecture",
            description: "Our platforms are built to handle millions of users and can scale to meet growing demands as more services move online."
        },
        {
            title: "Proven Track Record",
            description: "We have successfully delivered digital transformation projects for government agencies, improving efficiency and citizen satisfaction."
        }
    ]
};

export const governmentCTA = {
    title: "Build Smarter Digital Government Services",
    description: "Arcin IT helps government agencies transform their services and improve citizen experience. Let's build the future of public service delivery together.",
    primaryButton: {
        text: "Schedule a Consultation",
        href: "/contact-us"
    },
    secondaryButton: {
        text: "Contact Our Experts",
        href: "/contact-us"
    }
};

export const governmentOverview = {
    title: "Digital Solutions for Government Organizations",
    description: "Arcin IT develops end-to-end digital solutions that help government organizations deliver better services to citizens, improve operational efficiency, and enhance transparency. Our e-governance platforms are designed to meet the unique needs of public sector organizations, from local municipalities to national agencies. We combine cutting-edge technology with deep understanding of government processes to create solutions that truly make a difference in citizens' lives."
};

// Combined export for easy import
export default {
    overview: governmentOverview,
    services: governmentDigitalServicesData,
    eGovernanceServices: digitalGovernmentServices,
    approach: governmentApproach,
    whyChoose: whyChooseGovernmentServices,
    cta: governmentCTA
};
