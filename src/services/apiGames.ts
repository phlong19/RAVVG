import { baseGameURL } from "../utils/variables";
import { getStartDate } from "../utils/helpers";

interface Data {
  results: [];
}

let date: {
  finalStartDate: string;
  finalToday: string;
};

export async function getGameList(s?: string) {
  let query = baseGameURL;
  try {
    if (s && s !== "home") {
      date = getStartDate(s);
    }
    if (s === "home") {
      date = getStartDate(s);
    }
    query =
      query + `dates=${date.finalStartDate},${date.finalToday}&ordering=-added`;

    const res = await fetch(query);
    const data: Data = await res.json();
    //
    return data.results;
    //
  } catch (error) {
    console.error(error);
    throw new Error("There was an error while fetching");
  }
}
