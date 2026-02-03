"use client";

import { motion } from "framer-motion";
import { PageHero, PageSection } from "./index";

interface SimplePageProps {
  title: string;
  subtitle?: string;
  sections: Array<{
    title?: string;
    content: React.ReactNode;
    className?: string;
  }>;
}

export default function SimplePage({ title, subtitle, sections }: SimplePageProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} />
      {sections.map((section, i) => (
        <PageSection
          key={i}
          title={section.title}
          delay={i * 0.1}
          className={section.className}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {section.content}
          </motion.div>
        </PageSection>
      ))}
    </>
  );
}
