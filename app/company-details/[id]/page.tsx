import { fetchCompanyJobs, fetchSimilarCompanies } from "@/app/fetch";
import PageTitle from "@/components/PageTitle";
import {
  CompanyDetailsLargeCard,
  SimilarCompaniesCard,
} from "@/components/company-details-components";

const CompanyDetails = async ({
  params,
}: {
  params: { companyName: string };
}) => {
  const companyName = params.companyName;
  const data = await fetchSimilarCompanies(companyName);
  const companyJobs = await fetchCompanyJobs(companyName);
  const stringifiedCompanyJobs = JSON.stringify(companyJobs);
  const employers = data.employers.slice(0, 8);

  const employersList = employers.map((employer: any) => employer.name);

  return (
    <div className="flex flex-1 flex-col items-center px-6 py-7 md:py-12">
      <div className="flex w-full max-w-[80rem] flex-col gap-10">
        <PageTitle text="Let’s find your dream job" />
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <CompanyDetailsLargeCard data={stringifiedCompanyJobs} />
          <div className="flex w-full flex-col gap-7 lg:max-w-[20rem] lg:gap-5 xl:max-w-[25rem]">
            <h3 className="text-black_white semibold-22">Similar Companies</h3>
            <ul className="flex w-full flex-col gap-5">
              {employersList.map((employer: string) => (
                <SimilarCompaniesCard key={employer} name={employer} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
