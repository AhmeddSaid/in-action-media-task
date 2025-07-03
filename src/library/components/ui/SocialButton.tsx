import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialButton({
  name,
  link,
  color,
}: {
  name: string;
  link: string;
  color: string;
}) {
  const renderIcon = () => {
    const commonClasses =
      "text-[color:var(--icon-color)] dark:text-main group-hover:text-white transition-colors duration-300";

    switch (name) {
      case "instagram":
        return <FaInstagram className={commonClasses} />;
      case "x":
        return <FaXTwitter className={commonClasses} />;
      case "linkedin":
        return <FaLinkedinIn className={commonClasses} />;
      case "facebook":
        return <FaFacebookF className={commonClasses} />;
      case "youtube":
        return <FaYoutube className={commonClasses} />;

      default:
        return "/assets/svg/instagram.svg";
    }
  };

  return (
    <Link
      href={link}
      className="group relative block cursor-pointer duration-500 hover:-translate-y-3"
    >
      <div className="hex-clip absolute right-1 top-0 h-8 w-10 bg-black/20 backdrop-blur-2xl dark:bg-main sm:h-8 sm:w-10"></div>
      <div className="hex-clip absolute inset-0 h-8 w-10 bg-black/50 backdrop-blur-2xl dark:bg-main sm:h-8 sm:w-10"></div>
      <div
        className="hex-clip custom-hover relative flex h-8 w-10 items-center justify-center bg-white transition-colors duration-500 dark:bg-background sm:h-8 sm:w-10"
        style={{
          ["--hover-color" as string]: color,
          ["--icon-color" as string]: color,
        }}
      >
        {renderIcon()}
      </div>
    </Link>
  );
}
