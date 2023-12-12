export interface GameProps {
  game: {
    id: number;
    background_image: string;
    slug: string;
    name: string;
    released: string | null;
    rating: number;
    ratings_count: number;
    ratings: {
      id: number;
      count: number;
      title: string;
      percent: number;
    }[];
    metacritic: number | null;
    parent_platforms: {
      platform: {
        id: number;
        name: string; //"PC"
        slug: string; //"pc"
      };
    }[];
    added: number;
    added_by_status: {
      yet: number;
      owned: number;
      beaten: number;
      toplay: number;
      dropped: number;
      playing: number;
    };
    genres: {
      id: number;
      name: string;
      slug: string;
      games_count: number;
      image_background: string;
    }[];
    // add more
  };
}

export interface GameDetailsProps {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: null | number;
  metacritic_platforms: never[];
  released: null | string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  ratings_count: number;
  rating_top: number;
  ratings: {
    id: number;
    count: number;
    title: string;
    percent: number;
  }[];
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reviews_count: number;
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
  platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
      image: null | string;
      year_end: null | number;
      year_start: number | null;
      games_count: number;
      image_background: string;
    };
    released_at: null | string;
    requirements: {
      minimum?: undefined | string;
    };
  }[];
  stores: {
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
  }[];
  developers: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  genres: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  tags: {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
  }[];
  publishers: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  esrb_rating: null | {
    id: number;
    slug: string;
    name: string;
  };
  clip: null | string;
  description_raw: string;
}
