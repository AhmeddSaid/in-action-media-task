import { readFile } from "fs/promises";
import path from "path";

const siteName = process.env.SITE_NAME || "SIDF";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_URL
    : process.env.PROD_URL;

type PageKey = "home" | "about" | "contact";

type MetaContent = {
  title: string;
  description: string;
};

export async function generateLocalizedMetadata(locale: string, page: PageKey) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "locales",
      locale,
      "common.json",
    );
    const jsonData = await readFile(filePath, "utf-8");
    const translations = JSON.parse(jsonData);

    const meta: MetaContent = translations.meta?.[page] || {
      title: siteName,
      description: "",
    };

    const url = `${baseUrl}/${locale}/${page}`;

    return {
      title: meta.title,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
        url,
        siteName,
        type: "website",
        locale,
      },
      twitter: {
        card: "summary_large_image",
        title: meta.title,
        description: meta.description,
      },
      alternates: {
        canonical: url,
      },
    };
  } catch (err) {
    console.error("Failed to load metadata JSON:", err);
    return {
      title: siteName,
    };
  }
}
