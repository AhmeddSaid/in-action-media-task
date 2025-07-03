"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";
import TabButton from "../ui/TabButton";

export default function NavMenu({
  locale,
  navOpen,
  setNavOpen,
  content: { image, page, title, links, "nav-links": navLinks },
}: {
  locale: string;
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: {
    image: string;
    page: number;
    title: string;
    links: { title: string; link: string }[];
    "nav-links": { title: string; link: string }[];
  };
}) {
  return (
    <AnimatePresence>
      {navOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={() => setNavOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="menu bg-nav xs:h-fit xs:w-11/12 xs:absolute fixed top-0 h-full w-full overflow-auto p-5 shadow-lg sm:w-9/12 xl:overflow-hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
          >
            <div
              className="group absolute start-5 z-40 flex size-9 cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-main"
              onClick={() => setNavOpen(false)}
            >
              <IoClose className="text-black transition-colors duration-300 group-hover:text-white" />
            </div>

            {/* ===Menu Image=== */}
            <div
              className={`xl:h-130 hex-clip absolute ${locale === "ar" ? "-left-28 xl:-left-32" : "-right-28 xl:-right-32"} -top-16 z-20 hidden h-[450px] w-[520px] overflow-visible xl:-top-20 xl:block xl:w-[600px] 2xl:h-[600px] 2xl:w-[693px]`}
            >
              <div className="absolute h-full w-full bg-white">
                <Image
                  className="h-full w-full object-cover"
                  src={image}
                  alt={title}
                  width={693}
                  height={450}
                />
              </div>
            </div>

            <div className="xs:p-10 relative z-30 flex flex-col-reverse gap-5 px-2 xl:flex-row xl:gap-20 xl:p-20">
              {/* -----Nav Links----- */}
              <div className="xl:w-1/2">
                {navLinks.map((link, index) => (
                  <Link href={link.link} key={index}>
                    <TabButton
                      className={`nav bg-nav drop-shadow-none hover:bg-white hover:text-main dark:drop-shadow-none ${index === 0 ? "bg-white" : ""}`}
                      active={index === 0}
                    >
                      <span
                        className={`group relative mb-1 flex w-fit cursor-pointer items-center gap-4 text-3xl font-medium text-gray-600 transition-colors duration-500 hover:text-main xl:text-4xl 2xl:mb-2 ${index === 0 ? "text-main dark:text-main" : ""}`}
                      >
                        <span>
                          {index < 9 ? "0" : ""}
                          {index + 1}
                        </span>
                        <span>{link.title}</span>
                      </span>
                    </TabButton>
                  </Link>
                ))}
              </div>
              {/* -----Page Links----- */}
              <div className="xs:mt-0 mt-10 flex flex-col flex-wrap gap-1 xl:w-1/2 xl:flex-nowrap xl:gap-5">
                <div className="flex flex-col">
                  <div className="xs:text-8xl xs:-mb-8 relative z-10 -mb-2 block text-4xl font-bold text-white xl:text-9xl">
                    {page < 9 ? "0" : ""}
                    {page}
                    <span className="xs:text-8xl absolute left-1 top-0 -z-10 w-full text-4xl font-bold text-dark-green xl:text-9xl">
                      {page < 9 ? "0" : ""}
                      {page}
                    </span>
                  </div>
                  <div className="xs:text-6xl relative z-10 mb-1 w-[15ch] text-3xl font-bold text-white xl:mb-5 xl:text-7xl 2xl:mb-10 2xl:w-[25ch]">
                    {title}
                    <span className="xs:text-6xl absolute left-1 top-0 -z-10 w-full text-3xl font-bold text-dark-green xl:text-7xl">
                      {title}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 xl:gap-2">
                  {links.map((link, index) => (
                    <Link
                      href={link.link}
                      key={index}
                      className="group relative block text-nowrap text-3xl text-gray-600 transition-colors duration-500 hover:text-white"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
