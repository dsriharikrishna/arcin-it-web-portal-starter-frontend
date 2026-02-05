import { COMPANY_INFO } from "@/constants/app-constants";

export default function ContactMap() {
  const { officeName, country, embedMapUrl } = COMPANY_INFO.location;

  return (
    <div className="relative h-[280px] overflow-hidden rounded-3xl bg-blue-50 sm:h-[380px]">
      <div className="absolute top-4 left-4 z-10 rounded-xl bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
        <p className="text-sm font-semibold text-slate-900">{officeName}</p>
        <p className="text-xs text-slate-500">{country} Office Location</p>
      </div>

      <iframe
        title={`${officeName} Location`}
        src={embedMapUrl}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
