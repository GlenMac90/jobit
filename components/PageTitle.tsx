import { getCurrentDateFormatted } from "@/utils";

const PageTitle = ({ text }: { text: string }) => {
  const todaysDate = getCurrentDateFormatted();

  return (
    <div className="flex flex-col gap-1.5 md:gap-5">
      <h1 className="bold-22 md:bold-32 text-black_white">{text}</h1>
      <h3 className="regular-16 md:regular-20 text-natural-6">{todaysDate}</h3>
    </div>
  );
};

export default PageTitle;
