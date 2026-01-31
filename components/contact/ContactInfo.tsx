"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const CONTACT_DETAILS = [
    {
        icon: Mail,
        label: "Email",
        value: "info@arcinit.com",
        href: "mailto:info@arcinit.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+31 93 123 4567", // Example number from mockup
        href: "tel:+31931234567",
    },
    {
        icon: MapPin,
        label: "Address",
        value: "Hyderabad, India",
        href: "#",
    },
    {
        icon: MapPin,
        label: "Address",
        value: "Kuala Lumpur, Malaysia",
        href: "#",
    },
];

export default function ContactInfo() {
    return (
        <div className="space-y-6">
            <div className="mb-2">
                <h3 className="text-xl font-bold text-slate-900">
                    Hi! We are always here to help you.
                </h3>
            </div>

            <div className="space-y-4">
                {CONTACT_DETAILS.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-5 rounded-2xl bg-[#F0F5FF] border border-[#E1EAFE] hover:border-blue-200 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                <Icon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium mb-1">
                                    {item.label}
                                </p>
                                {item.href && item.href !== "#" ? (
                                    <a
                                        href={item.href}
                                        className="text-slate-900 font-bold hover:text-blue-600 transition-colors"
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="text-slate-900 font-bold">{item.value}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
