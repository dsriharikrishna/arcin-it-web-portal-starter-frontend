// Application-wide constants and configuration

export const COMPANY_INFO = {
  name: "Arcin IT",
  fullName: "Arcin IT Solutions",
  tagline: "Transforming Business with Intelligent Technology",
  description:
    "Arcin IT delivers end-to-end digital solutions, cloud infrastructure, and AI-driven insights to drive growth and efficiency for modern enterprises.",
  foundedYear: 2016,
  yearsInBusiness: "10+",
  location: {
    officeName: "Hyderabad – HITEC City",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    address: "123 Tech Park, Hyderabad, Telangana, India",
    mapUrl: "https://maps.google.com/?q=Hyderabad,India",
    embedMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.336397854825!2d78.3938610150515!3d17.447442703969174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c7fe1a4daf%3A0xea86d6e6d7fc9658!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%20500085!5e0!3m2!1sen!2sin!4v1710000000000",
  },
};

export const CONTACT_INFO = {
  phone: {
    primary: "+60-1181106263",
    whatsapp: "601181106263", // Without + and - for WhatsApp URL
    display: "+60 118 110 6263",
  },
  email: {
    primary: "info@arcinit.com",
    support: "support@arcinit.com",
    sales: "sales@arcinit.com",
    careers: "careers@arcinit.com",
  },
  social: {
    facebook: "https://facebook.com/arcinit",
    twitter: "https://twitter.com/arcinit",
    linkedin: "https://linkedin.com/company/arcinit",
    instagram: "https://instagram.com/arcinit",
    youtube: "https://youtube.com/@arcinit",
  },
  workingHours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 10:00 AM - 4:00 PM",
    sunday: "Sunday: Closed",
  },
};

export const NAVIGATION_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/support", label: "Support" },
  { href: "/careers", label: "Careers" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact-us", label: "Contact Us" },
];

export const SERVICES_MENU = [
  {
    label: "Banking & Financial Services",
    href: "/services/banking-financial-services",
    icon: "Landmark",
  },
  {
    label: "Insurance & Reinsurance",
    href: "/services/insurance-reinsurance",
    icon: "ShieldCheck",
  },
  {
    label: "Government Digital Services",
    href: "/services/government-digital-services",
    icon: "Building2",
  },
  {
    label: "Retail & E-Commerce",
    href: "/services/retail-e-commerce",
    icon: "ShoppingCart",
  },
  {
    label: "Logistics & Transportation",
    href: "/services/logistics-transportation",
    icon: "Truck",
  },
  {
    label: "Start-ups & Tech Innovators",
    href: "/services/startups-tech-innovators",
    icon: "Rocket",
  },
  {
    label: "Healthcare & Education",
    href: "/services/healthcare-education",
    icon: "Stethoscope",
  },
];

export const QUICK_STATS = {
  clients: "450+",
  teamMembers: "10+",
  yearsInBusiness: "10+",
  projectsCompleted: "500+",
  countriesServed: "15+",
  customerSatisfaction: "98%",
};

export const CHATBOT_CONFIG = {
  predefinedMessages: [
    "Tell me about your services",
    "How can I get started?",
    "What industries do you serve?",
    "Request a quote",
    "Talk to sales team",
  ],
  botResponses: {
    "Tell me about your services":
      "We offer comprehensive IT solutions including Web Development, Mobile Apps, Cloud Infrastructure, AI/ML Solutions, and Digital Transformation services. Would you like to know more about a specific service?",
    "How can I get started?":
      "Getting started is easy! You can schedule a free consultation with our experts by clicking 'Talk to Expert' or fill out our contact form. We'll discuss your requirements and propose the best solution.",
    "What industries do you serve?":
      "We serve multiple industries including Banking, Insurance, Healthcare, Retail, Logistics, Government, and Startups. Our solutions are tailored to meet industry-specific challenges.",
    "Request a quote":
      "I'll connect you with our sales team. Please share your email and project details, or you can directly call us at +60-1181106263.",
    "Talk to sales team":
      "Our sales team is available to help! You can reach us at sales@arcinit.com or call +60-1181106263. You can also schedule a meeting through our contact page.",
    default:
      "Thank you for your message! Our team will get back to you shortly. For immediate assistance, please contact us at info@arcinit.com or call +60-1181106263.",
  } as Record<string, string>,
};

export const SEO_CONFIG = {
  defaultTitle: "Arcin IT | Transforming Business with Intelligent Technology",
  titleTemplate: "%s | Arcin IT",
  defaultDescription:
    "Arcin IT delivers end-to-end digital solutions, cloud infrastructure, and AI-driven insights to drive growth and efficiency for modern enterprises.",
  keywords: [
    "IT Services",
    "Digital Transformation",
    "Cloud Computing",
    "AI Solutions",
    "Software Development",
    "Enterprise IT",
    "Arcin IT",
    "Web Development",
    "Mobile App Development",
    "Custom Software",
  ],
  ogImage: "/home-hero.png",
  twitterHandle: "@arcinit",
};

export const THEME_CONFIG = {
  primaryColor: "#2563eb", // blue-600
  secondaryColor: "#f59e42", // orange-400
  accentColor: "#10b981", // green-500
  backgroundColor: "#f8fafc", // slate-50
  textColor: "#1e293b", // slate-800
};

// Export all constants as a single object for convenience
export default {
  company: COMPANY_INFO,
  contact: CONTACT_INFO,
  navigation: NAVIGATION_ITEMS,
  services: SERVICES_MENU,
  stats: QUICK_STATS,
  chatbot: CHATBOT_CONFIG,
  seo: SEO_CONFIG,
  theme: THEME_CONFIG,
};
