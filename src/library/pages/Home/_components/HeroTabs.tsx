"use client";

import TabButton from "@/library/components/ui/TabButton";
import { motion } from "framer-motion";
import React from "react";

export default function HeroTabs({
  content,
  active,
  onClick,
}: {
  content: { title: string }[];
  active: number;
  onClick: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="py-5">
      <motion.ul
        className="flex flex-wrap items-center justify-center gap-16 gap-y-5 px-5"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {content.map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <TabButton active={active === index} onClick={() => onClick(index)}>
              {item.title}
            </TabButton>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
