"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  jobTitle: z.string().min(5).max(30),
  location: z.string().min(5).max(30),
  jobType: z.string().min(5).max(30),
});

type FormFields = z.infer<typeof schema>;

const SearchBar = ({ setQueryString }: { setQueryString: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      jobTitle: "Web Developer",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const { jobTitle, location, jobType } = data;
    setQueryString(`${jobTitle} in ${location} as ${jobType}`);
  };

  const isError = Object.keys(errors).length > 0;

  const inputDivStyles =
    "flex h-[3.3rem] w-full gap-3 border-b border-b-natural-2 dark:border-b-natural-8 lg:ml-2.5 lg:size-full lg:border-b-0 lg:px-0 relative";

  const inputTagStyles =
    "bg-white_darkBG-2 flex w-full text-natural-6 outline-none";

  const firstTwoInputStyles =
    "border-r-natural-2 px-5 dark:border-r-natural-8 lg:border-r";

  const errorMessageStyles =
    "lg:absolute lg:flex hidden lg:top-20 text-red-500";

  return (
    <form
      className="card-styles flex w-full flex-col items-center px-3 pb-3 lg:h-20 lg:flex-row lg:pb-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`${inputDivStyles} ${firstTwoInputStyles}`}>
        <Image
          src="/search.svg"
          height={28}
          width={28}
          alt="search icon for job title field"
          className="shrink-0"
        />
        <input
          {...register("jobTitle")}
          type="text"
          placeholder="Job Title, Company or Keywords"
          className={inputTagStyles}
          autoComplete="off"
        />
        {errors.jobTitle && (
          <span className={errorMessageStyles}>{errors.jobTitle.message}</span>
        )}
      </div>
      <div className={`${inputDivStyles} ${firstTwoInputStyles}`}>
        <Image
          src="/location.svg"
          height={28}
          width={28}
          alt="search icon for job location field"
          className="shrink-0"
        />
        <input
          {...register("location")}
          type="text"
          placeholder="Select Location"
          className={inputTagStyles}
          autoComplete="off"
        />

        {errors.location && (
          <span className={errorMessageStyles}>{errors.location.message}</span>
        )}
      </div>
      <div className={`${inputDivStyles} px-5`}>
        <Image
          src="/job-type.svg"
          height={28}
          width={28}
          alt="search icon for job type type"
          className="shrink-0"
        />
        <input
          {...register("jobType")}
          type="text"
          placeholder="Job Type"
          className={inputTagStyles}
          autoComplete="off"
        />
        {errors.jobType && (
          <span className={errorMessageStyles}>{errors.jobType.message}</span>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex-center mt-5 h-12 w-full shrink-0 rounded-ten bg-primary text-white lg:ml-4 lg:mt-0 lg:w-28"
      >
        {isSubmitting ? "Searching..." : "Find Jobs"}
      </button>
      {isError && (
        <span className="mt-2 self-start text-red-500 lg:hidden">
          Please fill in all the fields
        </span>
      )}
      {errors.root && (
        <span className="mt-2 self-start text-red-500 lg:absolute lg:translate-y-[4.5rem]">
          {errors.root.message}
        </span>
      )}
    </form>
  );
};

export default SearchBar;
