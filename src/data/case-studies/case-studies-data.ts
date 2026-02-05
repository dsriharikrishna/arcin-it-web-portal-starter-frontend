// Case Studies data - All case studies content

export const caseStudiesPageData = {
  hero: {
    title: "Case Studies",
    subtitle: "Results That Speak for Themselves",
    description:
      "Explore how we've helped enterprises across industries achieve transformational outcomes through technology.",
    backgroundImage: "/case-studies/case-study-hero.png",
  },
  badge: "Our Success Stories",
  title: {
    main: "Transforming Businesses",
    highlighted: "Across Industries",
  },
  description:
    "Discover how we've partnered with leading organizations to solve complex challenges and drive measurable business outcomes through innovative technology solutions.",
};

export const caseStudiesData = [
  {
    id: 1,
    title: "Claims Automation Platform",
    slug: "claims-automation-platform",
    category: "Insurance Technology",
    client: "Leading Insurance Provider",
    industry: "Insurance",
    description:
      "Revolutionized insurance claims processing with AI-powered automation, reducing processing time by 70% and significantly improving customer satisfaction scores.",
    image: "/case-studies/claims-automation.png",
    tags: ["AI/ML", "Automation", "Insurance", "Cloud"],
    metrics: {
      processingTimeReduction: "70%",
      customerSatisfactionIncrease: "45%",
      costSavings: "$2.5M annually",
      claimsProcessed: "100K+ monthly",
    },
    challenge:
      "Manual claims processing was slow, error-prone, and resulted in poor customer experience. The client needed a scalable solution to handle increasing claim volumes.",
    solution:
      "We developed an AI-powered claims automation platform with intelligent document processing, fraud detection, and automated decision-making capabilities.",
    technologies: ["Python", "TensorFlow", "AWS", "React", "Node.js", "MongoDB"],
    results: [
      "Reduced average claim processing time from 14 days to 4 days",
      "Achieved 95% accuracy in automated claim assessment",
      "Improved customer satisfaction scores by 45%",
      "Saved $2.5M annually in operational costs",
      "Scaled to process 100,000+ claims monthly",
    ],
    testimonial: {
      quote:
        "The automation platform has transformed our claims operations. We're now processing claims faster than ever while maintaining high accuracy.",
      author: "Chief Operations Officer",
      company: "Leading Insurance Provider",
    },
  },
  {
    id: 2,
    title: "DriveMech - Auto Service Platform",
    slug: "drivemech",
    category: "Automotive Technology",
    client: "DriveMech Inc.",
    industry: "Automotive Services",
    description:
      "Built a comprehensive automotive service marketplace connecting car owners with certified mechanics, featuring real-time booking, service tracking, and quality assurance.",
    image: "/case-studies/drivemech.png",
    tags: ["Mobile App", "Marketplace", "IoT", "Real-time"],
    metrics: {
      activeUsers: "50K+",
      mechanicsOnboarded: "2,000+",
      bookingsMonthly: "15K+",
      customerRating: "4.8/5",
    },
    challenge:
      "Car owners struggled to find reliable mechanics, while certified mechanics lacked a platform to reach customers. The market needed a trusted intermediary.",
    solution:
      "We created a two-sided marketplace with mobile apps for customers and mechanics, featuring real-time booking, GPS tracking, digital payments, and quality ratings.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Socket.io", "Stripe"],
    results: [
      "Onboarded 2,000+ certified mechanics in first year",
      "Achieved 50,000+ active users within 18 months",
      "Processing 15,000+ bookings monthly",
      "Maintained 4.8/5 average customer rating",
      "Expanded to 15 cities across the region",
    ],
    testimonial: {
      quote:
        "Arcin IT understood our vision and built a platform that exceeded our expectations. The app is intuitive, reliable, and our users love it.",
      author: "Founder & CEO",
      company: "DriveMech Inc.",
    },
  },
  {
    id: 3,
    title: "Pets Care & Training App",
    slug: "pets-care-training-app",
    category: "Pet Care Technology",
    client: "PetCare Solutions",
    industry: "Pet Care & Wellness",
    description:
      "Developed a comprehensive pet care ecosystem with training modules, health tracking, community features, and veterinary consultations for pet owners and professionals.",
    image: "/case-studies/pets-care.png",
    tags: ["Mobile App", "Community", "Healthcare", "E-learning"],
    metrics: {
      downloads: "100K+",
      activePets: "75K+",
      trainingSessions: "250K+",
      vetConsultations: "10K+",
    },
    challenge:
      "Pet owners lacked a centralized platform for training, health tracking, and professional consultations. Existing solutions were fragmented and incomplete.",
    solution:
      "We built an all-in-one pet care app with video training courses, health records, vaccination reminders, community forums, and telemedicine for pets.",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "WebRTC", "AWS S3"],
    results: [
      "Achieved 100,000+ downloads in first 6 months",
      "75,000+ pets registered on the platform",
      "Delivered 250,000+ training sessions",
      "Facilitated 10,000+ veterinary consultations",
      "Built active community with 50,000+ monthly active users",
    ],
    testimonial: {
      quote:
        "This app has become an essential tool for pet owners. The training modules are excellent, and the vet consultation feature is a game-changer.",
      author: "Product Director",
      company: "PetCare Solutions",
    },
  },
  {
    id: 4,
    title: "E-Government Citizen Portal",
    slug: "e-government-portal",
    category: "Government Technology",
    client: "State Government",
    industry: "Government",
    description:
      "Modernized citizen services with a unified digital portal enabling online applications, document verification, and service tracking for 5 million+ citizens.",
    image: "/case-studies/government-portal.png",
    tags: ["Government", "Digital Services", "Security", "Accessibility"],
    metrics: {
      citizensServed: "5M+",
      servicesDigitized: "150+",
      paperworkReduction: "80%",
      processingTimeReduction: "60%",
    },
    challenge:
      "Citizens faced long queues and bureaucratic delays for government services. The government needed to digitize services while ensuring security and accessibility.",
    solution:
      "We developed a secure, accessible e-government portal with digital identity verification, online applications, payment gateway, and real-time status tracking.",
    technologies: ["Next.js", "Java Spring Boot", "Oracle", "Kubernetes", "Keycloak"],
    results: [
      "Digitized 150+ government services",
      "Serving 5 million+ registered citizens",
      "Reduced paperwork by 80%",
      "Cut average processing time by 60%",
      "Achieved 99.9% uptime with zero security breaches",
    ],
    testimonial: {
      quote:
        "The portal has transformed how we serve citizens. It's secure, user-friendly, and has significantly improved our service delivery.",
      author: "Director of Digital Services",
      company: "State Government",
    },
  },
];

// Export individual case study by slug
export const getCaseStudyBySlug = (slug: string) => {
  return caseStudiesData.find((caseStudy) => caseStudy.slug === slug);
};

// Export case studies by industry
export const getCaseStudiesByIndustry = (industry: string) => {
  return caseStudiesData.filter((caseStudy) => caseStudy.industry === industry);
};

// Export case studies by tag
export const getCaseStudiesByTag = (tag: string) => {
  return caseStudiesData.filter((caseStudy) => caseStudy.tags.includes(tag));
};

// Combined export
export default {
  page: caseStudiesPageData,
  caseStudies: caseStudiesData,
  getCaseStudyBySlug,
  getCaseStudiesByIndustry,
  getCaseStudiesByTag,
};
