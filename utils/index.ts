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
  const divisor = salaryType === "YEAR" ? 1000 : 1;
  const duration = salaryType === "yearly" ? "year" : "month";

  const formattedMin = (minimumSalary / divisor).toFixed(0);
  const formattedMax = (maximumSalary / divisor).toFixed(0);

  const salary = `$${formattedMin}k-$${formattedMax}k`;

  return {
    salary,
    duration,
  };
}

type SingleSalaryProps = {
  currency: string;
  salary: number;
  duration: string;
};

export function formatSingleSalary({
  currency,
  salary,
  duration,
}: SingleSalaryProps): string {
  const salaryRounded = Math.floor(salary);
  return `${currency} ${salaryRounded}/ ${duration}`;
}

export function timeSince(date: Date): string {
  const now = new Date();
  const past = new Date(date);
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;

  const elapsed = now.getTime() - past.getTime();

  if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerDay * 7) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerDay * 30) {
    return Math.round(elapsed / (msPerDay * 7)) + " weeks ago";
  } else if (elapsed < msPerDay * 365) {
    return Math.round(elapsed / (msPerDay * 30)) + " months ago";
  } else {
    return Math.round(elapsed / (msPerDay * 365)) + " years ago";
  }
}

export function daysUntil(date: Date): string | null {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const futureDate = new Date(date);
  futureDate.setHours(0, 0, 0, 0);

  const msPerDay = 24 * 60 * 60 * 1000;
  const timeDiff = futureDate.getTime() - now.getTime();

  const daysDiff = Math.floor(timeDiff / msPerDay);

  if (daysDiff < 0) {
    return null;
  }

  return `${daysDiff} days left`;
}
