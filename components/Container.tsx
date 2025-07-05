import { cn } from "@/lib/utils";

const Container = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-4xl bg-white text-black dark:bg-black dark:text-white",
        classname,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
