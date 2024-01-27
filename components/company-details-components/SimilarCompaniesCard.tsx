import Link from "next/link";

const SimilarCompaniesCard = ({ name }: { name: string }) => {
  return (
    <div className="bg-white_darkBG-2 flex w-full items-center justify-between gap-2 rounded-ten p-5 shadow">
      <div className="flex gap-2.5 md:gap-4">
        <div className="flex h-full flex-col justify-between">
          <p className="text-black_white medium-16 md:medium-18 line-clamp-1">
            {name}
          </p>
          <p className="regular-14 line-clamp-1 text-natural-6">{name}</p>
        </div>
      </div>
      <Link
        href={`/company-details/${name}`}
        className="flex-center h-[1.875rem] w-[5.25rem] shrink-0 rounded-ten border border-primary text-primary md:h-[2.25rem] md:w-[6.125rem]"
      >
        Visit
      </Link>
    </div>
  );
};

export default SimilarCompaniesCard;
