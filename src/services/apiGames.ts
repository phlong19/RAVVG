import { KEY, baseGameURL } from "../utils/variables";
import { getStartDate } from "../utils/helpers";
import { GameDetailsProps } from "../utils/model";

interface Data {
  count: number;
  next: string;
  previous: string;
  results: object[];
}

type Date = {
  finalStartDate: string;
  finalToday: string;
};

interface Creators extends Data {
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

export interface Screenshots extends Data {
  results: {
    id: number;
    image: string;
    width: number;
    height: number;
    is_deleted: boolean;
  }[];
}

interface GameSeries {
  results: GameDetailsProps[];
}

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

export async function getGameDetails(slug: string) {
  const base = `https://api.rawg.io/api/games/${slug}`;
  const key = `?key=${KEY}`;

  const gameDetails = base + key;
  const shots = base + "/screenshots" + key;
  const series = base + "/game-series" + key;
  const devTeam = base + "/development-team" + key;

  try {
    const [promise1, promise2, promise3, promise4] = await Promise.all([
      fetch(gameDetails),
      fetch(shots),
      fetch(series),
      fetch(devTeam),
    ]);

    const game: GameDetailsProps = await promise1.json();
    const screenshots: Screenshots = await promise2.json();
    const gameSeries: GameSeries = await promise3.json();
    const gameDevTeam: Creators = await promise4.json();
    //
    return { game, screenshots, gameSeries, gameDevTeam };
    //
  } catch (error) {
    console.error(error);
    throw new Error("There was an error while fetching");
  }
}
