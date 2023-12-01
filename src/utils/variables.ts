const lastYear = Number(new Date().getFullYear()) - 1;

export const newReleases = [
  { label: "Last 30 days", to: "last-30-days", icon: "FaStar" },
  { label: "This week", to: "this-week", icon: "FaStar" },
  { label: "Next week", to: "next-week", icon: "FaStar" },
  { label: "Best of the year", to: "best-of-the-year", icon: "FaStar" },
  {
    label: `Popular in ${lastYear}`,
    to: `popular-in-${lastYear}`,
    icon: "FaStar",
  },
  { label: "All time top 250", to: "all-time-top", icon: "FaStar" },
];

export const categories = [
  { category: "platforms", icon: "FaStar" },
  { category: "stores", icon: "FaStar" },
  { category: "genres", icon: "FaStar" },
  { category: "creators", icon: "FaStar" },
  {
    category: "tags",
    icon: "FaStar",
  },
  { category: "developers", icon: "FaStar" },
  { category: "publishers", icon: "FaStar" },
];

const apiURL = import.meta.env.VITE_API_URL;

const getAPI = import.meta.env.VITE_GET_API;

const sitemap = import.meta.env.VITE_SITEMAP;

export { apiURL, getAPI, sitemap };
