import Image from "next/image";
import Link from "next/link";

import JobTitleAndInfo from "../JobTitleAndInfo";

import { dummyJobDetailsData } from "@/utils/dummy-data";
import { timeSince, formatSingleSalary } from "@/utils";

const JobDetailsLargeCard = () => {
  const {
    jobTitle,
    image,
    companyName,
    companyType,
    city,
    country,
    dateAdded,
    jobDescription,
    yearsOfExperience,
    workLevel,
    jobType,
    offerSalary,
    salaryType,
    responsibilities,
    qualifications,
    websiteLink,
    companyDescription,
  } = dummyJobDetailsData;

  const formattedDate = timeSince(dateAdded);
  const formattedSalary = formatSingleSalary({
    salary: offerSalary,
    salaryType,
  });

  const jobInfo = [
    {
      label: "Experience",
      value: `Minimum ${yearsOfExperience} years`,
    },
    {
      label: "Work Level",
      value: `${workLevel} Level`,
    },
    {
      label: "Employment Type",
      value: `${jobType} Jobs`,
    },
    {
      label: "Offer Salary",
      value: formattedSalary,
    },
  ];

  const lists = [
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
    <div className="card-styles flex w-full p-5">
      <div className="relative flex h-[9.375rem] w-full md:h-48">
        <Image
          src="/job-details-background.jpg"
          height={192}
          width={926}
          alt="background image for job details page"
          className="rounded-t-xl object-cover"
        />
        <div className="bg-natural-3_natural-8 absolute bottom-0 left-2.5 flex translate-y-6 rounded-[10px] p-1 md:left-5 md:translate-y-12">
          <Image
            src={image}
            height={46}
            width={46}
            alt={`company logo for ${companyName}`}
            className="size-[3rem] shrink-0 rounded-md md:size-[4rem]"
          />
        </div>
      </div>

      <div className="mt-7 flex w-full flex-col px-2.5 md:mt-[4.5rem] md:px-5">
        <div className="flex w-full items-center justify-between">
          <JobTitleAndInfo
            jobTitle={jobTitle}
            companyName={companyName}
            city={city}
            country={country}
            date={formattedDate}
            large
          />
          <Link
            href={websiteLink}
            className="flex-center medium-15 hidden h-11 w-[7.4375rem] rounded-[10px] bg-primary text-white sm:flex"
          >
            Apply Now
          </Link>
        </div>
        <div className="bg-natural-3_darkBG-3 mt-7 grid grid-cols-2 justify-between gap-y-3 rounded-[10px] p-2.5 sm:flex md:mt-9 md:rounded-[20px] md:px-6 md:py-4">
          {jobInfo.map((info) => (
            <div key={info.label} className="flex flex-col">
              <label className="medium-13 md:medium-14 text-natural-6">
                {info.label}
              </label>
              <p className="medium-14 medium-16 text-natural-8_white">
                {info.value}
              </p>
            </div>
          ))}
        </div>
        <Link
          href={websiteLink}
          className="flex-center medium-15 mt-3.5 h-11 w-[7.4375rem] rounded-[10px] bg-primary text-white sm:hidden"
        >
          Apply Now
        </Link>
        <p className="label-styles mt-7">About the Job</p>
        <p className="text-natural-7_natural-5 light-14 md:light-16 mt-2.5">
          {jobDescription}
        </p>
        <div className="mb-7 mt-[3.6rem] flex w-full flex-col gap-7 md:mt-[1.75rem]">
          {lists.map((list) => (
            <div key={list.title} className="flex flex-col">
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
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col border-t border-t-natural-2 pt-7 dark:border-t-darkBG-3">
          <h3 className="label-styles mb-3">About the Company</h3>
          <div className="mt-5 flex gap-5">
            <div className="bg-natural-3_natural-8 flex rounded-[10px] p-1">
              <Image
                src={image}
                height={46}
                width={46}
                alt={`company logo for ${companyName}`}
                className="size-[2.125rem] shrink-0 rounded-md md:size-[3.125rem]"
              />
            </div>
            <div className="flex h-full flex-col justify-center gap-0.5">
              <p className="medium-16 md:medium-18 text-black_white">
                {companyName}
              </p>
              <p className="regular-16 text-natural-7">{companyType}</p>
            </div>
          </div>
          <p className="light-16 text-natural-7_natural-5 mt-5 md:mt-7">
            {companyDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsLargeCard;
