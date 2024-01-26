import PageTitle from "@/components/PageTitle";

const EstimatedSalaries = () => {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className="flex w-full max-w-[80rem] flex-col gap-10 xl:flex-row">
        <section className="flex w-full flex-col gap-10">
          <PageTitle text="Estimate Salaries" />
          <form className="flex flex-col gap-5 lg:gap-7">
            <div className="flex flex-col gap-2 md:gap-3">
              <label
                htmlFor="jobTitle"
                className="semibold-14 md:semibold-15 text-natural-6 dark:text-natural-5"
              >
                Job Title
              </label>
              <div className="bg-natural-2_darkBG-2 flex w-full rounded-[10px] border border-natural-5 px-5 py-3 dark:border-natural-8">
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  className="bg-natural-2_darkBG-2 flex w-full text-natural-6 outline-none"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-5 lg:flex-row lg:gap-9">
              <div className="flex w-full flex-col gap-2 md:gap-3">
                <label
                  htmlFor="location"
                  className="semibold-14 md:semibold-15 text-natural-6 dark:text-natural-5"
                >
                  Location
                </label>
                <div className="bg-natural-2_darkBG-2 flex w-full rounded-[10px] border border-natural-5 px-5 py-3 dark:border-natural-8">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="bg-natural-2_darkBG-2 flex w-full text-natural-6 outline-none"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-2 md:gap-3">
                <label
                  htmlFor="radius"
                  className="semibold-14 md:semibold-15 text-natural-6 dark:text-natural-5"
                >
                  Radius
                </label>
                <div className="bg-natural-2_darkBG-2 flex w-full rounded-[10px] border border-natural-5 px-5 py-3 dark:border-natural-8">
                  <input
                    type="number"
                    name="radius"
                    id="radius"
                    className="bg-natural-2_darkBG-2 flex w-full text-natural-6 outline-none"
                  />
                </div>
              </div>
            </div>
          </form>
        </section>
        <div className="flex w-full">content</div>
      </div>
    </div>
  );
};

export default EstimatedSalaries;
