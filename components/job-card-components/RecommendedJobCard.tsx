import Image from "next/image";
import Link from "next/link";

import Dot from "../Dot";

export interface RecommendedJobCardProps {
  id: string;
  employerName: string;
  jobTitle: string;
  employerLogo: string;
  jobType: string;
  jobCity: string;
  jobCountry: string;
  maxSalary: number;
  minSalary: number;
  salaryPeriod: string;
}

const RecommendedJobCard = ({ data }: { data: any }) => {
  const {
    id,
    employerName,
    jobTitle,
    employerLogo,
    jobType,
    jobCity,
    jobCountry,
    maxSalary,
    minSalary,
    salaryPeriod,
  } = data;

  const formattedJobType = jobType.toLowerCase();
  const formattedSalaryPeriod = salaryPeriod && salaryPeriod.toLowerCase();

  const minimumSalary =
    minSalary >= 1000 ? `${(minSalary / 1000).toFixed(0)}k` : `${minSalary}`;
  const maximumSalary =
    maxSalary >= 1000 ? `${(maxSalary / 1000).toFixed(0)}k` : `${maxSalary}`;

  return (
    <Link
      href={`/job-details/${id}`}
      className="bg-natural-3_darkBG-3 hover:bg-natural-2_darkBG-2 flex w-full justify-between gap-2 rounded-ten p-3.5"
    >
      <div className="flex items-center gap-3 truncate">
        <Image
          src={employerLogo || "/jobit-logo.svg"}
          height={36}
          width={36}
          alt={`Company logo for ${employerName}`}
          className="size-[1.875rem] shrink-0 sm:size-[2.25rem]"
        />
        <div className="flex w-full flex-col truncate">
          <span className="text-black_white regular-13 sm:regular-16 line-clamp-1">
            {jobTitle}
          </span>
          <div className="regular-13 sm:regular-14 line-clamp-1 flex gap-1 text-natural-6">
            <span>{employerName}</span>
            <Dot />
            <span>
              {jobCity}, {jobCountry}
            </span>
          </div>
        </div>
      </div>
      {minSalary && maxSalary && salaryPeriod && (
        <div className="flex h-full flex-col justify-between">
          <p className="text-black_white regular-13 sm:regular-14 whitespace-nowrap">
            {minimumSalary}
            {maximumSalary !== minimumSalary && `-${maximumSalary}`}
            <span className="regular-14 capitalize text-natural-6">
              {" "}
              / {formattedSalaryPeriod}
            </span>
          </p>
          <span className="regular-13 sm:regular-14 text-end capitalize text-natural-6">
            {formattedJobType}
          </span>
        </div>
      )}
    </Link>
  );
};

export default RecommendedJobCard;
