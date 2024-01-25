"use client";

import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  jobTitle: string;
  location: string;
  jobType: string;
};

const SearchBar = () => {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  const inputDivStyles =
    "flex h-[3.3rem] w-full gap-3 border-b border-b-natural-2 dark:border-b-natural-8 lg:ml-2.5 lg:size-full lg:border-b-0 lg:px-0";

  const inputTagStyles =
    "bg-white_darkBG-2 flex w-full text-natural-6 outline-none";

  const firstTwoInputStyles =
    "border-r-natural-2 px-5 dark:border-r-natural-8 lg:border-r";

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
        />
        <input
          {...register("jobTitle", {
            required: true,
            maxLength: 20,
            minLength: 5,
            pattern: /^[A-Za-z]+$/i,
          })}
          type="text"
          placeholder="Job Title, Company or Keywords"
          className={inputTagStyles}
        />
      </div>
      <div className={`${inputDivStyles} ${firstTwoInputStyles}`}>
        <Image
          src="/location.svg"
          height={28}
          width={28}
          alt="search icon for job location field"
        />
        <input
          {...register("location")}
          type="text"
          placeholder="Select Location"
          className={inputTagStyles}
        />
      </div>
      <div className={`${inputDivStyles} px-5`}>
        <Image
          src="/job-type.svg"
          height={28}
          width={28}
          alt="search icon for job type type"
        />
        <input
          {...register("jobType")}
          type="text"
          placeholder="Job Type"
          className={inputTagStyles}
        />
      </div>
      <button className="flex-center mt-5 h-12 w-full shrink-0 rounded-[10px] bg-primary text-white lg:ml-4 lg:mt-0 lg:w-28">
        Find Jobs
      </button>
    </form>
  );
};

export default SearchBar;
