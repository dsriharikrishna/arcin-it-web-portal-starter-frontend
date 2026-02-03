export const bankingFinancialServicesData = [
    {
        id: 1,
        title: "Central Digital",
        subtitle: "Unified Mobile Banking Experience",
        description: "Integrating every tool a banker needs into a single digital ecosystem. We design mobile banking apps that offer seamless navigation, secure transactions, and personalized user experiences.",
        features: [
            "Intuitive user interface",
            "Real-time transaction updates",
            "Multi-currency support",
            "Biometric authentication"
        ],
        image: "/services/banking/central-digital.png"
    },
    {
        id: 2,
        title: "Unified Digital Banking Platform",
        subtitle: "All-in-One Banking Solution",
        description: "We create comprehensive digital banking platforms that bring together account management, payments, loans, investments, and customer support into one unified interface.",
        features: [
            "Seamless account linking",
            "Instant fund transfers",
            "Investment portfolio tracking",
            "24/7 customer chat support",
            "Automated bill payments",
            "Personalized financial insights",
            "Multi-device synchronization"
        ],
        benefits: "Our platform simplifies banking operations, reduces costs, and enhances customer satisfaction by providing a cohesive digital experience.",
        image: "/services/banking/unified-platform.png"
    },
    {
        id: 3,
        title: "Customer-Centric Financial Experiences",
        subtitle: "Personalized Banking Solutions",
        description: "Using AI and machine learning, we create customer experiences that are tailored to individual financial needs and behaviors.",
        features: [
            "Personalized product recommendations",
            "Spending insights and budgeting tools",
            "Predictive financial planning",
            "Smart notifications and alerts",
            "Customizable dashboard views"
        ],
        benefits: "By understanding customer behavior and preferences, we help banks deliver more relevant services and build stronger customer relationships.",
        image: "/services/banking/customer-centric.png"
    },
    {
        id: 4,
        title: "Intelligent Fraud Detection Powered by AI",
        subtitle: "Advanced Security & Risk Management",
        description: "We implement AI-driven fraud detection systems that identify suspicious activities in real-time, protecting both banks and their customers from financial crimes.",
        features: [
            "Real-time fraud monitoring",
            "Behavioral analytics",
            "Transaction pattern recognition",
            "Risk scoring algorithms",
            "Automated alert systems",
            "Machine learning models for threat detection"
        ],
        benefits: "Our AI-powered solutions reduce false positives, improve detection accuracy, and provide banks with actionable insights to prevent fraud before it happens.",
        image: "/services/banking/fraud-detection.png"
    },
    {
        id: 5,
        title: "Scalable and Compliant Payment Platforms",
        subtitle: "Secure Payment Processing",
        description: "We build payment platforms that handle high transaction volumes while maintaining PCI-DSS compliance and regulatory standards across multiple jurisdictions.",
        features: [
            "Multi-payment gateway integration",
            "PCI-DSS compliance",
            "Real-time payment processing",
            "Cross-border transaction support",
            "Automated reconciliation",
            "Fraud prevention tools"
        ],
        benefits: "Our platforms ensure secure, fast, and compliant payment processing while providing the scalability needed to grow with your business.",
        image: "/services/banking/payment-platforms.png"
    },
    {
        id: 6,
        title: "Modern Payment Solutions for Institutions",
        subtitle: "Next-Generation Payment Infrastructure",
        description: "We develop cutting-edge payment solutions that support digital wallets, contactless payments, QR codes, and cryptocurrency transactions.",
        features: [
            "Digital wallet integration",
            "Contactless payment support",
            "QR code payments",
            "Cryptocurrency transactions",
            "Instant settlement",
            "Multi-channel payment acceptance",
            "Advanced encryption"
        ],
        benefits: "Stay ahead of the curve with payment solutions that meet evolving customer expectations and emerging payment technologies.",
        image: "/services/banking/modern-payments.png"
    },
    {
        id: 7,
        title: "Secure Blockchain Solutions at Scale",
        subtitle: "Distributed Ledger Technology",
        description: "We implement blockchain technology to create transparent, secure, and efficient systems for transactions, smart contracts, and digital identity verification.",
        features: [
            "Distributed ledger implementation",
            "Smart contract development",
            "Digital identity verification",
            "Immutable transaction records",
            "Cross-border settlement",
            "Tokenization services"
        ],
        benefits: "Blockchain technology reduces intermediaries, lowers costs, and increases transparency while maintaining the highest security standards.",
        image: "/services/banking/blockchain.png"
    }
];

export const whyChooseBankingServices = {
    title: "Why Choose Arcin IT for Banking & Financial Services",
    description: "We combine industry expertise with cutting-edge technology to deliver measurable results.",
    points: [
        {
            title: "Deep Industry Expertise",
            description: "Our team has extensive experience in banking and financial services, understanding the unique challenges and regulatory requirements of the industry."
        },
        {
            title: "Cutting-Edge Technology",
            description: "We leverage the latest technologies including AI, blockchain, and cloud computing to build innovative solutions that give you a competitive edge."
        },
        {
            title: "Security-First Approach",
            description: "Security is at the core of everything we build. We implement industry-leading security practices and compliance standards to protect your data and your customers."
        },
        {
            title: "Proven Track Record",
            description: "We have successfully delivered digital transformation projects for leading financial institutions, helping them modernize their operations and improve customer satisfaction."
        }
    ]
};

export const bankingCTA = {
    title: "Partner with Arcin IT for Digital Banking Transformation",
    description: "Ready to modernize your banking operations? Let's build the future of financial services together.",
    primaryButton: {
        text: "Schedule a Consultation",
        href: "/contact-us"
    },
    secondaryButton: {
        text: "View Case Studies",
        href: "/case-studies"
    }
};

export const bankingOverview = {
    title: "Banking & Financial Services",
    subtitle: "Digital Banking Solutions for Modern Financial Institutions",
    description: "Arcin IT develops end-to-end digital solutions that help banking and financial institutions deliver better services to customers, improve operational efficiency, and stay competitive in the digital age. From mobile banking apps to AI-powered fraud detection, we build solutions that transform how financial services are delivered."
};

// Combined export for easy import
export default {
    overview: bankingOverview,
    services: bankingFinancialServicesData,
    whyChoose: whyChooseBankingServices,
    cta: bankingCTA
};
