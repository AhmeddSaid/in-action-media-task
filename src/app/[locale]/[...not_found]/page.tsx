import NotFound from "@/library/pages/NotFound/NotFound";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Page({ params }: Props) {
  const { locale } = use(params);

  return <NotFound locale={locale} />;
}
