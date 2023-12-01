export const newReleases = [
  "last-30-days",
  "this-week",
  "next-week",
  "best-of-the-year",
  `popular-in-${Number(new Date().getFullYear()) - 1}`,
  "all-time-top",
];

export const categories = [
  "platforms",
  "stores",
  "genres",
  "creators",
  "tags",
  "developers",
  "publishers",
];

const apiURL = import.meta.env.VITE_API_URL;

const getAPI = import.meta.env.VITE_GET_API;

const sitemap = import.meta.env.VITE_SITEMAP;

export { apiURL, getAPI, sitemap };
