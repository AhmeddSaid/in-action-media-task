"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];
  const newLocale = currentLocale === "ar" ? "en" : "ar";

  const [showOverlay, setShowOverlay] = useState(false);

  const switchLanguage = () => {
    setShowOverlay(true);

    setTimeout(() => {
      const segments = pathname.split("/");

      if (segments[1] === "en" || segments[1] === "ar") {
        segments[1] = newLocale;
      } else {
        segments.unshift(newLocale);
      }

      router.push(segments.join("/"));

      setTimeout(() => setShowOverlay(false), 600);
    }, 500);
  };

  return (
    <>
      <button
        onClick={switchLanguage}
        className="relative z-50 cursor-pointer font-sarmady text-2xl sm:text-4xl"
      >
        {newLocale.toUpperCase()}
      </button>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="lang-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background dark:bg-black"
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default LanguageSwitcher;
