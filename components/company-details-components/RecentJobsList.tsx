"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CompanyDetailsSmallCard } from ".";

const schema = z.object({
  inputText: z.string().min(1).max(20),
});

type FormFields = z.infer<typeof schema>;

const RecentJobsList = ({ data }: { data: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const parsedData = JSON.parse(data);
  const [text, setText] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [jobList, setJobList] = useState(parsedData);

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    setShowMore(false);
    const filteredData = parsedData.filter(
      (job: any) =>
        job.job_title.toLowerCase().includes(data.inputText.toLowerCase()) ||
        job.job_description.toLowerCase().includes(data.inputText.toLowerCase())
    );
    setJobList(filteredData);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  const handleInputChange = (e: any) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (text === "") {
      setJobList(parsedData);
    }
  }, [text]);

  return (
    <section className="bg-white_darkBG-2 mt-9 flex w-full flex-col rounded-[10px] px-4 py-5 md:px-5 md:py-7">
      <form
        className="bg-natural-3_darkBG-3 flex w-full gap-4 rounded-2xl px-4 py-2 lg:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Image
          src="/search.svg"
          height={24}
          width={24}
          alt="search icon for search bar"
        />
        <input
          {...register("inputText")}
          className="bg-natural-3_darkBG-3 w-full text-natural-6 outline-none"
          placeholder="Search Job Title or Keyword"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <button
          className="medium-13 md:medium-15 rounded-[10px] bg-primary px-3.5 py-2 text-white"
          type="submit"
          disabled={isSubmitting}
        >
          Search
        </button>
      </form>
      {errors.inputText && (
        <span className="text-red-500">{errors.inputText.message}</span>
      )}
      <h3 className="semibold-16 md:semibold-18 mt-5 md:mt-7">
        Recently Posted Job
      </h3>
      <div className="mt-2 flex w-full flex-col gap-2 md:mt-5 md:gap-x-9 md:gap-y-5 lg:grid lg:grid-cols-2">
        {showMore
          ? jobList.map((job: any) => (
              <CompanyDetailsSmallCard key={job.id} data={job} />
            ))
          : jobList
              .slice(0, 4)
              .map((job: any) => (
                <CompanyDetailsSmallCard key={job.id} data={job} />
              ))}
      </div>
      <button
        className="medium-15 mt-10 flex w-fit self-center rounded-[10px] border border-natural-5 px-3.5 py-2 text-natural-6 dark:border-none dark:bg-darkBG-3"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default RecentJobsList;
