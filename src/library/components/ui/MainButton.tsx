import Image from "next/image";
import Link from "next/link";

export default function MainButton({
  icon,
  title,
  link,
  text,
  ltr,
}: {
  icon?: string;
  title?: string;
  link?: string;
  text?: string;
  ltr?: boolean;
}) {
  return (
    <Link href={link || "#"}>
      <div className="btn-clip flex h-24 w-64 cursor-pointer items-center justify-center gap-2 bg-light-gray px-2 duration-300 hover:bg-main md:h-32 md:w-64">
        <div
          className={`flex gap-2 ${
            ltr ? "flex-row-reverse" : "flex-row"
          } items-center`}
        >
          {icon && (
            <Image
              src={icon}
              alt="icon"
              width={36}
              height={36}
              className="h-9 w-auto md:h-12"
            />
          )}
          <div>
            <p className="text-nowrap text-xl text-white md:text-3xl">
              {title}
            </p>
            <p className="text-nowrap text-xl text-white md:text-2xl">{text}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
