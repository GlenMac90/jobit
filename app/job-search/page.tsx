import PageTitle from "@/components/PageTitle";
import SearchBar from "@/components/search-components/SearchBar";

const JobSearch = () => {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className="flex w-full max-w-[80rem] flex-col gap-10">
        <div className="flex flex-col">
          <PageTitle text="Let’s find your dream job" />
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default JobSearch;
