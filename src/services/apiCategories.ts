import { KEY } from "../utils/variables";

export async function getCategory(dataType: string) {
  const base = "https://api.rawg.io/api/";
  const query = base + dataType + `?key=${KEY}&page_size=8`;
  console.log(query);

  return null;
}
