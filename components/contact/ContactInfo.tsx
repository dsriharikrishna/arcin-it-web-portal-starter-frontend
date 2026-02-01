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
    <div className="bg-gradient-to from-[#FFFFFF] to-[#D9E5FF] p-4 rounded-xl w-full border border-slate-100 shadow-sm flex flex-col gap-4 h-full">
      <div>
        <h3 className="text-lg font-bold text-slate-900">
          We’re here to help
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Reach us anytime through the channels below.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {CONTACT_DETAILS.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex gap-4 p-4 rounded-xl bg-[#F0F5FF] border border-[#E1EAFE] hover:border-blue-300 transition"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm">
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-slate-500">{item.label}</span>
                <span className="text-sm font-semibold text-slate-900">
                  {item.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
