import PageTitle from "@/components/PageTitle";

const JobDetails = () => {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className="flex w-full max-w-[80rem] flex-col gap-10">
        <PageTitle text="Let’s find your dream job" />
        <section className="flex w-full justify-between gap-10">
          <div className="flex w-full">section one</div>
          <div className="flex w-full lg:max-w-[23.7rem]">section one</div>
        </section>
      </div>
    </div>
  );
};

export default JobDetails;
