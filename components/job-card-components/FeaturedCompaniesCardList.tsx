import { FeaturedCompaniesCard } from ".";
import { FeaturedCompaniesCardProps } from "./FeaturedCompaniesCard";

const FeaturedCompaniesCardList = ({ data }: any) => {
  const reducedList = data.employers.slice(0, 3);

  const list = reducedList.map((employer: any) => ({
    name: employer.name,
    id: employer.value,
    count: employer.est_count,
  }));
  return (
    <>
      <h3 className="semibold-22 text-black_white">Featured Companies</h3>
      <section className="flex flex-col gap-9 md:flex-row">
        {list.map((employer: FeaturedCompaniesCardProps) => (
          <FeaturedCompaniesCard key={employer.id} data={employer} />
        ))}
      </section>
    </>
  );
};

export default FeaturedCompaniesCardList;
