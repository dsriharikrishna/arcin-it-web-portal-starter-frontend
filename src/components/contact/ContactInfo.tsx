"use client";

import { MapPin } from "lucide-react";
import { FOOTER_DATA } from "@/data/footer/footer";

export default function ContactInfo() {
  // Extract contact data from footer
  const offices = FOOTER_DATA.contact.items.filter((item) => item.type === "address");
  const email = FOOTER_DATA.contact.items.find((item) => item.type === "email");
  const phone = FOOTER_DATA.contact.items.find((item) => item.type === "phone");

  return (
    <div className="flex h-full w-full flex-col gap-8 rounded-2xl border border-slate-200/50 bg-gradient-to-b from-[#EEF2FF] to-[#E0E7FF] p-4 shadow-sm">
      {/* Our Offices Section */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-bold text-slate-900">Our Offices</h3>

        <div className="flex flex-col gap-3">
          {offices.map((office, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-xl border border-white/60 bg-white/80 p-3 shadow-sm backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                <MapPin className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-slate-900">{office.label}</span>
                  {i === 0 && (
                    <span className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
                      Head Office
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed font-semibold text-slate-600">
                  {office.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-bold text-slate-900">Contact Us</h3>

        <div className="grid grid-cols-2 gap-2">
          {/* Email */}
          {email && (
            <div className="flex flex-col gap-2 rounded-xl border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                Email
              </span>
              <a
                href={email.href}
                className="text-sm font-bold break-all text-slate-900 transition hover:text-blue-600"
              >
                {email.label}
              </a>
            </div>
          )}

          {/* Phone */}
          {phone && (
            <div className="flex flex-col gap-2 rounded-xl border border-white/60 bg-white/80 p-2 shadow-sm backdrop-blur-sm">
              <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                Phone
              </span>
              <a
                href={phone.href}
                className="text-sm font-bold text-slate-900 transition hover:text-blue-600"
              >
                {phone.label}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
