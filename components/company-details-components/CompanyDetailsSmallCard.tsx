import Link from "next/link";

import { formatSalary } from "@/utils";
import FormattedText from "../FormattedText";
import SmallCardHeadingAndTags from "../SmallCardHeadingAndTags";

const CompanyDetailsSmallCard = ({ data }: any) => {
  const {
    job_id: id,
    employer_logo: image,
    job_title: jobTitle,
    job_description: jobDescription,
    job_min_salary: minimumSalary,
    job_max_salary: maximumSalary,
    job_salary_period: salaryType,
  } = data;

  const { duration, salary } = formatSalary({
    minimumSalary,
    maximumSalary,
    salaryType,
  });

  const shortenedDescription = jobDescription.slice(0, 100);

  const salaryDataPresent = minimumSalary && maximumSalary && salaryType;

  return (
    <div className="bg-white_darkBG-3 flex flex-col gap-5 rounded-[10px] p-5 shadow-lg">
      <SmallCardHeadingAndTags image={image} jobTitle={jobTitle} dark />
      <div className="light-14 light-16 text-natural-7_natural-6">
        {shortenedDescription}
      </div>
      <div
        className={`flex w-full items-center ${salaryDataPresent ? "justify-between" : "justify-end"}`}
      >
        {salaryDataPresent && (
          <FormattedText leftText={salary} rightText={`/${duration}`} />
        )}
        <Link
          href={`/job-details/${id}`}
          className="medium-13 md:medium-15 rounded-[10px] bg-primary/10 px-3.5 py-2 text-primary"
        >
          Visit
        </Link>
      </div>
    </div>
  );
};

export default CompanyDetailsSmallCard;
