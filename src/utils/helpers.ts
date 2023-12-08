import { addDays, format, subDays, subMonths } from "date-fns";

export function capitalized(s: string) {
  const arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const final = arr.join(" ");
  return final;
}

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function firstCapMoveDash(s: string) {
  const final = s.slice(0, 1).toUpperCase() + s.slice(1).replaceAll("-", " ");
  return final;
}

export function firstCap(s: string) {
  const final = s.slice(0, 1).toUpperCase() + s.slice(1);
  return final;
}

export function getStartDate(s: string) {
  let startDate: Date;
  let today = new Date();
  const year = today.getFullYear();
  const lastYear = year - 1;

  switch (s) {
    case "last-30-days":
      startDate = subDays(today, 30);
      break;
    case "this-week":
      startDate = subDays(today, 7);
      break;
    case "next-week":
      // swap
      startDate = today;
      today = addDays(today, 7);
      break;
    case "best-of-the-year":
      startDate = new Date(`1-1-${year}`);
      break;
    case `popular-in-${lastYear}`:
      startDate = new Date(`1-1-${lastYear}`);
      today = new Date(`12-31-${lastYear}`);
      break;
    case "home":
      startDate = subMonths(today, 3);
      break;
    default:
      throw new Error("Invalid date time");
  }

  const finalStartDate = format(startDate, "yyyy-MM-dd");
  const finalToday = format(today, "yyyy-MM-dd");

  return { finalStartDate, finalToday };
}

export function mostRating(
  ratings: {
    count: number;
    title: string;
  }[],
) {
  const icon: string =
    ratings.length > 1
      ? ratings.sort((a, b) => b.count - a.count)[0].title
      : "";
  return icon;
}
