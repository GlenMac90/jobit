import Image from "next/image";

import Dot from "../Dot";
import RecentJobsList from "./RecentJobsList";

const CompanyDetailsLargeCard = ({ data }: { data: string }) => {
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  const {
    employer_logo: image,
    employer_name: companyName,
    job_city: city,
    job_country: country,
    employer_company_type: companyType,
  } = parsedData[0];

  return (
    <div className="bg-natural-3_darkBG-1 flex w-full flex-col rounded-[10px]">
      <div className="relative flex h-[9.375rem] w-full md:h-48">
        <Image
          src="/job-details-background.jpg"
          height={192}
          width={926}
          alt="background image for job details page"
          className="rounded-t-xl object-cover"
        />
        <div className="bg-natural-3_natural-8 absolute bottom-0 left-2.5 flex translate-y-6 rounded-[10px] p-1 md:left-5 md:translate-y-12">
          <Image
            src={image}
            height={46}
            width={46}
            alt={`company logo for company`}
            className="size-[3rem] shrink-0 rounded-md object-contain md:size-[4rem]"
          />
        </div>
      </div>
      <div className="mt-9 flex h-full flex-col px-3 md:mt-16 md:gap-1.5 md:px-6">
        <h3 className="semibold-22 md:semibold-32">{companyName}</h3>
        <div className="regular-14 md:regular-18 flex flex-wrap gap-1 text-natural-7">
          <span>{companyName}</span>
          <Dot />
          <span>
            {city}, {country}
          </span>
        </div>
        <span className="regular-14 md:regular-16 text-natural-6_natural-7">
          {companyType}
        </span>
      </div>
      <RecentJobsList data={data} />
    </div>
  );
};

export default CompanyDetailsLargeCard;
