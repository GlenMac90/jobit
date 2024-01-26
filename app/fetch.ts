export const rapidAPIBaseUrl = "https://jsearch.p.rapidapi.com/";
export const rapidAPIOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

export const barChartSeries = (searchData: any) => {
  return [
    {
      name: "Min Salary",
      data: searchData?.map((item: any) =>
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
      data: searchData?.map((item: any) =>
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
      data: searchData?.map((item: any) =>
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

export const barChartOptions = (searchData, theme, isDarkMode) => {
  return {
    chart: {
      // breakpoint: 480,
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
                  searchData[0]?.salary_currency
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
    xaxis: {
      categories: searchData?.map((item) => item.publisher_name),
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
    yaxis: {
      min: 0,
      labels: {
        formatter: (val) => {
          return (
            Math.ceil(val / 1000) * 1000 + " " + searchData[0]?.salary_currency
          );
        },
        offsetX: -10,
        style: {
          colors: "#92929D",
          fontSize: "14px",
        },
      },
      tickAmount: 2,
    },
    colors: ["#FDDD8C", "#529cf1", "#FFBBD7"],
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
          return val + " " + searchData[0]?.salary_currency;
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
