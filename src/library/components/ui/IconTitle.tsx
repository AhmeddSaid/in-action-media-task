import Image from "next/image";

export default function IconTitle({
  icon,
  title,
  rtl,
}: {
  icon?: string;
  title?: string;
  rtl?: boolean;
}) {
  return (
    <div className="group mb-12 flex items-end">
      <div
        className={`title-clip w-32 bg-light-gray px-6 py-2 duration-300 group-hover:bg-main sm:w-40 ${
          rtl ? "" : "scale-x-[-1]"
        }`}
      >
        <Image
          src={icon ? icon : "/assets/svg/about icon1.svg"}
          alt="icon"
          width={120}
          height={70}
          className="mx-auto h-9 md:h-14"
        />
      </div>
      <h4 className="w-60 border-b border-light-gray ps-1 text-center text-4xl font-bold text-light-gray duration-300 group-hover:border-main group-hover:text-main md:text-6xl">
        {title}
      </h4>
    </div>
  );
}
