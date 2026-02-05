import { Search } from "lucide-react";
import { supportPageData } from "@/data/support/support-page";

export default function SupportHero() {
  const { title, subtitle, description } = supportPageData.hero;

  return (
    <section className="border-b border-slate-200 bg-[#F8FAFF] py-20 text-center sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <span className="mb-6 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
          {subtitle || "Help Center"}
        </span>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">{description}</p>

        <div className="relative mx-auto max-w-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-2xl border border-slate-200 bg-white py-4 pr-4 pl-11 text-slate-900 placeholder-slate-400 shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Search for help articles, topics, or keywords..."
          />
        </div>
      </div>
    </section>
  );
}
