import Image from "next/image";
import Link from "next/link";

export type FeaturedCompaniesCardProps = {
  name: string;
  id: string;
  count: number;
};

const FeaturedCompaniesCard = ({
  data,
}: {
  data: FeaturedCompaniesCardProps;
}) => {
  const { name, id, count } = data;

  const vacanciesText = count > 1 ? "vacancies" : "vacancy";

  return (
    <div className="card-styles justify-between gap-6 p-5 hover:shadow-xl">
      <div className="flex gap-2.5">
        <h2 className="text-black_white semibold-18">{name}</h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2.5">
          <Image
            src="/job-type.svg"
            height={20}
            width={20}
            alt={`icon displaying the number of vacancies for the company ${name}, ${count} vacancies`}
          />
          <span className="regular-14 text-natural-6">
            {count} {vacanciesText}
          </span>
        </div>
      </div>
      <Link
        href={`/company-details/${id}`}
        className="flex-center semibold-13 bg-natural-2_darkBG-3 h-12 w-full rounded-ten text-natural-6 hover:bg-natural-3 hover:dark:bg-natural-8"
      >
        See All
      </Link>
    </div>
  );
};

export default FeaturedCompaniesCard;
