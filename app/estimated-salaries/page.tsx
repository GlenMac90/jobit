"use client";

import { KeyboardEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { initialData, rapidAPIBaseUrl, rapidAPIOptions } from "../fetch";
import { SalaryData } from "@/types";
import EstimateSalaryBarChart from "@/components/EstimateSalaryBarChart";
import PageTitle from "@/components/PageTitle";

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

const estimatedSalariesSchema = z.object({
  jobTitle: z.string().min(5).max(30),
  location: z.string().min(1).max(30),
  radius: z.number().min(1).max(100),
});

type FormFields = z.infer<typeof estimatedSalariesSchema>;

const EstimatedSalaries = () => {
  const [data, setData] = useState<SalaryData[]>(initialData);
  const [graphJobTitle, setGraphJobTitle] = useState<string>("Web Developer");
  const [graphLocation, setGraphLocation] = useState<string>("London");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      jobTitle: "Web Developer",
      radius: 20,
    },
    resolver: zodResolver(estimatedSalariesSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setGraphJobTitle(data.jobTitle);
    setGraphLocation(data.location);
    const url = `${rapidAPIBaseUrl}estimated-salary?job_title=${data.jobTitle}&location=${data.location}&radius=${data.radius}`;
    try {
      const response = await fetch(url, rapidAPIOptions);
      const { data } = await response.json();
      setData(data);
    } catch (error) {
      setError("root", {
        message: "This is invalid",
      });
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (isSubmitting) return;
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className="flex w-full max-w-[38.625rem] flex-col gap-10 xl:max-w-[80rem] xl:flex-row xl:gap-20">
        <section className="flex w-full flex-col gap-10">
          <PageTitle text="Estimate Salaries" />
          <form
            className="flex flex-col gap-5 lg:gap-7"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2 md:gap-3">
              <label
                htmlFor="jobTitle"
                className="semibold-14 md:semibold-15 text-natural-6 dark:text-natural-5"
              >
                Job Title
              </label>
              <div className="bg-natural-2_darkBG-2 flex w-full rounded-ten border border-natural-5 px-5 py-3 dark:border-natural-8">
                <input
                  {...register("jobTitle")}
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  className="bg-natural-2_darkBG-2 flex w-full text-natural-8 outline-none dark:text-natural-6"
                  autoComplete="off"
                  onKeyDown={handleKeyDown}
                />
              </div>
              {errors.jobTitle && (
                <span className="text-red-500">{errors.jobTitle.message}</span>
              )}
            </div>
            <div className="flex w-full flex-col gap-5 lg:flex-row lg:gap-9">
              <div className="flex w-full flex-col gap-2 md:gap-3">
                <label
                  htmlFor="location"
                  className="semibold-14 md:semibold-15 text-natural-6 dark:text-natural-5"
                >
                  Location
                </label>
                <div className="bg-natural-2_darkBG-2 flex w-full rounded-ten border border-natural-5 px-5 py-3 dark:border-natural-8">
                  <input
                    {...register("location")}
                    type="text"
                    name="location"
                    id="location"
                    className="bg-natural-2_darkBG-2 flex w-full text-natural-8 outline-none dark:text-natural-6"
                    autoComplete="off"
                    onKeyDown={handleKeyDown}
                  />
                </div>
                {errors.location && (
                  <span className="text-red-500">
                    {errors.location.message}
                  </span>
                )}
              </div>
              <div className="flex w-full flex-col gap-2 md:gap-3">
                <label
                  htmlFor="radius"
                  className="semibold-14 md:semibold-15 text-natural-6 dark:text-natural-5"
                >
                  Radius
                </label>
                <div className="bg-natural-2_darkBG-2 flex w-full rounded-ten border border-natural-5 px-5 py-3 dark:border-natural-8">
                  <input
                    {...register("radius", { valueAsNumber: true })}
                    type="number"
                    name="radius"
                    id="radius"
                    className="bg-natural-2_darkBG-2 flex w-full text-natural-8 outline-none dark:text-natural-6"
                    autoComplete="off"
                    onKeyDown={handleKeyDown}
                  />
                </div>
                {errors.radius && (
                  <span className="text-red-500">{errors.radius.message}</span>
                )}
              </div>
            </div>
          </form>
        </section>
        <div className="bg-white_darkBG-2 flex w-full flex-col gap-2.5 rounded-ten p-5 md:p-6">
          <p className="semibold-16 md:semibold-22 text-black_white">
            Estimated Salary<span className="light-16 md:light-22"> for </span>
            {graphJobTitle}
            <span className="light-16 md:light-22"> in </span>
            {graphLocation}
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
          <EstimateSalaryBarChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default EstimatedSalaries;
