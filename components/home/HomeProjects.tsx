"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";

const PROJECTS = [
  {
    id: "01",
    title: "Project 01",
    image: "/Project-Section.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
  },
  {
    id: "02",
    title: "Project 02",
    image: "/Project-Section.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
  },
  {
    id: "03",
    title: "Project 03",
    image: "/Project-Section.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    tags: ["Mobile App", "E-Commerce", "SaaS Platform"],
  },
];

export default function HomeProjects() {
  return (
    <section className="bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-slate-200 text-slate-700">
            Our Project
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Showcase of Our <span className="text-blue-600">Recognized Work</span>
          </h2>
        </div>

        {/* STACK */}
        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="sticky top-24 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 min-h-[520px]">
                
                {/* CONTENT */}
                <div className="p-10 flex flex-col gap-5">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.id} · {project.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <Button
                      variant="primary-blue-gradient"
                      size="lg"
                      rounded="lg"
                      href="/case-studies"
                    >
                      Know More
                    </Button>
                  </div>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-100 text-amber-800">
                      Mobile App
                    </span>
                    <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-green-100 text-green-800">
                      E-Commerce
                    </span>
                    <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700">
                      SaaS Platform
                    </span>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-24 text-center">
          <Button
            variant="primary-blue-gradient"
            size="lg"
            rounded="lg"
            href="/case-studies"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
