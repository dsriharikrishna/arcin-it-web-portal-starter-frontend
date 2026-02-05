export interface CountryCode {
  code: string;
  name: string;
  flag: string;
  flagImg: string;
  dialCode: string;
}

export const COUNTRY_CODES: CountryCode[] = [
  {
    code: "IN",
    name: "India",
    flag: "🇮🇳",
    flagImg: "https://flagcdn.com/w20/in.png",
    dialCode: "+91",
  },
  {
    code: "MY",
    name: "Malaysia",
    flag: "🇲🇾",
    flagImg: "https://flagcdn.com/w20/my.png",
    dialCode: "+60",
  },
  {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    flagImg: "https://flagcdn.com/w20/us.png",
    dialCode: "+1",
  },
  {
    code: "GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    flagImg: "https://flagcdn.com/w20/gb.png",
    dialCode: "+44",
  },
];

export const getCountryByDialCode = (dialCode: string): CountryCode | undefined => {
  return COUNTRY_CODES.find((country) => country.dialCode === dialCode);
};

export const getCountryByCode = (code: string): CountryCode | undefined => {
  return COUNTRY_CODES.find((country) => country.code === code);
};
