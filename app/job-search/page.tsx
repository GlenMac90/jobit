import PageTitle from "@/components/PageTitle";
import SearchBar from "@/components/search-components/SearchBar";
import SearchPageFilters from "@/components/search-components/SearchPageFilters";
import SearchPageJobCard from "@/components/search-components/SearchPageJobCard";

const JobSearch = () => {
  const numberOfJobs = 10;
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className="flex w-full max-w-[80rem] flex-col gap-10">
        <div className="flex flex-col">
          <PageTitle text="Let’s find your dream job" />
        </div>
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
          </main>
        </section>
      </div>
    </div>
  );
};

export default JobSearch;
