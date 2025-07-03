"use client";

import { motion } from "framer-motion";
import AboutCard from "./AboutCard";

export default function AboutSection({
  content,
  locale,
}: {
  content: { icon: string; title: string; body: string }[];
  locale: string;
}) {
  const getVariantByIndex = (index: number) => {
    const variants = [
      { x: -50, opacity: 0 }, // left
      { x: 50, opacity: 0 }, // right
      { y: 50, opacity: 0 }, // bottom
      { y: -50, opacity: 0 }, // top
    ];
    return {
      hidden: variants[index % variants.length],
      visible: { x: 0, y: 0, opacity: 1 },
    };
  };

  return (
    <div className="container mx-auto overflow-hidden px-4">
      <div className="max mb-12 flex justify-between gap-10 max-xl:flex-col xl:gap-20">
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={getVariantByIndex(index)}
            transition={{ duration: 0.9, delay: index * 0.5 }}
          >
            <AboutCard
              icon={item.icon}
              title={item.title}
              body={item.body}
              rtl={locale === "ar"}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
