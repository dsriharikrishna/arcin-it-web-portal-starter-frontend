export const startupsHero = {
  title: "Start-up and Product Development Services",
  subtitle: "Turning Ideas into Market-Ready Products",
};

export const startupsOverview = {
  title: "Transforming Ideas into Market-Ready Digital Products",
  description:
    "At Arcinit, we focus on complete product development services for startups, businesses, and growing enterprises. We don't just recognize ideas from concept all the way through to full development and launch. Our goal is to create innovative, high-quality, and future-proof digital products that please users and promote measurable business growth with a skilled product development team that not only meets needs but also exceeds expectations.",
};

export const startupsServices = [
  {
    id: 1,
    title: "Start-up Product Development",
    description: "Bring your idea to life with our complete product development solutions:",
    image: "/services/startups/service-group-1.png",
    imagePosition: "right",
    items: [
      {
        title: "Ideation & Strategy:",
        description: "Validate concepts and build a roadmap that matches your business goals.",
      },
      {
        title: "UI/UX Design:",
        description: "Create intuitive and engaging digital experiences for your users.",
      },
      {
        title: "MVP Development:",
        description:
          "Launch quickly with minimum viable products that attract both investors and customers.",
      },
      {
        title: "Full-Scale Product Development:",
        description: "Turn MVPs into solid, market-ready products.",
      },
      {
        title: "Post-Launch Support:",
        description: "Ongoing improvements, updates, and technical support for long-term success.",
      },
    ],
  },
  {
    id: 2,
    title: "Outsourced Product Development",
    description: "Speed up growth and cut costs with our dedicated outsourced development teams:",
    image: "/services/startups/service-group-2.png",
    imagePosition: "left",
    items: [
      {
        title: "Custom Software Development:",
        description: "Solutions designed to fit your unique business needs.",
      },
      {
        title: "Dedicated Development Teams:",
        description: "Skilled developers who fit smoothly into your processes.",
      },
      {
        title: "Agile Delivery:",
        description: "Flexible, step-by-step development for quick market entry.",
      },
      {
        title: "Technology Expertise:",
        description: "Strong skills in AI, ML, cloud, IoT, web, and mobile platforms.",
      },
    ],
    benefits: [
      "Lower overhead costs by using a skilled external team",
      "Keep your focus on core business operations",
      "Get specialized tech expertise as needed",
    ],
  },
  {
    id: 3,
    title: "Managed IT & Software Services",
    description: "Ensure smooth operations with our full managed IT services:",
    image: "/services/startups/service-group-3.png",
    imagePosition: "right",
    items: [
      {
        title: "Application Maintenance & Support:",
        description: "Keep your software running well with proactive monitoring.",
      },
      {
        title: "Cloud & DevOps Management:",
        description: "Optimize infrastructure, minimize downtime, and boost scalability.",
      },
      {
        title: "QA & Testing Services:",
        description: "Provide reliable, bug-free, and high-performing software.",
      },
      {
        title: "Data Security & Compliance:",
        description: "Safeguard your digital assets with strong security standards.",
      },
    ],
  },
] as const;

export const whyChooseStartupsServices = {
  title: "Why Arcin IT?",
  description:
    "We blend the speed of startups with enterprise-level technology know-how, ensuring your product is market-ready, secure, and scalable from the start.",
  points: [
    {
      title: "Proven Expertise",
      description:
        "Years of experience delivering digital products for startups and enterprises worldwide.",
    },
    {
      title: "Client-Centric Approach",
      description: "Solutions tailored to your business goals and unique challenges.",
    },
    {
      title: "Cutting-Edge Technologies",
      description:
        "Stay ahead with modern tools and frameworks for scalable and future-ready products.",
    },
    {
      title: "Global Delivery",
      description:
        "Serving clients across India, the US, Europe, and beyond with proven track record.",
    },
    {
      title: "Transparent Processes",
      description: "Regular updates, agile methodologies, and complete project visibility.",
    },
  ],
};

export const businessesTrustUs = {
  title: "Why Businesses Trust Us",
  description:
    "Whether you're a funded start-up, a bootstrapped entrepreneur, or a growing tech company, we're your trusted partner for digital product development. We can help you bring your ideas to life, scale your business, and navigate the challenges of building innovative products.",
  keyPoints: [
    "Proven track record with startups and tech companies",
    "Flexible engagement models to suit your budget",
    "Expert teams with cutting-edge technology skills",
    "Agile development for faster time-to-market",
    "End-to-end support from ideation to post-launch",
  ],
};

export const startupsCTA = {
  title: "Ready to Build Your Next Digital Product?",
  description:
    "Partner with Arcinit IT for trustworthy, scalable, and innovative product development solutions that meet the needs of businesses of all sizes and sectors.",
  primaryCustomButton: {
    text: "Get Your Free Consultation Now - Start Your Digital Journey",
    href: "/contact-us",
  },
};

const startupsData = {
  hero: startupsHero,
  overview: startupsOverview,
  services: startupsServices,
  whyChoose: whyChooseStartupsServices,
  businessesTrust: businessesTrustUs,
  cta: startupsCTA,
};

export default startupsData;
