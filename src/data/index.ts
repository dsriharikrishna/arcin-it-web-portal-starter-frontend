// Central data export - Import all data from this file

// Constants (note: constants is in src/constants, not src/data/constants)
export * from "../constants/app-constants";
export { default as appConstants } from "../constants/app-constants";

// Home page data
export { default as homeData } from "./home/home-page";
export * from "./home/home-page";

// Services data (individual service files)
export * from "./services";

// Case studies data
export { default as caseStudiesData } from "./case-studies/case-studies-data";
export * from "./case-studies/case-studies-data";

// About page data
export { default as aboutData } from "./about/about-page";
export * from "./about/about-page";

// Careers page data
export { default as careersData } from "./careers/careers-page";
export * from "./careers/careers-page";

// Support page data
export { default as supportData } from "./support/support-page";
export * from "./support/support-page";

// Contact page data
export { default as contactData } from "./contact/contact-page";
export * from "./contact/contact-page";

// Footer data
export * from "./footer/footer";
