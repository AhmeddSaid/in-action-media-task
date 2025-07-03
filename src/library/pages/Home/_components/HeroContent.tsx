"use client";

import TabButton from "@/library/components/ui/TabButton";
import { motion } from "framer-motion";

export default function HeroContent({
  title,
  body,
  stats,
}: {
  title: string;
  body: string;
  stats: { value: number; unit: string; body: string }[];
}) {
  return (
    <motion.div
      className="container mx-auto overflow-hidden px-4 py-12"
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, amount: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
        hidden: {},
      }}
    >
      <motion.h1
        className="mb-5 w-fit text-5xl font-bold text-main lg:text-7xl"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>

      <div className="flex gap-10 max-2xl:flex-col 2xl:gap-20">
        <motion.p
          className="text-justify text-2xl text-dark-gray lg:text-3xl 2xl:w-3/5"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {body}
        </motion.p>

        <motion.div
          className="mx-auto ms-4 w-full sm:ms-10 2xl:w-2/5"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4,
              },
            },
          }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className={`relative mb-10 flex items-end gap-8 border-b border-main ${
                index === 1 ? "2xl:ms-32" : ""
              }`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <TabButton active>
                <div className="-mx-4 flex items-end gap-1 py-1 text-white">
                  <p className="text-4xl font-bold md:text-6xl">{item.value}</p>
                  <p className="mb-1 text-nowrap text-base md:mb-3">
                    {item.unit}
                  </p>
                </div>
              </TabButton>
              <p className="text-lg sm:text-3xl">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
