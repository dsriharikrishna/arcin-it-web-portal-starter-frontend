"use client";

import { motion } from "framer-motion";
import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";

export default function HomeAbout() {
    return (
        <section className="py-16 sm:py-24 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row xs:gap-6 lg:gap-10 items-center justify-center">
                <motion.div
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="
                        relative
                        w-full
                        aspect-square
                        rounded-[2.75rem]
                        overflow-hidden
                        shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                        max-w-[500px]
                        mx-auto
                        flex-1
                    "
                >
                    {/* Image */}
                    <Image
                        src="/home/about-image.png"
                        alt="Arcin IT team"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 520px"
                    />

                    {/* ✅ SINGLE GRAY OVERLAY (KEY PART) */}
                    <div className="absolute inset-0 bg-black/35 pointer-events-none" />

                    {/* Badge */}
                    <div
                        className="
                            absolute
                            bottom-6
                            left-1/2
                            -translate-x-1/2
                            flex
                            items-center
                            gap-3
                            rounded-full
                            bg-white/20
                            px-5
                            py-3
                            text-white
                            border
                            border-white/20
                            shadow-lg
                            "
                    >
                        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-black">
                            <Image src="/svgs/user-badge-icon.svg" alt="User Badge" width={23} height={23} className="h-5 w-5" />
                        </div>

                        <span className="font-medium text-sm sm:text-base whitespace-nowrap">
                            10+ Years in Business
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex-2 flex flex-col items-start gap-6"
                >
                    <div className="flex flex-col items-start gap-2">
                        <p className="text-sm font-semibold text-blue-900 bg-blue-50 px-4 py-1.5 rounded-full inline-block">About Us</p>
                        <h2 className="text-3xl font-bold text-gray-900">Arcin IT</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        Arcin IT is an 8-year-old renowned Corporate Branding Services Company from Hyderabad. We are professionals in Web Design, Graphic Design, Ecommerce Websites, APP Design & Development, and Digital Marketing services.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Arcin IT trust in the influence to &quot;Digital-Art&quot;. We provide Best Website design services and Graphic design services based in Hyderabad, India. We have proficiency in launching the start-ups business, starting right from signifying names for your Brand and also we ensure that your Brand standout in the crowd with the help of our Expert Branding Solutions and Services. We do extremely well in Corporate Branding, creating Professional Websites, Graphic designs and Digital Marketing services using the sophisticated and advanced technology available in web development and proficiency to match the same.
                    </p>
                    <div className="mt-4">
                        <CustomButton variant="primary-blue-gradient" size="lg" rounded="lg" href="/about-us">
                            Know More
                        </CustomButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
