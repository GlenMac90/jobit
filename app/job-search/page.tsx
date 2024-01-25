import PageTitle from "@/components/PageTitle";

const JobSearch = () => {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className="flex w-full max-w-[80rem] flex-col gap-10 xl:flex-row">
        <div className="flex flex-col">
          <PageTitle text="Let’s find your dream job" />
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
