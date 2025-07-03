import { notFound, redirect } from "next/navigation";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = use(params);
  const url = locale === "ar" ? "/ar/404" : "/en/404";

  if (!url.endsWith("/404")) {
    redirect(url);
  }

  return notFound();
}
