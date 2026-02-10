"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
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

const HomeHeroNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const pathname = usePathname();

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleWhatsAppClick = useCallback(() => {
    const message = "Hi Arcin IT, I am interested in your mobile app development services!";
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }, []);

  const handleMenuClick = useCallback(() => {
    if (isMobile) {
      setMenuOpen((prev) => !prev);
    } else {
      setContactOpen((prev) => !prev);
    }
  }, [isMobile]);

  useEffect(() => {
    homeHeroData.backgroundImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % homeHeroData.backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ===== BACKGROUND SLIDESHOW ===== */}
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

      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[100%] bg-gradient-to-r from-white/95 via-white/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-transparent via-black/5 to-black/30 md:from-white/50" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* ===== HEADER / NAVBAR ===== */}
      <header className="group relative z-20 w-full bg-gradient-to-r from-white/90 via-white/40 to-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/100">
        <div className="flex h-16 max-w-full items-center justify-between px-8 sm:px-10 lg:px-12">
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
            <nav className="hidden items-center justify-end gap-6 md:flex">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "border-b-2 text-sm font-medium transition-all duration-300 hover:scale-105",
                      isActive
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-white group-hover:text-slate-900 hover:border-blue-600"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={handleWhatsAppClick}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 shadow-md transition-colors hover:bg-green-600"
              >
                <Phone size={18} className="text-white" />
              </button>

              <button
                onClick={handleMenuClick}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-md transition-colors hover:bg-blue-700"
              >
                <Menu size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <Menubar isOpen={menuOpen} onClose={() => setMenuOpen(false)} navItems={NAVIGATION_ITEMS} />
      <DesktopContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center pt-8 md:pt-0">
        <div className="flex w-full px-6 sm:px-10 lg:px-12">
          <div className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
            <SmoothLandingBox variant="fade" delay={0} duration={0.8}>
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-400 to-blue-600 px-5 py-1.5 shadow-lg shadow-blue-500/20 md:px-6 md:py-2">
                <p className="text-[12px] font-semibold text-white md:text-sm">
                  {homeHeroData.badge.text}
                </p>
              </div>
            </SmoothLandingBox>

            <div className="relative w-full">
              <SmoothLandingBox variant="fade" delay={0.1} duration={0.8}>
                <h1 className="text-[32px] font-normal tracking-normal text-blue-700 leading-[1.2] sm:text-5xl md:text-[50px] md:leading-[1.1]">
                  Building <br className="md:hidden" />
                  Scalable <span className="font-extrabold text-blue-900">Digital</span>
                  <br />
                  <span className="font-extrabold text-blue-900 text-[40px] md:text-[60px]">Solutions</span> for the <br className="md:hidden" />
                  Future
                </h1>
              </SmoothLandingBox>

            </div>

            <SmoothLandingBox variant="slide-up" delay={0.2} distance={30}>
              <p className="max-w-2xl px-2 text-sm font-medium leading-relaxed text-gray-800 md:px-0 md:text-lg lg:text-xl">
                {homeHeroData.subtitle}
              </p>
            </SmoothLandingBox>

            <SmoothLandingBox variant="scale" delay={0.4} className="w-full">
              <div className="flex w-full items-center justify-center gap-3 pt-2 md:justify-start md:gap-4">
                <CustomButton
                  variant="solid"
                  size="md"
                  rounded="lg"
                  href={homeHeroData.cta.primary.href}
                  className="flex-1 max-w-[160px] bg-gradient-to-r from-blue-400 to-blue-700 px-4 py-3 text-center text-[13px] font-semibold text-white shadow-xl transition-all hover:scale-105 md:max-w-none md:min-w-[180px] md:px-8 md:py-4 md:text-lg"
                >
                  {homeHeroData.cta.primary.text}
                </CustomButton>

                <CustomButton
                  variant="outline"
                  size="md"
                  rounded="lg"
                  href={homeHeroData.cta.secondary.href}
                  className="flex-1 max-w-[160px] border border-blue-400 bg-white px-4 py-3 text-center text-[13px] font-semibold text-blue-600 shadow-sm md:max-w-none md:min-w-[180px] md:px-8 md:py-4 md:text-lg"
                >
                  {homeHeroData.cta.secondary.text}
                </CustomButton>
              </div>
            </SmoothLandingBox>
          </div>
          <div className="hidden md:flex md:flex-1" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroNavbar;
