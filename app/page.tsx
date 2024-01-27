import PageTitle from "@/components/PageTitle";
import { fetchCompanyDetails, fetchJobLists, fetchJobs } from "./fetch";
import JobCardList from "@/components/job-card-components/JobCardList";
import FeaturedCompaniesCardList from "@/components/job-card-components/FeaturedCompaniesCardList";
import RecommendedList from "@/components/job-card-components/RecommendedList";

export default async function Home() {
  const jobData = await fetchJobs();
  const employers = await fetchCompanyDetails();
  const jobListData = await fetchJobLists();

  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className="flex w-full max-w-[80rem] flex-col gap-10 xl:flex-row">
        <div className="flex flex-col">
          <PageTitle text="Welcome to the Job Search Platform for Developers" />
          <main className="mt-12 flex flex-col gap-7 md:mt-9 md:gap-8 xl:flex-row">
            <div className="flex flex-col gap-7">
              <JobCardList data={jobData} />
              <FeaturedCompaniesCardList data={employers} />
            </div>
            <RecommendedList data={jobListData} />
          </main>
        </div>
      </div>
    </div>
  );
}
