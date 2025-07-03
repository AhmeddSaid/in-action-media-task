"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Stat({
  target,
  value,
  unit,
  label,
  rtl,
}: {
  target: number;
  value: number;
  unit: string;
  label: string;
  rtl?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const [count, setCount] = useState(0);
  const [barWidth, setBarWidth] = useState(0);

  // Animate number count
  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const duration = 1000;
    const stepTime = 10;
    const steps = duration / stepTime;
    const increment = end / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(parseFloat(start.toFixed(1)));
    }, stepTime);

    // Animate bar width
    setBarWidth((value / target) * 100);
  }, [inView, value, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mr-7 flex gap-5 gap-y-2 dark:border-e dark:border-t dark:border-main dark:pe-2 dark:pt-4 max-lg:flex-col"
    >
      <div className="flex w-24 items-center gap-2 lg:flex-col">
        <span className="text-5xl font-bold leading-7 text-dark-green lg:text-7xl xl:-m-4">
          {count}
        </span>
        <span className="text-nowrap text-2xl text-dark-gray">{unit}</span>
      </div>

      <div
        className="relative h-6 w-full overflow-hidden bg-black/5 dark:bg-white/5 lg:h-10"
        style={{ transform: rtl ? "scaleX(1)" : "scaleX(-1)" }}
      >
        <motion.div
          className="absolute -right-0 top-0 h-full transform-none bg-main"
          initial={{ width: 0 }}
          animate={{ width: `${barWidth}%` }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{
            transform: rtl ? "scaleX(1)" : "scaleX(-1)",
          }}
        >
          <div
            className={`stat-clip absolute top-0 h-full w-10 bg-main ${
              rtl ? "-left-[39px]" : "-right-[39px]"
            }`}
            style={{
              transform: rtl ? "scaleX(1)" : "scaleX(-1)",
            }}
          ></div>
        </motion.div>
      </div>

      <div
        className={`absolute bottom-0 max-lg:hidden ${
          rtl ? "-right-7" : "-left-7"
        }`}
        style={{
          transform: rtl ? "scaleX(1)" : "scaleX(-1)",
        }}
      >
        <Image
          alt=""
          width="729"
          height="84"
          className="h-14 w-fit dark:drop-shadow-[2px_2px_2px_#86c960]"
          src="/assets/svg/chart shape.svg"
        />
      </div>

      <div
        className={`absolute -bottom-4 text-3xl text-dark-gray max-lg:-bottom-10 ${
          rtl ? "left-0 dark:left-2" : "right-0 dark:right-2"
        }`}
      >
        {label}
      </div>
    </motion.div>
  );
}
