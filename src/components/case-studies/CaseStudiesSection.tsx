import { useState } from "react";
import Tabs, { Tab } from "../ui/Tabs";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudiesData } from "@/data/case-studies/case-studies-data";

export default function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const tabs: Tab[] = [
    { id: "all", label: "All" },
    { id: "Insurance", label: "Insurance" },
    { id: "Automotive Services", label: "Automotive" },
    { id: "Pet Care & Wellness", label: "Pet Care" },
    { id: "Government", label: "Government" },
    { id: "Healthcare", label: "Healthcare" },
    { id: "Retail", label: "Retail" },
  ];

  const filteredStudies =
    activeCategory === "all"
      ? caseStudiesData
      : caseStudiesData.filter((study) => study.industry === activeCategory);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Tabs
            tabs={tabs}
            defaultTab="all"
            variant="pills"
            onChange={(tabId) => setActiveCategory(tabId)}
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudies.map((study, i) => (
            <CaseStudyCard
              key={study.id}
              title={study.title}
              description={study.description}
              imageSrc={study.image}
              tags={study.tags}
              index={i}
              path={`/case-studies/${study.slug}`}
            />
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-medium text-slate-500">
              No case studies found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
