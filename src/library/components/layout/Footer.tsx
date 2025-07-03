import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import SocialButton from "../ui/SocialButton";

export default function Footer({
  content: { website, phone, qr, socials },
}: {
  content: {
    website: string;
    phone: string;
    qr: string;
    socials: { name: string; link: string; color: string }[];
  };
}) {
  return (
    <div className="bottom-0 z-40 flex h-fit w-full items-center justify-center bg-background py-5 text-foreground drop-shadow-[0_-2px_5px_rgb(0,0,0,0.15)] dark:border-t dark:border-main sm:sticky sm:h-20 sm:py-1 2xl:py-3">
      <div className="container flex w-4/5 flex-col-reverse items-center justify-between gap-5 sm:flex-row sm:gap-0">
        <div className="flex items-center gap-3">
          <Image src={qr} alt="" width={56} height={56} className="w-14" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <CiGlobe />
              <span>{website}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaPhone />
              <span>{phone}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {socials.map((item, index) => (
            <SocialButton
              key={index}
              name={item.name}
              link={item.link}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
