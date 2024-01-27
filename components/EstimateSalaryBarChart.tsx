"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeProvider";
import Chart from "react-apexcharts";

import { chartOptions, chartSeries } from "@/app/fetch";

const EstimateSalaryBarChart = ({ data }: { data: any }) => {
  const [width, setWidth] = useState(600); // Default width
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const { mode: theme } = useTheme();
  const isDarkMode = theme === "dark";
  const options = chartOptions({ data, theme, isDarkMode });
  const series = chartSeries({ data });

  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        setWidth(chartContainerRef.current.offsetWidth);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (chartContainerRef.current) {
      resizeObserver.observe(chartContainerRef.current);
      handleResize();
    }

    return () => {
      if (chartContainerRef.current) {
        resizeObserver.unobserve(chartContainerRef.current);
      }
    };
  }, []);

  if (!data) return null;
  return (
    <div ref={chartContainerRef} className="flex size-full">
      <Chart
        // @ts-ignore
        options={options}
        series={series}
        height={320}
        width={width}
        type="bar"
      />
    </div>
  );
};

export default EstimateSalaryBarChart;
