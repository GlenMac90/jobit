import ApexCharts from "apexcharts";

import PageTitle from "@/components/PageTitle";

const EstimatedSalaries = () => {
  const jobTitle = "Software Engineer";
  const location = "New York, NY";
  const salaryFields = [
    {
      label: "Minimum Salary",
      color: "bg-yellow-primary",
    },
    {
      label: "Median Salary",
      color: "bg-primary",
    },
    {
      label: "Maximum Salary",
      color: "bg-pink-primary",
    },
  ];
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className="flex w-full max-w-[38.625rem] flex-col gap-10 xl:max-w-[80rem] xl:flex-row xl:gap-20">
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
                  className="bg-natural-2_darkBG-2 flex w-full text-natural-8 outline-none dark:text-natural-6 "
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
                    className="bg-natural-2_darkBG-2 flex w-full text-natural-8 outline-none dark:text-natural-6 "
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
                    className="bg-natural-2_darkBG-2 flex w-full text-natural-8 outline-none dark:text-natural-6 "
                  />
                </div>
              </div>
            </div>
          </form>
        </section>
        <div className="bg-white_darkBG-2 flex w-full flex-col gap-2.5 rounded-[10px] p-5 md:p-6">
          <p className="semibold-16 md:semibold-22 text-black_white">
            Estimated Salary<span className="light-16 md:light-22"> for </span>
            {jobTitle}
            <span className="light-16 md:light-22"> in </span>
            {location}
          </p>
          <div className="flex w-full gap-2 md:gap-4">
            {salaryFields.map((field) => (
              <div
                key={field.label}
                className="flex items-center gap-1.5 md:gap-2"
              >
                <div
                  className={`size-2 rounded-full md:size-2.5 ${field.color}`}
                />
                <span className="regular-10 md:regular-13 text-natural-7_natural-5">
                  {field.label}
                </span>
              </div>
            ))}
          </div>
          <p>chart</p>
        </div>
      </div>
    </div>
  );
};

export default EstimatedSalaries;
