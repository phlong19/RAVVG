const lastYear = Number(new Date().getFullYear()) - 1;

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

const apiURL = import.meta.env.VITE_API_URL;
const getAPI = import.meta.env.VITE_GET_API;
const sitemap = import.meta.env.VITE_SITEMAP;
export { apiURL, getAPI, sitemap };

// BASE URL
export const baseGameURL = `https://api.rawg.io/api/games?key=${
  import.meta.env.VITE_KEY
}&page_size=20&`;
