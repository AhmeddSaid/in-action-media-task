import Home from "@/library/pages/Home/Home";
import { generateLocalizedMetadata } from "@/library/utils/generateLocalizedMetadata";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale;
  return generateLocalizedMetadata(locale, "home");
}

export default function Page({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  return <Home locale={locale} />;
}
