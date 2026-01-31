"use client";

import { PageHero } from "@/components/pages";
import CaseStudyCard from "@/components/pages/CaseStudyCard";

const CASE_STUDIES = [
  {
    title: "Pets Care & Training App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    image: "https://images.unsplash.com/photo-1541569863344-9c59530462aa?w=800&q=80", // Placeholder for app UI
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
    path: "/case-studies/pets-care-training-app",
  },
  {
    title: "Claims Automation Platform",
    desc: "We built an AI-first platform that combines computer vision, natural language processing, and machine learning to automate the entire claims journey from document intake to payment processing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
    path: "/case-studies/claims-automation-platform",
  },
  {
    title: "DriveMech",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    image: "https://images.unsplash.com/photo-1555421689-4917415114e3?w=800&q=80",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
    path: "/case-studies/drivemech",
  },
  {
    title: "Claims Automation Platform",
    desc: "We built an AI-first platform that combines computer vision, natural language processing, and machine learning to automate the entire claims journey from document intake to payment processing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
    path: "/case-studies/claims-automation-platform",
  },
  {
    title: "DriveMech",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    image: "https://images.unsplash.com/photo-1555421689-4917415114e3?w=800&q=80",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
    path: "/case-studies/drivemech",
  },
  {
    title: "Pets Care & Training App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    image: "https://images.unsplash.com/photo-1541569863344-9c59530462aa?w=800&q=80",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
    path: "/case-studies/pets-care-training-app",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <PageHero
          title="Case Studies"
          subtitle="Real stories of how we've helped customers and businesses achieve better vehicle reliability."
          className="bg-black border-b border-white/10"
          titleClassName="text-white"
          subtitleClassName="text-slate-400"
        />
        <section className="py-20 sm:py-24 bg-black">
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
      </div>
    </>
  );
}
