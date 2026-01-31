"use client";

import Button from "@/components/ui/Button";

export default function ContactForm() {
    return (
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-500">
                    Please fill out the form below if you have a plan or project in mind that you'd like to share with us.
                </p>
            </div>

            <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder-slate-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder-slate-400"
                        />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder-slate-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Website <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="url"
                            className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder-slate-400"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message
                    </label>
                    <textarea
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder-slate-400 resize-none"
                    ></textarea>
                </div>

                <Button
                    type="submit"
                    variant="gradient"
                    className="w-full justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-500/30"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}
