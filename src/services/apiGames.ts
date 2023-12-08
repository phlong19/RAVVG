import { baseGameURL } from "../utils/variables";
import { getStartDate } from "../utils/helpers";

interface Data {
  count: number;
  next: string;
  previous: string;
  results: [];
}

type Date = {
  finalStartDate: string;
  finalToday: string;
};

export async function getGameList(s?: string, page = 1) {
  let query = baseGameURL;
  let date: Date = {
    finalStartDate: "none",
    finalToday: "none",
  };

  try {
    if (s && s !== "home") {
      date = getStartDate(s);
    }
    if (s === "home") {
      date = getStartDate(s);
    }
    query =
      query +
      `dates=${date.finalStartDate},${date.finalToday}&ordering=-added&page=${page}`;

    if (s === undefined) {
      query = baseGameURL + `page=${page}`;
    }

    const res = await fetch(query);
    const data: Data = await res.json();
    //
    return data;
    //
  } catch (error) {
    console.error(error);
    throw new Error("There was an error while fetching");
  }
}
