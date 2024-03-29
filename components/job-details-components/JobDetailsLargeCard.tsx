import Image from "next/image";
import Link from "next/link";

import JobTitleAndInfo from "../JobTitleAndInfo";
import { timeSince, formatSingleSalary } from "@/utils";

const JobDetailsLargeCard = ({ data }: { data: any }) => {
  const {
    jobTitle,
    image,
    companyName,
    location,
    dateAdded,
    jobDescription,
    yearsOfExperience,
    workLevel,
    jobType,
    currency,
    offerSalary,
    salaryPeriod,
    responsibilities,
    qualifications,
    websiteLink,
  } = data;

  const formattedJobType = jobType.toLowerCase();
  const formattedDate = timeSince(dateAdded);
  const formattedSalary =
    currency && offerSalary && salaryPeriod
      ? formatSingleSalary({
          currency,
          salary: offerSalary,
          duration: salaryPeriod,
        })
      : "Not Specified";

  const jobInfo = [
    {
      label: "Experience",
      value: yearsOfExperience ? `Minimum ${yearsOfExperience} years` : "Any",
    },
    {
      label: "Work Level",
      value: workLevel ? `${workLevel} Level` : "Not Specified",
    },
    {
      label: "Employment Type",
      value: `${formattedJobType} Jobs`,
    },
    {
      label: "Offer Salary",
      value: formattedSalary,
    },
  ];

  interface ListItem {
    title: string;
    list: string[];
  }

  const lists: ListItem[] = [
    {
      title: "Responsibilities",
      list: responsibilities,
    },
    {
      title: "Qualifications",
      list: qualifications,
    },
  ];

  return (
    <div className="card-styles flex w-full self-center p-5">
      <div className="relative flex h-[9.375rem] w-full md:h-48">
        <Image
          src="/job-details-background.jpg"
          height={192}
          width={926}
          alt="background image for job details page"
          className="rounded-t-xl object-cover"
        />
        <div className="bg-natural-3_natural-8 absolute bottom-0 left-2.5 flex translate-y-6 rounded-ten p-1 md:left-5 md:translate-y-12">
          <Image
            src={image || "/jobit-logo.svg"}
            height={46}
            width={46}
            alt={`company logo for ${companyName}`}
            className="size-[3rem] shrink-0 rounded-md object-contain md:size-[4rem]"
          />
        </div>
      </div>

      <div className="mt-7 flex w-full flex-col px-2.5 md:mt-[4.5rem] md:px-5">
        <div className="flex w-full items-center justify-between">
          <JobTitleAndInfo
            jobTitle={jobTitle}
            companyName={companyName}
            location={location}
            date={formattedDate}
            large
          />
          <Link
            href={websiteLink}
            className="flex-center medium-15 hidden h-11 w-[7.4375rem] rounded-ten bg-primary text-white sm:flex"
          >
            Apply Now
          </Link>
        </div>
        <div className="bg-natural-3_darkBG-3 mt-7 grid grid-cols-2 justify-between gap-y-3 rounded-ten p-2.5 sm:flex md:mt-9 md:rounded-[20px] md:px-6 md:py-4">
          {jobInfo.map((info) => (
            <div key={info.label} className="flex flex-col">
              <label className="medium-13 md:medium-14 text-natural-6">
                {info.label}
              </label>
              <p className="medium-14 medium-16 text-natural-8_white capitalize">
                {info.value}
              </p>
            </div>
          ))}
        </div>
        <Link
          href={websiteLink}
          className="flex-center medium-15 mt-3.5 h-11 w-[7.4375rem] rounded-ten bg-primary text-white sm:hidden"
        >
          Apply Now
        </Link>
        <p className="label-styles mt-7">About the Job</p>
        <p className="text-natural-7_natural-5 light-14 md:light-16 mt-2.5">
          {jobDescription}
        </p>
        {lists.length > 0 && (
          <div className="mb-7 mt-[3.6rem] flex w-full flex-col gap-7 md:mt-[1.75rem]">
            {lists.map((list) => (
              <div key={list.title} className="flex flex-col">
                {list.list !== undefined && (
                  <>
                    <label className="label-styles mb-3">{list.title}</label>
                    <ul className="flex flex-col gap-3">
                      {list.list.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <div className="flex size-2 shrink-0 translate-x-1 translate-y-2 rounded-full border-2 border-primary" />
                          <span className="light-16 text-natural-7_natural-5">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetailsLargeCard;
