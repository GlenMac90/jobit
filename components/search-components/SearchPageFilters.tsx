"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

import { searchPageFilters } from "@/constants";

const SearchPageFilters = () => {
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
                  key={filter}
                  className="flex items-center justify-between text-white"
                >
                  <div className="flex items-center gap-3.5">
                    <Checkbox id={filter} />
                    <label
                      htmlFor={filter}
                      className="regular-14 text-natural-8_natural-5"
                    >
                      {filter}
                    </label>
                  </div>
                  <p className="text-natural-8_natural-2 bg-natural-2_darkBG-3 regular-14 flex rounded px-1.5">
                    100
                  </p>
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
