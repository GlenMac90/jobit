import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import PageTitle from "@/components/PageTitle";
import {
  SearchBar,
  SearchPageFilters,
  SearchPageJobCard,
} from "@/components/search-components";

const JobSearch = () => {
  const numberOfJobs = 10;
  const currentPageNumber = 3;
  const buttonStyles =
    "bg-white_darkBG-2 text-natural-8_natural-5 regular-14 flex items-center gap-2 rounded-md p-2 md:px-3.5 md:py-1.5";

  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className="flex w-full max-w-[80rem] flex-col gap-10">
        <PageTitle text="Let’s find your dream job" />
        <SearchBar />
        <section className="flex w-full justify-between gap-20">
          <SearchPageFilters />
          <main className="flex w-full flex-col gap-8">
            <div className="flex w-full">
              <p className="semibold-16 sm:semibold-18 text-natural-6">
                Showing:{" "}
                <span className="text-black_white">{numberOfJobs} Jobs</span>
              </p>
            </div>
            <div className="ms:gap-5 flex flex-col gap-7">
              <SearchPageJobCard />
              <SearchPageJobCard />
              <SearchPageJobCard />
              <SearchPageJobCard />
              <SearchPageJobCard />
            </div>
            <footer className="flex w-full items-center justify-between border-t border-t-natural-2 pt-5 dark:border-t-darkBG-3">
              <button className={buttonStyles}>
                <span>
                  <FaArrowLeft />
                </span>
                <span className="hidden md:flex">Previous</span>
              </button>
              <p>Page {currentPageNumber}</p>
              <button className={buttonStyles}>
                <span className="hidden md:flex">Next</span>
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </footer>
          </main>
        </section>
      </div>
    </div>
  );
};

export default JobSearch;
