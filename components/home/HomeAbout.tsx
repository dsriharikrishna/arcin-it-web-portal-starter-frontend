"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { UsersRound } from "lucide-react";

export default function HomeAbout() {
    return (
        <section className="py-16 sm:py-24 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden "
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                            alt="Arcin IT team"
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
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
                        <div className="flex flex-col items-start gap-2">
                            <p className="text-sm font-medium uppercase tracking-wider text-gray-900 bg-gray-200 p-2 rounded-lg">About Us</p>
                            <h2 className="text-3xl font-bold text-gray-900">Arcin IT</h2>
                        </div>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Arcin IT is an 8-year-old renowned Corporate Branding Services Company from Hyderabad. We are professionals in Web Design, Graphic Design, Ecommerce Websites, APP Design & Development, and Digital Marketing services.
                        </p>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Arcin IT trust in the influence to &quot;Digital-Art&quot;. We provide Best Website design services and Graphic design services based in Hyderabad, India. We have proficiency in launching the start-ups business, starting right from signifying names for your Brand and also we ensure that your Brand standout in the crowd with the help of our Expert Branding Solutions and Services. We do extremely well in Corporate Branding, creating Professional Websites, Graphic designs and Digital Marketing services using the sophisticated and advanced technology available in web development and proficiency to match the same.
                        </p>
                        <div className="mt-8">
                            <Button variant="primary-blue-gradient" size="lg" rounded="lg" href="/about-us">
                                Know More
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
