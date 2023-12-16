const lastYear = Number(new Date().getFullYear()) - 1;
export const ITEM_PER_PAGE = 20;
export const KEY = import.meta.env.VITE_KEY;

export const socials = [
  { name: "facebook", bgColor: "#1877f2" },
  { name: "steam", bgColor: "#2a475e" },
  { name: "github", bgColor: "#000" },
];

export const newReleases = [
  { label: "Last 30 days", to: "last-30-days", icon: "FaStar" },
  { label: "This week", to: "this-week", icon: "FaHotjar" },
  { label: "Next week", to: "next-week", icon: "FaFastForward" },
  { label: "Best of the year", to: "best-of-the-year", icon: "FaTrophy" },
  {
    label: `Popular in ${lastYear}`,
    to: `popular-in-${lastYear}`,
    icon: "FaChartBar",
  },
];

export const categories = [
  { category: "platforms", icon: "FaGamepad" },
  { category: "stores", icon: "FaCloudDownloadAlt" },
  { category: "genres", icon: "FaGhost" },
  { category: "creators", icon: "FaRegUser" },
  {
    category: "tags",
    icon: "FaSlackHash",
  },
  { category: "developers", icon: "FaCode" },
  { category: "publishers", icon: "FaLayerGroup" },
];

const URL = import.meta.env.VITE_ORIGINAL_URL;
const apiURL = import.meta.env.VITE_API_URL;
const getAPI = import.meta.env.VITE_GET_API;
const sitemap = import.meta.env.VITE_SITEMAP;
export { URL, apiURL, getAPI, sitemap };

// BASE URL
export const baseGameURL = `https://api.rawg.io/api/games?key=${KEY}&page_size=${ITEM_PER_PAGE}&`;

export const orderOptions = [
  { label: "Date updated", value: "last-updated" },
  { label: "Metacritic", value: "metacritic" },
  { label: "Release date", value: "released-date" },
  { label: "Popularity", value: "popular" },
  { label: "Average rating", value: "average-rating" },
];

export const yearOptions = [
  // i dont know will i come back here before 2030? =))
  { label: "Clear", value: "clear" },
  { label: `2020-${lastYear + 1}`, value: "2020-2023" },
  { label: "2010-2019", value: "2010-2019" },
  { label: "2000-2009", value: "2000-2009" },
  { label: "1990-1999", value: "1990-1999" },
  { label: "1980-1989", value: "1980-1989" },
  { label: "1970-1979", value: "1970-1979" },
  { label: "1960-1969", value: "1960-1969" },
  { label: "1950-1959", value: "1950-1959" },
];
