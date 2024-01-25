import { IoChevronDownOutline } from "react-icons/io5";

import JobPost from "@/components/job-card-components/JobPost";
import FeaturedCompaniesCard from "@/components/job-card-components/FeaturedCompaniesCard";
import RecommendedJobCard from "@/components/job-card-components/RecommendedJobCard";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className="flex w-full max-w-[80rem] flex-col gap-10 xl:flex-row">
        <div className="flex flex-col">
          <PageTitle text="Welcome to the Job Search Platform for Developers" />
          <main className="mt-12 flex flex-col gap-7 md:mt-9 md:gap-8 xl:flex-row">
            <div className="flex flex-col gap-7">
              <div className="flex w-full items-center justify-between">
                <h3 className="semibold-22 text-black_white">
                  Latest Job Posts
                </h3>
                <button className="flex items-center gap-2 rounded-[10px] border border-natural-2 px-2.5 py-2 dark:border-natural-8">
                  <span className="text-natural-7">See All</span>
                  <span className="flex text-natural-7 md:hidden">
                    <IoChevronDownOutline />
                  </span>
                </button>
              </div>
              <section className="flex w-full flex-col gap-5 lg:grid lg:grid-cols-2">
                <JobPost />
                <JobPost />
                <JobPost />
                <JobPost />
              </section>
              <h3 className="semibold-22 text-black_white">
                Featured Companies
              </h3>
              <section className="flex flex-col gap-9 md:flex-row">
                <FeaturedCompaniesCard />
                <FeaturedCompaniesCard />
                <FeaturedCompaniesCard />
              </section>
            </div>
            <aside className="flex w-full flex-col gap-7 xl:max-w-[25rem]">
              <div className="flex w-full items-center justify-between">
                <h3 className="semibold-22 text-black_white">
                  Recommended for you
                </h3>
                <button className="flex items-center gap-2 rounded-[10px] border border-natural-2 px-2.5 py-2 dark:border-natural-8">
                  <span className="text-natural-7">See All</span>
                  <span className="flex text-natural-7 md:hidden">
                    <IoChevronDownOutline />
                  </span>
                </button>
              </div>
              <section className="card-styles gap-3 p-3 shadow sm:p-5">
                <RecommendedJobCard />
                <RecommendedJobCard />
                <RecommendedJobCard />
                <RecommendedJobCard />
                <RecommendedJobCard />
                <RecommendedJobCard />
                <RecommendedJobCard />
                <RecommendedJobCard />
              </section>
            </aside>
          </main>
        </div>
      </div>
    </div>
  );
}
