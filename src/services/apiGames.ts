import { baseGameURL } from "../utils/variables";
import { getStartDate } from "../utils/helpers";

interface Data {
  results: [];
}

let query = baseGameURL;

export async function getGameList(s?: string) {
  try {
    if (s && s !== "home") {
      const { finalStartDate: startDate, finalToday: endDate } =
        getStartDate(s);
      query = query + `date=${startDate},${endDate}`;
    }
    if (s === "home") {
      const { finalStartDate: startDate, finalToday: endDate } =
        getStartDate(s);
      query = query + `dates=${startDate},${endDate}&ordering=-rating`;
    }

    // const res = await fetch(query, { mode: "no-cors" });
    const res = await fetch(query);
    const data: Data = await res.json();
    console.log(data);
    //
    return data.results;
    //
  } catch (error) {
    console.error(error);
    throw new Error("There was an error while fetching");
  }
}
