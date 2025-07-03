import { getTranslations } from "@/library/translations/getTranslations";
import { ReactNode } from "react";
import PageTransition from "../animations/PageTransition";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) => {
  const t = getTranslations(locale);
  const content = t["footer"];
  const navMenu = t["nav-menu"];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header locale={locale} navMenu={navMenu} />
      <PageTransition>{children}</PageTransition>
      <Footer content={content} />
    </div>
  );
};

export default MainLayout;
