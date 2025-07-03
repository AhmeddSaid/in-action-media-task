"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurGoals({
  content: { title, body, goals },
  locale,
}: {
  content: {
    title: string;
    body: string;
    goals: { icon: string; body: string }[];
  };
  locale: string;
}) {
  return (
    <div className="py-10 md:py-20" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="container m-auto">
        <div
          className={`our-goals-section relative z-10 py-10 ${
            locale === "ar" ? "rtl" : ""
          }`}
        >
          <div className="-z-2 left-0 top-0 h-full w-full">
            <div className="absolute left-0 top-0 -z-10 h-full w-full">
              <Image
                src="/assets/images/solar system.jpg"
                alt="solar system"
                className="h-full w-full object-cover object-[50%_61%]"
                fill
              />
              <div className="our-goals-bg absolute left-0 top-0 h-full w-full"></div>
            </div>
            <div className="text-white xs:px-5">
              <div className="mx-auto w-fit px-5 xs:px-0">
                <h2 className="text-4xl font-bold sm:text-6xl">{title}</h2>
                <p className="mb-10 w-4/5 text-lg sm:w-full sm:text-[28px]">
                  {body}
                </p>
              </div>

              <motion.div
                className="flex flex-wrap justify-center gap-2 sm:gap-5 sm:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {goals.map((goal, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="goal relative flex h-40 w-36 flex-col items-center justify-center bg-black/20 px-1 pt-2 xs:h-44 xs:w-40 sm:h-44 sm:w-44 sm:pt-5 2xl:h-56 2xl:w-56"
                  >
                    <Image
                      src={goal.icon}
                      alt="goal"
                      width={56}
                      height={56}
                      className="mx-auto mb-5 h-10 w-10 xs:h-14 xs:w-14"
                    />
                    <p className="text-center text-xs xs:text-base sm:text-[18px] 2xl:text-2xl">
                      {goal.body}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
