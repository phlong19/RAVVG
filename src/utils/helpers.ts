import { addDays, format, subDays, subMonths } from "date-fns";

export function capitalized(s: string) {
  const arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const final = arr.join(" ");
  return final;
}

export function numberWithCommas(x:number) {
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
  const firstDateofThisYear = new Date(`1-1-${year}`);
  const firstDateofLastYear = new Date(`1-1-${lastYear}`);

  switch (s) {
    case "last-30-days":
      startDate = subDays(today, 30);
      break;
    case "this-week":
      startDate = subDays(today, 7);
      break;
    case "next-week":
      startDate = addDays(today, 7);
      break;
    case "best-of-the-year":
      startDate = firstDateofThisYear;
      break;
    case `popular-in-${lastYear}`:
      startDate = firstDateofLastYear;
      today = new Date(`31-12-${lastYear}`);
      break;
    case "home":
      startDate = subMonths(today, 6);
      break;
    default:
      throw new Error("Invalid date time");
  }

  const finalStartDate = format(startDate, "yyyy-MM-dd");
  const finalToday = format(today, "yyyy-MM-dd");

  return { finalStartDate, finalToday };
}
