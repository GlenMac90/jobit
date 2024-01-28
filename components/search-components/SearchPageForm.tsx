"use client";

import { useState, useEffect } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SearchPageFilters from "./SearchPageFilters";
import SearchPageJobCard from "./SearchPageJobCard";
import SearchBar from "./SearchBar";
import PageTitle from "../PageTitle";
import { fetchPaginatedJob } from "@/app/fetch";

const SearchPageForm = ({ data }: { data: string }) => {
  const jobData = JSON.parse(data);
  const stringifiedArray = jobData.map((job: any) => JSON.stringify(job));
  const [jobList, setJobList] = useState<any>(stringifiedArray);
  const [pageNumber, setPageNumber] = useState(1);
  const [queryString, setQueryString] = useState("web developer in london");
  const [additionalFilters, setAdditionalFilters] = useState<string>("");

  const queryStringWithFilters = `${queryString}&${additionalFilters}`;

  const handleNextClick = async () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    try {
      const jobData = await fetchPaginatedJob({
        queryString: queryStringWithFilters,
        page: pageNumber,
      });
      const stringifiedJobData = jobData.map((job: any) => JSON.stringify(job));
      setJobList(stringifiedJobData);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePreviousClick = async () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
    try {
      const jobData = await fetchPaginatedJob({
        queryString: queryStringWithFilters,
        page: pageNumber,
      });
      const stringifiedJobData = jobData.map((job: any) => JSON.stringify(job));
      setJobList(stringifiedJobData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const jobData = await fetchPaginatedJob({
          queryString: queryStringWithFilters,
          page: 1,
        });
        const stringifiedJobData = jobData.map((job: any) =>
          JSON.stringify(job)
        );
        setJobList(stringifiedJobData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobData();
  }, [queryString, additionalFilters]);

  const numberOfJobs = jobData.length;
  const buttonStyles =
    "bg-white_darkBG-2 text-natural-8_natural-5 regular-14 flex items-center gap-2 rounded-md p-2 md:px-3.5 md:py-1.5";

  return (
    <div className="flex w-full max-w-[80rem] flex-col gap-10">
      <PageTitle text="Let’s find your dream job" />
      <SearchBar setQueryString={setQueryString} />
      <section className="flex w-full justify-between gap-20">
        <SearchPageFilters setAdditionalFilters={setAdditionalFilters} />
        <main className="flex w-full flex-col gap-8">
          <div className="flex w-full">
            <p className="semibold-16 sm:semibold-18 text-natural-6">
              Showing:{" "}
              <span className="text-black_white">{numberOfJobs} Jobs</span>
            </p>
          </div>
          <div className="ms:gap-5 flex flex-col gap-7">
            {jobList.map((job: string) => (
              <SearchPageJobCard data={job} key={job} />
            ))}
          </div>
          <footer className="flex w-full items-center justify-between border-t border-t-natural-2 pt-5 dark:border-t-darkBG-3">
            <button
              className={buttonStyles}
              onClick={handlePreviousClick}
              disabled={pageNumber === 1}
            >
              <span>
                <FaArrowLeft />
              </span>
              <span className="hidden md:flex">Previous</span>
            </button>
            <p>Page {pageNumber}</p>
            <button
              className={buttonStyles}
              onClick={handleNextClick}
              disabled={jobList.length < 10}
            >
              <span className="hidden md:flex">Next</span>
              <span>
                <FaArrowRight />
              </span>
            </button>
          </footer>
        </main>
      </section>
    </div>
  );
};

export default SearchPageForm;
