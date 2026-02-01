"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import NavbarBackground from "@/components/ui/NavbarBackground";
import NavLogo from "@/components/ui/NavLogo";
import NavLink from "@/components/ui/NavLink";
import HamburgerButton from "@/components/ui/HamburgerButton";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Menu from "./Menu";

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


export default function Navbar({ navItems = DEFAULT_NAV_ITEMS, logoProps }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-transparent border-b border-gray-200">
        <NavbarBackground
          gradientClassName="bg-transparent"
          showPattern={true}
        />

        <nav
          className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 "
          aria-label="Global"
        >
          <div className="flex-shrink-0 bg-transparent" onClick={() => router.push("/")}>
            <Image
              src="/Arcin_logo_Name.png"
              alt="ArcinIT Logo"
              width={140}
              height={140}
              className="object-contain bg-transparent"
            />
          </div>

          {/* Desktop nav links */}
          <div className="flex items-end gap-4">
            <div className="hidden lg:flex items-end gap-8">{navItems.map(({ href, label }) => (
              <NavLink
                key={href}
                href={href}
                isActive={isActive(href)}
                activeIndicatorClassName="bg-blue-800"
                activeClassName="text-slate-900 font-bold"
                inactiveClassName="text-slate-600 hover:text-blue-700 font-medium"
              >
                {label}
              </NavLink>
            ))}</div>

            <HamburgerButton
              onClick={() => setMobileOpen((o) => !o)}
              isOpen={mobileOpen}
              ariaLabel={mobileOpen ? "Close menu" : "Open menu"}
            />
          </div>
        </nav>
      </header>

      <Menu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} navItems={navItems} />
    </>
  );
}
