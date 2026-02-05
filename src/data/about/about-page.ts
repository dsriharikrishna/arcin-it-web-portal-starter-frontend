// About Us page data

export const aboutPageData = {
  hero: {
    title: "About Arcin IT",
    subtitle: "Innovating Technology Solutions Since 2016",
    description:
      "We are a team of passionate technologists committed to transforming businesses through cutting-edge digital solutions and strategic innovation.",
    backgroundImage: "/about-us/about-hero.png",
  },
};

export const aboutMissionVisionData = {
  mission: {
    title: "Our Mission",
    description:
      "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.",
    icon: "/svgs/mission-icon.svg",
    points: [
      "Deliver excellence in every project",
      "Foster long-term partnerships",
      "Drive digital transformation",
      "Create measurable business value",
    ],
  },
  vision: {
    title: "Our Vision",
    description:
      "To be the most trusted technology partner for enterprises worldwide, recognized for innovation, quality, and customer success.",
    icon: "/svgs/vision-icon.svg",
    points: [
      "Lead in emerging technologies",
      "Expand global presence",
      "Build world-class solutions",
      "Shape the future of digital business",
    ],
  },
};

export const aboutValuesData = {
  title: "Our Core Values",
  subtitle: "The principles that guide everything we do",
  values: [
    {
      id: 1,
      title: "Innovation",
      description:
        "We embrace new technologies and creative thinking to solve complex challenges and stay ahead of the curve.",
      icon: "/svgs/innovation-icon.svg",
    },
    {
      id: 2,
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality in every project, exceeding expectations at every turn.",
      icon: "/svgs/excellence-icon.svg",
    },
    {
      id: 3,
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and ethical practices in all our business relationships.",
      icon: "/svgs/integrity-icon.svg",
    },
    {
      id: 4,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, both internally and with our clients, to achieve exceptional results.",
      icon: "/svgs/collaboration-icon.svg",
    },
    {
      id: 5,
      title: "Customer Focus",
      description:
        "Our clients' success is our success. We prioritize understanding and meeting their unique needs.",
      icon: "/svgs/customer-focus-icon.svg",
    },
    {
      id: 6,
      title: "Continuous Learning",
      description:
        "We invest in our team's growth and stay updated with the latest technologies and industry trends.",
      icon: "/svgs/learning-icon.svg",
    },
  ],
};

export const aboutSolutionsData = {
  title: "Our Solutions",
  subtitle: "Comprehensive technology services tailored to your needs",
  solutions: [
    {
      id: 1,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to address your unique business challenges and opportunities.",
      icon: "/svgs/software-dev-icon.svg",
      features: ["Enterprise Applications", "Web Applications", "Mobile Apps", "API Development"],
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      description:
        "Scalable, secure cloud solutions that enable business agility and reduce operational costs.",
      icon: "/svgs/cloud-icon.svg",
      features: ["Cloud Migration", "Infrastructure as Code", "DevOps & CI/CD", "Cloud Security"],
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions that automate processes, extract insights, and drive data-driven decisions.",
      icon: "/svgs/ai-icon.svg",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Recommendation Systems",
      ],
    },
    {
      id: 4,
      title: "Digital Transformation",
      description:
        "End-to-end transformation services that modernize operations and enhance customer experiences.",
      icon: "/svgs/digital-transform-icon.svg",
      features: [
        "Process Automation",
        "Legacy Modernization",
        "Digital Strategy",
        "Change Management",
      ],
    },
    {
      id: 5,
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive, engaging experiences across all digital touchpoints.",
      icon: "/svgs/design-icon.svg",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
      ],
    },
    {
      id: 6,
      title: "Quality Assurance",
      description:
        "Comprehensive testing services ensuring your software is reliable, secure, and performs flawlessly.",
      icon: "/svgs/qa-icon.svg",
      features: ["Automated Testing", "Performance Testing", "Security Testing", "Mobile Testing"],
    },
  ],
};

export const aboutTeamData = {
  title: "Meet Our Team",
  subtitle: "Talented professionals driving innovation",
  description:
    "Our diverse team of experts brings together deep technical knowledge, industry experience, and a passion for solving complex problems.",
  stats: [
    { label: "Team Members", value: "50+" },
    { label: "Years Average Experience", value: "8+" },
    { label: "Certifications", value: "100+" },
    { label: "Countries Represented", value: "10+" },
  ],
};

export const aboutCultureData = {
  title: "Our Culture",
  subtitle: "A workplace where innovation thrives",
  description:
    "We've built a culture that values creativity, collaboration, and continuous growth. Our team members are empowered to innovate and make a real impact.",
  benefits: [
    {
      title: "Flexible Work Environment",
      description: "Remote-friendly with flexible hours to support work-life balance",
      icon: "/svgs/flexible-work-icon.svg",
    },
    {
      title: "Learning & Development",
      description: "Continuous training, certifications, and conference attendance",
      icon: "/svgs/learning-dev-icon.svg",
    },
    {
      title: "Career Growth",
      description: "Clear career paths with opportunities for advancement",
      icon: "/svgs/career-growth-icon.svg",
    },
    {
      title: "Innovation Time",
      description: "Dedicated time for exploring new technologies and ideas",
      icon: "/svgs/innovation-time-icon.svg",
    },
  ],
};

export const aboutTimelineData = {
  title: "Our Journey",
  subtitle: "A decade of growth and innovation",
  milestones: [
    {
      year: "2016",
      title: "Company Founded",
      description: "Started with a vision to transform businesses through technology",
    },
    {
      year: "2018",
      title: "First Major Client",
      description: "Secured partnership with leading financial institution",
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew to 25+ team members and expanded service offerings",
    },
    {
      year: "2022",
      title: "International Presence",
      description: "Opened offices in multiple countries and served 200+ clients",
    },
    {
      year: "2024",
      title: "Innovation Leader",
      description: "Recognized as a leading innovator in AI and cloud solutions",
    },
    {
      year: "2026",
      title: "Continued Growth",
      description: "Serving 450+ clients with 50+ team members across the globe",
    },
  ],
};

// Combined export
export default {
  page: aboutPageData,
  missionVision: aboutMissionVisionData,
  values: aboutValuesData,
  solutions: aboutSolutionsData,
  team: aboutTeamData,
  culture: aboutCultureData,
  timeline: aboutTimelineData,
};
