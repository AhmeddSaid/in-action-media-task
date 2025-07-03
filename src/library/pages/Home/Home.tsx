import VideoPlayer from "@/library/components/ui/VideoPlayer";
import { getTranslations } from "@/library/translations/getTranslations";
import AboutSection from "./_components/AboutSection";
import HeroSection from "./_components/HeroSection";
import OurGoals from "./_components/OurGoals";
import PageNav from "./_components/PageNav";
import StatsSection from "./_components/StatsSection";
import ValuesSection from "./_components/ValuesSection";

export default function Home({ locale }: { locale: string }) {
  const t = getTranslations(locale);

  const heroContent = t["hero-content"];
  const goalsContent = t["our-goals"];
  const aboutContent = t["about-content"];
  const valuesContent = t["values"];
  const statsContent = t["stats"];

  const nav = t["nav"];

  return (
    <div className="overflow-x-hidden">
      <div className="mx-auto max-w-[1440px]">
        <VideoPlayer
          src="/assets/vid/home-vid.mp4"
          className="h-[50vh] w-full md:h-[70vh]"
        />
      </div>
      <HeroSection content={heroContent} />
      <OurGoals content={goalsContent} locale={locale} />
      <AboutSection content={aboutContent} locale={locale} />
      <ValuesSection content={valuesContent} locale={locale} />
      <StatsSection content={statsContent} locale={locale} />
      <PageNav nav={nav} />
    </div>
  );
}
