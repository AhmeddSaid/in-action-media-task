"use client";

import IconTitle from "@/library/components/ui/IconTitle";
import ValueCard from "@/library/components/ui/ValueCard";
import { motion } from "framer-motion";

export default function ValuesSection({
  content: { icon, title, data },
  locale,
}: {
  content: {
    icon: string;
    title: string;
    data: { icon: string; title: string; body: string; color: string }[];
  };
  locale: string;
}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto overflow-hidden">
      <motion.div
        className="group relative bg-background p-4 drop-shadow-[-2px_4px_2px_rgb(0,0,0,0.15)] dark:drop-shadow-[-2px_4px_2px_#86c960]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={containerVariants}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <IconTitle icon={icon} title={title} rtl={locale === "ar"} />
        </motion.div>

        <motion.div
          className="flex justify-center gap-5 max-2xl:flex-wrap"
          variants={containerVariants}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full"
            >
              <ValueCard
                icon={item.icon}
                title={item.title}
                body={item.body}
                color={item.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
