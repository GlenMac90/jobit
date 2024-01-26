import Dot from "./Dot";

const JobTitleAndInfo = ({
  jobTitle,
  companyName,
  city,
  country,
  date,
  large = false,
}: {
  jobTitle: string;
  companyName: string;
  city: string;
  country: string;
  date: string;
  large?: boolean;
}) => {
  const headingStyles = large ? "md:medium-24" : "md:medium-18";
  const textStyles = large ? "regular-16" : "regular-13 md:regular-14";
  return (
    <div className="flex h-full flex-col pt-0.5">
      <h3 className={`medium-16 ${headingStyles}`}>{jobTitle}</h3>
      <div className={`flex flex-wrap gap-x-1 text-natural-7 ${textStyles}`}>
        <span>{companyName}</span>
        <Dot />
        <span>
          {city}, {country}
        </span>
        <Dot />
        <span>{date}</span>
      </div>
    </div>
  );
};

export default JobTitleAndInfo;
