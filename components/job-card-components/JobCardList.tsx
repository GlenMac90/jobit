"use client";

import { useState } from "react";

import { JobPost } from ".";
import { IoChevronDownOutline } from "react-icons/io5";

interface JobDataProps {
  id: string;
  image: string;
  jobTitle: string;
  jobDescription: string;
  minimumSalary: number;
  maximumSalary: number;
  salaryType: string;
  jobType: string;
  numberOfApplicants: number;
  dateOfDeadline: string;
  jobScore: number;
}

const JobCardList = ({ data }: { data: string }) => {
  const [showMore, setShowMore] = useState(false);
  if (!data) return null;
  const parsedData = JSON.parse(data);

  const mappedJobData = parsedData.map((job: any) => ({
    id: job.job_id,
    image: job.employer_logo,
    jobTitle: job.job_title,
    jobDescription: job.job_description,
    minimumSalary: job.job_min_salary,
    maximumSalary: job.job_max_salary,
    salaryType: job.job_salary_period,
    jobType: job.job_employment_type,
    numberOfApplicants: 5,
    dateOfDeadline: job.job_offer_expiration_datetime_utc,
    jobScore: job.job_apply_quality_score,
  }));

  const filteredJobData = mappedJobData.slice(0, 4);

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <h3 className="semibold-22 text-black_white">Latest Job Posts</h3>
        <button
          className="button-styles flex items-center gap-2 rounded-ten border border-natural-2 px-2.5 py-2 dark:border-natural-8"
          onClick={() => setShowMore(!showMore)}
        >
          <span className="text-natural-7">
            {showMore ? "See Less" : "See All"}
          </span>
          <span className="flex text-natural-7 md:hidden">
            <IoChevronDownOutline />
          </span>
        </button>
      </div>

      <section className="flex w-full flex-col gap-5 lg:grid lg:grid-cols-2">
        {showMore
          ? mappedJobData.map((job: JobDataProps) => (
              <JobPost key={job.jobTitle} data={job} />
            ))
          : filteredJobData.map((job: JobDataProps) => (
              <JobPost key={job.jobTitle} data={job} />
            ))}
      </section>
    </>
  );
};

export default JobCardList;
