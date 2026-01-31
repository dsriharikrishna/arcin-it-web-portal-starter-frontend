"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import NavbarBackground from "@/components/ui/NavbarBackground";
import NavLogo from "@/components/ui/NavLogo";
import NavLink from "@/components/ui/NavLink";
import HamburgerButton from "@/components/ui/HamburgerButton";

export interface NavItem {
  href: string;
  label: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/support", label: "Support" },
  { href: "/careers", label: "Careers" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact-us", label: "Contact Us" },
];

interface NavbarProps {
  /** Custom nav items (default: Home, About Us, Services, etc.) */
  navItems?: NavItem[];
  /** Custom logo props */
  logoProps?: React.ComponentProps<typeof NavLogo>;
}

import MobileMenu from "@/components/Layout/MobileMenu";
import Image from "next/image";

export default function Navbar({ navItems = DEFAULT_NAV_ITEMS, logoProps }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-transparent">
        <NavbarBackground />

        <nav
          className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex-shrink-0">
            <Image
              src="/Arcin_logo_Name.png"
              alt="ArcinIT Logo"
              width={100}
              height={100}
              className="object-contain bg-transparent "
            />          
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(({ href, label }) => (
              <NavLink
                key={href}
                href={href}
                isActive={isActive(href)}
                activeIndicatorClassName="bg-white"
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Hamburger menu button */}
          <div className="flex-shrink-0">
            <HamburgerButton
              onClick={() => setMobileOpen((o) => !o)}
              isOpen={mobileOpen}
              ariaLabel={mobileOpen ? "Close menu" : "Open menu"}
            />
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
