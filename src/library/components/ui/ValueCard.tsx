import Image from "next/image";

export default function ValueCard({
  icon,
  title,
  body,
  color,
}: {
  icon: string;
  title: string;
  body: string;
  color?: string;
}) {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-between bg-black/5 p-4 py-4 dark:bg-white/5 max-2xl:min-w-60 max-2xl:flex-1 md:h-60">
      <div className="mx-auto mb-2 w-fit">
        <Image src={icon} alt="icon" width={68} height={68} />
      </div>
      <h5
        className="text-center text-3xl font-bold md:text-4xl"
        style={{ color: color }}
      >
        {title}
      </h5>
      <p className="text-center text-xl font-medium text-dark-gray md:text-2xl">
        {body}
      </p>
    </div>
  );
}
