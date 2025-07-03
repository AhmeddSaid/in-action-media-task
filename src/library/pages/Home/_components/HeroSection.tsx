"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import HeroContent from "./HeroContent";
import HeroTabs from "./HeroTabs";

export default function HeroSection({
  content,
}: {
  content: {
    title: string;
    body: string;
    stats: { value: number; unit: string; body: string }[];
  }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <HeroTabs content={content} active={active} onClick={setActive} />

      <AnimatePresence mode="wait">
        <motion.div key={active}>
          <HeroContent
            title={content[active].title}
            body={content[active].body}
            stats={content[active].stats}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
