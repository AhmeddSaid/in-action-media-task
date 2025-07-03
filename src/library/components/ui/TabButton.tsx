export default function TabButton({
  children,
  active,
  onClick,
  className,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`tab-button text-foreground ${
        active ? "active bg-main text-white" : "bg-background text-light-gray"
      } group relative w-fit cursor-pointer px-5 text-2xl font-medium drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)] duration-300 hover:bg-main hover:text-white dark:drop-shadow-[0_0px_2px_#86c960] 2xl:text-3xl ${className}`}
    >
      {children}
    </div>
  );
}
