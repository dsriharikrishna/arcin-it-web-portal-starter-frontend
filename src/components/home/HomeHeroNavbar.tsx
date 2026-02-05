"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SmoothLandingBox } from "../animations/SmoothLandingBox";
import { CustomButton } from "../ui";
import Menubar from "../Layout/MobileMenubar";
import DesktopContactModal from "../ui/DesktopContactModal";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { homeHeroData } from "@/data/home/home-page";
import { NAVIGATION_ITEMS, CONTACT_INFO } from "@/constants/app-constants";

interface NavItem {
  href: string;
  label: string;
}

const HomeHeroNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isMobile = useMediaQuery("(max-width: 768px)");

  // Phone button - Opens WhatsApp
  const handleWhatsAppClick = useCallback(() => {
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.whatsapp}`;
    window.open(whatsappUrl, "_blank");
  }, []);

  // Menu button - Opens MobileMenubar on mobile, DesktopContactModal on desktop
  const handleMenuClick = useCallback(() => {
    if (isMobile) {
      setMenuOpen((prev) => !prev);
    } else {
      setContactOpen((prev) => !prev);
    }
  }, [isMobile]);

  // Preload all background images for faster transitions
  useEffect(() => {
    homeHeroData.backgroundImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    // Fast switch (approx 0.8s transition) + 1.2s wait = 2s total interval
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % homeHeroData.backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ===== BACKGROUND SLIDESHOW (Left to Right) ===== */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-20%", opacity: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={homeHeroData.backgroundImages[currentImageIndex]}
              alt={`Hero Background ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority={true}
              quality={100}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ===== BACKGROUND OVERLAYS ===== */}
      {/* Stronger left-side white gradient for better logo/content visibility */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[70%] bg-gradient-to-r from-white/95 via-white/20 to-transparent" />

      {/* Subtle dark overlay on right side */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-transparent via-black/5 to-black/30" />

      {/* Bottom gradient for depth */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* ===== HEADER / NAVBAR ===== */}
      <header className="group relative z-20 w-full bg-gradient-to-r from-white/90 via-white/40 to-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/100">
        <div className="flex h-16 max-w-full items-center justify-between px-8 sm:px-10 lg:px-12">
          {/* Logo - Enhanced visibility */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Arcin_logo_Name.png"
              alt="ArcinIT Logo"
              width={140}
              height={40}
              className="object-contain"
              priority
              quality={100}
            />
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop Nav */}
            <nav className="hidden items-center justify-end gap-6 md:flex">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b-2 border-transparent text-sm font-medium text-white transition-all duration-300 group-hover:text-slate-900 hover:scale-105 hover:border-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 shadow-md transition-colors hover:bg-green-600"
                aria-label="Chat on WhatsApp"
              >
                <Phone size={18} className="text-white" />
              </button>

              {/* Menu/Contact Button */}
              <button
                onClick={handleMenuClick}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-md transition-colors hover:bg-blue-700"
                aria-label={
                  isMobile
                    ? menuOpen
                      ? "Close menu"
                      : "Open menu"
                    : contactOpen
                      ? "Close contact"
                      : "Open contact"
                }
              >
                <Menu size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MODALS ===== */}
      <Menubar isOpen={menuOpen} onClose={() => setMenuOpen(false)} navItems={NAVIGATION_ITEMS} />
      <DesktopContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 flex min-h-[calc(90vh-4rem)] items-center">
        <div className="flex w-full px-8 sm:px-10 lg:px-12">
          <div className="flex flex-1 flex-col gap-6">
            <SmoothLandingBox variant="fade" delay={0} duration={0.8}>
              <div
                className={`inline-flex items-center rounded-full ${homeHeroData.badge.bgColor} px-4 py-2`}
              >
                <p className={`text-sm font-medium ${homeHeroData.badge.textColor}`}>
                  {homeHeroData.badge.text}
                </p>
              </div>
            </SmoothLandingBox>

            <SmoothLandingBox variant="fade" delay={0} duration={0.8}>
              <h1 className="text-xl font-medium tracking-tight text-blue-600 md:text-5xl">
                {homeHeroData.title.main}{" "}
                {homeHeroData.title.highlighted.map((word, i) => (
                  <span key={i} className="font-bold text-blue-800">
                    {word}
                  </span>
                ))}
                <br className="hidden sm:block" />
                {homeHeroData.title.suffix}
              </h1>
            </SmoothLandingBox>

            <SmoothLandingBox variant="slide-up" delay={0.2} distance={30}>
              <p className="text-lg leading-relaxed font-medium text-gray-800">
                {homeHeroData.subtitle}
              </p>
            </SmoothLandingBox>

            <SmoothLandingBox variant="scale" delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <CustomButton
                  variant="solid"
                  size="lg"
                  rounded="lg"
                  href={homeHeroData.cta.primary.href}
                  className="px-8 py-4 text-lg"
                >
                  {homeHeroData.cta.primary.text}
                </CustomButton>

                <CustomButton
                  variant="outline"
                  size="lg"
                  rounded="lg"
                  href={homeHeroData.cta.secondary.href}
                  className="px-8 py-4 text-lg"
                >
                  {homeHeroData.cta.secondary.text}
                </CustomButton>
              </div>
            </SmoothLandingBox>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroNavbar;
