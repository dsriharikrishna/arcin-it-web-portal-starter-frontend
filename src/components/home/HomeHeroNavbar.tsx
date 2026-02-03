"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SmoothLandingBox } from "../animations/SmoothLandingBox";
import { CustomButton } from "../ui";

interface NavItem {
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

const BACKGROUND_IMAGES = [
    "/home/sparkle-global.png",
    "/home/robot-touch.png",
    "/home/hand-global.png",
    "/home/digital-world.png",
    "/home/ai-world.png",

];

const HomeHeroNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Fast switch (approx 0.8s transition) + 1.2s wait = 2s total interval
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden">

            {/* ===== BACKGROUND SLIDESHOW (Left to Right) ===== */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={BACKGROUND_IMAGES[currentImageIndex]}
                            alt={`Hero Background ${currentImageIndex + 1}`}
                            fill
                            className="object-cover"
                            priority
                            quality={90}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ===== BACKGROUND OVERLAYS ===== */}
            <div className="absolute inset-0 z-0 bg-black/20 pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />

            {/* ✅ SUBTLE LEFT WHITE → RIGHT TRANSPARENT (FIXED) */}
            <div className="absolute inset-y-0 left-0 w-[65%] z-0 bg-gradient-to-r from-white via-white/20 to-transparent pointer-events-none" />

            {/* ===== HEADER / NAVBAR ===== */}
            <header className="relative z-20 bg-gradient-to-r from-white via-white/10 to-transparent border-b border-white/20">
                <div className="max-w-full px-8 sm:px-10 lg:px-12 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <Image
                        src="/Arcin_logo_Name.png"
                        alt="ArcinIT Logo"
                        width={140}
                        height={40}
                        className="object-contain"
                    />

                    <div className="flex items-center gap-6">
                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center justify-end gap-6">
                            {DEFAULT_NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="
                  text-white
                  hover:text-white
                  border-b-2 border-transparent
                  hover:border-white
                  transition-colors
                  text-sm
                  font-medium
                "
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Hamburger */}
                        <CustomButton
                            className="text-white bg-blue-400 rounded-lg p-1"
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={26} />
                        </CustomButton>
                    </div>

                </div>
            </header>

            {/* ===== MOBILE MENU POPUP ===== */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 ">
                    <div className="absolute right-4 top-32 w-64 bg-white rounded-xl shadow-xl p-4">

                        <div className="flex items-center justify-between mb-4">
                            <span className="font-semibold text-slate-800">Menu</span>
                            <CustomButton onClick={() => setMenuOpen(false)}>
                                <X size={20} />
                            </CustomButton>
                        </div>

                        <nav className="flex flex-col gap-3">
                            {DEFAULT_NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-slate-700 hover:text-blue-600 text-sm font-medium"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            {/* ===== HERO CONTENT ===== */}
            <div className="relative z-10 flex items-center min-h-[calc(90vh-4rem)]">
                <div className="w-full px-8 sm:px-10 lg:px-12 flex ">

                    <div className="flex-1 flex flex-col gap-6">
                        <SmoothLandingBox variant="fade" delay={0} duration={0.8}>
                            <div className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2">
                                <p className="text-sm text-white font-medium">
                                    Trusted by 200+ Enterprise Clients
                                </p>
                            </div>
                        </SmoothLandingBox>

                        <SmoothLandingBox variant="fade" delay={0} duration={0.8}>
                            <h1 className="text-xl md:text-5xl font-medium text-blue-600 tracking-tight">
                                Building Scalable <span className="font-bold text-blue-800">Digital</span>
                                <br className="hidden sm:block" />
                                <span className="font-bold text-blue-800">Solutions</span> for the Future
                            </h1>
                        </SmoothLandingBox>

                        <SmoothLandingBox variant="slide-up" delay={0.2} distance={30}>
                            <p className="text-lg text-gray-800 font-medium leading-relaxed">
                                Enterprise IT, Cloud Infrastructure, Mobile Applications & Digital Transformation.
                                Partner with experts who deliver results.
                            </p>
                        </SmoothLandingBox>

                        <SmoothLandingBox variant="scale" delay={0.4}>
                            <div className=" flex flex-wrap gap-4">
                                <CustomButton
                                    variant="solid"
                                    size="lg"
                                    rounded="lg"
                                    href="/contact-us"
                                    className="px-8 py-4 text-lg"
                                >
                                    Talk to Expert
                                </CustomButton>

                                <CustomButton
                                    variant="outline"
                                    size="lg"
                                    rounded="lg"
                                    href="/case-studies"
                                    className="px-8 py-4 text-lg"
                                >
                                    View Case Studies
                                </CustomButton>
                            </div>
                        </SmoothLandingBox>

                    </div>
                    <div className="flex-1">
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeHeroNavbar;
