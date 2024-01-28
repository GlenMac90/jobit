import dynamic from "next/dynamic";
import { fetchPaginatedJob } from "../fetch";
const SearchPageForm = dynamic(
  () => import("@/components/search-components/SearchPageForm"),
  { ssr: false }
);

const JobSearch = async () => {
  const queryString = "web developer in london";
  const jobData = await fetchPaginatedJob({ queryString, page: 1 });
  const stringifiedJobData = JSON.stringify(jobData);

  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <SearchPageForm data={stringifiedJobData} />
    </div>
  );
};

export default JobSearch;
