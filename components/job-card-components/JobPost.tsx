import Image from "next/image";

import { dummyJobData } from "@/utils/dummy-data";
import { daysLeftUntil, formatSalary } from "@/utils";
import FormattedText from "../FormattedText";

const JobPost = () => {
  const {
    jobTitle,
    image,
    jobDescription,
    minimumSalary,
    maximumSalary,
    salaryType,
    jobType,
    numberOfApplicants,
    dateOfDeadline,
    techTags,
  } = dummyJobData;

  const formattedDate = daysLeftUntil(dateOfDeadline);
  const { duration, salary } = formatSalary({
    minimumSalary,
    maximumSalary,
    salaryType,
  });

  return (
    <div className="card-styles gap-5 p-5 md:gap-6">
      <div className="flex gap-5">
        <div className="bg-natural-2_darkBG-3 flex size-[2.875rem] shrink-0 rounded-lg p-2 md:size-[4rem] md:rounded-[10px] md:p-2.5">
          <Image src={image} alt={jobTitle} width={80} height={80} />
        </div>
        <div className="flex flex-col justify-between gap-3 overflow-x-hidden">
          <span className="label-styles">{jobTitle}</span>
          <div className="hide-scrollbar flex gap-1 overflow-scroll">
            {techTags.map((tag) => (
              <span key={tag} className="badge-styles">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="regular-15 md:regular-16 text-natural-7">
        {jobDescription}
      </p>
      <div className="hide-scrollbar relative flex gap-1 overflow-auto md:gap-3">
        <div className="bg-natural-3_darkBG-3 flex shrink-0 gap-2 rounded-md px-2.5 py-1">
          <Image
            src="/job-type.svg"
            height={18}
            width={18}
            alt="icon to display type of work hours for job"
          />
          <span className="regular-13 md:regular-14 whitespace-nowrap text-natural-6">
            {jobType}
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
        <FormattedText leftText={salary} rightText={`/${duration}`} />
        <button className="medium-15 rounded-[10px] bg-primary px-3.5 py-2 text-white md:py-3">
          Visit Now
        </button>
      </div>
    </div>
  );
};

export default JobPost;
