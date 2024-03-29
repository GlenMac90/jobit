import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

import PageTitle from "@/components/PageTitle";
import {
  JobDetailsLargeCard,
  SimilarJobCard,
} from "@/components/job-details-components";
import { rapidAPIBaseUrl, rapidAPIOptions } from "@/app/fetch";

const JobDetails = async ({ params }: { params: { id: string } }) => {
  const fetchJobDetails = async () => {
    const url = `${rapidAPIBaseUrl}job-details?job_id=${params.id}&extended_publisher_details=false`;
    try {
      const response = await fetch(url, rapidAPIOptions);
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSimilarJobs = async () => {
    const url = `${rapidAPIBaseUrl}search?query=${jobTitle}%20in${location}`;
    try {
      const response = await fetch(url, rapidAPIOptions);
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const data = await fetchJobDetails();

  const {
    job_title: jobTitle,
    employer_logo: image,
    employer_name: companyName,
    job_posted_at_timestamp: dateAdded,
    job_description: jobDescription,
    job_employment_type: jobType,
    estimated_salaries: estimateSalaries,
    job_highlights: jobHighlights,
    job_apply_link: websiteLink,
  } = data[0];

  const { Qualifications: qualifications, Responsibilities: responsibilities } =
    jobHighlights;

  const { location } = estimateSalaries?.[0] ?? [];

  const largeCardData = {
    jobTitle,
    image,
    companyName,
    location: estimateSalaries?.[0]?.location ?? null,
    dateAdded,
    jobDescription,
    workLevel: "Senior",
    jobType,
    currency: estimateSalaries?.[0]?.salary_currency ?? null,
    offerSalary: estimateSalaries?.[0]?.median_salary ?? null,
    salaryPeriod: estimateSalaries?.[0]?.salary_period ?? null,
    responsibilities,
    qualifications,
    websiteLink,
  };
  const similarJobs = await fetchSimilarJobs();

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

  const jobSummaries: JobSummary[] = similarJobs.map((job: any) => ({
    employerLogo: job.employer_logo,
    employerName: job.employer_name,
    jobTitle: job.job_title,
    jobCity: job.job_city,
    jobCountry: job.job_country,
    jobMaxSalary: job.job_max_salary,
    jobSalaryCurrency: job.job_salary_currency,
    jobSalaryPeriod: job.job_salary_period,
    jobOfferExpirationTimestamp: job.job_offer_expiration_timestamp,
    jobId: job.job_id,
  }));

  const isJobSummaries = jobSummaries.length > 0;
  const maxWidth = isJobSummaries ? "max-w-[80rem]" : "max-w-[60rem]";

  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className={`${maxWidth} flex w-full flex-col gap-10`}>
        <PageTitle text="Let’s find your dream job" />
        <section className="flex w-full flex-col justify-between gap-10 lg:flex-row">
          <div className="flex w-full flex-col gap-6">
            <Link
              href={"/"}
              className="flex-center regular-13 h-8 w-[4.625rem] gap-1.5 rounded-ten bg-natural-2 text-natural-7 hover:bg-primary hover:text-white dark:bg-darkBG-3 dark:hover:bg-primary"
            >
              <IoIosArrowBack />
              Back
            </Link>
            <JobDetailsLargeCard data={largeCardData} />
          </div>
          {isJobSummaries && (
            <div className="flex w-full flex-col gap-8 lg:max-w-[23.7rem]">
              <p className="label-styles">Similar Jobs</p>
              <div className="flex w-full flex-col gap-4">
                {jobSummaries.map((job) => (
                  <SimilarJobCard key={job.jobId} data={job} />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default JobDetails;
