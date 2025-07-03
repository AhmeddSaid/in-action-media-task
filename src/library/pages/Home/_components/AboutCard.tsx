import IconTitle from "@/library/components/ui/IconTitle";

export default function AboutCard({
  icon,
  title,
  body,
  rtl,
}: {
  icon?: string;
  title: string;
  body: string;
  rtl?: boolean;
}) {
  return (
    <div className="group relative bg-background p-4 drop-shadow-[-2px_4px_2px_rgb(0,0,0,0.15)] dark:drop-shadow-[-2px_4px_2px_#86c960] xl:w-fit">
      <IconTitle icon={icon} title={title} rtl={rtl} />
      <p className="text-2xl text-dark-gray md:text-3xl">{body}</p>
    </div>
  );
}
