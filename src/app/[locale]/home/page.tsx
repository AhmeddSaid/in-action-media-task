import Home from "@/library/pages/Home/Home";
import { generateLocalizedMetadata } from "@/library/utils/generateLocalizedMetadata";
import { Metadata } from "next";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { locale } = await params;
  return generateLocalizedMetadata(locale, "home");
}

export default function Page({ params }: Props) {
  const { locale } = use(params);

  return <Home locale={locale} />;
}
