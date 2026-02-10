"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogisticsSolutionsProps {
  title: string;
  solutions: readonly string[];
}

const iconMap: Record<number, React.ReactNode> = {
  0: <Image src="/svgs/services/transportation.svg" alt="Transportation" width={28} height={28} className="invert brightness-0" />,
  1: <Image src="/svgs/services/warehouse.svg" alt="Warehouse" width={28} height={28} className="invert brightness-0" />,
  2: <Image src="/svgs/services/supply-chain.svg" alt="Supply Chain" width={28} height={28} className="invert brightness-0" />,
  3: <Image src="/svgs/services/delivery.svg" alt="Delivery" width={28} height={28} className="invert brightness-0" />,
  4: <Image src="/svgs/services/monitoring.svg" alt="Monitoring" width={28} height={28} className="invert brightness-0" />,
  5: <Image src="/svgs/services/Group.svg" alt="Analytics" width={28} height={28} className="invert brightness-0" />,
  6: <Image src="/svgs/services/track.svg" alt="Track" width={28} height={28} className="invert brightness-0" />,
};

export default function LogisticsSolutions({ title, solutions }: LogisticsSolutionsProps) {
  return (
    <section className="bg-mesh-gradient-color py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => {
            const icon = iconMap[index % 7];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-mesh-gradient-color p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-lg shadow-blue-500/20">
                  {icon}
                </div>
                <span className="text-[15px] font-bold leading-snug text-slate-900">
                  {solution}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-12 max-w-4xl text-center text-[13px] font-medium text-slate-500"
        >
          Each solution is designed to meet specific operational goals, industry needs, and customer
          expectations.
        </motion.p>
      </div>
    </section>
  );
}
