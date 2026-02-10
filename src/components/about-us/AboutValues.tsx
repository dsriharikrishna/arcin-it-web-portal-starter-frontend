"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Hammer, TrendingUp } from "lucide-react";

const VALUES = [
  {
    title: "Excellence",
    description:
      "We pursue the highest standards in everything we do, continuously improving our skills and processes.",
    icon: Compass,
  },
  {
    title: "Partnership",
    description:
      "We build lasting relationships with our clients, working as an extension of their teams.",
    icon: PenTool,
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and creative solutions to solve complex challenges.",
    icon: Hammer,
  },
  {
    title: "Impact",
    description: "We measure success by the tangible value we create for our clients and society.",
    icon: TrendingUp,
  },
];

export default function AboutValues() {
  return (
    <section className="relative overflow-hidden bg-mesh-gradient-color py-16 sm:py-24">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0">
        {/* Main Mesh Gradients */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-100/30 blur-[120px]" />

        {/* Network / Bubble Dots */}
        {[
          { t: "15%", l: "10%", s: 12 }, { t: "25%", l: "85%", s: 8 },
          { t: "45%", l: "15%", s: 10 }, { t: "65%", l: "80%", s: 14 },
          { t: "85%", l: "25%", s: 9 }, { t: "10%", l: "60%", s: 7 },
          { t: "40%", l: "50%", s: 11 }, { t: "75%", l: "45%", s: 8 },
          { t: "20%", l: "35%", s: 6 }, { t: "80%", l: "85%", s: 10 },
          { t: "90%", l: "5%", s: 12 }, { t: "5%", l: "95%", s: 8 },
          { t: "30%", l: "70%", s: 15 }, { t: "55%", l: "95%", s: 6 },
          { t: "50%", l: "5%", s: 10 }, { t: "95%", l: "50%", s: 14 }
        ].map((dot, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
              y: [0, -15, 0]
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute rounded-full bg-blue-400/40"
            style={{
              width: dot.s + "px",
              height: dot.s + "px",
              top: dot.t,
              left: dot.l,
              filter: "blur(0.5px)",
              boxShadow: "0 0 12px rgba(96, 165, 250, 0.4)",
            }}
          />
        ))}

        {/* SVG Connection Lines */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='1.5' fill='%233b82f6' opacity='0.5'/%3E%3Cpath d='M5 5 L95 95' stroke='%233b82f6' stroke-width='0.2' fill='none'/%3E%3Ccircle cx='95' cy='95' r='1' fill='%2360a5fa' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px"
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
            Our Values
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Drives Us
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex h-full flex-col items-start rounded-3xl border border-blue-100/50 bg-mesh-gradient-color p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-lg font-bold tracking-tight text-blue-600 transition-colors uppercase text-[15px]">{value.title}</h3>
                <p className="text-sm font-bold leading-relaxed text-slate-800/80">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
