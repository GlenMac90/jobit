import Image from "next/image";
import Link from "next/link";

import { daysUntil } from "@/utils";

type JobSummary = {
  employerLogo: string | null;
  employerName: string;
  jobTitle: string;
  jobCity: string;
  jobCountry: string;
  jobMaxSalary: number | null;
  jobSalaryCurrency: string | null;
  jobSalaryPeriod: string | null;
  jobOfferExpirationTimestamp: number;
  jobId: string;
};

const SimilarJobCard = ({ data }: { data: JobSummary }) => {
  const {
    employerLogo,
    employerName,
    jobTitle,
    jobCity,
    jobCountry,
    jobMaxSalary,
    jobSalaryCurrency,
    jobSalaryPeriod,
    jobOfferExpirationTimestamp,
    jobId,
  } = data;

  const deadline = new Date(jobOfferExpirationTimestamp);
  const daysLeft = daysUntil(deadline);

  return (
    <div className="card-styles gap-5 p-5">
      <div className="flex w-full justify-between">
        <div className="flex gap-4">
          <Image
            src={employerLogo || "/jobit-logo.svg"}
            height={48}
            width={48}
            alt={`Company Logo for ${employerName}`}
            className="shrink-0"
          />
          <div className="flex h-full flex-col justify-between">
            <span className="semibold-16 md:semibold-18 text-black_white line-clamp-1 w-full">
              {jobTitle}
            </span>
            <span className="regular-14 truncate text-natural-6">
              {jobCity}, {jobCountry}
            </span>
          </div>
        </div>
        {jobMaxSalary && jobSalaryCurrency && jobSalaryPeriod && (
          <p className="regular-14 text-black_white">
            {jobSalaryCurrency}
            {jobMaxSalary}
            <span className="light-14 text-natural-6">
              {" "}
              / {jobSalaryPeriod}
            </span>
          </p>
        )}
      </div>
      <div className="flex w-full items-center justify-between">
        <span className="regular-14 text-natural-6">{daysLeft}</span>
        <Link
          href={`/job-details/${jobId}`}
          className="flex-center h-9 w-[3.7rem] rounded-[7px] bg-primary/10 text-primary"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default SimilarJobCard;
