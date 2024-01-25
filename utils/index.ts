export function getCurrentDateFormatted(): string {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const today = new Date();
  const dayOfWeek = days[today.getDay()];
  const dayOfMonth = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  return `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
}

export function daysLeftUntil(date: Date): string {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Reset time part to ensure comparison is based on date only

  const inputDate = new Date(date);
  inputDate.setHours(0, 0, 0, 0);

  const timeDiff = inputDate.getTime() - currentDate.getTime();

  if (timeDiff <= 0) {
    return "0 days left";
  }

  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return `${daysLeft} days left`;
}

type SalaryProps = {
  minimumSalary: number;
  maximumSalary: number;
  salaryType: "yearly" | "monthly" | string;
};

type SalaryOutput = {
  salary: string;
  duration: string;
};

export function formatSalary({
  minimumSalary,
  maximumSalary,
  salaryType,
}: SalaryProps): SalaryOutput {
  const divisor = salaryType === "yearly" ? 1000 : 1;
  const duration = salaryType === "yearly" ? "year" : "month";

  const formattedMin = (minimumSalary / divisor).toFixed(0);
  const formattedMax = (maximumSalary / divisor).toFixed(0);

  const salary = `$${formattedMin}k-$${formattedMax}k`;

  return {
    salary,
    duration,
  };
}