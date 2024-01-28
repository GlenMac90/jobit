export const rapidAPIBaseUrl = "https://jsearch.p.rapidapi.com/";
export const rapidAPIOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

export const initialData = [
  {
    location: "London, UK",
    job_title: "Web Developer",
    publisher_name: "Indeed",
    publisher_link:
      "https://uk.indeed.com/cmp/Apple/salaries/Web-Developer/London-ENG",
    min_salary: 29540.490146735778,
    max_salary: 50181.36073126418,
    median_salary: 38501.7141466676,
    salary_period: "YEAR",
    salary_currency: "GBP",
  },
  {
    location: "London, UK",
    job_title: "Web Developer",
    publisher_name: "Glassdoor",
    publisher_link:
      "https://www.glassdoor.com/Salary/Google-Web-Developer-London-Salaries-EJI_IE9079.0,6_KO7,20_IL.21,27_IM1035.htm",
    min_salary: 43000,
    max_salary: 100000,
    median_salary: 50465,
    salary_period: "YEAR",
    salary_currency: "GBP",
  },
  {
    location: "West Virginia",
    job_title: "Web Developer",
    publisher_name: "Salary.com",
    publisher_link:
      "https://www.salary.com/research/company/accelerate-uk/web-developer-salary?cjid=15781951",
    min_salary: 60126.32501358,
    max_salary: 77106.79913148,
    median_salary: 68624.13805722,
    salary_period: "YEAR",
    salary_currency: "USD",
  },
];

export const chartOptions = ({ data, theme, isDarkMode }) => {
  return {
    chart: {
      id: "column",
      width: "100%",
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1280,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 12,
              borderRadiusApplication: "end",
              columnWidth: "35%",
              endingShape: "rounded", // Only rou
            },
          },
        },
      },
      {
        breakpoint: 800,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 8,
              borderRadiusApplication: "end",
              columnWidth: "35%",
              endingShape: "rounded",
            },
          },
        },
      },
      {
        breakpoint: 560,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              borderRadiusApplication: "end",
              columnWidth: "50%",
              endingShape: "rounded",
            },
          },
          yaxis: {
            min: 0,
            labels: {
              formatter: (val) => {
                return (
                  (Math.ceil(val / 1000) * 1000) / 1000 +
                  "k " +
                  data[0]?.salary_currency
                );
              },
              offsetX: -13,
              style: {
                colors: "#92929D",
                fontSize: "12px",
              },
            },
            tickAmount: 2,
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "14px",
              },
              offsetY: 5,
            },
          },
        },
      },
      {
        breakpoint: 400,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 6,
              borderRadiusApplication: "end",
              columnWidth: "60%",
              endingShape: "rounded", // Only rou
            },
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "12px",
              },
            },
          },
        },
      },
    ],
    yaxis: {
      min: 0,
      labels: {
        formatter: (val) => {
          return Math.ceil(val / 1000) * 1000 + " " + data[0]?.salary_currency;
        },
        offsetX: -10,
        style: {
          colors: "#92929D",
          fontSize: "14px",
        },
      },
      tickAmount: 2,
    },
    xaxis: {
      categories: data?.map((item) => item.publisher_name),
      labels: {
        style: {
          colors: "#92929D",
          fontSize: "16px",
        },
        offsetY: 5,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    colors: ["#FDDD8C", "#0BAB7C", "#FFBBD7"],
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 7,
        borderRadiusApplication: "end",
        columnWidth: "35%",
        endingShape: "rounded",
      },
    },
    tooltip: {
      theme,
      style: {
        fontSize: "12px",
        fontFamily: "Manrope, sans-serif",
        colors: ["#FFFFFF"],
      },
      y: {
        formatter: function (val) {
          return val + " " + data[0]?.salary_currency;
        },
      },
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: `${!isDarkMode ? "#F5F5F8" : "#21212b"}`,
    },
  };
};

export const chartSeries = ({ data }) => {
  return [
    {
      name: "Min Salary",
      data: data?.map((item) =>
        item.min_salary
          ? Math.round(
              item.salary_period === "YEAR"
                ? item.min_salary / 12
                : item.min_salary
            )
          : 0
      ),
    },
    {
      name: "Max Salary",
      data: data?.map((item) =>
        item.max_salary
          ? Math.round(
              item.salary_period === "YEAR"
                ? item.max_salary / 12
                : item.max_salary
            )
          : 0
      ),
    },
    {
      name: "Median Salary",
      data: data?.map((item) =>
        item.median_salary
          ? Math.round(
              item.salary_period === "YEAR"
                ? item.median_salary / 12
                : item.median_salary
            )
          : 0
      ),
    },
  ];
};

export const fetchJobs = async () => {
  const baseSearch = "web developer in london";
  const url = `${rapidAPIBaseUrl}search?query=${encodeURIComponent(baseSearch)}`;
  try {
    const response = await fetch(url, rapidAPIOptions);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPaginatedJob = async ({ queryString, page }) => {
  const url = `${rapidAPIBaseUrl}search?query=${queryString}&page=${page}`;
  try {
    const response = await fetch(url, rapidAPIOptions);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCompanyDetails = async () => {
  const baseSearch = "web developer in london";
  const url = `${rapidAPIBaseUrl}search-filters?query=${encodeURIComponent(baseSearch)}`;
  try {
    const response = await fetch(url, rapidAPIOptions);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchJobLists = async () => {
  const baseSearch = "web developer in london";
  const url = `${rapidAPIBaseUrl}search?query=${encodeURIComponent(baseSearch)}&page=2`;
  try {
    const response = await fetch(url, rapidAPIOptions);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSimilarCompanies = async (companyName) => {
  const url = `${rapidAPIBaseUrl}search-filters?query=${companyName}`;
  try {
    const response = await fetch(url, rapidAPIOptions);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCompanyJobs = async (companyName) => {
  const url = `${rapidAPIBaseUrl}search?query=${companyName}`;
  try {
    const response = await fetch(url, rapidAPIOptions);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
