"use client";
import Image from "next/image";
import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import ThemeToggle from "../ui/ThemeToggle";
import NavMenu from "./NavMenu";
import Link from "next/link";

export default function Header({
  locale,
  navMenu,
}: {
  locale: string;
  navMenu: {
    image: string;
    page: number;
    title: string;
    links: { title: string; link: string }[];
    "nav-links": { title: string; link: string }[];
  };
}) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <NavMenu
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        content={navMenu}
        locale={locale}
      />

      <div className="sticky top-0 z-40 bg-background py-2 drop-shadow-lg 2xl:py-3">
        <div className="container mx-auto flex items-center justify-between px-2 xs:px-3">
          <div className="flex items-center gap-1 xs:gap-5">
            <button className="cursor-pointer" onClick={() => setNavOpen(true)}>
              <RiMenu4Fill size={35} />
            </button>
            <Link href="/">
              <Image
                src="/assets/svg/logo.svg"
                alt="logo"
                className="w-20 sm:w-28"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex items-center gap-2 xs:gap-5">
            <button>
              <Image
                src="/assets/svg/download shape.svg"
                alt="download"
                className="scale-80 sm:scale-100"
                width={47}
                height={26}
              />
            </button>
            <span className="block h-6 w-0.5 bg-foreground"></span>
            <ThemeToggle />
            <span className="block h-6 w-0.5 bg-foreground"></span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
