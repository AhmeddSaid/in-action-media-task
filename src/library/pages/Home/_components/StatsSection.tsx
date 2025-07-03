import Stat from "@/library/components/ui/Stat";

export default function StatsSection({
  content: { target, data },
  locale,
}: {
  content: {
    target: number;
    data: { value: number; unit: string; label: string }[];
  };
  locale: string;
}) {
  const col1 = data.slice(0, 4);
  const col2 = data.slice(4);

  return (
    <div className="container mx-auto my-10 px-4 py-10">
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 lg:gap-y-14 xl:grid-cols-2">
        <div className="flex flex-col gap-10 lg:gap-14">
          {col1.map((item, index) => (
            <Stat
              key={index}
              value={item.value}
              unit={item.unit}
              label={item.label}
              target={target}
              rtl={locale === "ar"}
            />
          ))}
        </div>
        <div className="flex flex-col gap-10 lg:gap-14 xl:mt-16">
          {col2.map((item, index) => (
            <Stat
              key={index}
              value={item.value}
              unit={item.unit}
              label={item.label}
              target={target}
              rtl={locale === "ar"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
