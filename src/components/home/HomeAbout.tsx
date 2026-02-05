"use client";

import { motion } from "framer-motion";
import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";
import { homeAboutData } from "@/data/home/home-page";

export default function HomeAbout() {
  const { badge, title, image, badgeInfo, description, cta } = homeAboutData;

  return (
    <section className="mx-auto max-w-7xl py-16">
      <div className="flex flex-col items-center justify-center gap-10 p-6 lg:flex-row">
        <motion.div
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mx-auto aspect-square w-full max-w-[500px] flex-1 overflow-hidden rounded-[2.75rem] shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        >
          {/* Image */}
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 520px"
          />

          {/* ✅ SINGLE GRAY OVERLAY (KEY PART) */}
          <div className="pointer-events-none absolute inset-0 bg-black/35" />

          {/* Badge */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-white/20 px-5 py-3 text-white shadow-lg">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
              <Image
                src={badgeInfo.icon}
                alt="User Badge"
                width={23}
                height={23}
                className="h-5 w-5"
              />
            </div>

            <span className="text-sm font-medium whitespace-nowrap sm:text-base">
              {badgeInfo.text}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-2 flex-col items-center gap-6 p-4 sm:p-6 md:items-start lg:p-8"
        >
          <div className="flex flex-col items-center gap-2 pt-6 md:items-start md:pt-0">
            <p className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-900">
              {badge}
            </p>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          {description.map((para, index) => (
            <p key={index} className="leading-relaxed text-gray-600">
              {para}
            </p>
          ))}
          <div className="mt-4">
            <CustomButton variant="primary-blue-gradient" size="lg" rounded="lg" href={cta.href}>
              {cta.text}
            </CustomButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
