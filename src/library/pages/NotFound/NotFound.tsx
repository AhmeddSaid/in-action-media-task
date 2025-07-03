"use client";

import { getTranslations } from "@/library/translations/getTranslations";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function NotFound() {
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "ar";
  const t = getTranslations(locale);
  const { title, subtitle, button } = t["not-found"];

  const router = useRouter();
  const handleBackHome = () => {
    router.replace(`/${locale}`);
  };

  return (
    <div className="mt-40 flex flex-col items-center justify-center bg-background px-6 text-center text-white">
      <motion.h1
        className="flex text-9xl font-bold leading-none text-main"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8 text-2xl text-dark-gray"
      >
        {subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <button
          onClick={handleBackHome}
          className="group inline-flex items-center gap-2 rounded-full bg-main px-6 py-3 text-lg font-medium text-white transition hover:bg-dark-green"
        >
          {locale === "ar" ? (
            <FaArrowRight className="transition-transform group-hover:-translate-x-1" />
          ) : (
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
          )}
          {button}
        </button>
      </motion.div>
    </div>
  );
}
