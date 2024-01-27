import Image from "next/image";
import Link from "next/link";

import { dummySimilarCompanyData } from "@/utils/dummy-data";

const SimilarCompaniesCard = () => {
  const { image, companyName, companyType, websiteLink } =
    dummySimilarCompanyData;
  return (
    <div className="bg-white_darkBG-2 flex w-full items-center justify-between rounded-[10px] p-5 shadow">
      <div className="flex gap-2.5 md:gap-4">
        <Image
          src={image}
          height={48}
          width={48}
          alt={`Company Logo for ${companyName}`}
        />
        <div className="flex h-full flex-col justify-between">
          <p className="text-black_white medium-16 md:medium-18">
            {companyName}
          </p>
          <p className="regular-14 text-natural-6">{companyType}</p>
        </div>
      </div>
      <Link
        href={websiteLink}
        className="flex-center h-[1.875rem] w-[5.25rem] rounded-[10px] border border-primary text-primary md:h-[2.25rem] md:w-[6.125rem]"
      >
        Visit
      </Link>
    </div>
  );
};

export default SimilarCompaniesCard;
