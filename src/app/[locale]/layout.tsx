import MainLayout from "@/library/components/layout/MainLayout";
import "../globals.css";
import { Metadata } from "next";
import { use } from "react";

const siteName = process.env.SITE_NAME || "SIDF";

import localFont from "next/font/local";

const sarmadyFont = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/Sarmady-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Sarmady-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Sarmady-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Sarmady-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Sarmady-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Sarmady-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sarmady",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default function RootLayout({ children, params }: Props) {
  const { locale } = use(params);
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={sarmadyFont.variable}
    >
      <body>
        <MainLayout locale={locale}>{children}</MainLayout>
      </body>
    </html>
  );
}
