import { fetchPaginatedJob } from "../fetch";
import SearchPageForm from "@/components/search-components/SearchPageForm";

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
