export const navBarLinks = [
  {
    name: "Overview",
    path: "/",
  },
  {
    name: "Job Search",
    path: "/job-search",
  },
  {
    name: "Estimated Salaries",
    path: "/estimated-salaries",
  },
];

export const jobTypes = [
  "Full Time",
  "Part Time",
  "Contract",
  "Internship",
  "Temporary",
];

export const searchPageFilters = [
  {
    label: "employmentType",
    heading: "Employment Type",
    filters: [
      {
        label: "Full Time",
        filter: "FULLTIME",
      },
      {
        label: "Part Time",
        filter: "PARTTIME",
      },
      {
        label: "Contract",
        filter: "CONTRACTOR",
      },
      {
        label: "Internship",
        filter: "INTERN",
      },
    ],
  },
  {
    label: "jobRequirements",
    heading: "Job Requirements",
    filters: [
      {
        label: "No Degree",
        filter: "no_degree",
      },
      {
        label: "No Experience",
        filter: "no_experience",
      },
      {
        label: "2 Years Of Experience",
        filter: "under_3_years_experience",
      },
      {
        label: "3+ Years Of Experience",
        filter: "more_than_3_years_experience",
      },
    ],
  },
  {
    label: "datePosted",
    heading: "Date Posted",
    filters: [
      {
        label: "Past Day",
        filter: "today",
      },
      {
        label: "Past 3 Days",
        filter: "3days",
      },
      {
        label: "Past Week",
        filter: "week",
      },
      {
        label: "Past Month",
        filter: "month",
      },
    ],
  },
];
