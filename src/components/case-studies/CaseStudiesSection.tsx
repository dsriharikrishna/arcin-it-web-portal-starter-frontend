import CaseStudyCard from "./CaseStudyCard";

const CASE_STUDIES = [
  {
    title: "Pets Care & Training App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image: "/case-studies/pets-platform.png",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
    path: "/case-studies/pets-care-training-app",
  },
  {
    title: "Claims Automation Platform",
    desc: "We built an AI-first platform combining computer vision, NLP, and machine learning to automate the claims journey.",
    image: "/case-studies/claims-pro.png",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
    path: "/case-studies/claims-automation-platform",
  },
  {
    title: "DriveMech",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    image: "/case-studies/drivemech.png",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
    path: "/case-studies/drivemech",
  },
  {
    title: "Claims Automation Platform",
    desc: "We built an AI-first platform combining computer vision, NLP, and machine learning to automate the claims journey.",
    image: "/case-studies/claims-pro.png",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
    path: "/case-studies/claims-automation-platform",
  },
  {
    title: "DriveMech",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    image: "/case-studies/drivemech.png",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
    path: "/case-studies/drivemech",
  },
  {
    title: "Pets Care & Training App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    image: "/case-studies/pets-platform.png",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
    path: "/case-studies/pets-care-training-app",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard
              key={i}
              title={study.title}
              description={study.desc}
              imageSrc={study.image}
              tags={study.tags}
              index={i}
              path={study.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
