"use client";

import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";
import { homeProjectsData } from "@/data/home/home-page";

export default function HomeProjects() {
  return (
    <section className="bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700">
            {homeProjectsData.badge}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {homeProjectsData.title.main}{" "}
            <span className="text-blue-600">{homeProjectsData.title.highlighted}</span>
          </h2>
        </div>

        {/* STACK */}
        <div className="space-y-2">
          {homeProjectsData.projects.map((project, index) => (
            <div key={project.slug} className="sticky" style={{ top: `${96 + index * 52}px` }}>
              {/* VISIBLE HEADER TAB */}
              <div className="rounded-t-2xl bg-white px-8 py-4 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900">
                  {String(index + 1).padStart(2, "0")} {project.title}
                </h3>
              </div>

              {/* MAIN CARD CONTENT */}
              <div className="overflow-hidden rounded-b-2xl bg-white shadow-xl">
                <div className="grid min-h-[520px] lg:grid-cols-2">
                  {/* CONTENT */}
                  <div className="flex flex-col gap-5 p-10">
                    <p className="leading-relaxed text-slate-600">{project.description}</p>

                    <p className="leading-relaxed text-slate-600">{project.description}</p>

                    <div>
                      <CustomButton
                        variant="primary-blue-gradient"
                        size="lg"
                        rounded="lg"
                        href="/case-studies"
                      >
                        Know More
                      </CustomButton>
                    </div>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="rounded-lg bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-800"
                        >
                          {tag}
                        </span>
                      ))}
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
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-24 text-center">
          <CustomButton variant="primary-blue-gradient" size="lg" rounded="lg" href="/case-studies">
            View All Projects
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
