import { baseGameURL } from "../utils/variables";
// 7 api query for home and discover pages

// 3. several cases for slug to get the final query string then return data
// default case is home page

export async function getGameList(s?: string) {
  try {
    let query = baseGameURL;
    switch (s) {
      case "last-30-days":
        query = query + "date";
        break;

      default:
        query = query + "home";
        break;
    }

    const res = await fetch(query);
    const data: { results: [] } = await res.json();
    //
    return data.results;
    //
  } catch (error) {
    console.error(error);
    throw new Error("There was an error while fetching");
  }
}
