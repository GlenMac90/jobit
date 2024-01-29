import Image from "next/image";
import Link from "next/link";

import { daysLeftUntil, formatSalary } from "@/utils";
import FormattedText from "../FormattedText";
import SmallCardHeadingAndTags from "../SmallCardHeadingAndTags";

const JobPost = ({ data }: { data: any }) => {
  const {
    id,
    jobTitle,
    image,
    jobDescription,
    minimumSalary,
    maximumSalary,
    salaryType,
    jobType,
    numberOfApplicants,
    dateOfDeadline,
    jobScore,
  } = data;

  const formattedDate = daysLeftUntil(dateOfDeadline);
  const { duration, salary } = formatSalary({
    minimumSalary,
    maximumSalary,
    salaryType,
  });

  const shortenedJobDescription = jobDescription.slice(0, 200);
  const formattedScore = `${(jobScore * 100).toFixed(1).toString()}%`;
  const formattedJobType = jobType.toLowerCase();

  return (
    <div className="card-styles justify-between gap-5 p-5 hover:shadow-xl md:gap-6">
      <SmallCardHeadingAndTags image={image} jobTitle={jobTitle} />
      <p className="regular-15 md:regular-16 text-natural-7">
        {shortenedJobDescription}
      </p>
      <div className="hide-scrollbar relative flex cursor-default gap-1 overflow-auto md:gap-3">
        <div className="bg-natural-3_darkBG-3 flex shrink-0 gap-2 rounded-md px-2.5 py-1">
          <Image
            src="/job-type.svg"
            height={18}
            width={18}
            alt="icon to display type of work hours for job"
          />
          <span className="regular-13 md:regular-14 whitespace-nowrap capitalize text-natural-6">
            {formattedJobType}
          </span>
        </div>
        <div className="bg-natural-3_darkBG-3 flex shrink-0 gap-2 rounded-md px-2.5 py-1">
          <Image
            src="/applicants.svg"
            height={18}
            width={18}
            alt="icon to display to number of applicants for job"
          />
          <span className="regular-13 md:regular-14 whitespace-nowrap text-natural-6">
            {numberOfApplicants} Applied
          </span>
        </div>
        <div className="bg-natural-3_darkBG-3 flex shrink-0 gap-2 rounded-md px-2.5 py-1">
          <Image
            src="/deadline.svg"
            height={18}
            width={18}
            alt="icon to display to the deadline for job"
          />
          <span className="regular-13 md:regular-14 whitespace-nowrap text-natural-6">
            {formattedDate}
          </span>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        {minimumSalary && maximumSalary && salaryType ? (
          <FormattedText leftText={salary} rightText={`/${duration}`} />
        ) : jobScore ? (
          <FormattedText
            leftText="Quality Score: "
            rightText={formattedScore}
            reverse
          />
        ) : null}
        <Link
          href={`/job-details/${id}`}
          className="medium-15 rounded-ten bg-primary px-3.5 py-2 text-white md:py-3"
        >
          Visit Now
        </Link>
      </div>
    </div>
  );
};

export default JobPost;
