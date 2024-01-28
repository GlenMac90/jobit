import Image from "next/image";
import Link from "next/link";

import { formatSalary, timeSince } from "@/utils";
import FormattedText from "../FormattedText";
import JobTitleAndInfo from "../JobTitleAndInfo";

const SearchPageJobCard = ({ data }: { data: string }) => {
  const parsedData = JSON.parse(data);

  const {
    job_title: jobTitle,
    employer_logo: image,
    employer_name: companyName,
    job_city: city,
    job_country: country,
    job_posted_at_timestamp: dateAdded,
    job_description: jobDescription,
    job_min_salary: minimumSalary,
    job_max_salary: maximumSalary,
    job_salary_period: salaryType,
    employer_website: websiteLink,
  } = parsedData;

  const formattedDate = timeSince(dateAdded);
  const { duration, salary } = formatSalary({
    minimumSalary,
    maximumSalary,
    salaryType,
  });

  const numberOfApplicants = 5;

  const shortenedDescription = jobDescription.slice(0, 250) + "...";

  const location = `${city}, ${country}`;

  return (
    <div className="card-styles gap-5 p-5">
      <div className="flex gap-3 md:gap-5">
        <div className="flex-center bg-natural-3_darkBG-3 h-fit shrink-0 rounded-ten p-1.5 md:p-2">
          <Image
            src={image || "/jobit-logo.svg"}
            height={34}
            width={34}
            alt={`logo for the conmpany ${companyName}`}
            className="size-8 shrink-0 object-contain md:size-12"
          />
        </div>
        <JobTitleAndInfo
          jobTitle={jobTitle}
          companyName={companyName}
          location={location}
          date={formattedDate}
        />
      </div>
      <p className="light-14 md:light-13 text-natural-7_natural-5">
        {shortenedDescription}
      </p>
      <div className="flex w-full flex-col gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        <div className="flex gap-10">
          {minimumSalary && maximumSalary && salaryType && (
            <FormattedText leftText={salary} rightText={`/${duration}`} />
          )}
          <FormattedText
            leftText={numberOfApplicants.toString()}
            rightText="People Applied"
          />
        </div>
        {websiteLink && (
          <Link
            href={websiteLink}
            className="flex-center semibold-13 md:semibold-15 h-9 w-[8.8rem] self-end rounded-ten bg-primary text-white md:h-12 md:w-[12.5rem]"
          >
            Visit
          </Link>
        )}
      </div>
    </div>
  );
};

export default SearchPageJobCard;
