import Image from "next/image";

import { dummyFeaturedCompany } from "@/utils/dummy-data";

const FeaturedCompaniesCard = () => {
  const { companyName, image, city, country, vacancies } = dummyFeaturedCompany;

  const vacanciesText = vacancies > 1 ? "vacancies" : "vacancy";

  return (
    <div className="card-styles gap-6 p-5">
      <div className="flex gap-2.5">
        <Image
          src={image}
          alt={`Company logo for ${companyName}`}
          height={48}
          width={48}
          className="shrink-0"
        />
        <h2 className="text-black_white semibold-18">{companyName}</h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2.5">
          <Image
            src="/location.svg"
            height={20}
            width={20}
            alt={`icon displaying the location of ${companyName}, in ${city},${country}`}
          />
          <span className="regular-14 text-natural-6">
            {city}, {country}
          </span>
        </div>
        <div className="flex gap-2.5">
          <Image
            src="/job-type.svg"
            height={20}
            width={20}
            alt={`icon displaying the number of vacancies for the company ${companyName}, ${vacancies} vacancies`}
          />
          <span className="regular-14 text-natural-6">
            {vacancies} {vacanciesText}
          </span>
        </div>
      </div>
      <button className="flex-center semibold-13 bg-natural-2_darkBG-3 h-12 w-full rounded-[10px] text-natural-6">
        See All
      </button>
    </div>
  );
};

export default FeaturedCompaniesCard;
