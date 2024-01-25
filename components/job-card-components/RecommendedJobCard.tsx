import Image from "next/image";

import { dummyRecommendedCompany } from "@/utils/dummy-data";

const RecommendedJobCard = () => {
  const {
    jobTitle,
    image,
    companyName,
    city,
    country,
    jobType,
    maxHourlySalary,
    minHourlySalary,
  } = dummyRecommendedCompany;

  return (
    <div className="bg-natural-3_darkBG-3 flex w-full justify-between p-3.5">
      <div className="flex items-center gap-3">
        <Image
          src={image}
          height={36}
          width={36}
          alt={`Company logo for ${companyName}`}
          className="size-[1.875rem] shrink-0 sm:size-[2.25rem]"
        />
        <div className="flex w-full flex-col truncate">
          <span className="text-black_white regular-13 sm:regular-16 truncate">
            {jobTitle}
          </span>
          <div className="regular-13 sm:regular-14 flex gap-1 truncate text-natural-6">
            <span>{companyName}</span>
            <div className="size-[3px] self-center rounded-full bg-natural-6" />
            <span>
              {city}, {country}
            </span>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col justify-between">
        <p className="text-black_white regular-13 sm:regular-14 whitespace-nowrap">
          ${minHourlySalary}-{maxHourlySalary}
          <span className="regular-14 text-natural-6"> / Hr</span>
        </p>
        <span className="regular-13 sm:regular-14 text-end text-natural-6">
          {jobType}
        </span>
      </div>
    </div>
  );
};

export default RecommendedJobCard;
