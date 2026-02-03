export const startupsServicesData = [
    {
        id: 1,
        title: "Start-up Product Development",
        subtitle: "From Idea to Market-Ready Product",
        description: "Bring your idea to life with our complete product development solutions.",
        services: [
            {
                name: "Ideation & Strategy",
                description: "Articulate concepts and build a roadmap that matches your business vision."
            },
            {
                name: "UI/UX Design",
                description: "Create intuitive and engaging visual experiences for your users."
            },
            {
                name: "MVP Development",
                description: "Launch quickly with minimum viable products that attract both investors and customers."
            },
            {
                name: "Full-Scale Product Development",
                description: "Turn MVPs into fully market-ready products."
            },
            {
                name: "Post-Launch Support",
                description: "Ongoing maintenance, updates, and technical support for long-term success."
            }
        ],
        image: "/services/startups/product-development.png"
    },
    {
        id: 2,
        title: "Outsourced Product Development",
        subtitle: "Expert Development Teams on Demand",
        description: "Speed up growth and cut costs with our dedicated on-demand development teams.",
        features: [
            {
                title: "Custom Software Development",
                description: "Solutions designed to fit your unique business needs."
            },
            {
                title: "Dedicated Development Teams",
                description: "Skilled professionals (3-12 months) who work exclusively for you."
            },
            {
                title: "Agile Delivery",
                description: "Flexible, step-by-step development for quick product rollout."
            },
            {
                title: "Technology Expertise",
                description: "Skilled in AI, ML, cloud, IoT, web, and mobile platforms."
            }
        ],
        clientBenefits: [
            "Focus on your core business while we build your product",
            "Keep your costs and business operations lean",
            "Get expertise and expertise you need"
        ],
        image: "/services/startups/outsourced-development.png"
    },
    {
        id: 3,
        title: "Managed IT & Software Services",
        subtitle: "Complete IT Infrastructure Support",
        description: "Ensure smooth operations with our full-service managed IT services.",
        services: [
            {
                name: "Application Maintenance & Support",
                description: "Keep your software running well with proactive monitoring and support."
            },
            {
                name: "Cloud & DevOps Management",
                description: "Optimize infrastructure, minimize downtime, and boost performance."
            },
            {
                name: "QA & Testing Services",
                description: "Provide reliable, bug-free, and high-performance software."
            },
            {
                name: "Data Security & Compliance",
                description: "Protect your digital assets with strong security standards."
            }
        ],
        image: "/services/startups/managed-it.png"
    }
];

export const whyChooseStartupsServices = {
    title: "Why Arcin IT?",
    description: "We blend the speed of start-ups with enterprise-level technology. Know-how, ensuring your product is market-ready, secure, and scalable from the start.",
    points: [
        {
            title: "Proven Expertise",
            description: "Years of experience delivering digital products for startups and tech-driven businesses."
        },
        {
            title: "Start-up-First Approach",
            description: "Solutions customized to your business goals and unique challenges."
        },
        {
            title: "Cutting-Edge Technologies",
            description: "Stay ahead with modern tools and frameworks for scalable, future-ready solutions."
        },
        {
            title: "Flexible Delivery Models",
            description: "Choose what works for you: fixed-price, time & material, or dedicated teams."
        },
        {
            title: "Transparent Processes",
            description: "Regular updates, agile methods, and complete project visibility."
        }
    ]
};

export const businessesTrustUs = {
    title: "Why Businesses Trust Us",
    description: "Whether you're a funded start-up, a bootstrapped entrepreneur, or a growing tech company, we're your trusted partner for digital product development. We can help you bring your ideas to life, scale your business, and navigate the challenges of building innovative products.",
    keyPoints: [
        "Proven track record with startups and tech companies",
        "Flexible engagement models to suit your budget",
        "Expert teams with cutting-edge technology skills",
        "Agile development for faster time-to-market",
        "End-to-end support from ideation to post-launch"
    ]
};

export const startupsCTA = {
    title: "Ready to Build Your Next Digital Product?",
    description: "Partner with Arcin IT for future-ready, scalable, and innovative product development solutions that meet the needs of businesses of all sizes and sectors.",
    primaryButton: {
        text: "Get Your Free Consultation Now - Start Your Digital Journey",
        href: "/contact-us"
    }
};

export const startupsOverview = {
    title: "Transforming Ideas into Market-Ready Digital Products",
    description: "At Arcin IT, we partner with start-ups, scale-ups, and tech innovators to turn ideas into powerful digital products. Whether you're launching your first MVP or scaling an existing platform, our team of expert developers, designers, and strategists will help you navigate every step of the journey. From development and launch to growth and scale, we provide the full-stack support you need to bring your vision to life and achieve sustainable business growth.",
    subtitle: "Our skilled team of developers, designers, and strategists use modern technologies to make sure your product not only meets market needs but also stands out in a crowded field."
};

export const serviceHighlights = {
    startupProductDevelopment: {
        title: "Complete Product Development Lifecycle",
        stages: [
            "Ideation & Strategy",
            "UI/UX Design",
            "MVP Development",
            "Full-Scale Development",
            "Post-Launch Support"
        ]
    },
    outsourcedDevelopment: {
        title: "Flexible Engagement Models",
        models: [
            "Dedicated Development Teams (3-12 months)",
            "Project-Based Development",
            "Staff Augmentation",
            "Technology Consulting"
        ]
    },
    managedIT: {
        title: "Comprehensive IT Services",
        services: [
            "24/7 Monitoring & Support",
            "Cloud Infrastructure Management",
            "Security & Compliance",
            "Performance Optimization"
        ]
    }
};

export const technologiesWeUse = {
    title: "Technologies We Master",
    categories: [
        {
            category: "Frontend",
            technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"]
        },
        {
            category: "Backend",
            technologies: ["Node.js", "Python", "Java", ".NET", "Go"]
        },
        {
            category: "Mobile",
            technologies: ["React Native", "Flutter", "iOS Native", "Android Native"]
        },
        {
            category: "Cloud & DevOps",
            technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"]
        },
        {
            category: "Emerging Tech",
            technologies: ["AI/ML", "Blockchain", "IoT", "AR/VR"]
        }
    ]
};

// Combined export for easy import
export default {
    overview: startupsOverview,
    services: startupsServicesData,
    whyChoose: whyChooseStartupsServices,
    businessesTrust: businessesTrustUs,
    serviceHighlights: serviceHighlights,
    technologies: technologiesWeUse,
    cta: startupsCTA
};
