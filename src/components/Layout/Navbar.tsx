"use client";

import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import NavLink from "@/components/ui/NavLink";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Phone, Menu as MenuIcon } from "lucide-react";
import MobileMenubar from "./MobileMenubar";
import DesktopContactModal from "../ui/DesktopContactModal";
import { NAVIGATION_ITEMS, CONTACT_INFO, COMPANY_INFO } from "@/constants/app-constants";

export interface NavItem {
  href: string;
  label: string;
}

interface NavbarProps {
  /** Custom nav items (default: Home, About Us, Services, etc.) */
  navItems?: NavItem[];
  /** Navbar variant style */
  variant?: "default" | "transparent";
}

export default function Navbar({ navItems = NAVIGATION_ITEMS, variant = "default" }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktopContactOpen, setIsDesktopContactOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isTransparent = variant === "transparent";

  // Phone button - Opens WhatsApp
  const handleWhatsAppClick = useCallback(() => {
    const message = "Hi Arcin IT, I am interested in your mobile app development services!";
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }, []);

  // Menu button - Opens MobileMenubar on mobile, DesktopContactModal on desktop
  const handleMenuClick = useCallback(() => {
    if (isMobile) {
      setMobileOpen((prev) => !prev);
    } else {
      setIsDesktopContactOpen((prev) => !prev);
    }
  }, [isMobile]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isTransparent
          ? "border-none bg-transparent"
          : "border-b border-gray-200 bg-white/80 backdrop-blur-md"
          }`}
      >
        <nav
          className="relative mx-auto flex w-full items-center justify-between px-4 py-2 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex-shrink-0 cursor-pointer" onClick={() => router.push("/")}>
            <Image
              src="/Arcin_logo_Name.png"
              alt={`${COMPANY_INFO.name} Logo`}
              width={140}
              height={140}
              className="object-contain"
            />
          </div>

          {/* Desktop nav links */}
          <div className="flex items-end gap-4">
            <div className="hidden items-end gap-8 lg:flex">
              {navItems.map(({ href, label }) => (
                <NavLink
                  key={href}
                  href={href}
                  isActive={href === "/" ? pathname === href : pathname.startsWith(href)}
                  activeIndicatorClassName={isTransparent ? "bg-white" : "bg-blue-800"}
                  activeClassName={
                    isTransparent ? "text-white font-bold" : "text-slate-900 font-bold"
                  }
                  inactiveClassName={
                    isTransparent
                      ? "text-slate-200 hover:text-white font-medium"
                      : "text-slate-600 hover:text-blue-700 font-medium"
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-green-500 shadow-md transition-colors hover:bg-green-600"
                aria-label="Chat on WhatsApp"
              >
                <Phone size={18} className="text-white" />
              </button>

              {/* Menu/Contact Button */}
              <button
                onClick={handleMenuClick}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-blue-600 shadow-md transition-colors hover:bg-blue-700"
                aria-label={
                  isMobile
                    ? mobileOpen
                      ? "Close menu"
                      : "Open menu"
                    : isDesktopContactOpen
                      ? "Close contact"
                      : "Open contact"
                }
              >
                <MenuIcon size={18} className="text-white" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {isMobile && (
        <MobileMenubar
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          navItems={navItems}
        />
      )}
      {!isMobile && (
        <DesktopContactModal
          isOpen={isDesktopContactOpen}
          onClose={() => setIsDesktopContactOpen(false)}
        />
      )}
    </>
  );
}
