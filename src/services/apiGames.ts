import { KEY, baseGameURL } from "../utils/variables";
import { getStartDate } from "../utils/helpers";
import {
  GameDetails,
  GameDetailsProps,
  GamesData,
  Order,
} from "../utils/model";

type Date = {
  finalStartDate: string;
  finalToday: string;
};

interface Creators {
  count: number;
  results: {
    id: number;
    name: string;
    slug: string;
    image: string;
    image_background: string;
    games_count: number;
    games: GameDetailsProps[];
    positions: {
      id: number;
      name: string;
      slug: string;
    }[];
  }[];
}

interface Screenshots {
  results: Screenshots[];
}

export async function getGameList(
  s: string | null,
  page = 1,
  order: Order = "popular",
) {
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

    if (s === null) {
      query = baseGameURL + `page=${page}`;
    }

    const res = await fetch(query);
    const data: GamesData = await res.json();
    //
    return data;
    //
  } catch (error) {
    console.error(error);
    throw new Error("There was an error while fetching");
  }
}

const base = "https://api.rawg.io/api/games/";
const key = `?key=${KEY}`;

export async function getGameDetails(slug: string) {
  const gameDetails = base + slug + key;

  try {
    const res = await fetch(gameDetails);
    const game: GameDetails = await res.json();
    //
    return game;
    //
  } catch (error) {
    console.error(error);
    throw new Error("There was an error while fetching");
  }
}

export async function getGameSeries(slug: string) {
  const series = base + slug + "/game-series" + key;
  try {
    const res = await fetch(series);
    const gameSeries: GamesData = await res.json();
    //
    return gameSeries;
    //
  } catch (error) {
    console.error(error);
    throw new Error("There was an error while fetching");
  }
}

export async function getScreenShots(slug: string) {
  const shots = base + slug + "/screenshots" + key;
  try {
    const res = await fetch(shots);
    const screenshots: Screenshots = await res.json();

    return screenshots;
  } catch (error) {
    console.error(error);
    throw new Error("There was an error while fetching");
  }
}

export async function getDevTeam(slug: string) {
  const devTeam = base + slug + "/development-team" + key;
  try {
    const res = await fetch(devTeam);
    const gameDevTeam: Creators = await res.json();

    return gameDevTeam;
  } catch (error) {
    console.error(error);
    throw new Error("There was an error while fetching");
  }
}
