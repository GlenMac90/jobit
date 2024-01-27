import { RecommendedJobCard } from ".";
import { RecommendedJobCardProps } from "./RecommendedJobCard";

const RecommendedList = ({ data }: any) => {
  const mappedJobListData = data.slice(0, 8).map((job: any) => ({
    id: job.job_id,
    employerName: job.employer_name,
    jobTitle: job.job_title,
    employerLogo: job.employer_logo,
    jobType: job.job_employment_type,
    jobCity: job.job_city,
    jobCountry: job.job_country,
    minSalary: job.job_min_salary,
    maxSalary: job.job_max_salary,
    salaryPeriod: job.job_salary_period,
  }));
  return (
    <aside className="flex w-full flex-col gap-9 xl:max-w-[25rem]">
      <div className="flex w-full items-center justify-between">
        <h3 className="semibold-22 text-black_white">Recommended for you</h3>
      </div>
      <section className="card-styles gap-3 p-3 shadow sm:p-5">
        {mappedJobListData.map((job: RecommendedJobCardProps) => (
          <RecommendedJobCard key={job.id} data={job} />
        ))}
      </section>
    </aside>
  );
};

export default RecommendedList;
