import { formatSalary } from "@/utils";
import FormattedText from "../FormattedText";
import SmallCardHeadingAndTags from "../SmallCardHeadingAndTags";
import { dummyCompanyDetailsSmallCard } from "@/utils/dummy-data";

const CompanyDetailsSmallCard = () => {
  const {
    image,
    jobTitle,
    jobDescription,
    techTags,
    minimumSalary,
    maximumSalary,
    salaryType,
  } = dummyCompanyDetailsSmallCard;

  const { duration, salary } = formatSalary({
    minimumSalary,
    maximumSalary,
    salaryType,
  });

  return (
    <div className="bg-white_darkBG-3 flex flex-col gap-5 rounded-[10px] p-5 shadow-lg">
      <SmallCardHeadingAndTags
        image={image}
        jobTitle={jobTitle}
        techTags={techTags}
        dark
      />
      <div className="light-14 light-16 text-natural-7_natural-6">
        {jobDescription}
      </div>
      <div className="flex w-full items-center justify-between">
        <FormattedText leftText={salary} rightText={`/${duration}`} />
        <button className="medium-13 md:medium-15 rounded-[10px] bg-primary/10 px-3.5 py-2 text-primary">
          Visit
        </button>
      </div>
    </div>
  );
};

export default CompanyDetailsSmallCard;
