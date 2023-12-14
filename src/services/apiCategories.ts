import { GameDetailsProps } from "../utils/model";
import { KEY } from "../utils/variables";

interface Data {
  count: number;
  results: {
    id: number;
    name: string;
    slug: string;
    image: string;
    image_background: string;
    games_count: number;
    games: GameDetailsProps[];
  }[];
}

interface CategoryDescription {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
  image: null | string;
}

interface Games {
  count: number;
  next: string;
  previous: string;
  results: GameDetailsProps[];
}

const base = "https://api.rawg.io/api/";

export async function getCategory(dataType: string, size: number) {
  const query = base + dataType + `?key=${KEY}&page_size=${size}`;
  try {
    const res = await fetch(query);
    const data: Data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("There was an error while fetching...");
  }
}

export async function getGamesByCategory(category: string, slug: string) {
  try {
    // get details of a category first
    const desQuery = base + `${category}/${slug}?key=${KEY}`;
    const resDesQuery = await fetch(desQuery);
    const dataDes: CategoryDescription = await resDesQuery.json();
    // pass in the id for next query
    const query = base + `games?${category}=${dataDes.id}&key=${KEY}`;
    const res = await fetch(query);
    const dataGames: Games = await res.json();

    return { dataDes, dataGames };
  } catch (error) {
    console.error(error);
    throw new Error("There was an error while fetching...");
  }
}
