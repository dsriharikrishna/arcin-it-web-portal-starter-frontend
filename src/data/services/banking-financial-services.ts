export const bankingFinancialServicesData = [
  {
    id: 1,
    title: "Driving Digital Transformation in Banking & Financial Services",
    description:
      "The banking and financial services industry is evolving rapidly. Customers demand seamless digital experiences, while regulators require stronger compliance and security.",
    benefits:
      "We help banks modernize legacy systems, improve customer engagement, and build secure, future-ready digital platforms that support long-term growth.",
    image: "/services/banking/central-digital.png",
  },
  {
    id: 2,
    title: "Unified Digital Banking Platforms",
    description:
      "We build end-to-end digital banking platforms that support retail, business, and corporate banking with consistent user experiences across all channels.",
    features: [
      "Mobile and online banking solutions",
      "Account and transaction management",
      "Digital payments and fund transfers",
      "Loan origination and servicing systems",
      "Integrated dashboards and reporting tools",
    ],
    benefits:
      "Our platforms simplify system complexity while accelerating innovation and time to market.",
    image: "/services/banking/unified-platform.png",
  },
  {
    id: 3,
    title: "Customer-Centric Financial Experiences",
    description:
      "Using data-driven insights and intelligent automation, we design personalized financial experiences that improve engagement and customer loyalty.",
    features: [
      "Personalized banking experiences",
      "Omni-channel digital interactions",
      "Targeted customer communication",
      "Improved engagement and retention",
    ],
    benefits:
      "Banks can differentiate themselves through meaningful, personalized digital interactions.",
    image: "/services/banking/customer-centric.png",
  },
  {
    id: 4,
    title: "Intelligent Financial Services Powered by Data & AI",
    description:
      "We leverage advanced analytics and AI to help financial institutions unlock insights, automate processes, and make smarter decisions.",
    features: [
      "Fraud detection and risk analysis",
      "Predictive customer insights",
      "Automated financial workflows",
      "Real-time performance monitoring",
    ],
    benefits:
      "AI-driven insights improve efficiency, reduce risk, and enable faster response to market changes.",
    image: "/services/banking/fraud-detection.png",
  },
  {
    id: 5,
    title: "Secure & Compliant Financial Platforms",
    description:
      "Security and compliance are built into every solution we deliver, ensuring trust across customers, partners, and regulators.",
    features: [
      "Enterprise-grade security controls",
      "Identity and access management",
      "Secure authentication mechanisms",
      "Data encryption and protection",
      "Compliance-ready system design",
    ],
    benefits:
      "We help institutions meet regulatory requirements while safeguarding sensitive financial data.",
    image: "/services/banking/security-compliance.png",
  },
  {
    id: 6,
    title: "Modern Payment & Financial Platform Services",
    description:
      "Our payment platforms support secure, scalable digital payments and modern financial interactions across all channels.",
    features: [
      "Digital payment solutions and wallets",
      "Card issuance and lifecycle management",
      "Secure transaction processing",
      "Fintech and third-party integrations",
    ],
    benefits: "Enable faster innovation while ensuring reliability, scalability, and security.",
    image: "/services/banking/modern-payments.png",
  },
  {
    id: 7,
    title: "Cloud-Ready and Scalable Financial Solutions",
    description:
      "Our solutions are built on modern, cloud-enabled architectures that support scalability, resilience, and high performance. Financial institutions can respond quickly to changing customer expectations and evolving regulatory requirements.",
    features: [
      "Faster deployment and elastic scalability",
      "Cost-effective cloud infrastructure",
      "High availability and system reliability",
      "Support for hybrid and multi-cloud environments",
    ],
    benefits:
      "Cloud-native architectures help institutions innovate faster, reduce infrastructure costs, and maintain operational resilience at scale.",
    image: "/services/banking/cloud-solutions.png",
  },
];

export const whyChooseBankingServices = {
  badge: "Why Choose Us",
  title: "Why Choose Arcinit for Banking & Financial Services",

  description:
    "Arcinit combines deep industry knowledge with modern technology skills to help financial institutions succeed in a digital-first world.",
  points: [
    {
      title: "Proven experience in banking and financial services",
    },
    {
      title: "Secure, compliance-focused solutions",
    },
    {
      title: "Customer-focused digital design",
    },
    {
      title: "Scalable, future-ready platforms",
    },
  ],
};

export const bankingCTA = {
  title: "Partner with Arcin IT for Digital Banking Transformation",
  description:
    "Ready to modernize your banking operations? Let's build the future of financial services together.",
  primaryCustomButton: {
    text: "Schedule a Consultation",
    href: "/contact-us",
  },
  secondaryCustomButton: {
    text: "View Case Studies",
    href: "/case-studies",
  },
};

export const bankingOverview = {
  title: "Simplifying Digital Banking with Arcinit  ",
  subtitle:
    "Below are the key areas where Arcinit simplifies banking and financial services technology. ",
  description:
    "Arcinit makes digital banking transformation easier by breaking down complex financial processes into clear, manageable steps. Instead of offering disconnected solutions, Arcinit focuses on simplifying digital banking systems, improving operational clarity, and enabling smarter financial operations. This approach helps institutions modernize with confidence. ",
};

export const heroSection = {
  subtitle: "Smart, AI-Powered Solutions for Modern Banking",
  title: "Digital Banking & Financial Services Technology Solutions by Arclinit",
};

// Combined export for easy import
const BankingServicesData = {
  overview: bankingOverview,
  services: bankingFinancialServicesData,
  whyChoose: whyChooseBankingServices,
  cta: bankingCTA,
  hero: heroSection,
};

export default BankingServicesData;
