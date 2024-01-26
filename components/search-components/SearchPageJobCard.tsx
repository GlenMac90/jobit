import Image from "next/image";
import Link from "next/link";

import { dummySearchPageCard } from "@/utils/dummy-data";
import { formatSalary, timeSince } from "@/utils";
import FormattedText from "../FormattedText";
import JobTitleAndInfo from "../JobTitleAndInfo";

const SearchPageJobCard = () => {
  const {
    jobTitle,
    image,
    companyName,
    city,
    country,
    dateAdded,
    jobDescription,
    techTags,
    minimumSalary,
    maximumSalary,
    salaryType,
    numberOfApplicants,
    websiteLink,
  } = dummySearchPageCard;

  const formattedDate = timeSince(dateAdded);
  const { duration, salary } = formatSalary({
    minimumSalary,
    maximumSalary,
    salaryType,
  });

  return (
    <div className="card-styles gap-5 p-5">
      <div className="flex gap-3 md:gap-5">
        <div className="flex-center bg-natural-3_darkBG-3 h-fit shrink-0 rounded-[10px] p-1.5 md:p-2">
          <Image
            src={image}
            height={34}
            width={34}
            alt={`logo for the conmpany ${companyName}`}
            className="size-8 shrink-0 md:size-12"
          />
        </div>
        <JobTitleAndInfo
          jobTitle={jobTitle}
          companyName={companyName}
          city={city}
          country={country}
          date={formattedDate}
        />
      </div>
      <p className="light-14 md:light-13 text-natural-7_natural-5">
        {jobDescription}
      </p>
      <div className="flex gap-1">
        {techTags.map((tag) => (
          <p key={tag} className="badge-styles">
            {tag}
          </p>
        ))}
      </div>
      <div className="flex w-full flex-col gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        <div className="flex gap-10">
          <FormattedText leftText={salary} rightText={`/${duration}`} />
          <FormattedText
            leftText={numberOfApplicants.toString()}
            rightText="People Applied"
          />
        </div>
        <Link
          href={websiteLink}
          className="flex-center semibold-13 md:semibold-15 h-9 w-[8.8rem] self-end rounded-[10px] bg-primary text-white md:h-12 md:w-[12.5rem]"
        >
          Visit
        </Link>
      </div>
    </div>
  );
};

export default SearchPageJobCard;
