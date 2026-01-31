"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  SmoothLandingBox,
  SmoothLandingContainer,
  SmoothLandingItem,
} from "@/components/animations/SmoothLandingBox";
import { AnimatedCard, PageHero, PageSection, ServiceCard, StatCard } from "@/components/pages";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Headset, Puzzle, Users, Award, UsersRound, ChevronLeft, ChevronRight, Building2, Shield, Landmark, ShoppingCart, Ship, Compass, PenTool, Hammer, TrendingUp, HeartHandshake, Building, Briefcase, GraduationCap, Truck, Calendar, ShoppingBag, Gamepad2, HeartPulse, FileBarChart, Cloud, UtensilsCrossed, Store } from "lucide-react";

const HOME_SERVICES = [
  {
    title: "Banking & Financial Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    imageAlt: "Banking and finance",
    href: "/services",
    icon: Building2,
  },
  {
    title: "Insurance & Reinsurance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    imageAlt: "Insurance",
    href: "/services",
    icon: Shield,
  },
  {
    title: "Government Digital Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    imageAlt: "Government digital",
    href: "/services",
    icon: Landmark,
  },
  {
    title: "Retail & E-Commerce",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    imageAlt: "Retail and e-commerce",
    href: "/services",
    icon: ShoppingCart,
  },
  {
    title: "Logistics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    imageAlt: "Logistics",
    href: "/services",
    icon: Ship,
  },
];

const STATS = [
  { value: "450", label: "Happy Clients", icon: Users },
  { value: "10", label: "Team Members", icon: Puzzle },
  { value: "10", label: "Years in Business", icon: Award },
  { value: "24/7", label: "Customer Support", icon: Headset },
];

const HOW_WE_WORK = [
  {
    title: "Discover",
    description: "We analyze your business challenges, goals, and technical landscape to create a strategic roadmap",
    icon: Compass,
  },
  {
    title: "Design",
    description: "Our architects craft solutions with optimal user experience, scalability, and security in mind",
    icon: PenTool,
  },
  {
    title: "Build",
    description: "Agile development with continuous integration ensures rapid, quality delivery",
    icon: Hammer,
  },
  {
    title: "Scale",
    description: "We deploy and optimize your solutions for maximum performance and growth",
    icon: TrendingUp,
  },
  {
    title: "Support",
    description: "24/7 monitoring, maintenance, and continuous improvement keep you ahead",
    icon: HeartHandshake,
  },
];

const INDUSTRIES = [
  { name: "Real estate", icon: Building },
  { name: "Tours & Travels", icon: Briefcase },
  { name: "Education", icon: GraduationCap },
  { name: "Transport", icon: Truck },
  { name: "Event", icon: Calendar },
  { name: "eCommerce", icon: ShoppingBag },
  { name: "Game", icon: Gamepad2 },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Finance", icon: FileBarChart },
  { name: "Restaurant", icon: UtensilsCrossed },
  { name: "On-Demand", icon: Cloud },
  { name: "Grocery", icon: Store },
];

const FEATURES = [
  { title: "Expert Technicians", desc: "Certified professionals for all vehicle makes" },
  { title: "Transparent Pricing", desc: "No hidden costs, upfront quotes" },
  { title: "Fast Turnaround", desc: "Quick service without compromising quality" },
];

export default function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    skipSnaps: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateScrollButtons();
    emblaApi.on("select", updateScrollButtons);
    emblaApi.on("reInit", updateScrollButtons);
    return () => {
      emblaApi.off("select", updateScrollButtons);
      emblaApi.off("reInit", updateScrollButtons);
    };
  }, [emblaApi, updateScrollButtons]);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SmoothLandingBox variant="fade" delay={0} duration={0.8}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
              Your trusted partner for{" "}
              <span className="text-blue-600">vehicle servicing</span>
            </h1>
          </SmoothLandingBox>
          <SmoothLandingBox variant="slide-up" delay={0.2} distance={30}>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl">
              Fast, reliable, and transparent automotive care. From routine
              maintenance to complex repairs—we&apos;ve got you covered.
            </p>
          </SmoothLandingBox>
          <SmoothLandingBox variant="scale" delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="gradient" size="lg" rounded="lg" href="/contact-us">
                Get Started
              </Button>
              <Button variant="outline" size="lg" rounded="lg" href="/services">
                View Services
              </Button>
            </div>
          </SmoothLandingBox>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 bg-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <StatCard
                  key={stat.label}
                  icon={<Icon className="w-6 h-6" />}
                  value={stat.value}
                  label={stat.label}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Arcin IT team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-slate-800/90 px-4 py-3 text-white backdrop-blur-sm">
                <UsersRound className="h-6 w-6 shrink-0 text-blue-400" />
                <span className="font-semibold">10 + Years in Business</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:pl-4"
            >
              <p className="text-sm font-medium uppercase tracking-wider text-blue-400">About Us</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">Arcin IT</h2>
              <p className="mt-6 text-slate-300 leading-relaxed">
                Arcin IT is an 8-year-old renowned Corporate Branding Services Company from Hyderabad. We are professionals in Web Design, Graphic Design, Ecommerce Websites, APP Design & Development, and Digital Marketing services.
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Arcin IT trust in the influence to &quot;Digital-Art&quot;. We provide Best Website design services and Graphic design services based in Hyderabad, India. We have proficiency in launching the start-ups business, starting right from signifying names for your Brand and also we ensure that your Brand standout in the crowd with the help of our Expert Branding Solutions and Services. We do extremely well in Corporate Branding, creating Professional Websites, Graphic designs and Digital Marketing services using the sophisticated and advanced technology available in web development and proficiency to match the same.
              </p>
              <div className="mt-8">
                <Button variant="gradient" size="lg" rounded="lg" href="/about-us">
                  Know More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
            <div className="lg:max-w-xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-violet-100 text-violet-700 border border-violet-200/80">
                Our Services
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                End-to-End Technology Solutions
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 lg:gap-6 lg:min-w-[420px]">
              <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  aria-label="Previous services"
                  className="h-10 w-10 rounded-full border-2 border-blue-500 bg-white text-blue-600 hover:bg-blue-50 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  aria-label="Next services"
                  className="h-10 w-10 rounded-full border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 -ml-2">
              {HOME_SERVICES.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="flex-[0_0_85%] sm:flex-[0_0_380px] min-w-0 pl-2">
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      imageSrc={service.imageSrc}
                      imageAlt={service.imageAlt}
                      href={service.href}
                      icon={<Icon className="w-5 h-5" />}
                      index={i}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How We Work
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              A structured approach that ensures successful delivery and long-term partnership
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {HOW_WE_WORK.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-4 bg-gradient-to-b from-white to-slate-50/80"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-600">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Project */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-slate-200 text-slate-700">
              Our Project
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Showcase of Our Recognized Work
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">01 Project 01</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="mt-6">
                  <Button variant="gradient" size="lg" rounded="lg" href="/case-studies">
                    Know More
                  </Button>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200/80">
                    Mobile App
                  </span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200/80">
                    E-Commerce
                  </span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/80">
                    SaaS Platform
                  </span>
                </div>
              </div>
              <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[400px] bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center p-8">
                <div className="relative w-48 h-72 sm:w-56 sm:h-80 rounded-2xl bg-slate-800 shadow-2xl overflow-hidden border-4 border-slate-700">
                  <Image
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
                    alt="Project showcase"
                    fill
                    className="object-cover"
                    sizes="224px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Button variant="gradient" size="lg" rounded="lg" href="/case-studies">
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <PageSection
        title="Why Choose Us"
        subtitle="Quality and trust at every step"
        className="bg-slate-50"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((f, i) => (
            <AnimatedCard
              key={f.title}
              title={f.title}
              description={f.desc}
              index={i}
            />
          ))}
        </div>
      </PageSection>

      {/* Industries We Serve */}
      <section className="py-16 sm:py-24 bg-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-violet-100 text-violet-700 border border-violet-200/80">
              We Have Worked Across Multiple Industries
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Industries We Serve
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {INDUSTRIES.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.04,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200/60 transition-all duration-300 bg-gradient-to-r from-white to-slate-50/50"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-slate-800">{industry.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      
    </>
  );
}
