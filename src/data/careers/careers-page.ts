// Careers page data

export const careersPageData = {
  hero: {
    title: "Join Our Team",
    subtitle: "Build Your Career with Arcin IT",
    description:
      "We're looking for talented individuals who are passionate about technology and want to make a real impact. Join us in shaping the future of digital innovation.",
    backgroundImage: "/careers.png",
  },
};

export const careersBenefitsData = {
  title: "Benefits & Perks", // Updated to match image
  subtitle: "Why Join Us", // Updated to match image
  description:
    "We take care of our people so they can focus on building amazing things", // Updated to match image
  benefits: [
    {
      id: 1,
      title: "Competitive Salary",
      description:
        "Industry-leading compensation packages with performance bonuses",
      icon: "/svgs/services/dollar-circle.svg",
    },
    {
      id: 2,
      title: "Health & Wellness",
      description:
        "Comprehensive health, dental, and vision coverage for you and family",
      icon: "/svgs/services/heart.svg",
    },
    {
      id: 3,
      title: "Remote Flexibility",
      description:
        "Hybrid work model with flexible remote options",
      icon: "/svgs/services/monitor.svg",
    },
    {
      id: 4,
      title: "Learning & Growth",
      description:
        "Annual learning budget and access to certifications",
      icon: "/svgs/services/graduation-cap-fill.svg",
    },
    {
      id: 5,
      title: "Paid Time Off",
      description:
        "Generous vacation, sick leave, and parental leave policies",
      icon: "/svgs/services/airplane-square.svg",
    },
    {
      id: 6,
      title: "Team Culture",
      description:
        "Regular team events, offsites, and wellness programs",
      icon: "/svgs/services/team-fill.svg",
    },
  ],
};

export const careersPositionsData = {
  title: "Open Positions",
  subtitle: "Find your perfect role",
  description: "We're always looking for talented individuals to join our growing team.",
  positions: [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "5+ years",
      description:
        "We're looking for an experienced full stack developer to build scalable web applications using modern technologies.",
      responsibilities: [
        "Design and develop full-stack web applications",
        "Collaborate with cross-functional teams",
        "Write clean, maintainable code",
        "Mentor junior developers",
        "Participate in code reviews and technical discussions",
      ],
      requirements: [
        "5+ years of experience in full stack development",
        "Strong proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS/Azure/GCP)",
        "Knowledge of database design and optimization",
        "Excellent problem-solving and communication skills",
      ],
      niceToHave: [
        "Experience with Next.js and serverless architecture",
        "Knowledge of DevOps practices and CI/CD",
        "Contributions to open-source projects",
      ],
      slug: "senior-full-stack-developer",
    },
    {
      id: 2,
      title: "Mobile App Developer (React Native)",
      department: "Engineering",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Join our mobile team to build beautiful, performant cross-platform mobile applications for iOS and Android.",
      responsibilities: [
        "Develop and maintain React Native applications",
        "Implement pixel-perfect UIs from designs",
        "Optimize app performance and user experience",
        "Integrate with backend APIs and third-party services",
        "Write unit and integration tests",
      ],
      requirements: [
        "3+ years of React Native development experience",
        "Strong knowledge of JavaScript/TypeScript",
        "Experience with mobile app deployment (App Store & Play Store)",
        "Understanding of mobile UI/UX best practices",
        "Familiarity with native iOS/Android development",
      ],
      niceToHave: [
        "Experience with Flutter or native development",
        "Knowledge of mobile app analytics and crash reporting",
        "Published apps in app stores",
      ],
      slug: "mobile-app-developer-react-native",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Help us build and maintain robust, scalable infrastructure and streamline our deployment processes.",
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage cloud infrastructure (AWS/Azure/GCP)",
        "Automate deployment and monitoring processes",
        "Ensure system security and compliance",
        "Troubleshoot production issues and optimize performance",
      ],
      requirements: [
        "4+ years of DevOps/SRE experience",
        "Strong knowledge of AWS/Azure/GCP services",
        "Experience with Docker, Kubernetes, and container orchestration",
        "Proficiency in Infrastructure as Code (Terraform, CloudFormation)",
        "Scripting skills (Python, Bash, or similar)",
      ],
      niceToHave: [
        "Experience with monitoring tools (Prometheus, Grafana, ELK)",
        "Knowledge of security best practices and compliance",
        "Certifications in cloud platforms",
      ],
      slug: "devops-engineer",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      department: "Design",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Create beautiful, intuitive user experiences for web and mobile applications that delight our users.",
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and high-fidelity designs",
        "Collaborate with developers to ensure design implementation",
        "Maintain and evolve design systems",
      ],
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Strong portfolio demonstrating design skills",
        "Understanding of user-centered design principles",
        "Experience with responsive and mobile-first design",
      ],
      niceToHave: [
        "Experience with design systems and component libraries",
        "Knowledge of HTML/CSS and front-end development",
        "Animation and motion design skills",
      ],
      slug: "ui-ux-designer",
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "AI/ML",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Join our AI/ML team to build intelligent solutions that solve real-world business problems.",
      responsibilities: [
        "Develop machine learning models and algorithms",
        "Analyze large datasets to extract insights",
        "Deploy ML models to production",
        "Collaborate with engineering teams on AI integration",
        "Stay updated with latest AI/ML research and trends",
      ],
      requirements: [
        "4+ years of data science/ML experience",
        "Strong programming skills in Python",
        "Experience with ML frameworks (TensorFlow, PyTorch, scikit-learn)",
        "Knowledge of statistics and data analysis",
        "Experience with big data technologies",
      ],
      niceToHave: [
        "PhD or Master's in Computer Science, Statistics, or related field",
        "Experience with NLP or Computer Vision",
        "Published research papers or contributions to ML community",
      ],
      slug: "data-scientist",
    },
    {
      id: 6,
      title: "QA Automation Engineer",
      department: "Quality Assurance",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Help us ensure the quality of our products through comprehensive automated testing strategies.",
      responsibilities: [
        "Design and implement automated test frameworks",
        "Write and maintain automated test scripts",
        "Perform functional, regression, and performance testing",
        "Collaborate with development teams on quality standards",
        "Identify and report bugs and issues",
      ],
      requirements: [
        "3+ years of QA automation experience",
        "Strong knowledge of testing frameworks (Selenium, Cypress, Jest)",
        "Experience with API testing and test automation",
        "Programming skills in JavaScript/TypeScript or Python",
        "Understanding of CI/CD and test integration",
      ],
      niceToHave: [
        "Experience with mobile app testing",
        "Knowledge of performance testing tools",
        "ISTQB or similar certifications",
      ],
      slug: "qa-automation-engineer",
    },
  ],
};

export const careersApplicationProcessData = {
  title: "Our Hiring Process",
  subtitle: "What to expect when you apply",
  steps: [
    {
      step: 1,
      title: "Application Review",
      description:
        "We review your application and resume to understand your background and experience.",
      duration: "1-2 days",
    },
    {
      step: 2,
      title: "Initial Screening",
      description:
        "A brief phone call to discuss your experience, expectations, and answer any questions.",
      duration: "30 minutes",
    },
    {
      step: 3,
      title: "Technical Assessment",
      description: "A coding challenge or technical task relevant to the role you're applying for.",
      duration: "2-3 hours",
    },
    {
      step: 4,
      title: "Technical Interview",
      description:
        "In-depth discussion about your technical skills, problem-solving approach, and past projects.",
      duration: "1-2 hours",
    },
    {
      step: 5,
      title: "Cultural Fit Interview",
      description: "Meet with team members to discuss values, work style, and team dynamics.",
      duration: "45 minutes",
    },
    {
      step: 6,
      title: "Offer & Onboarding",
      description:
        "If selected, we'll extend an offer and begin the onboarding process to welcome you to the team.",
      duration: "1-2 days",
    },
  ],
};

export const careersTestimonialsData = {
  title: "What Our Team Says",
  subtitle: "Hear from the people who work here",
  testimonials: [
    {
      id: 1,
      quote:
        "Arcin IT has been an incredible place to grow my career. The projects are challenging, the team is supportive, and I'm constantly learning new technologies.",
      author: "Priya Sharma",
      role: "Senior Full Stack Developer",
      image: "/team/priya.jpg",
      years: "3 years at Arcin IT",
    },
    {
      id: 2,
      quote:
        "The work-life balance here is exceptional. I can work remotely, have flexible hours, and still deliver great work. The company truly cares about employee well-being.",
      author: "Rahul Verma",
      role: "DevOps Engineer",
      image: "/team/rahul.jpg",
      years: "2 years at Arcin IT",
    },
    {
      id: 3,
      quote:
        "I love the innovation culture at Arcin IT. We're encouraged to experiment with new technologies and our ideas are valued. It's a great environment for creative problem-solving.",
      author: "Sarah Johnson",
      role: "UI/UX Designer",
      image: "/team/sarah.jpg",
      years: "4 years at Arcin IT",
    },
  ],
};

// Combined export
const CareersPageData = {
  page: careersPageData,
  benefits: careersBenefitsData,
  positions: careersPositionsData,
  process: careersApplicationProcessData,
  testimonials: careersTestimonialsData,
};

export default CareersPageData;
