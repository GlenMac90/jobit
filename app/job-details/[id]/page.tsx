import { IoIosArrowBack } from "react-icons/io";

import PageTitle from "@/components/PageTitle";
import JobDetailsLargeCard from "@/components/job-details-components/JobDetailsLargeCard";
import SimilarJobCard from "@/components/job-details-components/SimilarJobCard";

const JobDetails = () => {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className="flex w-full max-w-[80rem] flex-col gap-10">
        <PageTitle text="Let’s find your dream job" />
        <section className="flex w-full flex-col justify-between gap-10 lg:flex-row">
          <div className="flex w-full flex-col gap-6">
            <button className="flex-center regular-13 h-8 w-[4.625rem] gap-1.5 rounded-[10px] bg-natural-2 text-natural-7 dark:bg-darkBG-3">
              <IoIosArrowBack />
              Back
            </button>
            <JobDetailsLargeCard />
          </div>
          <div className="flex w-full flex-col gap-8 lg:max-w-[23.7rem]">
            <p className="label-styles">Similar Jobs</p>
            <div className="flex w-full flex-col gap-4">
              <SimilarJobCard />
              <SimilarJobCard />
              <SimilarJobCard />
              <SimilarJobCard />
              <SimilarJobCard />
              <SimilarJobCard />
              <SimilarJobCard />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobDetails;
