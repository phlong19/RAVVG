export type Order = "popular" | "updated" | "released" | "name" | "rating";

export interface Option {
  label: string;
  value: string;
}

export interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
}

interface ParentPlatform {
  platform: Platform;
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Store {
  id: number;
  url: string;
  store: {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  };
}

export interface Requirements {
  minimum: string;
  recommended: string;
}

export interface PlatformDetail {
  platform: Platform;
  released_at: string;
  requirements: Requirements;
}

interface EsrbRating {
  id: number;
  slug: string;
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
  percent: number;
}

interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: string;
  image_background: string;
}

interface Developer extends Genre {}
interface Publisher extends Genre {}

interface Tag extends Genre {
  language: string;
}

export interface GameDetailsProps {
  id: number;
  slug: string;
  name: string;
  released: string | null;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: EsrbRating;
  parent_platforms: ParentPlatform[];
  platforms: PlatformDetail[];
  stores: Store[];
  genres: Genre[];
  developers: Developer[];
  publishers: Publisher[];
  tags: Tag[];
}

export interface GamesData {
  count: number;
  next: string;
  previous: string;
  results: GameDetailsProps[];
}

interface MetacriticPlatform {
  metascore: number;
  url: string;
}

export interface GameDetails extends GameDetailsProps {
  name_original: string;
  description: string;
  description_raw: string;
  metacritic_platforms: MetacriticPlatform[];
  background_image_additional: string;
  website: string;
  reactions: Record<string, unknown>;
  reviews_count: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
}
