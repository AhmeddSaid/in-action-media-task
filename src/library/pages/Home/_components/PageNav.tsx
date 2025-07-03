import MainButton from "@/library/components/ui/MainButton";

export default function PageNav({
  nav,
}: {
  nav: {
    icon: string;
    title: string;
    link: string;
    text: string;
    ltr: boolean;
  }[];
}) {
  return (
    <div className="container mx-auto my-10">
      <div className="mx-auto flex w-fit flex-col items-center gap-10 sm:flex-row lg:mr-auto">
        {nav.map((item, index) => (
          <MainButton
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
            ltr={item.ltr}
          />
        ))}
      </div>
    </div>
  );
}
