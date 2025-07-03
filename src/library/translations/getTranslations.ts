import ar from "../../../public/locales/ar.json";
import en from "../../../public/locales/en.json";

export function getTranslations(locale: string) {
  return locale === "ar" ? ar : en;
}
