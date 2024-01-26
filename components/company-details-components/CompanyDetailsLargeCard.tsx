import Image from "next/image";

import { dummyCompanyDetailsData } from "@/utils/dummy-data";
import Dot from "../Dot";
import CompanyDetailsSmallCard from "./CompanyDetailsSmallCard";

const CompanyDetailsLargeCard = () => {
  const { image, companyName, city, country, companyType } =
    dummyCompanyDetailsData;

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
            className="size-[3rem] shrink-0 rounded-md md:size-[4rem]"
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
      <section className="bg-white_darkBG-2 mt-9 flex w-full flex-col rounded-[10px] px-4 py-5 md:px-5 md:py-7">
        <form className="bg-natural-3_darkBG-3 flex w-full gap-4 rounded-2xl px-4 py-2 lg:w-1/2">
          <Image
            src="/search.svg"
            height={24}
            width={24}
            alt="search icon for search bar"
          />
          <input
            className="bg-natural-3_darkBG-3 w-full text-natural-6 outline-none"
            placeholder="Search Job Title or Keyword"
          />
          <button className="medium-13 md:medium-15 rounded-[10px] bg-primary px-3.5 py-2 text-white">
            Search
          </button>
        </form>
        <h3 className="semibold-16 md:semibold-18 mt-5 md:mt-7">
          Recently Posted Job
        </h3>
        <div className="mt-2 flex w-full flex-col gap-2 md:mt-5 md:gap-x-9 md:gap-y-5 lg:grid lg:grid-cols-2">
          <CompanyDetailsSmallCard />
          <CompanyDetailsSmallCard />
          <CompanyDetailsSmallCard />
          <CompanyDetailsSmallCard />
        </div>
      </section>
    </div>
  );
};

export default CompanyDetailsLargeCard;
