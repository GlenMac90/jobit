import PageTitle from "@/components/PageTitle";
import { fetchCompanyDetails, fetchJobLists, fetchJobs } from "./fetch";
import dynamic from "next/dynamic";
const JobCardList = dynamic(
  () => import("@/components/job-card-components/JobCardList"),
  { ssr: false }
);
const FeaturedCompaniesCardList = dynamic(
  () => import("@/components/job-card-components/FeaturedCompaniesCardList"),
  { ssr: false }
);
const RecommendedList = dynamic(
  () => import("@/components/job-card-components/RecommendedList"),
  { ssr: false }
);

export default async function Home() {
  const jobData = await fetchJobs();
  const stringifiedJobData = JSON.stringify(jobData);
  const employers = await fetchCompanyDetails();
  const stringifiedEmployers = JSON.stringify(employers);
  const jobListData = await fetchJobLists();
  const stringifiedJobListData = JSON.stringify(jobListData);

  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className="flex w-full max-w-[80rem] flex-col gap-10 xl:flex-row">
        <div className="flex flex-col">
          <PageTitle text="Welcome to the Job Search Platform for Developers" />
          <main className="mt-12 flex flex-col gap-7 md:mt-9 md:gap-8 xl:flex-row">
            <div className="flex flex-col gap-7">
              <JobCardList data={stringifiedJobData} />
              <FeaturedCompaniesCardList data={stringifiedEmployers} />
            </div>
            <RecommendedList data={stringifiedJobListData} />
          </main>
        </div>
      </div>
    </div>
  );
}
