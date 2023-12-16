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

export function getDatesRange(s: string) {
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

export function getOrdering(slug: string) {
  let result = "";
  switch (slug) {
    case "popular":
      result = "-added";
      break;
    case "last-updated":
      result = "-updated";
      break;
    case "metacritic":
      result = "-metacritic";
      break;
    case "released-date":
      result = "released";
      break;
    case "average-rating":
      result = "-rating";
      break;
    default:
      break;
  }

  return result;
}

interface Ratings {
  id: number;
  count: number;
  title: string;
  percent: number;
}

export function sortRatingsById(ratings: Ratings[]) {
  const sorted = ratings.slice().sort((a, b) => b.id - a.id);
  return sorted;
}

export function mostRating(ratings: Ratings[]) {
  const icon: string =
    ratings.length > 1
      ? ratings.slice().sort((a, b) => b.count - a.count)[0].title
      : "";
  return icon;
}

export const getColorForRating = (ratingId: number) => {
  switch (ratingId) {
    case 5:
      return "linear-gradient(180deg,#b4ec51,#429321)";
    case 3:
      return "linear-gradient(180deg,#fad961,#f76b1c)";
    case 1:
      return "linear-gradient(180deg,#ff5764,#f11a2a)";
    case 4:
      return "linear-gradient(0deg,#4354b9,#649bff)";
    default:
      return "black";
  }
};

export function generateComma(length: number, i: number) {
  return i === length - 1 ? "" : ", ";
}