import React from "react";
import { COUNTRY_CODES, getCountryByDialCode } from "@/utils/countryCodes";
import Image from "next/image";

interface PhoneInputProps {
  label: string;
  value: string;
  countryCode: string;
  onPhoneChange: (value: string) => void;
  onCountryCodeChange: (value: string) => void;
  required?: boolean;
  className?: string;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ label, value, countryCode, onPhoneChange, onCountryCodeChange, required, className }, ref) => {
    const selectedCountry = getCountryByDialCode(countryCode);

    return (
      <div className={`relative ${className || ""}`}>
        <div className="flex gap-2">
          {/* Country Code Select with Flag */}
          <div className="relative w-32">
            <select
              value={countryCode}
              onChange={(e) => onCountryCodeChange(e.target.value)}
              className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-mesh-gradient-color py-3 pr-8 pl-10 text-sm text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              {COUNTRY_CODES.map((country) => (
                <option key={country.code} value={country.dialCode}>
                  {country.code} {country.dialCode}
                </option>
              ))}
            </select>
            {/* Flag Image Display */}
            {selectedCountry && (
              <div className="pointer-events-none absolute top-1/2 left-3 flex -translate-y-1/2 items-center">
                <Image
                  src={selectedCountry.flagImg}
                  alt={selectedCountry.name}
                  width={20}
                  height={15}
                  className="rounded-sm object-cover"
                />
              </div>
            )}
            {/* Dropdown Arrow */}
            <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
              <svg
                className="h-4 w-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Phone Number Input with Floating Label */}
          <div className="relative flex-1">
            <input
              ref={ref}
              type="tel"
              value={value}
              onChange={(e) => onPhoneChange(e.target.value)}
              placeholder=" "
              required={required}
              className="peer block w-full rounded-xl border border-slate-200 bg-mesh-gradient-color px-4 pt-5 pb-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
            <label className="absolute top-2 left-4 z-10 origin-[0] -translate-y-0 text-xs text-slate-500 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500">
              {label}
              {required && <span className="ml-0.5 text-red-500">*</span>}
            </label>
          </div>
        </div>
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export default PhoneInput;
