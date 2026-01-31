"use client";

import { Search } from "lucide-react";

export default function SupportHero() {
    return (
        <section className="bg-[#F8FAFF] py-20 sm:py-28 text-center border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">
                    Help Center
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                    How can we help you?
                </h1>
                <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                    Search our knowledge base or browse topics below to find the answers you need.
                </p>

                <div className="relative max-w-2xl mx-auto">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                        placeholder="Search for help articles, topics, or keywords..."
                    />
                </div>
            </div>
        </section>
    );
}
