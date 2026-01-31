"use client";

import React from "react";
import Link from "next/link";
import {
  SmoothLandingBox,
  SmoothLandingContainer,
  SmoothLandingItem,
} from "@/components/animations/SmoothLandingBox";
import NavLogo from "@/components/ui/NavLogo";

const COMPANY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact" },
  { href: "/support", label: "Support" },
  { href: "/careers", label: "Careers" },
  { href: "/case-studies", label: "Case Studies" },
];

const RECENT_NEWS = [
  { title: "Lorem ipsum dolor sit amet, consectetur.", date: "8 Nov, 2025", image: "/images/news-placeholder.jpg" },
  { title: "Lorem ipsum dolor sit amet, consectetur.", date: "8 Nov, 2025", image: "/images/news-placeholder.jpg" },
];

const SOCIAL_LINKS = [
  { href: "https://facebook.com/arcinit", icon: "facebook", label: "Facebook" },
  { href: "https://twitter.com/arcinit", icon: "twitter", label: "Twitter" },
  { href: "https://instagram.com/arcinit", icon: "instagram", label: "Instagram" },
  { href: "https://youtube.com/arcinit", icon: "youtube", label: "YouTube" },
];

function SocialIcon({ icon }: { icon: string }) {
  const size = 20;
  const paths: Record<string, React.ReactElement> = {
    facebook: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
    twitter: (
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    ),
    instagram: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
    youtube: (
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      {paths[icon] ?? null}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0A1929] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SmoothLandingContainer staggerDelay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            {/* Brand + Description + Social */}
            <SmoothLandingItem variant="slide-up" distance={24}>
              <div className="lg:pr-4">
                <div className="mb-4 w-fit">
                  <div className="p-3 bg-white rounded-lg">
                    <Link href="/">
                      <NavLogo />
                    </Link>
                    <p className="text-[10px] text-blue-600 font-medium mt-1 tracking-wide">
                      INFINI TECH SOFT
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 text-[15px] leading-relaxed mb-5 max-w-sm">
                  Arcin IT is a Brand Development Company, provides Web Design, Web
                  Development, Digital Marketing, APP Development, IT Support & Web
                  Hosting Services.
                </p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.icon}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      <SocialIcon icon={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </SmoothLandingItem>

            {/* Company */}
            <SmoothLandingItem variant="slide-up" distance={24}>
              <div>
                <h3 className="text-blue-400 font-semibold text-sm uppercase mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  {COMPANY_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/90 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SmoothLandingItem>

            {/* Contact Us */}
            <SmoothLandingItem variant="slide-up" distance={24}>
              <div>
                <h3 className="text-blue-400 font-semibold text-sm uppercase mb-4">
                  Contact Us
                </h3>
                <div className="space-y-4 text-sm text-white/90">
                  <div className="flex gap-3 items-start">
                    <svg
                      className="w-5 h-5 shrink-0 text-blue-400 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+919000896555" className="hover:text-white transition-colors">
                      +91-9000896555
                    </a>
                  </div>
                  <div className="flex gap-3 items-start">
                    <svg
                      className="w-5 h-5 shrink-0 text-blue-400 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@arcinit.com" className="hover:text-white transition-colors break-all">
                      info@arcinit.com
                    </a>
                  </div>
                  <div className="flex gap-3 items-start">
                    <svg
                      className="w-5 h-5 shrink-0 text-blue-400 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-slate-300 leading-relaxed">
                      1st Floor, Survey No 34, Lorven Tiara, Kothaguda Junction, above
                      Skoda Showroom, Laxmi Cyber City, Whitefields, Hyderabad,
                      Telangana 500084
                    </span>
                  </div>
                </div>
              </div>
            </SmoothLandingItem>

            {/* Recent News */}
            <SmoothLandingItem variant="slide-up" distance={24}>
              <div>
                <h3 className="text-blue-400 font-semibold text-sm uppercase mb-4">
                  Recent News
                </h3>
                <div className="space-y-4">
                  {RECENT_NEWS.map((item, i) => (
                    <div key={i} className="flex gap-3 group">
                      <div className="w-16 h-16 shrink-0 rounded-lg bg-slate-600/50 overflow-hidden">
                        <div className="w-full h-full bg-slate-500/50 flex items-center justify-center text-slate-400 text-xs">
                          Image
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-white/90 group-hover:text-white transition-colors line-clamp-2">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SmoothLandingItem>
          </div>
        </SmoothLandingContainer>

        {/* Copyright */}
        <SmoothLandingBox variant="fade" delay={0.2} duration={0.5}>
          <div className="border-t border-white/10 pt-6">
            <p className="text-center text-slate-400 text-sm">
              Copyright © 2025 ARCIN IT. All Rights Reserved.
            </p>
          </div>
        </SmoothLandingBox>
      </div>
    </footer>
  );
}
