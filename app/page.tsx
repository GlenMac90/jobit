import { IoChevronDownOutline } from "react-icons/io5";

import { getCurrentDateFormatted } from "@/utils";
import JobPost from "@/components/job-card-components/JobPost";

export default function Home() {
  const todaysDate = getCurrentDateFormatted();
  return (
    <div className="flex flex-1 flex-col px-6 py-7 md:py-12">
      <div className="flex flex-col gap-1.5 md:gap-5">
        <h1 className="bold-22 md:bold-32 text-black_white">
          Welcome to the Job Search Platform for Developers
        </h1>
        <h3 className="regular-16 md:regular-20 text-natural-6">
          {todaysDate}
        </h3>
      </div>
      <main className="mt-12 flex flex-col gap-7 md:mt-9 md:gap-8">
        <div className="flex w-full items-center justify-between">
          <h3 className="semibold-22 text-black_white">Latest Job Posts</h3>
          <button className="flex items-center gap-2 rounded-[10px] border border-natural-2 px-2.5 py-2 dark:border-natural-8">
            <span className="text-natural-7">See All</span>
            <span className="flex text-natural-7 md:hidden">
              <IoChevronDownOutline />
            </span>
          </button>
        </div>
        <div className="flex w-full gap-5">
          <JobPost />
          <JobPost />
        </div>
      </main>
    </div>
  );
}
