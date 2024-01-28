"use client";

import { Dispatch, SetStateAction, useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

import { searchPageFilters } from "@/constants";

type SelectedFiltersType = {
  [key: string]: string[];
};

const SearchPageFilters = ({
  setAdditionalFilters,
}: {
  setAdditionalFilters: Dispatch<SetStateAction<string>>;
}) => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersType>({
    employmentType: [],
    jobRequirements: [],
    datePosted: [],
  });

  const constructQueryString = () => {
    let queryString = "";
    Object.keys(selectedFilters).forEach((key) => {
      if (selectedFilters[key].length) {
        queryString += `${key}=${selectedFilters[key].join(",")}&`;
      }
    });
    return queryString.slice(0, -1); // Remove the last '&'
  };

  const handleCheckboxChange = (filterKey: string, filterValue: string) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: prevFilters[filterKey].includes(filterValue)
        ? prevFilters[filterKey].filter(
            (value: string) => value !== filterValue
          )
        : [...prevFilters[filterKey], filterValue],
    }));
  };

  useEffect(() => {
    const newQueryString = constructQueryString();
    setAdditionalFilters(newQueryString);
  }, [selectedFilters]);

  return (
    <aside className="hidden w-[15.5rem] flex-col gap-7 lg:flex">
      <Accordion type="multiple" className="w-full">
        {searchPageFilters.map((pageFilter) => (
          <AccordionItem key={pageFilter.heading} value={pageFilter.heading}>
            <AccordionTrigger className="label-styles no-underline">
              {pageFilter.heading}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              {pageFilter.filters.map((filter) => (
                <div
                  key={filter.label}
                  className="flex items-center justify-between text-white"
                >
                  <div className="flex items-center gap-3.5">
                    <Checkbox
                      id={filter.label}
                      onClick={() =>
                        handleCheckboxChange(pageFilter.label, filter.filter)
                      }
                    />
                    <label
                      htmlFor={filter.label}
                      className="regular-14 text-natural-8_natural-5"
                    >
                      {filter.label}
                    </label>
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
};

export default SearchPageFilters;
