export interface GameProps {
    game: {
      background_image: string;
      slug: string;
      name: string;
      released: string;
      rating: number;
      ratings_count: number;
      ratings: {
        count: number;
        title: string;
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