import Image from "next/image";

import { dummyJobData } from "@/utils/dummy-data";
import { daysLeftUntil, formatSalary } from "@/utils";

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
  const jobSalary = formatSalary({
    minimumSalary,
    maximumSalary,
    salaryType,
  });

  const { duration, salary } = jobSalary;
  return (
    <div className="bg-white_darkBG-2 flex w-full flex-col gap-5 rounded-[10px] p-5 md:gap-6">
      <div className="flex gap-5">
        <div className="bg-natural-2_darkBG-3 size-[2.875rem] shrink-0 rounded-lg p-2 md:size-[4rem] md:rounded-[10px] md:p-2.5">
          <Image src={image} alt={jobTitle} width={80} height={80} />
        </div>
        <div className="flex flex-col justify-between gap-3">
          <span className="text-black_white medium-16 md:medium-18">
            {jobTitle}
          </span>
          <div className="flex gap-1">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="light-13 md:light-14 bg-natural-2_darkBG-3 rounded-md px-2.5 py-0.5 text-natural-6"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="regular-15 md:regular-16 text-natural-7">
        {jobDescription}
      </p>
      <div className="flex gap-1 md:gap-3">
        <div className="bg-natural-2_darkBG-3 flex gap-2 rounded-md px-2.5 py-1">
          <Image
            src="/job-type.svg"
            height={18}
            width={18}
            alt="icon to display type of work hours for job"
          />
          <span className="regular-13 md:regular-14 text-natural-6">
            {jobType}
          </span>
        </div>
        <div className="bg-natural-2_darkBG-3 flex gap-2 rounded-md px-2.5 py-1">
          <Image
            src="/applicants.svg"
            height={18}
            width={18}
            alt="icon to display to number of applicants for job"
          />
          <span className="regular-13 md:regular-14 text-natural-6">
            {numberOfApplicants} Applied
          </span>
        </div>
        <div className="bg-natural-2_darkBG-3 flex gap-2 rounded-md px-2.5 py-1">
          <Image
            src="/deadline.svg"
            height={18}
            width={18}
            alt="icon to display to the deadline for job"
          />
          <span className="regular-13 md:regular-14 text-natural-6">
            {formattedDate}
          </span>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-black_white regular-16 md:regular-18">
          {salary}
          <span className="text-natural-7">/{duration}</span>
        </p>
        <button className="medium-15 rounded-[10px] bg-primary px-3.5 py-2 text-white md:py-3">
          Visit Now
        </button>
      </div>
    </div>
  );
};

export default JobPost;
