import Image from "next/image";

import { dummySimilarJobData } from "@/utils/dummy-data";
import { daysUntil } from "@/utils";

const SimilarJobCard = () => {
  const {
    image,
    city,
    country,
    jobTitle,
    companyName,
    hourlySalary,
    deadline,
  } = dummySimilarJobData;

  const daysLeft = daysUntil(deadline);

  return (
    <div className="card-styles gap-5 p-5">
      <div className="flex w-full justify-between">
        <div className="flex gap-4">
          <Image
            src={image}
            height={48}
            width={48}
            alt={`Company Logo for ${companyName}`}
            className="shrink-0"
          />
          <div className="flex h-full flex-col justify-between truncate">
            <span className="semibold-16 md:semibold-18 text-black_white truncate">
              {jobTitle}
            </span>
            <span className="regular-14 truncate text-natural-6">
              {city}, {country}
            </span>
          </div>
        </div>
        <p className="regular-14 text-black_white">
          ${hourlySalary}
          <span className="light-14 text-natural-6"> / Hr</span>
        </p>
      </div>
      <div className="flex w-full items-center justify-between">
        <span className="regular-14 text-natural-6">{daysLeft}</span>
        <button className="flex-center h-9 w-[3.7rem] rounded-[7px] bg-primary/10 text-primary">
          View
        </button>
      </div>
    </div>
  );
};

export default SimilarJobCard;
